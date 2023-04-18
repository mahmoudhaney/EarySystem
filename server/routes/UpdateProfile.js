const router= require('express').Router();
const conn= require('../db/connection.js');
const {body,validationResult} = require("express-validator");
const util = require("util");
const bcrypt=require('bcrypt')
const crypto = require('crypto')




router.put(
  "/:ID", // params
    body("name").isString().withMessage("please enter a valid movie name").isLength({ min: 3 }).withMessage("movie name should be at lease 10 characters"),
    body("email").isString().withMessage("please enter a valid description ").isLength({ min: 20 }).withMessage("description name should be at lease 20 characters"),
    body("password").isLength({ min: 8, max: 20 }).withMessage("password should be between (8-12) character"),
    body("phone").isLength({max: 11 }).withMessage("phone should be  (11) character"),
    async (req, res) => {
      try {
        // 1- VALIDATION REQUEST [manual, express validation]
        const query = util.promisify(conn.query).bind(conn);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        // 2- CHECK IF user EXISTS OR NOT
        const userinfo = await query("select * from users where ID = ?", [
          req.params.ID,
        ]);
        if (!userinfo[0]) {
         return res.status(404).json({ ms: "user not found !" });
        }
        // 3- PREPARE user OBJECT
        const userObj = {
          name: req.body.name,
          email: req.body.email,
          password: await bcrypt.hash(req.body.password,10),
          phone: req.body.phone,
        };


        // 4- UPDATE user
        await query("update users set ? where ID= ?", [userObj, userinfo[0].ID]);

        return res.status(200).json({
          userObj,
          msg: "user updated successfully",
        });
      } catch (err) {
        console.log(err);
       return res.status(500).json(err);
      }
    }
);





  
module.exports = router;