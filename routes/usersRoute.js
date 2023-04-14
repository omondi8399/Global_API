const express = require("express")
const userControllers = require("./../controllers/userControllers")
const authController = require("./../controllers/authController")

const router = express.Router()

router.post("/signup", authController.signup)
router.post("/login", authController.login)

router.post("/forgotPassword", authController.forgotPassword)
router.patch("/resetPassword/:token", authController.resetPassword)

router.patch("/updateMyPassword", authController.protect, authController.updatePassword)

//ROUTER USERS
router.route("/").get(userControllers.getAllUsers).post(userControllers.createUser)

router.route("/:id").get(userControllers.getSingleUser).patch(userControllers.updateUser).delete(userControllers.deleteUser)

module.exports = router
