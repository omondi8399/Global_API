//------USERS
const User = require("./../models/userModels")
const catchAsync = require("../Utils/catchAsync")

exports.getAllUsers = catchAsync(async(req, res) => {
    const users = await User.find()

    //SEND QUERY
    res.status(200).json({
        status: "success",
        results: users.length,
        data: {
            users ,
           }
    })
})

exports.createUser = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
}

exports.getSingleUser = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
}

exports.updateUser = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
}

exports.deleteUser = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
}