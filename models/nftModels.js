const mongoose = require("mongoose")



const nftSchema = new mongoose.Schema({
    name: {
        type: String,
            required: [true, "A NFT must have a name"],
            unique: true,
    },

    durations: {
        type: String,
        required: [true, "must provide duration"]
    },

    maxGroupSize: {
        type: Number,
        require: [true, "must have group size"]
    },
    difficulty: {
        type: String,
        required: [true, "must have difficulty"]
    },
    ratingsAverage: {
        type: Number,
        default: 4.5
    },
    ratingsAverage: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: [true, "A NFT must have a price"]
    }
})

const NFT = mongoose.model("NFT", nftSchema)

module.exports = NFT