const mongoose = require("mongoose")
const validator = require("validator")

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

const User = mongoose.model("User", userSchema)

module.exports = User