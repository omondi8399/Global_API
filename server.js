const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app = require("./app")

dotenv.config({ path: "./config.env" })
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
}).then((con) => {
    // console.log(con.connection)
    console.log("DB Connected Successfully")
})

// console.log(app.get("env"))

// console.log(process.env)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`App running on port ${port}.....`)
})