module.exports = {
  "Upala": "[{\"type\":\"event\",\"anonymous\":false,\"name\":\"AdminChanged\",\"inputs\":[{\"type\":\"address\",\"name\":\"previousAdmin\",\"indexed\":false},{\"type\":\"address\",\"name\":\"newAdmin\",\"indexed\":false}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"BeaconUpgraded\",\"inputs\":[{\"type\":\"address\",\"name\":\"beacon\",\"indexed\":true}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"DelegateDeleted\",\"inputs\":[{\"type\":\"address\",\"name\":\"upalaId\",\"indexed\":false},{\"type\":\"address\",\"name\":\"delegate\",\"indexed\":false}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"Initialized\",\"inputs\":[{\"type\":\"uint8\",\"name\":\"version\",\"indexed\":false}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"Liquidated\",\"inputs\":[{\"type\":\"address\",\"name\":\"upalaId\",\"indexed\":false}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"NewAttackWindow\",\"inputs\":[{\"type\":\"uint256\",\"name\":\"newWindow\",\"indexed\":false}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"NewCandidateDelegate\",\"inputs\":[{\"type\":\"address\",\"name\":\"upalaId\",\"indexed\":false},{\"type\":\"address\",\"name\":\"delegate\",\"indexed\":false}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"NewDAppStatus\",\"inputs\":[{\"type\":\"address\",\"name\":\"dappAddress\",\"indexed\":false},{\"type\":\"bool\",\"name\":\"isRegistered\",\"indexed\":false}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"NewDelegate\",\"inputs\":[{\"type\":\"address\",\"name\":\"upalaId\",\"indexed\":false},{\"type\":\"address\",\"name\":\"delegate\",\"indexed\":false}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"NewExecutionWindow\",\"inputs\":[{\"type\":\"uint256\",\"name\":\"newWindow\",\"indexed\":false}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"NewIdentity\",\"inputs\":[{\"type\":\"address\",\"name\":\"upalaId\",\"indexed\":false},{\"type\":\"address\",\"name\":\"owner\",\"indexed\":false}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"NewIdentityOwner\",\"inputs\":[{\"type\":\"address\",\"name\":\"upalaId\",\"indexed\":false},{\"type\":\"address\",\"name\":\"oldOwner\",\"indexed\":false},{\"type\":\"address\",\"name\":\"newOwner\",\"indexed\":false}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"NewLiquidationFeePercent\",\"inputs\":[{\"type\":\"uint8\",\"name\":\"newFee\",\"indexed\":false}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"NewPool\",\"inputs\":[{\"type\":\"address\",\"name\":\"poolAddress\",\"indexed\":false},{\"type\":\"address\",\"name\":\"poolManager\",\"indexed\":false},{\"type\":\"address\",\"name\":\"factory\",\"indexed\":false}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"NewPoolFactoryStatus\",\"inputs\":[{\"type\":\"address\",\"name\":\"poolFactory\",\"indexed\":false},{\"type\":\"bool\",\"name\":\"isApproved\",\"indexed\":false}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"NewTreasury\",\"inputs\":[{\"type\":\"address\",\"name\":\"newTreasury\",\"indexed\":false}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"OwnershipTransferred\",\"inputs\":[{\"type\":\"address\",\"name\":\"previousOwner\",\"indexed\":true},{\"type\":\"address\",\"name\":\"newOwner\",\"indexed\":true}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"Paused\",\"inputs\":[{\"type\":\"address\",\"name\":\"account\",\"indexed\":false}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"Unpaused\",\"inputs\":[{\"type\":\"address\",\"name\":\"account\",\"indexed\":false}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"Upgraded\",\"inputs\":[{\"type\":\"address\",\"name\":\"implementation\",\"indexed\":true}]},{\"type\":\"function\",\"name\":\"approveDelegate\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"delegate\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"approvePoolFactory\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"poolFactory\"},{\"type\":\"bool\",\"name\":\"isApproved\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"askDelegation\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"upalaId\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"dropDelegation\",\"constant\":false,\"payable\":false,\"inputs\":[],\"outputs\":[]},{\"type\":\"function\",\"name\":\"getAttackWindow\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"uint256\"}]},{\"type\":\"function\",\"name\":\"getExecutionWindow\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"uint256\"}]},{\"type\":\"function\",\"name\":\"getLiquidationFeePercent\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"uint8\"}]},{\"type\":\"function\",\"name\":\"getTreasury\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"address\"}]},{\"type\":\"function\",\"name\":\"initialize\",\"constant\":false,\"payable\":false,\"inputs\":[],\"outputs\":[]},{\"type\":\"function\",\"name\":\"isApprovedPoolFactory\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"poolFactory\"}],\"outputs\":[{\"type\":\"bool\"}]},{\"type\":\"function\",\"name\":\"isLiquidated\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"upalaId\"}],\"outputs\":[{\"type\":\"bool\"}]},{\"type\":\"function\",\"name\":\"isOwnerOrDelegate\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"ownerOrDelegate\"},{\"type\":\"address\",\"name\":\"identity\"}],\"outputs\":[{\"type\":\"bool\"}]},{\"type\":\"function\",\"name\":\"liquidate\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"identity\"}],\"outputs\":[{\"type\":\"bool\"}]},{\"type\":\"function\",\"name\":\"myId\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"address\"}]},{\"type\":\"function\",\"name\":\"myIdOwner\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"address\",\"name\":\"owner\"}]},{\"type\":\"function\",\"name\":\"newIdentity\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"newIdentityOwner\"}],\"outputs\":[{\"type\":\"address\"}]},{\"type\":\"function\",\"name\":\"owner\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"address\"}]},{\"type\":\"function\",\"name\":\"pause\",\"constant\":false,\"payable\":false,\"inputs\":[],\"outputs\":[]},{\"type\":\"function\",\"name\":\"paused\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"bool\"}]},{\"type\":\"function\",\"name\":\"proxiableUUID\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"bytes32\"}]},{\"type\":\"function\",\"name\":\"registerDApp\",\"constant\":false,\"payable\":false,\"inputs\":[],\"outputs\":[]},{\"type\":\"function\",\"name\":\"registerPool\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"newPool\"},{\"type\":\"address\",\"name\":\"poolManager\"}],\"outputs\":[{\"type\":\"bool\"}]},{\"type\":\"function\",\"name\":\"removeDelegate\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"delegate\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"renounceOwnership\",\"constant\":false,\"payable\":false,\"inputs\":[],\"outputs\":[]},{\"type\":\"function\",\"name\":\"setAttackWindow\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"uint256\",\"name\":\"newWindow\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"setExecutionWindow\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"uint256\",\"name\":\"newWindow\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"setIdentityOwner\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"newIdentityOwner\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"setLiquidationFeePercent\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"uint8\",\"name\":\"newFee\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"setTreasury\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"newTreasury\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"transferOwnership\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"newOwner\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"unRegisterDApp\",\"constant\":false,\"payable\":false,\"inputs\":[],\"outputs\":[]},{\"type\":\"function\",\"name\":\"unpause\",\"constant\":false,\"payable\":false,\"inputs\":[],\"outputs\":[]},{\"type\":\"function\",\"name\":\"upgradeTo\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"newImplementation\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"upgradeToAndCall\",\"constant\":false,\"stateMutability\":\"payable\",\"payable\":true,\"inputs\":[{\"type\":\"address\",\"name\":\"newImplementation\"},{\"type\":\"bytes\",\"name\":\"data\"}],\"outputs\":[]}]",
  "SignedScoresPoolFactory": "[{\"type\":\"constructor\",\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"_upalaAddress\"},{\"type\":\"address\",\"name\":\"_approvedTokenAddress\"}]},{\"type\":\"function\",\"name\":\"approvedTokenAddress\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"address\"}]},{\"type\":\"function\",\"name\":\"createPool\",\"constant\":false,\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"address\"}]},{\"type\":\"function\",\"name\":\"isPoolFactory\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"bool\"}]},{\"type\":\"function\",\"name\":\"registerImplementationAsPool\",\"constant\":false,\"payable\":false,\"inputs\":[],\"outputs\":[]},{\"type\":\"function\",\"name\":\"upala\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"address\"}]},{\"type\":\"function\",\"name\":\"upalaAddress\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"address\"}]}]",
  "SignedScoresPool": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "metadata",
          "type": "string"
        }
      ],
      "name": "MetaDataUpdate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newBaseScore",
          "type": "uint256"
        }
      ],
      "name": "NewBaseScore",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "newScoreBundleId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "NewScoreBundleId",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "scoreBundleId",
          "type": "bytes32"
        }
      ],
      "name": "ScoreBundleIdDeleted",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "approvedToken",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "upalaID",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "scoreAssignedTo",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "score",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "bundleId",
          "type": "bytes32"
        },
        {
          "internalType": "bytes",
          "name": "proof",
          "type": "bytes"
        }
      ],
      "name": "attack",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "baseScore",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "scoreBundleId",
          "type": "bytes32"
        }
      ],
      "name": "deleteScoreBundleId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "scoreBundleId",
          "type": "bytes32"
        }
      ],
      "name": "getScoreBundleIdTimestamp",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "groupBaseScore",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "upalaAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "approvedTokenAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "poolManager",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "metaData",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "upalaID",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "scoreAssignedTo",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "score",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "bundleId",
          "type": "bytes32"
        },
        {
          "internalType": "bytes",
          "name": "proof",
          "type": "bytes"
        }
      ],
      "name": "myScore",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "newBundleId",
          "type": "bytes32"
        }
      ],
      "name": "publishScoreBundleId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "scoreBundleTimestamp",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newBaseScore",
          "type": "uint256"
        }
      ],
      "name": "setBaseScore",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "message",
          "type": "bytes32"
        },
        {
          "internalType": "bytes",
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "testRecover",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "upala",
      "outputs": [
        {
          "internalType": "contract Upala",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newMetadata",
          "type": "string"
        }
      ],
      "name": "updateMetadata",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "upalaID",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "scoreAssignedTo",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "score",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "bundleId",
          "type": "bytes32"
        },
        {
          "internalType": "bytes",
          "name": "proof",
          "type": "bytes"
        }
      ],
      "name": "userScore",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawFromPool",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "DAI": "[{\"type\":\"constructor\",\"payable\":false,\"inputs\":[{\"type\":\"string\",\"name\":\"name_\"},{\"type\":\"string\",\"name\":\"symbol_\"}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"Approval\",\"inputs\":[{\"type\":\"address\",\"name\":\"owner\",\"indexed\":true},{\"type\":\"address\",\"name\":\"spender\",\"indexed\":true},{\"type\":\"uint256\",\"name\":\"value\",\"indexed\":false}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"Transfer\",\"inputs\":[{\"type\":\"address\",\"name\":\"from\",\"indexed\":true},{\"type\":\"address\",\"name\":\"to\",\"indexed\":true},{\"type\":\"uint256\",\"name\":\"value\",\"indexed\":false}]},{\"type\":\"function\",\"name\":\"allowance\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"owner\"},{\"type\":\"address\",\"name\":\"spender\"}],\"outputs\":[{\"type\":\"uint256\"}]},{\"type\":\"function\",\"name\":\"approve\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"spender\"},{\"type\":\"uint256\",\"name\":\"amount\"}],\"outputs\":[{\"type\":\"bool\"}]},{\"type\":\"function\",\"name\":\"balanceOf\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"account\"}],\"outputs\":[{\"type\":\"uint256\"}]},{\"type\":\"function\",\"name\":\"decimals\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"uint8\"}]},{\"type\":\"function\",\"name\":\"decreaseAllowance\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"spender\"},{\"type\":\"uint256\",\"name\":\"subtractedValue\"}],\"outputs\":[{\"type\":\"bool\"}]},{\"type\":\"function\",\"name\":\"freeDaiToTheWorld\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"anyAccount\"},{\"type\":\"uint256\",\"name\":\"anyAmount\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"increaseAllowance\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"spender\"},{\"type\":\"uint256\",\"name\":\"addedValue\"}],\"outputs\":[{\"type\":\"bool\"}]},{\"type\":\"function\",\"name\":\"name\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"string\"}]},{\"type\":\"function\",\"name\":\"symbol\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"string\"}]},{\"type\":\"function\",\"name\":\"totalSupply\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"uint256\"}]},{\"type\":\"function\",\"name\":\"transfer\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"to\"},{\"type\":\"uint256\",\"name\":\"amount\"}],\"outputs\":[{\"type\":\"bool\"}]},{\"type\":\"function\",\"name\":\"transferFrom\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"from\"},{\"type\":\"address\",\"name\":\"to\"},{\"type\":\"uint256\",\"name\":\"amount\"}],\"outputs\":[{\"type\":\"bool\"}]}]"
}