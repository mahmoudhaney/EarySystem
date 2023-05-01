const router = require("express").Router();
const admin = require('../middleware/admin');
const upload = require('../middleware/uploadAudio');
const {body, validationResult} = require("express-validator");
const { Question } = require("../models/Question");

// Add Question
router.post(
    "", 
    admin, 
    upload.single("audio"),
    body("question").isString().withMessage("please enter a valid question"),
    async (req, res) => {
        try {
            if (!validationResult(req).isEmpty()) {
                res.status(400).json({errors: validationResult(req).array()});
            } else if (!req.file) {
                res.status(400).json({msg: "Audio is Required"});
            } else {
                const question = new Question();
                delete question.ID;
                question.setQuestion(req.body.question);
                question.setAudio(req.file.filename);
                question.setStatus(1);

                await Question.Add(question);
                res.status(200).json({msg: "Question Added Successfully",});
            }
        } catch (error) {
            res.status(500).json(error);
        }
});

// Update a specific Question
router.put(
    "/:id", 
    admin, 
    upload.single("audio"),
    body("question").isString().withMessage("please enter a valid question"),
    async (req, res) => {
        try {
            if (!validationResult(req).isEmpty()) {
                res.status(400).json({errors: validationResult(req).array()});
            } else if (!await Question.IsExist(req.params.id)) {
                res.status(404).json({msg: "question not found !"});
            } else {
                const editedQuestion = new Question();
                delete editedQuestion.ID;
                delete editedQuestion.audio;
                delete editedQuestion.status;

                if(req.file) {
                    await Question.deleteUploadedAudio(req.params.id);
                    editedQuestion.setAudio(req.file.filename);
                }

                editedQuestion.setQuestion(req.body.question);
                await Question.Update(editedQuestion, req.params.id);
                res.status(200).json({msg: "Question Updated Successfully",});
            }
        } catch (error) {
            res.status(500).json(error);
        }
});

// Delete a specific Question
router.delete(
    "/:id", 
    admin, 
    async (req, res) => {
        try {
            if (!await Question.IsExist(req.params.id)) {
                res.status(404).json({msg: "question not found !"});
            } else {
                await Question.deleteUploadedAudio(req.params.id);
                await Question.Delete(req.params.id);
                res.status(200).json({msg: "Question Deleted Successfully",});
            }
        } catch (error) {
            res.status(500).json(error);
        }
});

// List all Questions
router.get("", async (req, res) => {
    try {
        const questions = await Question.getQuestions(req.query.search);
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({error: error});
    }
});

// Show a specific Question
router.get("/:id", async (req, res) => {
    try {
        if (!await Question.IsExist(req.params.id)) {
            res.status(404).json({msg: "question not found !"});
        } else {
            res.status(200).json(await Question.getQuestion(req.params.id));
        }
    } catch (error) {
        res.status(500).json({error: error});
    }
});


module.exports = router;