const conn = require('../db/connection.js');
const util = require("util");//helper

const admin = async (req, res,next) => {
    const query = util.promisify(conn.query).bind(conn); //transform query =>to use await/async
    const { token } = req.headers;
    const admin = await query("select * from users where token=?", [token]);
    if (admin[0] &&admin[0].isadmin===1) {
        next()
    }
    else {
        res.status(403).json({
            msg:"you are not authorized to access this route"
        })
    }
}


module.exports = admin;