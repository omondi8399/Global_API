// const dotenv = require("dotenv")
// const mongoose = require("mongoose")
// const app = require("./app")

// dotenv.config({ path: "./config.env" })
// const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD)

// mongoose.connect(DB, {
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useNewUrlParser: true,
// }).then((con) => {
//     // console.log(con.connection)
//     console.log("DB Connected Successfully")
// })
// // console.log(process.env.NODE_ENV)
// // console.log(app.get("env"))
// // console.log(process.env)


// // const testNFT = new NFT({
// //     name: "The Arrow Monkey",
// //     rating: 3.2,
// //     price: 567
// // }) 

// // testNFT.save().then(docNFT => {
// //     console.log(docNFT)
// // }).catch((error) => {
// //     console.log("Error:", error)
// // })

// const port = process.env.PORT || 3000
// app.listen(port, () => {
//     console.log(`App running on port ${port}.....`)
// })


//-----------PART 2
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app = require("./app")

process.on("uncaughtException", (err) => {
    console.log("uncaughtException Shutting down application")
    console.log(err.name, err.message)
    process.exit(1)
})

dotenv.config({ path: "./config.env" })
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
}).then((con) => {
    console.log("DB Connected Successfully")
}).catch((err) => console.log("ERROR"))

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
    console.log(`App running on port ${port}.....`)
})


process.on("unhandledRejection", err =>{
    console.log("UnhandledRejection Shutting down application")
    console.log(err.name, err.message)
    server.close(() => {
        process.exit(1)
    })
})




console.log(d)