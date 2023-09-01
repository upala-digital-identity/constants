const fs = require('fs')
const _ = require('lodash')
const path = require('path');
const ethers = require('ethers')
const FormatTypes = ethers.utils.FormatTypes
const chalk = require('chalk')
const addresses = require('./constants/addresses.js')
const abis = require('./constants/abis.js')

/*****************
GLOBAL UTILS/TOOLS
******************/
// Tools for other Upala modules 
// (probably need a separate lib for that)

function validNetworkID(nameOrId) {
  if (nameOrId == '31337' || nameOrId == 'Local' || nameOrId == 'local') return 31337
  if (nameOrId == '4' || nameOrId == "Rinkeby" || nameOrId == "rinkeby") return 4
  if (nameOrId == '100' || nameOrId == 'xDai' || nameOrId == 'xdai') return 100 // todo add gnosis, Gnosis
  if (nameOrId == '1' || nameOrId == 'Mainnet' || nameOrId == 'mainnet') return 1
}

// TODO depricate this
function getDaiAddress(networkNameOrId) {
  let networkID = validNetworkID(networkNameOrId)
  if (networkID == '31337') return null
  if (networkID == '4') return '0xbC0dFaA78fe7bc8248b9F857292f680a1630b0C5'  // fakeDai mock of DAI
  if (networkID == '100') return '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d' // Wrapped XDAI (WXDAI) - https://gnosis.blockscout.com/address/0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d
  if (networkID == '1') return '0x6B175474E89094C44Da98b954EedeAC495271d0F'
  return null
}

function numConfirmations(networkNameOrId) {
  let networkID = validNetworkID(networkNameOrId)
  if (networkID == 31337) return 1
  if (networkID == 1 || networkID == 4) return 4  // let nodes sync
}

function isTestNetwork(networkNameOrId) {
  let networkID = validNetworkID(networkNameOrId)
  if (networkID == 31337 || networkID == 4) 
    { return true } else { return false }
}

// TODO think of a function names here
function getAddress(chainID, contractName) {
  return addresses[chainID][contractName]
}

function getAbi(contractName) {
  return abis[contractName]
}

/*******************
INTERNAL UTILS/TOOLS
********************/
// Used just within this module

function loadAbis() {
  return abis
}

function loadAddresses(chainID) {
  return addresses[chainID]
}

function abisPath() {
  return './constants/abis.js'
}

// TODO remove this
// all addresses are now stored in a single file
function addressesPath(chainID) {
  let filename = chainID.toString() + '_addresses.js'
  return './constants/' + filename
}

class UpalaConstants {
  constructor(chainID, options = {skipLoadFromDisk: false}) {
    this.chainID = chainID
    if (!options.skipLoadFromDisk) {
      this.abis = loadAbis()
      this.addresses = loadAddresses(chainID)
    }
  }

  /*******************
  WRITING TO CONSTANTS
  ********************/
  // this is Upala admin part (don't use this anywhere else)

  addContract(contractName, contract) {
    this.abis[contractName] = contract.interface.format(FormatTypes.json)
    this.addresses[contractName] = contract.address
  }

  addABI(contractName, abi) {
    this.abis[contractName] = abi
  }

  // TODO move this to upala manager to get rid of fs here
  // Clear cache and require
  // const moduleName = './myfile.js';
  // delete require.cache[require.resolve(moduleName)];

  // const myFile = require(moduleName);
  // // Now you can use your file
  // saves abis and addresses on disk (only if difference found with existing)
  save() {
    // Export ABIs
    let savedAbis = loadAbis()
    // if (!_.isEqual(savedAbis, this.abis)) { 
      // console.log(chalk.red('\n\n\nWarning ABIs changed.\n\n\n'))
      // fs.writeFileSync(abisPath(), `module.exports = ${JSON.stringify(this.abis, false, 2)}`)
    // }
    // Export addresses
    // TODO now all addresses are stored in a single file
    let savedAddresses = loadAddresses(this.chainID)
    // if (!_.isEqual(savedAddresses, this.addresses)) {
      // fs.writeFileSync(addressesPath(this.chainID), `module.exports = ${JSON.stringify(this.addresses, false, 2)}`)
      // console.log('Wrote addresses to:', chalk.green(addressesPath(this.chainID)))
    // }
  }

/*******************
READING FROM CONSTANTS
********************/

  // loads contract from constants or attaches given address to an ABI by name
  getContract(contractName, wallet, address) {
    if (address) {
      // e.g. used for dai and pools - attaching
      return new ethers.Contract(
        address, 
        this.abis[contractName], 
        wallet)
    } else {
      return new ethers.Contract(
        this.addresses[contractName], 
        this.abis[contractName], 
        wallet)
    }
  }

  // leave this function for local testing
  getAddress(contractName) {
      return this.addresses && this.addresses[contractName]
  }

  getAbi(contractName) {
      return this.abis[contractName]
  }
}

exports.validNetworkID = validNetworkID
exports.numConfirmations = numConfirmations
exports.getDaiAddress = getDaiAddress
exports.isTestNetwork = isTestNetwork
exports.abis = abis
exports.UpalaConstants = UpalaConstants
