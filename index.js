const fs = require('fs')
const path = require('path');

function getAbis() {
    return JSON.parse(
        fs.readFileSync(getAbisFilePath()))
}

function getAddresses(args) {
    try {
        return JSON.parse(fs.readFileSync(getAddressesFilePath(args)))
      } catch (err) {
        return {}
      }
}

function getAbisFilePath() {
    return path.join(__dirname, '/constants/abis.json')
}

function getAddressesFilePath(args) {
    let filename = args.chainID.toString() + '_addresses.json'
    return path.join(__dirname, '/constants/', filename)
}

exports.getAbisFilePath = getAbisFilePath
exports.getAddressesFilePath = getAddressesFilePath
exports.getAbis = getAbis
exports.getAddresses = getAddresses
