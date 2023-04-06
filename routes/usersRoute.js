const express = require("express")

//------USERS
const getAllUsers = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
}

const createUser = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
}

const getSingleUser = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
}

const updateUser = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
}

const deleteUser = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
}

const router = express.Router()

//ROUTER USERS
router.route("/").get(getAllUsers).post(createUser)

router.route("/:id").get(getSingleUser).patch(updateUser).delete(deleteUser)

module.exports = router
