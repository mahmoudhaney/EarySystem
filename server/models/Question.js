const connection = require('../db/connection');
const util = require("util");
const fs = require("fs");
const { Response } = require("../models/Response");

class Question {

    constructor (id, question, audio, status) {
        this.ID = id;
        this.question = question;
        this.audio = audio;
        this.status = status;
    }

    getId() {
        return this.id;
    }

    getQuestion() {
        return this.question;
    }
    setQuestion(question) {
        this.question = question;
    }

    getAudio() {
        return this.audio;
    }
    setAudio(audio) {
        this.audio = audio;
    }

    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }

    static async IsExist(id) {
        const query = util.promisify(connection.query).bind(connection);
        const question = await query("select * from questions where id = ? ", [id]);
        if (question[0]) {
            return true;
        }
        return false;
    }

    static async IsActive(id) {
        const query = util.promisify(connection.query).bind(connection);
        const question = await query("select status from questions where id = ? ", [id]);
        if (question[0].status) {
            return true;
        }
        return false;
    }

    static async Add(question) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            await query("insert into questions set ? ", question);
        } catch (error) {
            console.log(error);
        }
    }

    static async Update(editedQuestion, id) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            await query("update questions set ? where id = ? ", [editedQuestion, id]);
        } catch (error) {
            console.log(error);
        }
    }

    static async Delete(id) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            await query("delete from questions where id = ? ", [id]);
        } catch (error) {
            console.log(error);
        }
    }

    static async getQuestions(search) {
        try {
            if (search) {
                search = `where name LIKE '%${search}%'`
            }
            const query = util.promisify(connection.query).bind(connection);
            const questions = await query(`select * from questions ${search}`);
            for (let index = 0; index < questions.length; index++) {
                questions[index].audio = "http://localhost" + ":5000/" + questions[index].audio;
                questions[index].responses = await Response.questionResponses(questions[index].ID);
            }
            return questions;
        } catch (error) {
            console.log(error);
        }
    }

    static async getQuestion(id) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            const question = await query("select * from questions where id = ? ", [id]);
            question[0].audio = "http://localhost" + ":5000/" + question[0].audio;
            question[0].responses = await Response.questionResponses(id);
            return question[0];
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteUploadedAudio(question_id) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            const question = await query("select audio from questions where id = ? ", [question_id]);
            fs.unlinkSync("./upload/" + question[0].audio);
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = {Question:Question};