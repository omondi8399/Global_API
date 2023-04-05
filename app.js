const fs = require("fs")
const express = require("express")

const app = express()
app.use(express.json())

// app.get('/', (req, res) => {
//     res.status(200).send("Hello i am nft marketplace api")
// })

// app.get('/', (req, res) => {
//     res
//     .status(200)
//     .json({ 
//         message: "Hello i am nft marketplace api",
//         api: "NFT Marketplace"
//     })
// })

// app.post('/', (req, res) => {
//     res.status(201).json({
//         message: "Your Data"
//     })
// })

//GET REQUEST
const nfts = JSON.parse(
    fs.readFileSync(`${__dirname}/nft-data/data/nft-simple.json`)
) 

// console.log(nfts)

app.get('/api/v1/nfts', (req, res) => {
    res.status(200).json({
        status: "success",
        results: nfts.length,
        data: {
            nfts,
        }
    })
})

//POST METHOD
app.post("/api/v1/nfts", (req, res) => {
    // console.log(req)
    // console.log(req.body)

    const newId = nfts[nfts.length -1].id + 1
    const newNFTs = Object.assign({ id: newId }, req.body)

    nfts.push(newNFTs)

    fs.writeFile(`${__dirname}/nft-data/data/nft-simple.json`, JSON.stringify(nfts), err => {
        res.status(201).json({
            status: "success",
            nft:newNFTs
        })
    })
    // res.send("POST NFT")
})

//GET SINGLE NFT

app.get("/api/v1/nfts/:id", (req, res) => {
    console.log(req.params)
    res.status(200).json({
        status: "success",
    })
})



const port = 3000
app.listen(port, () => {
    console.log(`App running on port ${port}.....`)
})