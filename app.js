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


//----------PART 3

const fs = require("fs")
const express = require("express")
const morgan = require("morgan")

const app = express()
app.use(express.json())
app.use(morgan("dev"))

//CUSTOM MIDDLE WARE

app.use((req, res, next) => {
    console.log("Hey i am from middleware function")
    next()
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString()
    next()
})


//GET REQUEST
const nfts = JSON.parse(
    fs.readFileSync(`${__dirname}/nft-data/data/nft-simple.json`)
) 

const getAllNfts = (req, res) => {
    console.log(req.requestTime)
    res.status(200).json({
        status: "success",
        requestTime:req.requestTime,
        results: nfts.length,
        data: {
            nfts,
        }
    })
}
//POST METHOD
const createNFT = (req, res) => {
  

    const newId = nfts[nfts.length -1].id + 1
    const newNFTs = Object.assign({ id: newId }, req.body)

    nfts.push(newNFTs)

    fs.writeFile(`${__dirname}/nft-data/data/nft-simple.json`, JSON.stringify(nfts), err => {
        res.status(201).json({
            status: "success",
            nft:newNFTs
        })
    })
    
} 
//GET SINGLE NFT
const getSingleNft = (req, res) => {

    const id = req.params.id * 1
    const nft = nfts.find((el) => (el.id === id))

 
        if (!nft) {
        return res.status(404).json({
            status: "Fail",
            message: "Invalid ID"
        })
    }
    res.status(200).json({
        status: "success",
        data: {
            nft,
        }
    })
} 
//PATCH METHOD
const updateNFT = (req, res) => {

    if (req.params.id * 1 > nfts.length) {
        return res.status(404).json({
            status: "Fail",
            message: "Invalid ID"
        })
    }
    res.status(200).json({
        status: "success",
        data: {
            nft: "updating nft"
        }
    })
}
//DELETE METHOD
const deleteNFT = (req, res) => {

    if (req.params.id * 1 > nfts.length) {
        return res.status(404).json({
            status: "Fail",
            message: "Invalid ID"
        })
    }
    res.status(204).json({
        status: "success",
        message: null
    })
}

//ROUTER NFTs

app.route("/api/v1/nfts").get(getAllNfts).post(createNFT)

app.route("/api/v1/nfts/:id").get(getSingleNft).patch(updateNFT).delete(deleteNFT)

const port = 3000
app.listen(port, () => {
    console.log(`App running on port ${port}.....`)
})