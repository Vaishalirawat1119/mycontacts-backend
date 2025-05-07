const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async(req,res,next) => {
    let token;
    let autHeader = req.headers.authorization || req.headers.authorization;
    if(autHeader && autHeader.startsWith('Bearer')){
        token = autHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err) {
                res.status(401);
                throw new Error("User is not authorized");
            }
            console.log(decoded);
        });
    }
});

module.exports = validateToken;