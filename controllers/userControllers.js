const asyncHandler = require('express-async-handler');

// @description - Register a new user
// @route - POST /api/users
// @access - public

const registerUser = asyncHandler(async(req,res) => {
    res.json({message: "User registered successfully"});
});

// @description - Login user
// @route - POST /api/users
// @access - public

const loginUser = asyncHandler(async(req,res) => {
    res.json({message: "Login user"});
});

// @description - Current user information
// @route - GET /api/users
// @access - private

const currentUser = asyncHandler(async(req,res) => {
    res.json({message: "Current user information"});
});

module.exports = {
    registerUser,
    loginUser,
    currentUser
}
