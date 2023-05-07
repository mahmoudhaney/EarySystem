const router = require("express").Router();
const authorized = require('../middleware/authorized');
const {body, validationResult} = require("express-validator");
const { Exam } = require("../models/Exam");
const { Question } = require("../models/Question");
const { Response } = require("../models/Response");
const { User } = require("../models/User");
const connection = require('../db/connection');
const util = require("util");

// Get User Exams History
router.get("/history/:user_id", authorized, async (req, res) => {
    try {
        if (!await User.IsExist(req.params.user_id)) {
            res.status(404).json({msg: "user not found !"});
        } else {
            res.status(200).json(await Exam.History(req.params.user_id));
        }
    } catch (error) {
        res.status(500).json({error: error});
    }
});

// List all Exam Questions
router.get("", async (req, res) => {
    try {
        const examQuestions = await Exam.getExamQuestions();
        res.status(200).json(examQuestions);
    } catch (error) {
        res.status(500).json({error: error});
    }
});


// Answer A Question
router.post(
    "/question-response/:question_id", 
    authorized, 
    body("response_id").isNumeric().withMessage("enter a valid response"),
    async (req, res) => {
        try {
            if (!validationResult(req).isEmpty()) {
                res.status(400).json({errors: validationResult(req).array()});
            } else if (!await Question.IsExist(req.params.question_id)) {
                res.status(404).json({msg: "question not found !"});
            } else if (!await Question.IsActive(req.params.question_id)) {
                res.status(400).json({msg: "question is not active !"});
            } else if (!await Response.IsValidResponse(req.body.response_id, req.params.question_id)) {
                res.status(400).json({msg: "invalid response - response must be related to its question"});
            } else {
                if (await Exam.IsExist(res.locals.user.ID)) {
                    const exam = new Exam();
                    delete exam.ID;
                    delete exam.exam_date;
                    delete exam.user_id;
                    exam.setTotalQuestion((await Exam.getTotalQuestion(res.locals.user.ID)) + 1);
                    exam.setResult((await Exam.getResult(res.locals.user.ID)) + Number(await Response.IsCorrect(req.body.response_id)));
                    
                    await Exam.Update(exam, res.locals.user.ID);
                    res.status(200).json({msg: "Solved",});
                } else {
                    let currentdate = new Date(); 
                    currentdate = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1)  + "-" + currentdate.getDate();

                    const exam = new Exam();
                    delete exam.ID;
                    exam.setExamDate(currentdate);
                    exam.setTotalQuestion(1);
                    exam.setResult(Number(await Response.IsCorrect(req.body.response_id)));
                    exam.setUserId(res.locals.user.ID);
                    exam.setStatus(1);

                    await Exam.Add(exam);
                    res.status(200).json({msg: "Done - New Exam Opened",});
                }
            }
        } catch (error) {
            console.log(error)
            res.status(500).json(error);
        }
});

// Get Exam Result
router.put("/result/:user_id", async (req, res) => {
    try {
        if (!await User.IsExist(req.params.user_id)) {
            res.status(404).json({msg: "user not found !"});
        } else if (!await User.IsValid(req.params.user_id)) {
            res.status(404).json({msg: "Invalid User - Take the exam first"});
        }
        else {
            res.status(200).json(await Exam.endExam(req.params.user_id));
        }
    } catch (error) {
        res.status(500).json({error: error});
    }
});

module.exports = router;