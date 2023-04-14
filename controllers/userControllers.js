//------USERS
const User = require("./../models/userModels")
const catchAsync = require("../Utils/catchAsync")
const AppError = require("../utils/appError")


exports.updateMe = (req, res, next) => {
    // 1 CREATE ERROR IF USER UPDATING PASSWORD
    if (req.body.password || req.body.passwordConfirm) {
        return next (
            new AppError("This route is not for password Update. Please use /updateMyPassword", 400)
        )
    }
    // 2 UPDATE USER DATE
    res.status(200).json({
        status: "success"
    })

}

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