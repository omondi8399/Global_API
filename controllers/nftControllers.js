const fs = require("fs")

const nfts = JSON.parse(
    fs.readFileSync(`${__dirname}/../nft-data/data/nft-simple.json`)
) 

exports.getAllNfts = (req, res) => {
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
exports.createNFT = (req, res) => {
  

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
exports.getSingleNft = (req, res) => {

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
exports.updateNFT = (req, res) => {

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
exports.deleteNFT = (req, res) => {

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