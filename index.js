// vars

const noblox = require("noblox.js")
const fs = require("fs")
const config = require("./config.json")
const colors = require("colors")
const ItemApi = "https://limited-info.herokuapp.com/api/"
const axios = require("axios")


// main

async function ScanInventory() {
    const cu = await noblox.setCookie(config.cookie)
    const userid = cu.UserID
    const Inventory = await noblox.getCollectibles({userId: userid, sortOrder: "Asc", limit: 100})
    fs.writeFileSync("./items.json", parseInt(Inventory.map( o => o.assetId), 10).toString())
    console.log("Scanned Your Inventory, you own ".red.bold + Inventory.length + " Collectibles".red.bold)
}

async function Checktrade(OwnedItem, ItemId1, ItemId2, ItemId3, ItemId4) {
    
    if (OwnedItem, ItemId1) {

    // Owned Item
    axios
    .get(ItemApi + OwnedItem)
    .then((responceOwned) => {
      let OwnedItemRap = responceOwned.data[2]
      const OwnedItemName = responceOwned.data[0]

        // 1st

        if (ItemId1) {
            axios
    .get(ItemApi + ItemId1)
    .then((responce1) => {
      let Firstrap = responce1.data[2]
      const FirstName = responce1.data[0]

      console.log("Sending " + OwnedItemName + "(" + OwnedItemRap + ")" + " For: ")
      console.log(FirstName + "(" + Firstrap + ")")
      console.log("Starting CheckTrade")
        if ((OwnedItemRap * config.ratio) < Firstrap) {
            console.log("Checked 1.")
        // 2nd
        if (ItemId2) {
            axios
    .get(ItemApi + ItemId2)
    .then((responce2) => {
      let Secondrap = responce2.data[2]
      const SecondName = responce2.data[0]
      if (ItemId2) {
        if ((OwnedItemRap * config.ratio) < Firstrap + Secondrap) {
            console.log("Checked 2..")
        console.log(SecondName + "(" + Secondrap + ")")
        // 3rd
        if (ItemId3) {
            axios
    .get(ItemApi + ItemId3)
    .then((responce3) => {
      let Thirdrap = responce3.data[2]
      const ThirdName = responce3.data[0]
      if (ItemId3) {
        if ((OwnedItemRap * config.ratio) < Firstrap + Secondrap + Thirdrap) {
            console.log("Checked 3..")
      console.log(ThirdName + "(" + Thirdrap + ")")
        // 4

        if (ItemId4) {
            axios
    .get(ItemApi + ItemId4)
    .then((responce4) => {
      let Fourthrap = responce4.data[2]
      const FourthName = responce4.data[0]
      if (ItemId4) {
        if ((OwnedItemRap * config.ratio) < Firstrap + Secondrap + Thirdrap + Fourthrap) {
            console.log("Checked 4..")
      console.log(FourthName + "(" + Fourthrap + ")")
        }}
    })}
}}
})}
        }}
    })}
        }})
    }})
}}
                                





async function Main() {
    const cu = await noblox.setCookie(config.cookie)
    console.log("logged in as ".cyan + cu.UserName.cyan.bold)

}

Main()

Checktrade(63239668, 21070012, 48545806)
