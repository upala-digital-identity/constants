const fs = require('fs')
const _ = require('lodash')
const path = require('path');
const ethers = require('ethers')
const FormatTypes = ethers.utils.FormatTypes
const chalk = require('chalk')

function loadAbis() {
  return JSON.parse(
    fs.readFileSync(abisPath()))
}

function loadAddresses(chainID) {
  try {
    return JSON.parse(fs.readFileSync(addressesPath(chainID)))
  } catch (err) {
    return {}
  }
}

// todo remove __dirname - make it simpler. 
function abisPath() {
  return path.join(__dirname, '/constants/abis.json')
}

function addressesPath(chainID) {
  let filename = chainID.toString() + '_addresses.json'
  return path.join(__dirname, '/constants/', filename)
}


class UpalaConstants {
  constructor(chainID, options = {skipLoadFromDisk: false}) {
    this.chainID = chainID
    if (!options.skipLoadFromDisk)
      this.abis = loadAbis()
      this.addresses = loadAddresses(chainID)
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

  // saves abis and addresses on disk (only if difference found with existing)
  save() {
    // Export ABIs
    let savedAbis = loadAbis()
    if (!_.isEqual(savedAbis, this.abis)) { 
      console.log(chalk.red('\n\n\nWarning ABIs changed.\n\n\n'))
      fs.writeFileSync(abisPath(), JSON.stringify(this.abis))
    }
    // Export addresses
    let savedAddresses = loadAddresses(this.chainID)
    if (!_.isEqual(savedAddresses, this.addresses)) {
      fs.writeFileSync(addressesPath(this.chainID), JSON.stringify(this.addresses))
      console.log('Wrote addresses to:', chalk.green(addressesPath(this.chainID)))
    }
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

  getAddress(contractName) {
      return this.addresses[contractName]
  }

  getAbi(contractName) {
      return this.abis[contractName]
  }
}

exports.UpalaConstants = UpalaConstants
