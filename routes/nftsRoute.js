const express = require("express")
const nftControllers = require("./../controllers/nftControllers")
// const { 
//     getAllNfts,
//     createNFT,
//     getSingleNft,
//     updateNFT,
//     deleteNFT
// } = require("./../controllers/nftControllers")


const router = express.Router()

//ROUTER NFTs
router.route("/").get(nftControllers.getAllNfts).post(nftControllers.createNFT)

router.route("/:id").get(nftControllers.getSingleNft).patch(nftControllers.updateNFT).delete(nftControllers.deleteNFT)

module.exports = router