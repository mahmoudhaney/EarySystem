const router = require("express").Router();
const {body, validationResult} = require("express-validator");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { User } = require("../models/User");
const authorized = require('../middleware/authorized');
const admin = require('../middleware/admin');

// Regisration
router.post(
    "/register",
    body("name").isString().withMessage("enter a valid name").isLength({min: 8, max: 25}).withMessage("name range 8 : 25"),
    body("email").isEmail().withMessage("enter a valid email!"),    
    body("password").isLength({min: 8, max: 15}).withMessage("password range 8 : 15"),
    body("phone").isNumeric().withMessage("enter a valid phone number").isLength(11).withMessage("Number must be 11 digits"),
    async (req, res) => {
    try {
        if (!validationResult(req).isEmpty()) {
            res.status(400).json({errors: validationResult(req).array()});
        } else if (await User.IsEmailExist(req.body.email)) {
            res.status(404).json({msg: "email already exist !"});
        } else if (await User.IsPhoneExist(req.body.phone)) {
            res.status(404).json({msg: "phone number already exist !"});
        } else {
            const user = new User();
            user.setName(req.body.name);
            user.setEmail(req.body.email);
            user.setPassword(await bcrypt.hash(req.body.password, 10)),
            user.setPhone(req.body.phone);
            user.setStatus(0);
            user.setToken(crypto.randomBytes(16).toString("hex"));
            user.setRole(0);

            await User.Add(user);
            res.status(200).json({msg: "Registered Successfully"});
        }
    } catch (error) {
        res.status(500).json({error: error});
    }
});

// Login
router.post(
    "/login",
    body("email").isEmail().withMessage("enter a valid email!"),
    body("password"),
    async (req, res) => {
    try {
        if (!validationResult(req).isEmpty()) {
            res.status(400).json({errors: validationResult(req).array()});
        } else if (!await User.IsEmailExist(req.body.email)) {
            res.status(404).json({msg: "Invalid email !"});
        } else if (!await User.CheckPassword(req.body.email, req.body.password)){
            res.status(404).json({msg: "wrong password !"});
        } else if (!await User.IsApproved(req.body.email)){
            res.status(404).json({msg: "wait for admin approval !"});
        } else {
            res.status(200).json(await User.getUser(req.body.email));
        }       
    } catch (error) {
        res.status(500).json({error: error});
    }
});

// Approve User
router.put(
    "/approve-user/:id", 
    admin, 
    async (req, res) => {
        try {
            if (!validationResult(req).isEmpty()) {
                res.status(400).json({errors: validationResult(req).array()});
            } else if (!await User.IsExist(req.params.id)) {
                res.status(404).json({msg: "user not found !"});
            } else {
                await User.ApproveUser(req.params.id);
                res.status(200).json({msg: "User Approved Successfully"});
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
});

// Update a specific User
router.put(
    "/:id", 
    authorized, 
    body("name").isString().withMessage("enter a valid name").isLength({min: 8, max: 25}).withMessage("name range 8 : 25"),
    body("email").isEmail().withMessage("enter a valid email!"),    
    body("password").isLength({min: 8, max: 15}).withMessage("password range 8 : 15"),
    body("phone").isNumeric().withMessage("enter a valid phone number").isLength(11).withMessage("Number must be 11 digits"),
    async (req, res) => {
        try {
            if (!validationResult(req).isEmpty()) {
                res.status(400).json({errors: validationResult(req).array()});
            } else if (!await User.IsExist(req.params.id)) {
                res.status(404).json({msg: "user not found !"});
            } else if (!await User.checkEmail(req.body.email, req.params.id)) {
                res.status(400).json({msg: "email already exist !!"});
            } else if (!await User.checkPhone(req.body.phone, req.params.id)) {
                res.status(400).json({msg: "phone number already exist !!"});
            } else {
                const editedUser = new User();
                delete editedUser.ID;
                delete editedUser.status;
                delete editedUser.token;
                delete editedUser.role;

                editedUser.setName(req.body.name);
                editedUser.setEmail(req.body.email);
                editedUser.setPassword(await bcrypt.hash(req.body.password, 10)),
                editedUser.setPhone(req.body.phone);

                await User.Update(editedUser, req.params.id);
                res.status(200).json({msg: "User Updated Successfully"});
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
});

// Delete a specific User
router.delete(
    "/:id", 
    admin, 
    async (req, res) => {
        try {
            if (!await User.IsExist(req.params.id)) {
                res.status(404).json({msg: "user not found !"});
            } else {
                await User.Delete(req.params.id);
                res.status(200).json({msg: "User Deleted Successfully",});
            }
        } catch (error) {
            res.status(500).json(error);
        }
});

// List All Users
router.get(
    "/users",
    async (req, res) => {
    try {
        res.status(200).json(await User.getUsers(req.query.search));
    } catch (error) {
        res.status(500).json({error: error});
    }
});

// List All Unapproved Users
router.get(
    "/unapproved-users",
    async (req, res) => {
    try {
        res.status(200).json(await User.getUnapprovedUsers(req.query.search));
    } catch (error) {
        res.status(500).json({error: error});
    }
});

// Show a specific User
router.get("/:id", async (req, res) => {
    try {
        if (!await User.IsExist(req.params.id)) {
            res.status(404).json({msg: "User not found !"});
        } else {
            res.status(200).json(await User.getUserById(req.params.id));
        }
    } catch (error) {
        res.status(500).json({error: error});
    }
});

module.exports = router;