const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")

//name, email, photo, password, passwordConfirmed

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please tell us your name"]
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "please provide a valid email address"]
    },
    // photo: {
    //     type: String,
    // },
     photo: String,
     password: {
        type: String,
        required: [true, "please provide a password"],
        minlength: 8
     },
     passwordConfirm: {
        type: String,
        required: [true, "please confirm your password"],
        validate: {
            //THIS will only work on save or create 
            validator: function(el){
                return el == this.password  //abc === abc true, abc == acb false
            },
            message: "Password is not the same"
        }
     }
    
})

userSchema.pre("save", async function (next) {
    //PASSWORD MODIFIED
    if(!this.isModified("password")) return next()
    //HASH PASSWORD
    this.password = await bcrypt.hash(this.password, 12)
    //DELETES CONFIRM PASSWORD
    this.passwordConfirm = undefined
    next()
})

const User = mongoose.model("User", userSchema)

module.exports = User