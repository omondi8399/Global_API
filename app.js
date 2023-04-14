// const fs = require("fs")
// const express = require("express")

// const app = express()
// app.use(express.json())

// // app.get('/', (req, res) => {
// //     res.status(200).send("Hello i am nft marketplace api")
// // })

// // app.get('/', (req, res) => {
// //     res
// //     .status(200)
// //     .json({ 
// //         message: "Hello i am nft marketplace api",
// //         api: "NFT Marketplace"
// //     })
// // })

// // app.post('/', (req, res) => {
// //     res.status(201).json({
// //         message: "Your Data"
// //     })
// // })

// //GET REQUEST
// const nfts = JSON.parse(
//     fs.readFileSync(`${__dirname}/nft-data/data/nft-simple.json`)
// ) 

// // console.log(nfts)

// app.get('/api/v1/nfts', (req, res) => {
//     res.status(200).json({
//         status: "success",
//         results: nfts.length,
//         data: {
//             nfts,
//         }
//     })
// })

// //POST METHOD
// app.post("/api/v1/nfts", (req, res) => {
//     // console.log(req)
//     // console.log(req.body)

//     const newId = nfts[nfts.length -1].id + 1
//     const newNFTs = Object.assign({ id: newId }, req.body)

//     nfts.push(newNFTs)

//     fs.writeFile(`${__dirname}/nft-data/data/nft-simple.json`, JSON.stringify(nfts), err => {
//         res.status(201).json({
//             status: "success",
//             nft:newNFTs
//         })
//     })
//     // res.send("POST NFT")
// })

// //GET SINGLE NFT

// app.get("/api/v1/nfts/:id", (req, res) => {
//     // console.log(req.params)

//     const id = req.params.id * 1
//     const nft = nfts.find((el) => (el.id === id))

//     // if((id > nfts.length)) {
//         if (!nft) {
//         return res.status(404).json({
//             status: "Fail",
//             message: "Invalid ID"
//         })
//     }
//     res.status(200).json({
//         status: "success",
//         data: {
//             nft,
//         }
//     })
// })

// //PATCH METHOD
// app.patch("/api/v1/nfts/:id", (req, res) => {

//     if (req.params.id * 1 > nfts.length) {
//         return res.status(404).json({
//             status: "Fail",
//             message: "Invalid ID"
//         })
//     }
//     res.status(200).json({
//         status: "success",
//         data: {
//             nft: "updating nft"
//         }
//     })
// })

// //DELETE METHOD
// app.delete("/api/v1/nfts/:id", (req, res) => {

//     if (req.params.id * 1 > nfts.length) {
//         return res.status(404).json({
//             status: "Fail",
//             message: "Invalid ID"
//         })
//     }
//     res.status(204).json({
//         status: "success",
//         message: null
//     })
// })


// //----------PART 2

// const fs = require("fs")
// const express = require("express")
// const morgan = require("morgan")

// const app = express()
// app.use(express.json())
// app.use(morgan("dev"))

// //CUSTOM MIDDLE WARE

// app.use((req, res, next) => {
//     console.log("Hey i am from middleware function")
//     next()
// })

// app.use((req, res, next) => {
//     req.requestTime = new Date().toISOString()
//     next()
// })


// //GET REQUEST
// const nfts = JSON.parse(
//     fs.readFileSync(`${__dirname}/nft-data/data/nft-simple.json`)
// ) 

// const getAllNfts = (req, res) => {
//     console.log(req.requestTime)
//     res.status(200).json({
//         status: "success",
//         requestTime:req.requestTime,
//         results: nfts.length,
//         data: {
//             nfts,
//         }
//     })
// }
// //POST METHOD
// const createNFT = (req, res) => {
  

//     const newId = nfts[nfts.length -1].id + 1
//     const newNFTs = Object.assign({ id: newId }, req.body)

//     nfts.push(newNFTs)

//     fs.writeFile(`${__dirname}/nft-data/data/nft-simple.json`, JSON.stringify(nfts), err => {
//         res.status(201).json({
//             status: "success",
//             nft:newNFTs
//         })
//     })
    
// } 
// //GET SINGLE NFT
// const getSingleNft = (req, res) => {

//     const id = req.params.id * 1
//     const nft = nfts.find((el) => (el.id === id))

 
//         if (!nft) {
//         return res.status(404).json({
//             status: "Fail",
//             message: "Invalid ID"
//         })
//     }
//     res.status(200).json({
//         status: "success",
//         data: {
//             nft,
//         }
//     })
// } 
// //PATCH METHOD
// const updateNFT = (req, res) => {

//     if (req.params.id * 1 > nfts.length) {
//         return res.status(404).json({
//             status: "Fail",
//             message: "Invalid ID"
//         })
//     }
//     res.status(200).json({
//         status: "success",
//         data: {
//             nft: "updating nft"
//         }
//     })
// }
// //DELETE METHOD
// const deleteNFT = (req, res) => {

//     if (req.params.id * 1 > nfts.length) {
//         return res.status(404).json({
//             status: "Fail",
//             message: "Invalid ID"
//         })
//     }
//     res.status(204).json({
//         status: "success",
//         message: null
//     })
// }
// // app.get('/api/v1/nfts', getAllNfts )
// // app.post("/api/v1/nfts", createNFT )
// //  app.get("/api/v1/nfts/:id", getSingleNft )
// // app.patch("/api/v1/nfts/:id", updateNFT )
// // app.delete("/api/v1/nfts/:id", deleteNFT )


// //----------PART 3

// const fs = require("fs")
// const express = require("express")
// const morgan = require("morgan")

// const app = express()
// app.use(express.json())
// app.use(morgan("dev"))

// //CUSTOM MIDDLE WARE

// app.use((req, res, next) => {
//     console.log("Hey i am from middleware function")
//     next()
// })

// app.use((req, res, next) => {
//     req.requestTime = new Date().toISOString()
//     next()
// })


// //GET REQUEST
// const nfts = JSON.parse(
//     fs.readFileSync(`${__dirname}/nft-data/data/nft-simple.json`)
// ) 

// const getAllNfts = (req, res) => {
//     console.log(req.requestTime)
//     res.status(200).json({
//         status: "success",
//         requestTime:req.requestTime,
//         results: nfts.length,
//         data: {
//             nfts,
//         }
//     })
// }
// //POST METHOD
// const createNFT = (req, res) => {
  

//     const newId = nfts[nfts.length -1].id + 1
//     const newNFTs = Object.assign({ id: newId }, req.body)

//     nfts.push(newNFTs)

//     fs.writeFile(`${__dirname}/nft-data/data/nft-simple.json`, JSON.stringify(nfts), err => {
//         res.status(201).json({
//             status: "success",
//             nft:newNFTs
//         })
//     })
    
// } 
// //GET SINGLE NFT
// const getSingleNft = (req, res) => {

//     const id = req.params.id * 1
//     const nft = nfts.find((el) => (el.id === id))

 
//         if (!nft) {
//         return res.status(404).json({
//             status: "Fail",
//             message: "Invalid ID"
//         })
//     }
//     res.status(200).json({
//         status: "success",
//         data: {
//             nft,
//         }
//     })
// } 
// //PATCH METHOD
// const updateNFT = (req, res) => {

//     if (req.params.id * 1 > nfts.length) {
//         return res.status(404).json({
//             status: "Fail",
//             message: "Invalid ID"
//         })
//     }
//     res.status(200).json({
//         status: "success",
//         data: {
//             nft: "updating nft"
//         }
//     })
// }
// //DELETE METHOD
// const deleteNFT = (req, res) => {

//     if (req.params.id * 1 > nfts.length) {
//         return res.status(404).json({
//             status: "Fail",
//             message: "Invalid ID"
//         })
//     }
//     res.status(204).json({
//         status: "success",
//         message: null
//     })
// }

// //------USERS
// const getAllUsers = (req, res) => {
//     res.status(500).json({
//         status: "error",
//         message: "Internal server error"
//     })
// }

// const createUser = (req, res) => {
//     res.status(500).json({
//         status: "error",
//         message: "Internal server error"
//     })
// }

// const getSingleUser = (req, res) => {
//     res.status(500).json({
//         status: "error",
//         message: "Internal server error"
//     })
// }

// const updateUser = (req, res) => {
//     res.status(500).json({
//         status: "error",
//         message: "Internal server error"
//     })
// }

// const deleteUser = (req, res) => {
//     res.status(500).json({
//         status: "error",
//         message: "Internal server error"
//     })
// }

// const nftsRouter = express.Router()
// const usersRouter = express.Router()

// //ROUTER NFTs

// nftsRouter.route("/").get(getAllNfts).post(createNFT)

// nftsRouter.route("/:id").get(getSingleNft).patch(updateNFT).delete(deleteNFT)

// //ROUTER USERS
// usersRouter.route("/").get(getAllUsers).post(createUser)

// usersRouter.route("/:id").get(getSingleUser).patch(updateUser).delete(deleteUser)

// app.use("/api/v1/users", usersRouter)
// app.use("/api/v1/nfts", nftsRouter)


// //----------PART 4

// const express = require("express")
// const morgan = require("morgan")

// const nftsRouter = require("./routes/nftsRoute")
// const usersRouter = require("./routes/usersRoute")

// const app = express()
// app.use(express.json())

// // if (process.env.NODE_ENV === "development") {
// //     app.use(morgan("dev"))
// // }
// app.use(morgan("dev"))
// //SERVING TEMPLATE DEMO
// app.use(express.static(`${__dirname}/nft-data/img`))

// //CUSTOM MIDDLE WARE
// app.use((req, res, next) => {
//     console.log("Hey i am from middleware function")
//     next()
// })

// app.use((req, res, next) => {
//     req.requestTime = new Date().toISOString()
//     next()
// })

// app.use("/api/v1/users", usersRouter)
// app.use("/api/v1/nfts", nftsRouter)


//----------PART 5-----ERROR

const express = require("express")
const morgan = require("morgan")
const rateLimit = require("express-rate-limit")
const helmet = require("helmet")
const mongoSanitize = require("express-mongo-sanitize")
const xss = require("xss-clean")

const AppError = require("./Utils/appError")
const globalErrorHandler = require("./controllers/errorController")
const nftsRouter = require("./routes/nftsRoute")
const usersRouter = require("./routes/usersRoute")

const app = express()
app.use(express.json({limit: "10kb"}))

// DATA SANITIZATION AGAINST NoSQL QUERY INJECTION
app.use(mongoSanitize())

// DATA SANITIZATION against site script XSS
app.use(xss())

//SECURE HEADER HTTP
app.use(helmet())

//GLOBAL MIDDLEWARE

// if (process.env.NODE_ENV === "development") {
//     app.use(morgan("dev"))
// }

//RATE LIMIT
const limiter = rateLimit({
    max: 100,
    windowsMs: 60 * 60 * 1000,
    message: "Too many request from this IP, please try again in an hour"
})

app.use("/api", limiter)

app.use(morgan("dev"))
//SERVING TEMPLATE DEMO
app.use(express.static(`${__dirname}/nft-data/img`))

//CUSTOM MIDDLE WARE
app.use((req, res, next) => {
    console.log("Hey i am from middleware function")
    next()
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString()
    // console.log(req.headers)
    next()
})

app.use("/api/v1/users", usersRouter)
app.use("/api/v1/nfts", nftsRouter)

//ERROR SECTION

app.all("*", (req, res, next) => {
    // res.status(404).json({
    //     status: "fail",
    //     message: `can't find ${req.originalUrl} on this server`
    // })

    // const err = new Error(`can't find ${req.originalUrl} on this server`)
    // err.status = "fail"
    // err.statusCode = 404
    // next(err)

    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
})

//GLOBAL ERROR HANDLING
app.use(globalErrorHandler)

module.exports = app