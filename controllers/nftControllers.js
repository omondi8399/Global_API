// // const fs = require("fs")

// // const nfts = JSON.parse(
// //     fs.readFileSync(`${__dirname}/../nft-data/data/nft-simple.json`)
// // ) 

// const NFT = require("./../models/nftModels")

// // exports.checkId = (req, res, next, value) => {
// //     console.log(`ID: ${value}`)
// //     if (req.params.id * 1 > nfts.length) {
// //         return res.status(404).json({
// //             status: "Fail",
// //             message: "Invalid ID"
// //         })
// //     }
// //     next()
// // }

// // exports.checkBody = (req, res, next) => {
// //     if (!req.body.name || !req.body.price) {
// //         return res.status(400).json({
// //             status: "fail",
// //             message: "Missing name and price"
// //         })
// //     }
// //     next()
// // }

// exports.getAllNfts = (req, res) => {
//     console.log(req.requestTime)
//     res.status(200).json({
//         status: "success",
//         requestTime:req.requestTime,
//         // results: nfts.length,
//         // data: {
//         //     nfts,
//         // }
//     })
// }
// //POST METHOD
// exports.createNFT = (req, res) => {
  

//     // const newId = nfts[nfts.length -1].id + 1
//     // const newNFTs = Object.assign({ id: newId }, req.body)

//     // nfts.push(newNFTs)

//     // fs.writeFile(`${__dirname}/nft-data/data/nft-simple.json`, JSON.stringify(nfts), err => {
//     //     res.status(201).json({
//     //         status: "success",
//     //         nft:newNFTs
//     //     })
//     // })
    
// } 
// //GET SINGLE NFT
// exports.getSingleNft = (req, res) => {

//     const id = req.params.id * 1
//     // const nft = nfts.find((el) => (el.id === id))

 
//     //     if (!nft) {
//     //     return res.status(404).json({
//     //         status: "Fail",
//     //         message: "Invalid ID"
//     //     })
//     // }
//     res.status(200).json({
//         status: "success",
//         // data: {
//         //     nft,
//         // }
//     })
// } 
// //PATCH METHOD
// exports.updateNFT = (req, res) => {

//     // if (req.params.id * 1 > nfts.length) {
//     //     return res.status(404).json({
//     //         status: "Fail",
//     //         message: "Invalid ID"
//     //     })
//     // }
//     res.status(200).json({
//         status: "success",
//         data: {
//             nft: "updating nft"
//         }
//     })
// }
// //DELETE METHOD
// exports.deleteNFT = (req, res) => {

//     res.status(204).json({
//         status: "success",
//         message: null
//     })
// }

///------------PART 2

const NFT = require("./../models/nftModels")

exports.getAllNfts = async (req, res) => {
    try {
    
        // BUILD QUERY
    
        console.log(req.query)
    
        // const nfts = await NFT.find()
        //     .where("duration")
        //     .equals(5)
        //     .where("difficulty")
        //     .equals("easy")

        const queryObj = { ...req.query }
        const excludedFields = ["Page", "sort", "limit", "fields"]
        excludedFields.forEach((el) => delete queryObj[el])
        // console.log(req.query, queryObj)

        // ADVANCED FILTERING QUERY 
        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
        // console.log(JSON.parse(queryStr))

        const query =  NFT.find(parse(queryStr))
        // {difficulty: "easy", duration: {$gte: 5}}
        //{ difficulty: 'easy', duration: { gte: '5' } }
        //{ difficulty: 'easy', duration: { '$gte': '5' } }

        const nfts = await query


        //SEND QUERY
        res.status(200).json({
            status: "success",
            results: nfts.length,
            data: {
                nfts,
            }
        })
    } catch (error){
       res.status(404).json({
        status: "Fail",
        message: "Server error"
       })
    }


}
//POST METHOD
exports.createNFT = async (req, res) => {

// const newNFT = new NFT({
//     newNFT.save()
// )}

try {
const newNFT = await NFT.create(req.body)

res.status(201).json({
    status: "success",
    data: {
        nft: newNFT
    }
})
    
} catch (error) {
    res.status(400).json({
        status: "fail",
        message: "Invalid data sent from NFT"
    })
}

    } 
//GET SINGLE NFT
exports.getSingleNft = async (req, res) => {
     try {

        const nft = await NFT.findById(req.params.id)

        res.status(200).json({
            status: "success",
            data: {
                nft
            }
        })

     } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error
         })
     }
} 
//PATCH METHOD
exports.updateNFT = async (req, res) => {

    try {

        const nft = await NFT.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            status: "success",
            data: {
                nft,
            }
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error
         })
    }
}
//DELETE METHOD
exports.deleteNFT = async (req, res) => {

    try {

        await NFT.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: "success",
            message: null
        })   
    } catch (error) {

    }

   
}