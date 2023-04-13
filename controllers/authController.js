const jwt = require("jsonwebtoken")
const User = require("./../models/userModel")
const catchAsync = require("../Utils/catchAsync")
const AppError = require("../utils/appError")

//CREATE TOKEN
const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}
//SIGNUP
exports.signup = catchAsync(async (req, res, next) => {
    // const newUser = await User.create(req.body)
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    })

    const token = signToken(newUser._id)


    res.status(201).json({
        status: "success",
        token,
        data: {
            user: newUser
        }
    })
})


//LOGIN USER
exports.login = catchAsync(async(req, res, next) => {
    const {email, password} = req.body

    if (!email || !password) {
       return next(new AppError("Please provide your email & password"))
    }
    const user = await user.findOne({ email }).select("+password")
    // console.log(user)

    if (!user || !(await user.correctPassword(password, user.password))){
        return next(new AppError("Incorrect email and password", 401))
    }

    const token = signToken(user.id)
    res.status(200).json({
        status: "success",
        token
    })
})

