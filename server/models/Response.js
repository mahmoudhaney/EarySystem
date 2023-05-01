const connection = require('../db/connection');
const util = require("util");

class Response {

    constructor (id, response, is_correct, question_id) {
        this.ID = id;
        this.response = response;
        this.is_correct = is_correct;
        this.question_id = question_id;
    }

    getId() {
        return this.id;
    }

    getResponse() {
        return this.response;
    }
    setResponse(response) {
        this.response = response;
    }

    getIsCorrect() {
        return this.is_correct;
    }
    setIsCorrect(is_correct) {
        this.is_correct = is_correct;
    }

    getQuestionId() {
        return this.question_id;
    }
    setQuestionId(question_id) {
        this.question_id = question_id;
    }

    static async IsExist(id) {
        const query = util.promisify(connection.query).bind(connection);
        const response = await query("select * from responses where id = ? ", [id]);
        if (response[0]) {
            return true;
        }
        return false;
    }

    static async Add(response) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            await query("insert into responses set ? ", response);
        } catch (error) {
            console.log(error);
        }
    }

    static async Update(editedResponse, id) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            await query("update responses set ? where id = ? ", [editedResponse, id]);
        } catch (error) {
            console.log(error);
        }
    }

    static async Delete(id) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            await query("delete from responses where id = ? ", [id]);
        } catch (error) {
            console.log(error);
        }
    }

    static async getResponses(search) {
        try {
            if (search) {
                search = `where name LIKE '%${search}%'`
            }
            const query = util.promisify(connection.query).bind(connection);
            const responses = await query(`select * from responses ${search}`);
            return responses;
        } catch (error) {
            console.log(error);
        }
    }

    static async getResponse(id) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            const response = await query("select * from responses where id = ? ", [id]);
            return response[0];
        } catch (error) {
            console.log(error);
        }
    }

    static async AnyCorrectResponse(question_id) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            const AnyCorrectResponse = await query(`select * from responses where question_id = ${question_id} and is_correct = 1;`);
            if (AnyCorrectResponse.length > 0) {
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
        }
    }

    static async questionResponses(question_id) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            const responses = await query(`select * from responses where question_id = ${question_id};`);
            return responses;
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = {Response:Response};