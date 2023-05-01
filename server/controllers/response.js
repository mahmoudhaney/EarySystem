const router = require("express").Router();
const admin = require('../middleware/admin');
const {body, validationResult} = require("express-validator");
const { Response } = require("../models/Response");
const { Question } = require("../models/Question");

// Add Response
router.post(
    "", 
    admin, 
    body("response").isString().withMessage("please enter a valid response"),
    body("is_correct").isNumeric().withMessage("0 wrong, 1 true"),
    body("question_id").isNumeric().withMessage("please enter a valid question id"),
    async (req, res) => {
        try {
            if (!validationResult(req).isEmpty()) {
                res.status(400).json({errors: validationResult(req).array()});
            } else if (!await Question.IsExist(req.body.question_id)) {
                res.status(404).json({msg: "question not found !"});
            } else if (req.body.is_correct == 1 && await Response.AnyCorrectResponse(req.body.question_id))  {
                res.status(400).json({msg: "this question already has a correct response !"});
            }
            else {
                const response = new Response();
                delete response.ID;
                response.setResponse(req.body.response);
                response.setIsCorrect(req.body.is_correct);
                response.setQuestionId(req.body.question_id);

                await Response.Add(response);
                res.status(200).json({msg: "Response Added Successfully",});
            }
        } catch (error) {
            res.status(500).json(error);
        }
});

// Update a specific Response
router.put(
    "/:id", 
    admin, 
    body("response").isString().withMessage("please enter a valid response"),
    body("is_correct").isNumeric().withMessage("0 wrong, 1 true"),
    body("question_id").isNumeric().withMessage("please enter a valid question id"),
    async (req, res) => {
        try {
            if (!validationResult(req).isEmpty()) {
                res.status(400).json({errors: validationResult(req).array()});
            } else if (!await Response.IsExist(req.params.id)) {
                res.status(404).json({msg: "response not found !"});
            } else if (!await Question.IsExist(req.body.question_id)) {
                res.status(404).json({msg: "question not found !"});
            } else if (req.body.is_correct == 1 && await Response.AnyCorrectResponse(req.body.question_id))  {
                res.status(400).json({msg: "this question already has a correct response !"});
            }
            else {
                const editedResponse = new Response();
                delete editedResponse.ID;
                editedResponse.setResponse(req.body.response);
                editedResponse.setIsCorrect(req.body.is_correct);
                editedResponse.setQuestionId(req.body.question_id);

                await Response.Update(editedResponse, req.params.id);
                res.status(200).json({msg: "Response Updated Successfully",});
            }
        } catch (error) {
            res.status(500).json(error);
        }
});

// Delete a specific Response
router.delete(
    "/:id", 
    admin, 
    async (req, res) => {
        try {
            if (!await Response.IsExist(req.params.id)) {
                res.status(404).json({msg: "response not found !"});
            } else {
                await Response.Delete(req.params.id);
                res.status(200).json({msg: "Response Deleted Successfully",});
            }
        } catch (error) {
            res.status(500).json(error);
        }
});

// List all Responses
router.get("", async (req, res) => {
    try {
        const responses = await Response.getResponses(req.query.search);
        res.status(200).json(responses);
    } catch (error) {
        res.status(500).json({error: error});
    }
});

// Show a specific Response
router.get("/:id", async (req, res) => {
    try {
        if (!await Response.IsExist(req.params.id)) {
            res.status(404).json({msg: "response not found !"});
        } else {
            res.status(200).json(await Response.getResponse(req.params.id));
        }
    } catch (error) {
        res.status(500).json({error: error});
    }
});


module.exports = router;