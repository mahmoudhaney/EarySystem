const router= require('express').Router();
const conn= require('../db/connection.js');
const {body,validationResult} = require("express-validator");
const util = require("util");
const bcrypt=require('bcrypt')
const crypto = require('crypto')
const admin =require('../middleware/admin')

//register
router.post(
  "/register",
  body("name")
  .isString()
  .withMessage("please enter a valid name")
  .isLength({ min: 3, max: 20 })
  .withMessage("name should be between (10-20) character"),
  body("email").isEmail().withMessage("please enter a valid email!"),
  body("password")
    .isLength({min:8 ,max: 20 })
    .withMessage("password should be between (8-20) character"),
    body("phone").isLength({max: 11 }).withMessage("phone should be  (11) character"),
  async (req, res) => {
    try {
      
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      
      const query = util.promisify(conn.query).bind(conn); 
      const checkEmailExists = await query(
        "select * from users where email = ?",
        [req.body.email]
      );
      if (checkEmailExists.length > 0) {
        return res.status(400).json({
          errors: [
            {
              msg: "email already exists !",
            },
          ],
        });
      }

      
      const userData = {
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
        phone: req.body.phone,
        token: crypto.randomBytes(16).toString("hex"), 
      };

      // 4- INSERT USER OBJECT INTO DB
      await query("insert into users set ? ", userData);
      delete userData.password;
      return res.status(200).json(userData);
    } catch (err) {
      return res.status(500).json({ err: err });
    }
  }
);


//login
router.post(
    "/login",
    body("email").isEmail().withMessage("please enter a valid email!"),
    body("password").isLength({ min: 8, max: 20 }).withMessage("password should be between (8-12) character"),
    async (req, res) => {
      try {
        // 1- VALIDATION REQUEST [manual, express validation]
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
  
        // 2- CHECK IF EMAIL EXISTS
        const query = util.promisify(conn.query).bind(conn); // transform query mysql --> promise to use [await/async]
        const user = await query("select * from users where email = ?", [
          req.body.email,
        ]);
        if (user.length === 0) {
          return  res.status(404).json({
            errors: [
              {
                msg: "email or password not found !",
              },
            ],
          });
        }
        if(user[0].status === 0){
            return res.status(404).json({
                errors: [
                {
                    msg: "Your account not activated yet,Wait for activation !",
                },
                ],
            });
        }

        // 3- COMPARE HASHED PASSWORD
        const checkPassword = await bcrypt.compare(
          req.body.password,
          user[0].password
        );
        if (checkPassword) {
          delete user[0].password;
          return res.status(200).json(user[0]);
        } else {
          return res.status(404).json({
            errors: [
              {
                msg: "email or password Incorrect !",
              },
            ],
          });
        }
      } catch (err) {
        return res.status(500).json({ err: err });
      }
    }
  );




module.exports= router;
