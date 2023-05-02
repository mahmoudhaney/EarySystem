const connection = require('../db/connection');
const util = require("util");
const { Response } = require("../models/Response");

class Exam {

    constructor (id, exam_date, total_questions, result, user_id, status) {
        this.ID = id;
        this.exam_date = exam_date;
        this.total_questions = total_questions;
        this.result = result;
        this.user_id = user_id;
    }

    static async getId(user_id) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            const exam = await query(`select ID from exams where user_id = ${user_id} and status = 1`);
            return exam[0].ID;
        } catch (error) {
            console.log(error);
        }
    }

    getExamDate() {
        return this.exam_date;
    }
    setExamDate(exam_date) {
        this.exam_date = exam_date;
    }

    static async getTotalQuestion(user_id) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            const exam_total_question = await query(`select total_questions from exams where user_id = ${user_id} and status = 1`);
            return exam_total_question[0].total_questions;
        } catch (error) {
            console.log(error);
        }
    }

    setTotalQuestion(total_questions) {
        this.total_questions = total_questions;
    }

    static async getResult(user_id) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            const exam_result = await query(`select result from exams where user_id = ${user_id} and status = 1`);
            return exam_result[0].result;
        } catch (error) {
            console.log(error);
        }
    }
    setResult(result) {
        this.result = result;
    }

    getUserId() {
        return this.user_id;
    }
    setUserId(user_id) {
        this.user_id = user_id;
    }

    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }

    static async Add(exam) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            await query("insert into exams set ? ", exam);
        } catch (error) {
            console.log(error);
        }
    }

    static async getUserHistory(user_id) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            const exams = await query(`select * from exams where user_id = ${user_id}`);
            return exams;
        } catch (error) {
            console.log(error);
        }
    }

    static async getExamQuestions() {
        try {
            const query = util.promisify(connection.query).bind(connection);
            const questions = await query(`select ID, question, audio from questions where status = 1`);
            for (let index = 0; index < questions.length; index++) {
                questions[index].audio = "http://localhost" + ":5000/" + questions[index].audio;
                const questionsResponses = await Response.questionResponses(questions[index].ID);
                for (let i = 0; i < questionsResponses.length; i++) {
                    delete questionsResponses[i].is_correct;
                    delete questionsResponses[i].question_id;
                }
                questions[index].responses = questionsResponses;
            }
            return questions;
        } catch (error) {
            console.log(error);
        }
    }

    static async IsExist(user_id) {
        const query = util.promisify(connection.query).bind(connection);
        const exam = await query(`select * from exams where user_id = ${user_id} and status = 1;`);
        if (exam[0]) {
            return true;
        }
        return false;
    }

    static async Update(editedExam, user_id) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            await query("update exams set ? where user_id = ? and status = 1", [editedExam, user_id]);
        } catch (error) {
            console.log(error);
        }
    }

    static async endExam(user_id) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            const exam_id = await Exam.getId(user_id);
            await query("update exams set status = 0 where ID = ?", [exam_id]);
            const exam_result = await query(`select * from exams where id = ${exam_id}`);
            return exam_result[0];
        } catch (error) {
            console.log(error);
        }
    }

    static async History(user_id) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            return await query(`select * from exams where user_id = ${user_id} and status = 0`);
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = {Exam:Exam};