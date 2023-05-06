const connection = require('../db/connection');
const util = require("util");
const bcrypt = require("bcrypt");

class User {

    constructor (id, name, email, password, phone, status, token, role) {
        this.ID = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.status = status;
        this.token = token;
        this.role = role;
    }

    getId() {
        return this.id;
    }

    static async getName(email) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            const user = await query("select name from users where email = ? ", [email]);
            if (user[0].name) {
                return user[0].name;
            }
            return false;
        } catch (error) {
            console.log(error);
        }
    }
    setName(name) {
        this.name = name;
    }

    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }

    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }

    getPhone() {
        return this.phone;
    }
    setPhone(phone) {
        this.phone = phone;
    }

    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }

    getToken() {
        return this.token;
    }
    setToken(token) {
        this.token = token;
    }

    getRole() {
        return this.role;
    }
    setRole(role) {
        this.role = role;
    }

    static async IsExist(id) {
        const query = util.promisify(connection.query).bind(connection);
        const user = await query("select * from users where id = ? ", [id]);
        if (user[0]) {
            return true;
        }
        return false;
    }

    static async IsValid(id) {
        const query = util.promisify(connection.query).bind(connection);
        const user = await query("select * from exams where user_id = ? and status = 1", [id]);
        if (user[0]) {
            return true;
        }
        return false;
    }

    static async IsEmailExist(email) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            const emailExist = await query("select * from users where email = ?", [email]);
            if(emailExist.length > 0){
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
        }
    }

    static async IsPhoneExist(phone) {
        const query = util.promisify(connection.query).bind(connection);
        const phoneExist = await query("select * from users where phone = ?", [phone]);
        if(phoneExist.length > 0){
            return true;
        }
        return false;
    }

    static async CheckPassword(email, password) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            const user = await query("select password from users where email = ?", [email]);
            const checkPassword = await bcrypt.compare(password, user[0].password);
            if(checkPassword){
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
        }
    }

    static async IsApproved(id) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            const user = await query("select status from users where id = ? ", [id]);
            if (user[0].status) {
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
        }
    }

    static async IsAdmin(email) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            const user = await query("select role from users where email = ? ", [email]);
            if (user[0].role) {
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
        }
    }

    static async Add(user) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            await query("insert into users set ? ", user);
        } catch (error) {
            console.log(error);
        }
    }

    static async getUsers() {
        try {
            const query = util.promisify(connection.query).bind(connection);
            const users = await query('select ID, name, email, phone, status, token, role from users;');
            return users;
        } catch (error) {
            console.log(error);
        }
    }

    static async getUser(email) {
        try {
            const query = util.promisify(connection.query).bind(connection);
            const user = await query(`select * from users where email = "${email}"`);
            return user[0];
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = {User:User};