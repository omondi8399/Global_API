const mongoose = require("mongoose")



const nftSchema = new mongoose.Schema({
    name: {
        type: String,
            required: [true, "A NFT must have a name"],
            unique: true,
            trim: true
    },

    duration: {
        type: String,
        required: [true, "must provide duration"]
    },

    // maxGroupSize: {
    //     type: Number,
    //     require: [true, "must have group size"]
    // },
    // difficulty: {
    //     type: String,
    //     required: [true, "must have difficulty"]
    // },
    ratingsAverage: {
        type: Number,
        default: 4.5
    },
    ratingsQuantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: [true, "A NFT must have a price"]
    },
    priceDiscount: Number,
    summary: {
        type: String,
        trim: true,
        required: [true, "must provide the summary"]
    },
    description: {
        type: String,
        trim: true
    },
    imageCover: {
        type: String,
        required: [true, "must provide the cover image"]
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    startDates: [Date]
})

const NFT = mongoose.model("NFT", nftSchema)

module.exports = NFT