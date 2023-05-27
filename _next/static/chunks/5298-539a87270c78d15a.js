"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5298], {
        34083: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GELATO_STOP_LIMIT_ORDERS_MODULE_ADDRESS = t.GENERIC_GAS_LIMIT_ORDER_EXECUTION = t.NATIVE_WRAPPED_TOKEN_ADDRESS = t.NATIVE_TOKEN_NAME = t.NATIVE_WRAPPED_TOKEN_TICKER = t.NATIVE_TOKEN_TICKER = t.GELATO_LIMIT_ORDERS_ERC20_ORDER_ROUTER = t.GELATO_LIMIT_ORDERS_MODULE_FLASHBOTS_ADDRESS = t.GELATO_LIMIT_ORDERS_MODULE_ADDRESS = t.GELATO_LIMIT_ORDERS_ADDRESS = t.SUBGRAPH_URL = t.OLD_SUBGRAPH_URL = t.NETWORK_STOP_LIMIT_HANDLERS = t.NETWORK_HANDLERS = t.NETWORK_NAME = t.HANDLERS_ADDRESSES = t.LIMIT_ORDER_SLIPPAGE = t.STOP_LIMIT_SLIPPAGE_BPS = t.BPS_GELATO_FEE = t.CHAIN_ID = t.MAX_LIFETIME_IN_SECONDS = t.SLIPPAGE_BPS = t.ETH_ADDRESS = void 0, t.ETH_ADDRESS = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", t.SLIPPAGE_BPS = 40, t.MAX_LIFETIME_IN_SECONDS = 7889238, t.CHAIN_ID = {
                MAINNET: 1,
                ROPSTEN: 3,
                GOERLI: 5,
                BSC: 56,
                MATIC: 137,
                FANTOM: 250,
                AVAX: 43114
            }, t.BPS_GELATO_FEE = {
                [t.CHAIN_ID.MAINNET]: 10,
                [t.CHAIN_ID.MATIC]: 10,
                [t.CHAIN_ID.FANTOM]: 10,
                [t.CHAIN_ID.BSC]: 10,
                [t.CHAIN_ID.AVAX]: 10
            }, t.STOP_LIMIT_SLIPPAGE_BPS = {
                [t.CHAIN_ID.MAINNET]: 500,
                [t.CHAIN_ID.ROPSTEN]: 500,
                [t.CHAIN_ID.MATIC]: 500,
                [t.CHAIN_ID.FANTOM]: 500,
                [t.CHAIN_ID.BSC]: 500,
                [t.CHAIN_ID.AVAX]: 500
            }, t.LIMIT_ORDER_SLIPPAGE = {
                [t.CHAIN_ID.MAINNET]: 40,
                [t.CHAIN_ID.ROPSTEN]: 40,
                [t.CHAIN_ID.MATIC]: 40,
                [t.CHAIN_ID.FANTOM]: 40,
                [t.CHAIN_ID.BSC]: 40,
                [t.CHAIN_ID.AVAX]: 40
            }, t.HANDLERS_ADDRESSES = {
                [t.CHAIN_ID.MAINNET]: {
                    uniswap: "0x837c03414fb86861f28ca7e91e5fd770fda0f52d",
                    uniswap_stoplimit: "0xf437a1a98566872f734bd18addf4bb610d1f887b"
                },
                [t.CHAIN_ID.ROPSTEN]: {
                    uniswap: "0x1f397f95d31eb20183b69d685a5060cfdefd508b",
                    quickswap_stoplimit: "0x87bE4Eb9dFb2DefcEA035D3010f33584Fc8ddDB5"
                },
                [t.CHAIN_ID.MATIC]: {
                    quickswap: "0xaccbd2c6ad75ad3394dc5f4b1f606bf111e4eae3",
                    polydex: "0x00fc86d360162e4672ec6B427E12ed36F39f1f53",
                    cafeswap: "0xd167afcee4e9a89e69646fd3c27e58b61d1b7f97",
                    quickswap_stoplimit: "0x51cc226648f8de65513de7cdfd3e7b116156234e"
                },
                [t.CHAIN_ID.FANTOM]: {
                    spiritswap: "0x5fb00386558ccc219e51b69d8e963ef20b0c267a",
                    spookyswap: "0x228ffd7122d202c0cd24330892881c47b0817c7a",
                    bombswap: "0x87C4Fbd67f6DD8a1B5EFD9879956c728C97afeFe",
                    defyswap: "0x3d401587320522a5e0bb973d10a852430a8edbbd",
                    spiritswap_stoplimit: "0x6ea82c72732389c5149326e048a46be9f8bec8e8",
                    spookyswap_stoplimit: "0xe912cd26c4a4cfffc175a297f1328ab23313a1a7"
                },
                [t.CHAIN_ID.BSC]: {
                    pancakeswap: "0x88f8CCC064bA2D39cF08D57B6e7504a7B6bE8E4e",
                    pancakeswap_stoplimit: "0x84b826bcd26f1bc0cd5fbbdef7f5b8965d6bbb38"
                },
                [t.CHAIN_ID.AVAX]: {
                    traderjoe: "0x88f8CCC064bA2D39cF08D57B6e7504a7B6bE8E4e",
                    pangolin: "0x8b206547cfe6f35a77ddab2d6d97260765a349ef",
                    pangolin_stoplimit: "0xb4c53e2e32caf977d61a8a776bdc44837a5d0d91",
                    traderjoe_stoplimit: "0xcf497830e43836738bdd0c3d7e09b599ddf081b2"
                }
            }, t.NETWORK_NAME = {
                [t.CHAIN_ID.MAINNET]: "Ethereum",
                [t.CHAIN_ID.ROPSTEN]: "Ropsten",
                [t.CHAIN_ID.GOERLI]: "Goerli",
                [t.CHAIN_ID.MATIC]: "Polygon (Matic)",
                [t.CHAIN_ID.FANTOM]: "FANTOM",
                [t.CHAIN_ID.BSC]: "BSC",
                [t.CHAIN_ID.AVAX]: "AVAX"
            }, t.NETWORK_HANDLERS = {
                [t.CHAIN_ID.MAINNET]: ["uniswap", "uniswap_stoplimit"],
                [t.CHAIN_ID.ROPSTEN]: ["uniswap", "quickswap_stoplimit"],
                [t.CHAIN_ID.MATIC]: ["quickswap", "polydex", "cafeswap", "quickswap_stoplimit"],
                [t.CHAIN_ID.FANTOM]: ["spiritswap", "spookyswap", "bombswap", "defyswap", "spiritswap_stoplimit", "spookyswap_stoplimit"],
                [t.CHAIN_ID.BSC]: ["pancakeswap", "pancakeswap_stoplimit"],
                [t.CHAIN_ID.AVAX]: ["traderjoe", "pangolin", "pangolin_stoplimit", "traderjoe_stoplimit"]
            }, t.NETWORK_STOP_LIMIT_HANDLERS = {
                [t.CHAIN_ID.MAINNET]: ["uniswap_stoplimit"],
                [t.CHAIN_ID.ROPSTEN]: ["quickswap_stoplimit"],
                [t.CHAIN_ID.MATIC]: ["quickswap_stoplimit"],
                [t.CHAIN_ID.BSC]: ["pancakeswap_stoplimit"],
                [t.CHAIN_ID.FANTOM]: ["spookyswap_stoplimit", "spiritswap_stoplimit"],
                [t.CHAIN_ID.AVAX]: ["traderjoe_stoplimit", "pangolin_stoplimit"]
            }, t.OLD_SUBGRAPH_URL = {
                [t.CHAIN_ID.MAINNET]: "https://api.thegraph.com/subgraphs/name/gelatodigital/limit-orders",
                [t.CHAIN_ID.ROPSTEN]: "https://api.thegraph.com/subgraphs/name/gelatodigital/limit-orders-ropsten",
                [t.CHAIN_ID.MATIC]: "https://api.thegraph.com/subgraphs/name/gelatodigital/limit-orders-polygon",
                [t.CHAIN_ID.FANTOM]: "https://api.thegraph.com/subgraphs/name/gelatodigital/limit-orders-fantom"
            }, t.SUBGRAPH_URL = {
                [t.CHAIN_ID.MAINNET]: "https://api.thegraph.com/subgraphs/name/gelatodigital/limit-orders-ii",
                [t.CHAIN_ID.MATIC]: "https://api.thegraph.com/subgraphs/name/gelatodigital/limit-orders-polygon-ii",
                [t.CHAIN_ID.FANTOM]: "https://api.thegraph.com/subgraphs/name/gelatodigital/limit-orders-fantom-ii",
                [t.CHAIN_ID.BSC]: "https://api.thegraph.com/subgraphs/name/gelatodigital/limit-orders-bsc",
                [t.CHAIN_ID.AVAX]: "https://api.thegraph.com/subgraphs/name/gelatodigital/limit-orders-avax"
            }, t.GELATO_LIMIT_ORDERS_ADDRESS = {
                [t.CHAIN_ID.MAINNET]: "0x36049D479A97CdE1fC6E2a5D2caE30B666Ebf92B",
                [t.CHAIN_ID.ROPSTEN]: "0x0e5096D201Fe2985f5C26432A76f145D6e5D1453",
                [t.CHAIN_ID.GOERLI]: "0xa0453c6ab71fe3da89640ee2503326bd0899a589",
                [t.CHAIN_ID.MATIC]: "0x38c4092b28dAB7F3d98eE6524549571c283cdfA5",
                [t.CHAIN_ID.FANTOM]: "0x05Ad1094Eb6Cde564d732196F6754Ee464896031",
                [t.CHAIN_ID.BSC]: "0x0c30D3d66bc7C73A83fdA929888c34dcb24FD599",
                [t.CHAIN_ID.AVAX]: "0x0c30D3d66bc7C73A83fdA929888c34dcb24FD599"
            }, t.GELATO_LIMIT_ORDERS_MODULE_ADDRESS = {
                [t.CHAIN_ID.MAINNET]: "0x037fc8e71445910e1E0bBb2a0896d5e9A7485318",
                [t.CHAIN_ID.ROPSTEN]: "0x3f3C13b09B601fb6074124fF8D779d2964caBf8B",
                [t.CHAIN_ID.GOERLI]: "0xCf8EDB3333Fae73b23f689229F4De6Ac95d1f707",
                [t.CHAIN_ID.MATIC]: "0x5A36178E38864F5E724A2DaF5f9cD9bA473f7903",
                [t.CHAIN_ID.FANTOM]: "0xf2253BF9a0BD002300cFe6f4E630d755669f6DCa",
                [t.CHAIN_ID.BSC]: "0xb7499a92fc36e9053a4324aFfae59d333635D9c3",
                [t.CHAIN_ID.AVAX]: "0xb7499a92fc36e9053a4324aFfae59d333635D9c3"
            }, t.GELATO_LIMIT_ORDERS_MODULE_FLASHBOTS_ADDRESS = {
                [t.CHAIN_ID.MAINNET]: "0xbeC333EDE1A0687D2b9624F8C073a54c93ba9777",
                [t.CHAIN_ID.GOERLI]: "0xCf8EDB3333Fae73b23f689229F4De6Ac95d1f707"
            }, t.GELATO_LIMIT_ORDERS_ERC20_ORDER_ROUTER = {
                [t.CHAIN_ID.MAINNET]: "0x5fb00386558ccc219e51b69d8e963ef20b0c267a",
                [t.CHAIN_ID.ROPSTEN]: "0x9c06ff386779cc2269d482bcecf2378a4ff5cb90",
                [t.CHAIN_ID.GOERLI]: "0x247A1306b6122ba28862b19a95004899db91f1b5",
                [t.CHAIN_ID.MATIC]: "0x0c2c2963a4353ffd839590f7cb1e783688378814",
                [t.CHAIN_ID.FANTOM]: "0x59e61b95f20e940ac777e88fa2dfa0a6a4c40fa0",
                [t.CHAIN_ID.BSC]: "0x64c7f3c2C19B41a6aD67bb5f4edc8EdbB3284F34",
                [t.CHAIN_ID.AVAX]: "0x64c7f3c2C19B41a6aD67bb5f4edc8EdbB3284F34"
            }, t.NATIVE_TOKEN_TICKER = {
                [t.CHAIN_ID.MAINNET]: "ETH",
                [t.CHAIN_ID.ROPSTEN]: "ETH",
                [t.CHAIN_ID.GOERLI]: "ETH",
                [t.CHAIN_ID.MATIC]: "MATIC",
                [t.CHAIN_ID.FANTOM]: "FTM",
                [t.CHAIN_ID.BSC]: "BNB",
                [t.CHAIN_ID.AVAX]: "AVAX"
            }, t.NATIVE_WRAPPED_TOKEN_TICKER = {
                [t.CHAIN_ID.MAINNET]: "WETH",
                [t.CHAIN_ID.ROPSTEN]: "WETH",
                [t.CHAIN_ID.GOERLI]: "WETH",
                [t.CHAIN_ID.MATIC]: "WMATIC",
                [t.CHAIN_ID.FANTOM]: "WFTM",
                [t.CHAIN_ID.BSC]: "WBNB",
                [t.CHAIN_ID.AVAX]: "WAVAX"
            }, t.NATIVE_TOKEN_NAME = {
                [t.CHAIN_ID.MAINNET]: "Ether",
                [t.CHAIN_ID.ROPSTEN]: "Ether",
                [t.CHAIN_ID.GOERLI]: "Ether",
                [t.CHAIN_ID.MATIC]: "Matic",
                [t.CHAIN_ID.FANTOM]: "Fantom",
                [t.CHAIN_ID.BSC]: "Bnb",
                [t.CHAIN_ID.AVAX]: "Avax"
            }, t.NATIVE_WRAPPED_TOKEN_ADDRESS = {
                [t.CHAIN_ID.MAINNET]: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                [t.CHAIN_ID.ROPSTEN]: "0xc778417e063141139fce010982780140aa0cd5ab",
                [t.CHAIN_ID.GOERLI]: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
                [t.CHAIN_ID.MATIC]: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
                [t.CHAIN_ID.FANTOM]: "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",
                [t.CHAIN_ID.BSC]: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                [t.CHAIN_ID.AVAX]: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7"
            }, t.GENERIC_GAS_LIMIT_ORDER_EXECUTION = "400000", t.GELATO_STOP_LIMIT_ORDERS_MODULE_ADDRESS = {
                [t.CHAIN_ID.MAINNET]: "0x260aB0aCb931D7Da784fC35c7E96c3B13213Abf1",
                [t.CHAIN_ID.ROPSTEN]: "0xDC41072F4aFE7e4a7ea0f21d13a92662Fe733C55",
                [t.CHAIN_ID.MATIC]: "0x81967ac4ce8e2d94f7e4b4cf3d2e760605079604",
                [t.CHAIN_ID.BSC]: "0xe912cd26c4a4cfffc175a297f1328ab23313a1a7",
                [t.CHAIN_ID.FANTOM]: "0xf437a1a98566872f734bd18addf4bb610d1f887b",
                [t.CHAIN_ID.AVAX]: "0xf437a1a98566872f734bd18addf4bb610d1f887b"
            }
        },
        10538: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ERC20OrderRouter__factory = void 0;
            let n = r(49569),
                i = [{
                    inputs: [{
                        internalType: "contract IGelatoPineCore",
                        name: "_gelatoPineCore",
                        type: "address"
                    }],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "bytes32",
                        name: "key",
                        type: "bytes32"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "caller",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "address",
                        name: "module",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "address",
                        name: "inputToken",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "address",
                        name: "witness",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "bytes",
                        name: "data",
                        type: "bytes"
                    }, {
                        indexed: !1,
                        internalType: "bytes32",
                        name: "secret",
                        type: "bytes32"
                    }],
                    name: "DepositToken",
                    type: "event"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "_module",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_inputToken",
                        type: "address"
                    }, {
                        internalType: "address payable",
                        name: "_owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_witness",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "_data",
                        type: "bytes"
                    }, {
                        internalType: "bytes32",
                        name: "_secret",
                        type: "bytes32"
                    }],
                    name: "depositToken",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "gelatoPineCore",
                    outputs: [{
                        internalType: "contract IGelatoPineCore",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }];
            class a {
                static createInterface() {
                    return new n.utils.Interface(i)
                }
                static connect(e, t) {
                    return new n.Contract(e, i, t)
                }
            }
            t.ERC20OrderRouter__factory = a, a.abi = i
        },
        87461: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ERC20__factory = void 0;
            let n = r(49569),
                i = [{
                    constant: !0,
                    inputs: [],
                    name: "name",
                    outputs: [{
                        name: "",
                        type: "string"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "_spender",
                        type: "address"
                    }, {
                        name: "_value",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [{
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "totalSupply",
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "_from",
                        type: "address"
                    }, {
                        name: "_to",
                        type: "address"
                    }, {
                        name: "_value",
                        type: "uint256"
                    }],
                    name: "transferFrom",
                    outputs: [{
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "decimals",
                    outputs: [{
                        name: "",
                        type: "uint8"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        name: "_owner",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        name: "balance",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        name: "",
                        type: "string"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "_to",
                        type: "address"
                    }, {
                        name: "_value",
                        type: "uint256"
                    }],
                    name: "transfer",
                    outputs: [{
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        name: "_owner",
                        type: "address"
                    }, {
                        name: "_spender",
                        type: "address"
                    }],
                    name: "allowance",
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    payable: !0,
                    stateMutability: "payable",
                    type: "fallback"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Approval",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Transfer",
                    type: "event"
                }];
            class a {
                static createInterface() {
                    return new n.utils.Interface(i)
                }
                static connect(e, t) {
                    return new n.Contract(e, i, t)
                }
            }
            t.ERC20__factory = a, a.abi = i
        },
        57389: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GelatoLimitOrders__factory = void 0;
            let n = r(49569),
                i = [{
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "bytes32",
                        name: "_key",
                        type: "bytes32"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "_caller",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "bytes",
                        name: "_data",
                        type: "bytes"
                    }],
                    name: "DepositETH",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "bytes32",
                        name: "_key",
                        type: "bytes32"
                    }, {
                        indexed: !1,
                        internalType: "address",
                        name: "_inputToken",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "address",
                        name: "_owner",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "address",
                        name: "_witness",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "bytes",
                        name: "_data",
                        type: "bytes"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }],
                    name: "OrderCancelled",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "bytes32",
                        name: "_key",
                        type: "bytes32"
                    }, {
                        indexed: !1,
                        internalType: "address",
                        name: "_inputToken",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "address",
                        name: "_owner",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "address",
                        name: "_witness",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "bytes",
                        name: "_data",
                        type: "bytes"
                    }, {
                        indexed: !1,
                        internalType: "bytes",
                        name: "_auxData",
                        type: "bytes"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "_bought",
                        type: "uint256"
                    }],
                    name: "OrderExecuted",
                    type: "event"
                }, {
                    inputs: [],
                    name: "ETH_ADDRESS",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "contract IModule",
                        name: "_module",
                        type: "address"
                    }, {
                        internalType: "contract IERC20",
                        name: "_inputToken",
                        type: "address"
                    }, {
                        internalType: "address payable",
                        name: "_owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_witness",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "_data",
                        type: "bytes"
                    }, {
                        internalType: "bytes",
                        name: "_auxData",
                        type: "bytes"
                    }],
                    name: "canExecuteOrder",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "contract IModule",
                        name: "_module",
                        type: "address"
                    }, {
                        internalType: "contract IERC20",
                        name: "_inputToken",
                        type: "address"
                    }, {
                        internalType: "address payable",
                        name: "_owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_witness",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "_data",
                        type: "bytes"
                    }],
                    name: "cancelOrder",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "bytes",
                        name: "_data",
                        type: "bytes"
                    }],
                    name: "decodeOrder",
                    outputs: [{
                        internalType: "address",
                        name: "module",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "inputToken",
                        type: "address"
                    }, {
                        internalType: "address payable",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "witness",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes"
                    }, {
                        internalType: "bytes32",
                        name: "secret",
                        type: "bytes32"
                    }],
                    stateMutability: "pure",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "bytes",
                        name: "_data",
                        type: "bytes"
                    }],
                    name: "depositEth",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_module",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_inputToken",
                        type: "address"
                    }, {
                        internalType: "address payable",
                        name: "_owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_witness",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "_data",
                        type: "bytes"
                    }, {
                        internalType: "bytes32",
                        name: "_secret",
                        type: "bytes32"
                    }],
                    name: "encodeEthOrder",
                    outputs: [{
                        internalType: "bytes",
                        name: "",
                        type: "bytes"
                    }],
                    stateMutability: "pure",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "contract IModule",
                        name: "_module",
                        type: "address"
                    }, {
                        internalType: "contract IERC20",
                        name: "_inputToken",
                        type: "address"
                    }, {
                        internalType: "address payable",
                        name: "_owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_witness",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "_data",
                        type: "bytes"
                    }, {
                        internalType: "bytes32",
                        name: "_secret",
                        type: "bytes32"
                    }, {
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }],
                    name: "encodeTokenOrder",
                    outputs: [{
                        internalType: "bytes",
                        name: "",
                        type: "bytes"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "bytes32",
                        name: "",
                        type: "bytes32"
                    }],
                    name: "ethDeposits",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "contract IModule",
                        name: "_module",
                        type: "address"
                    }, {
                        internalType: "contract IERC20",
                        name: "_inputToken",
                        type: "address"
                    }, {
                        internalType: "address payable",
                        name: "_owner",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "_data",
                        type: "bytes"
                    }, {
                        internalType: "bytes",
                        name: "_signature",
                        type: "bytes"
                    }, {
                        internalType: "bytes",
                        name: "_auxData",
                        type: "bytes"
                    }],
                    name: "executeOrder",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "contract IModule",
                        name: "_module",
                        type: "address"
                    }, {
                        internalType: "contract IERC20",
                        name: "_inputToken",
                        type: "address"
                    }, {
                        internalType: "address payable",
                        name: "_owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_witness",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "_data",
                        type: "bytes"
                    }],
                    name: "existOrder",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "contract IModule",
                        name: "_module",
                        type: "address"
                    }, {
                        internalType: "contract IERC20",
                        name: "_inputToken",
                        type: "address"
                    }, {
                        internalType: "address payable",
                        name: "_owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_witness",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "_data",
                        type: "bytes"
                    }],
                    name: "keyOf",
                    outputs: [{
                        internalType: "bytes32",
                        name: "",
                        type: "bytes32"
                    }],
                    stateMutability: "pure",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "contract IModule",
                        name: "_module",
                        type: "address"
                    }, {
                        internalType: "contract IERC20",
                        name: "_inputToken",
                        type: "address"
                    }, {
                        internalType: "address payable",
                        name: "_owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_witness",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "_data",
                        type: "bytes"
                    }],
                    name: "vaultOfOrder",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    stateMutability: "payable",
                    type: "receive"
                }];
            class a {
                static createInterface() {
                    return new n.utils.Interface(i)
                }
                static connect(e, t) {
                    return new n.Contract(e, i, t)
                }
            }
            t.GelatoLimitOrders__factory = a, a.abi = i
        },
        70124: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Multicall__factory = void 0;
            let n = r(49569),
                i = [{
                    inputs: [{
                        internalType: "address",
                        name: "_factory",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_mainModule",
                        type: "address"
                    }],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "_wallet",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "bytes32",
                        name: "_imageHash",
                        type: "bytes32"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "_threshold",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "bytes",
                        name: "_signers",
                        type: "bytes"
                    }],
                    name: "RequiredConfig",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "_wallet",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "_signer",
                        type: "address"
                    }],
                    name: "RequiredSigner",
                    type: "event"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_addr",
                        type: "address"
                    }],
                    name: "callBalanceOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "callBlockNumber",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_i",
                        type: "uint256"
                    }],
                    name: "callBlockhash",
                    outputs: [{
                        internalType: "bytes32",
                        name: "",
                        type: "bytes32"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "callChainId",
                    outputs: [{
                        internalType: "uint256",
                        name: "id",
                        type: "uint256"
                    }],
                    stateMutability: "pure",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_addr",
                        type: "address"
                    }],
                    name: "callCode",
                    outputs: [{
                        internalType: "bytes",
                        name: "code",
                        type: "bytes"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_addr",
                        type: "address"
                    }],
                    name: "callCodeHash",
                    outputs: [{
                        internalType: "bytes32",
                        name: "codeHash",
                        type: "bytes32"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_addr",
                        type: "address"
                    }],
                    name: "callCodeSize",
                    outputs: [{
                        internalType: "uint256",
                        name: "size",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "callCoinbase",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "callDifficulty",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "callGasLeft",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "callGasLimit",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "callGasPrice",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "callOrigin",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "callTimestamp",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "lastSignerUpdate",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "lastWalletUpdate",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            internalType: "bool",
                            name: "delegateCall",
                            type: "bool"
                        }, {
                            internalType: "bool",
                            name: "revertOnError",
                            type: "bool"
                        }, {
                            internalType: "uint256",
                            name: "gasLimit",
                            type: "uint256"
                        }, {
                            internalType: "address",
                            name: "target",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "value",
                            type: "uint256"
                        }, {
                            internalType: "bytes",
                            name: "data",
                            type: "bytes"
                        }],
                        internalType: "struct IModuleCalls.Transaction[]",
                        name: "_txs",
                        type: "tuple[]"
                    }],
                    name: "multiCall",
                    outputs: [{
                        internalType: "bool[]",
                        name: "_successes",
                        type: "bool[]"
                    }, {
                        internalType: "bytes[]",
                        name: "_results",
                        type: "bytes[]"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_wallet",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "_threshold",
                        type: "uint256"
                    }, {
                        components: [{
                            internalType: "uint256",
                            name: "weight",
                            type: "uint256"
                        }, {
                            internalType: "address",
                            name: "signer",
                            type: "address"
                        }],
                        internalType: "struct RequireUtils.Member[]",
                        name: "_members",
                        type: "tuple[]"
                    }, {
                        internalType: "bool",
                        name: "_index",
                        type: "bool"
                    }],
                    name: "publishConfig",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_wallet",
                        type: "address"
                    }, {
                        internalType: "bytes32",
                        name: "_hash",
                        type: "bytes32"
                    }, {
                        internalType: "uint256",
                        name: "_sizeMembers",
                        type: "uint256"
                    }, {
                        internalType: "bytes",
                        name: "_signature",
                        type: "bytes"
                    }, {
                        internalType: "bool",
                        name: "_index",
                        type: "bool"
                    }],
                    name: "publishInitialSigners",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_wallet",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "_nonce",
                        type: "uint256"
                    }],
                    name: "requireMinNonce",
                    outputs: [],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_expiration",
                        type: "uint256"
                    }],
                    name: "requireNonExpired",
                    outputs: [],
                    stateMutability: "view",
                    type: "function"
                }];
            class a {
                static createInterface() {
                    return new n.utils.Interface(i)
                }
                static connect(e, t) {
                    return new n.Contract(e, i, t)
                }
            }
            t.Multicall__factory = a, a.abi = i
        },
        10272: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Multicall__factory = t.GelatoLimitOrders__factory = t.ERC20OrderRouter__factory = t.ERC20__factory = void 0;
            var n = r(87461);
            Object.defineProperty(t, "ERC20__factory", {
                enumerable: !0,
                get: function() {
                    return n.ERC20__factory
                }
            });
            var i = r(10538);
            Object.defineProperty(t, "ERC20OrderRouter__factory", {
                enumerable: !0,
                get: function() {
                    return i.ERC20OrderRouter__factory
                }
            });
            var a = r(57389);
            Object.defineProperty(t, "GelatoLimitOrders__factory", {
                enumerable: !0,
                get: function() {
                    return a.GelatoLimitOrders__factory
                }
            });
            var o = r(70124);
            Object.defineProperty(t, "Multicall__factory", {
                enumerable: !0,
                get: function() {
                    return o.Multicall__factory
                }
            })
        },
        25298: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.constants = t.utils = t.isEthereumChain = t.GelatoStopLimitOrders = t.isValidChainIdAndHandler = t.GelatoLimitOrders = void 0;
            let n = r(64062);
            var i = r(94981);
            Object.defineProperty(t, "GelatoLimitOrders", {
                enumerable: !0,
                get: function() {
                    return i.GelatoLimitOrders
                }
            }), Object.defineProperty(t, "isValidChainIdAndHandler", {
                enumerable: !0,
                get: function() {
                    return i.isValidChainIdAndHandler
                }
            });
            var a = r(58444);
            Object.defineProperty(t, "GelatoStopLimitOrders", {
                enumerable: !0,
                get: function() {
                    return a.GelatoStopLimitOrders
                }
            });
            var o = r(7385);
            Object.defineProperty(t, "isEthereumChain", {
                enumerable: !0,
                get: function() {
                    return o.isEthereumChain
                }
            }), (0, n.__exportStar)(r(77448), t), t.utils = (0, n.__importStar)(r(7385)), t.constants = (0, n.__importStar)(r(34083))
        },
        94981: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GelatoLimitOrders = t.isFlashbotsCompatibleChainId = t.isValidChainIdAndHandler = void 0;
            let n = r(64062),
                i = r(49569),
                a = r(480),
                o = r(62563),
                s = r(34083),
                d = r(10272),
                u = r(69239),
                l = r(7385),
                _ = (e, t) => s.NETWORK_HANDLERS[e].includes(t);
            t.isValidChainIdAndHandler = _, t.isFlashbotsCompatibleChainId = e => e == s.CHAIN_ID.MAINNET || e == s.CHAIN_ID.GOERLI, t.GelatoLimitOrders = class {
                constructor(e, r, n, u = !1) {
                    var l;
                    if (n && !(0, t.isValidChainIdAndHandler)(e, n)) throw Error("Invalid chainId and handler");
                    if (u && (n || !(0, t.isFlashbotsCompatibleChainId)(e))) throw Error("Invalid chainId or handler for Flashbots bundle submission. handler must be undefined, and chainId either 1 (mainnet) or 5 (goerli)");
                    this._chainId = e, this._gelatoFeeBPS = s.BPS_GELATO_FEE[e], this._slippageBPS = s.LIMIT_ORDER_SLIPPAGE[e], this._subgraphUrl = s.SUBGRAPH_URL[e], this._signer = o.Signer.isSigner(r) ? r : void 0, this._provider = a.Provider.isProvider(r) ? r : o.Signer.isSigner(r) ? r.provider : void 0, this._gelatoLimitOrders = this._signer ? d.GelatoLimitOrders__factory.connect(s.GELATO_LIMIT_ORDERS_ADDRESS[this._chainId], this._signer) : this._provider ? d.GelatoLimitOrders__factory.connect(s.GELATO_LIMIT_ORDERS_ADDRESS[this._chainId], this._provider) : new i.Contract(s.GELATO_LIMIT_ORDERS_ADDRESS[this._chainId], d.GelatoLimitOrders__factory.createInterface()), this._moduleAddress = u ? s.GELATO_LIMIT_ORDERS_MODULE_FLASHBOTS_ADDRESS[this._chainId] : s.GELATO_LIMIT_ORDERS_MODULE_ADDRESS[this._chainId], this._handler = n, this._handlerAddress = n ? null === (l = s.HANDLERS_ADDRESSES[this._chainId][n]) || void 0 === l ? void 0 : l.toLowerCase() : void 0, this._isFlashbotsProtected = u, this._abiEncoder = new i.utils.AbiCoder, this._erc20OrderRouter = this._signer ? d.ERC20OrderRouter__factory.connect(s.GELATO_LIMIT_ORDERS_ERC20_ORDER_ROUTER[this._chainId], this._signer) : this._provider ? d.ERC20OrderRouter__factory.connect(s.GELATO_LIMIT_ORDERS_ERC20_ORDER_ROUTER[this._chainId], this._provider) : new i.Contract(s.GELATO_LIMIT_ORDERS_ERC20_ORDER_ROUTER[this._chainId], d.ERC20OrderRouter__factory.createInterface())
                }
                get gelatoFeeBPS() {
                    return this._gelatoFeeBPS
                }
                get slippageBPS() {
                    return this._slippageBPS
                }
                get chainId() {
                    return this._chainId
                }
                get signer() {
                    return this._signer
                }
                get provider() {
                    return this._provider
                }
                get subgraphUrl() {
                    return this._subgraphUrl
                }
                get handler() {
                    return this._handler
                }
                get handlerAddress() {
                    return this._handlerAddress
                }
                get moduleAddress() {
                    return this._moduleAddress
                }
                get contract() {
                    return this._gelatoLimitOrders
                }
                get erc20OrderRouter() {
                    return this._erc20OrderRouter
                }
                get isFlashbotsProtected() {
                    return this._isFlashbotsProtected
                }
                encodeLimitOrderSubmission(e, t, r, i, a, o = !0) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        let {
                            payload: n
                        } = yield this.encodeLimitOrderSubmissionWithSecret(e, t, r, i, a, o);
                        return n
                    })
                }
                encodeLimitOrderSubmissionWithSecret(e, t, r, a, o, s = !0) {
                    var d;
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        let n = i.utils.hexlify(i.utils.randomBytes(19)).replace("0x", ""),
                            u = `0x67656c61746f6e6574776f726b${n}`,
                            {
                                privateKey: l,
                                address: _
                            } = new i.Wallet(u),
                            {
                                minReturn: p
                            } = this.getFeeAndSlippageAdjustedMinReturn(a),
                            c = yield this._encodeSubmitData(e, t, o, _, r, p, l, s), y = this._handlerAddress ? this._abiEncoder.encode(["address", "uint256", "address"], [t, p, this._handlerAddress]) : this._abiEncoder.encode(["address", "uint256"], [t, p]);
                        return {
                            payload: c,
                            secret: l,
                            witness: _,
                            order: {
                                id: this._getKey({
                                    module: this._moduleAddress,
                                    inputToken: e,
                                    owner: o,
                                    witness: _,
                                    data: y
                                }),
                                module: this._moduleAddress.toLowerCase(),
                                data: y,
                                inputToken: e.toLowerCase(),
                                outputToken: t.toLowerCase(),
                                owner: o.toLowerCase(),
                                witness: _.toLowerCase(),
                                inputAmount: r.toString(),
                                minReturn: p.toString(),
                                adjustedMinReturn: a.toString(),
                                inputData: c.data.toString(),
                                secret: l.toLowerCase(),
                                handler: null !== (d = this._handlerAddress) && void 0 !== d ? d : null
                            }
                        }
                    })
                }
                submitLimitOrder(e, t, r, a, o = !0, s) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        if (!this._signer) throw Error("No signer");
                        let n = yield this._signer.getAddress(), d = yield this.encodeLimitOrderSubmission(e, t, r, a, n, o);
                        return this._signer.sendTransaction(Object.assign(Object.assign({}, s), {
                            to: d.to,
                            data: d.data,
                            value: i.BigNumber.from(d.value)
                        }))
                    })
                }
                encodeLimitOrderCancellation(e, t) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        if (!this._gelatoLimitOrders) throw Error("No gelato limit orders contract");
                        if (!e.inputToken) throw Error("No input token in order");
                        if (!e.witness) throw Error("No witness in order");
                        if (!e.outputToken) throw Error("No output token in order");
                        if (!e.minReturn) throw Error("No minReturn in order");
                        if (!e.owner) throw Error("No owner");
                        if (!e.module) throw Error("No module in order");
                        if (t) {
                            let t = yield this.isActiveOrder(e);
                            if (!t) throw Error("Order not found. Please review your order data.")
                        }
                        let r = this._gelatoLimitOrders.interface.encodeFunctionData("cancelOrder", [e.module, e.inputToken, e.owner, e.witness, e.data]);
                        return {
                            data: r,
                            to: this._gelatoLimitOrders.address,
                            value: i.constants.Zero
                        }
                    })
                }
                cancelLimitOrder(e, t, r) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        if (!this._signer) throw Error("No signer");
                        if (!this._gelatoLimitOrders) throw Error("No gelato limit orders contract");
                        let n = e;
                        if (e.id) try {
                            let t = yield Promise.race([this.getOrder(e.id), new Promise(e => setTimeout(e, 5e3)).then(() => {
                                throw Error("Timeout")
                            })]);
                            if (t) {
                                if ("cancelled" === t.status) throw Error(`Order status is not open. Current order status: ${t.status}. Cancellation transaction hash: ${t.cancelledTxHash}`);
                                if ("executed" === t.status) throw Error(`Order status is not open. Current order status: ${t.status}. Execution transaction hash: ${t.executedTxHash}`);
                                n = Object.assign(Object.assign({}, e), t)
                            }
                        } catch (e) {}
                        if (!n.inputToken) throw Error("No input token in order");
                        if (!n.witness) throw Error("No witness in order");
                        if (!n.outputToken) throw Error("No output token in order");
                        if (!n.minReturn) throw Error("No minReturn in order");
                        if (!n.data) throw Error("No data in order");
                        if (!n.module) throw Error("No module in order");
                        if (t) {
                            let e = yield this.isActiveOrder(n);
                            if (!e) throw Error("Order not found. Please review your order data.")
                        }
                        let i = yield this._signer.getAddress();
                        if (i.toLowerCase() !== e.owner.toLowerCase()) throw Error("Owner and signer mismatch");
                        return this._gelatoLimitOrders.cancelOrder(n.module, n.inputToken, n.owner, n.witness, n.data, null != r ? r : {
                            gasLimit: (0, l.isEthereumChain)(this._chainId) ? 6e5 : 2e6
                        })
                    })
                }
                approveTokenAmount(e, t, r) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        if (!this._signer) throw Error("No signer");
                        return r ? d.ERC20__factory.connect(e, this._signer).approve(this._erc20OrderRouter.address, t, r) : d.ERC20__factory.connect(e, this._signer).approve(this._erc20OrderRouter.address, t)
                    })
                }
                isActiveOrder(e) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        if (!this._provider) throw Error("No provider");
                        if (!this._gelatoLimitOrders) throw Error("No gelato limit orders contract");
                        if (!e.module) throw Error("No module in order");
                        if (!e.inputToken) throw Error("No input token in order");
                        if (!e.owner) throw Error("No owner in order");
                        if (!e.witness) throw Error("No witness in order");
                        if (!e.data) throw Error("No data in order");
                        return this._gelatoLimitOrders.existOrder(e.module, e.inputToken, e.owner, e.witness, e.data)
                    })
                }
                getExchangeRate(e, t, r, n, a = !1) {
                    let o = i.BigNumber.from(10).pow(i.BigNumber.from(18));
                    return a ? i.BigNumber.from(e).mul(o).div(r).mul(i.BigNumber.from(10).pow(i.BigNumber.from(n))).div(i.BigNumber.from(10).pow(i.BigNumber.from(t))).toString() : i.BigNumber.from(r).mul(o).div(e).mul(i.BigNumber.from(10).pow(i.BigNumber.from(t))).div(i.BigNumber.from(10).pow(i.BigNumber.from(n))).toString()
                }
                getFeeAndSlippageAdjustedMinReturn(e, t) {
                    if (t && !Number.isInteger(t)) throw Error("Extra Slippage BPS must an unsigned integer");
                    let r = i.BigNumber.from(e).mul(this._gelatoFeeBPS).div(1e4).gte(1) ? i.BigNumber.from(e).mul(this._gelatoFeeBPS).div(1e4) : i.BigNumber.from(1),
                        n = t ? this._slippageBPS + t : this._slippageBPS,
                        a = i.BigNumber.from(e).mul(n).div(1e4),
                        o = i.BigNumber.from(e).sub(r).sub(a);
                    return {
                        minReturn: o.toString(),
                        slippage: a.toString(),
                        gelatoFee: r.toString()
                    }
                }
                getAdjustedMinReturn(e, t) {
                    let r = i.BigNumber.from(this._gelatoFeeBPS),
                        n = t ? i.BigNumber.from(this._slippageBPS + t) : i.BigNumber.from(this._slippageBPS),
                        a = r.add(n),
                        o = i.BigNumber.from(e).mul(1e4).div(i.BigNumber.from(1e4).sub(a));
                    return o.toString()
                }
                getExecutionPrice(e, t, r, n, a = !1) {
                    let o = i.BigNumber.from(10).pow(i.BigNumber.from(a ? n : t));
                    return a ? i.BigNumber.from(e).mul(o).div(r).toString() : i.BigNumber.from(r).mul(o).div(e).toString()
                }
                getOrder(e) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        let t = yield(0, u.queryOrder)(e, this._chainId);
                        return t ? Object.assign(Object.assign({}, t), {
                            adjustedMinReturn: this.getAdjustedMinReturn(t.minReturn)
                        }) : null
                    })
                }
                getOrders(e, t = !1) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        let r = yield(0, u.queryOrders)(e, this._chainId);
                        return r.map(e => Object.assign(Object.assign({}, e), {
                            adjustedMinReturn: this.getAdjustedMinReturn(e.minReturn)
                        })).filter(e => this._handler && !e.handler ? !!t : !this._handler || e.handler === this._handlerAddress)
                    })
                }
                getOpenOrders(e, t = !1) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        let r = yield(0, u.queryOpenOrders)(e, this._chainId);
                        return r.map(e => Object.assign(Object.assign({}, e), {
                            adjustedMinReturn: this.getAdjustedMinReturn(e.minReturn)
                        })).filter(e => this._handler && !e.handler ? !!t : !this._handler || e.handler === this._handlerAddress)
                    })
                }
                getPastOrders(e, t = !1) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        let r = yield(0, u.queryPastOrders)(e, this._chainId);
                        return r.map(e => Object.assign(Object.assign({}, e), {
                            adjustedMinReturn: this.getAdjustedMinReturn(e.minReturn)
                        })).filter(e => this._handler && !e.handler ? !!t : !this._handler || e.handler === this._handlerAddress)
                    })
                }
                getExecutedOrders(e, t = !1) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        let r = yield(0, u.queryExecutedOrders)(e, this._chainId);
                        return r.map(e => Object.assign(Object.assign({}, e), {
                            adjustedMinReturn: this.getAdjustedMinReturn(e.minReturn)
                        })).filter(e => this._handler && !e.handler ? !!t : !this._handler || e.handler === this._handlerAddress)
                    })
                }
                getCancelledOrders(e, t = !1) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        let r = yield(0, u.queryCancelledOrders)(e, this._chainId);
                        return r.map(e => Object.assign(Object.assign({}, e), {
                            adjustedMinReturn: this.getAdjustedMinReturn(e.minReturn)
                        })).filter(e => this._handler && !e.handler ? !!t : !this._handler || e.handler === this._handlerAddress)
                    })
                }
                _getKey(e) {
                    return i.utils.keccak256(this._abiEncoder.encode(["address", "address", "address", "address", "bytes"], [e.module, e.inputToken, e.owner, e.witness, e.data]))
                }
                _encodeSubmitData(e, t, r, a, o, u, _, p) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        let n, c, y;
                        if (!this._provider) throw Error("No provider");
                        if (e.toLowerCase() === t.toLowerCase()) throw Error("Input token and output token can not be equal");
                        let m = this._handlerAddress ? this._abiEncoder.encode(["address", "uint256", "address"], [t, u, this._handlerAddress]) : this._abiEncoder.encode(["address", "uint256"], [t, u]);
                        if ((0, l.isNetworkGasToken)(e)) {
                            let e = yield this._gelatoLimitOrders.encodeEthOrder(this._moduleAddress, s.ETH_ADDRESS, r, a, m, _);
                            n = this._gelatoLimitOrders.interface.encodeFunctionData("depositEth", [e]), c = o, y = this._gelatoLimitOrders.address
                        } else {
                            if (p) {
                                let t = yield d.ERC20__factory.connect(e, this._provider).allowance(r, this._erc20OrderRouter.address);
                                if (t.lt(o)) throw Error("Insufficient token allowance for placing order")
                            }
                            n = this._erc20OrderRouter.interface.encodeFunctionData("depositToken", [o, this._moduleAddress, e, r, a, m, _]), c = i.constants.Zero, y = this._erc20OrderRouter.address
                        }
                        return {
                            data: n,
                            value: c,
                            to: y
                        }
                    })
                }
            }
        },
        39876: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GelatoBase = t.isETHOrWETH = t.isFlashbotsCompatibleChainId = t.isValidChainIdAndHandler = void 0;
            let n = r(64062),
                i = r(49569),
                a = r(480),
                o = r(62563),
                s = r(34083),
                d = r(10272),
                u = r(7385),
                l = (e, t) => s.NETWORK_HANDLERS[e].includes(t);
            t.isValidChainIdAndHandler = l, t.isFlashbotsCompatibleChainId = e => e == s.CHAIN_ID.MAINNET || e == s.CHAIN_ID.GOERLI;
            let _ = (e, t) => {
                let r = s.NATIVE_WRAPPED_TOKEN_ADDRESS[t];
                return e.toLowerCase() === s.ETH_ADDRESS.toLowerCase() || e.toLowerCase() === r.toLowerCase()
            };
            t.isETHOrWETH = _, t.GelatoBase = class {
                constructor(e, r, n, l, _) {
                    if (l && !(0, t.isValidChainIdAndHandler)(e, l)) throw Error("Invalid chainId and handler");
                    this._chainId = e, this._gelatoFeeBPS = (0, u.isEthereumChain)(e) ? 0 : s.BPS_GELATO_FEE[e], this._slippageBPS = s.STOP_LIMIT_SLIPPAGE_BPS[e], this._subgraphUrl = s.SUBGRAPH_URL[e], this._signer = o.Signer.isSigner(n) ? n : void 0, this._provider = a.Provider.isProvider(n) ? n : o.Signer.isSigner(n) ? n.provider : void 0, this._gelatoCore = this._signer ? d.GelatoLimitOrders__factory.connect(s.GELATO_LIMIT_ORDERS_ADDRESS[this._chainId], this._signer) : this._provider ? d.GelatoLimitOrders__factory.connect(s.GELATO_LIMIT_ORDERS_ADDRESS[this._chainId], this._provider) : new i.Contract(s.GELATO_LIMIT_ORDERS_ADDRESS[this._chainId], d.GelatoLimitOrders__factory.createInterface()), this._abiEncoder = new i.utils.AbiCoder, this._erc20OrderRouter = this._signer ? d.ERC20OrderRouter__factory.connect(s.GELATO_LIMIT_ORDERS_ERC20_ORDER_ROUTER[this._chainId], this._signer) : this._provider ? d.ERC20OrderRouter__factory.connect(s.GELATO_LIMIT_ORDERS_ERC20_ORDER_ROUTER[this._chainId], this._provider) : new i.Contract(s.GELATO_LIMIT_ORDERS_ERC20_ORDER_ROUTER[this._chainId], d.ERC20OrderRouter__factory.createInterface()), this._handler = l, this._handlerAddress = _, this._moduleAddress = r
                }
                get gelatoFeeBPS() {
                    return this._gelatoFeeBPS
                }
                get slippageBPS() {
                    return this._slippageBPS
                }
                get chainId() {
                    return this._chainId
                }
                get signer() {
                    return this._signer
                }
                get provider() {
                    return this._provider
                }
                get subgraphUrl() {
                    return this._subgraphUrl
                }
                get handler() {
                    return this._handler
                }
                get handlerAddress() {
                    return this._handlerAddress
                }
                get moduleAddress() {
                    return this._moduleAddress
                }
                get contract() {
                    return this._gelatoCore
                }
                get erc20OrderRouter() {
                    return this._erc20OrderRouter
                }
                get abiEncoder() {
                    return this._abiEncoder
                }
                encodeLimitOrderCancellation(e, t) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        if (!this._gelatoCore) throw Error("No gelato limit orders contract");
                        if (!e.inputToken) throw Error("No input token in order");
                        if (!e.witness) throw Error("No witness in order");
                        if (!e.outputToken) throw Error("No output token in order");
                        if (!e.minReturn) throw Error("No minReturn in order");
                        if (!e.owner) throw Error("No owner");
                        if (t) {
                            let t = yield this.isActiveOrder(e);
                            if (!t) throw Error("Order not found. Please review your order data.")
                        }
                        let r = this._gelatoCore.interface.encodeFunctionData("cancelOrder", [this._moduleAddress, e.inputToken, e.owner, e.witness, e.data]);
                        return {
                            data: r,
                            to: this._gelatoCore.address,
                            value: i.constants.Zero
                        }
                    })
                }
                cancelStopLimitOrder(e, t, r) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        if (!this._signer) throw Error("No signer");
                        if (!this._gelatoCore) throw Error("No gelato limit orders contract");
                        if (!e.inputToken) throw Error("No input token in order");
                        if (!e.witness) throw Error("No witness in order");
                        if (!e.outputToken) throw Error("No output token in order");
                        if (!e.minReturn) throw Error("No minReturn in order");
                        if (!e.data) throw Error("No data in order");
                        if (t) {
                            let t = yield this.isActiveOrder(e);
                            if (!t) throw Error("Order not found. Please review your order data.")
                        }
                        let n = yield this._signer.getAddress();
                        if (n.toLowerCase() !== e.owner.toLowerCase()) throw Error("Owner and signer mismatch");
                        return this._gelatoCore.cancelOrder(this._moduleAddress, e.inputToken, e.owner, e.witness, e.data, null != r ? r : {
                            gasLimit: (0, u.isEthereumChain)(this._chainId) ? 5e5 : 15e5
                        })
                    })
                }
                approveTokenAmount(e, t, r) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        if (!this._signer) throw Error("No signer");
                        return r ? d.ERC20__factory.connect(e, this._signer).approve(this._erc20OrderRouter.address, t, r) : d.ERC20__factory.connect(e, this._signer).approve(this._erc20OrderRouter.address, t)
                    })
                }
                isActiveOrder(e) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        if (!this._provider) throw Error("No provider");
                        if (!this._gelatoCore) throw Error("No gelato limit orders contract");
                        if (!e.module) throw Error("No module in order");
                        if (!e.inputToken) throw Error("No input token in order");
                        if (!e.owner) throw Error("No owner in order");
                        if (!e.witness) throw Error("No witness in order");
                        if (!e.data) throw Error("No data in order");
                        return this._gelatoCore.existOrder(e.module, e.inputToken, e.owner, e.witness, e.data)
                    })
                }
                getExchangeRate(e, t, r, n, a = !1) {
                    let o = i.BigNumber.from(10).pow(i.BigNumber.from(18));
                    return a ? i.BigNumber.from(e).mul(o).div(r).mul(i.BigNumber.from(10).pow(i.BigNumber.from(n))).div(i.BigNumber.from(10).pow(i.BigNumber.from(t))).toString() : i.BigNumber.from(r).mul(o).div(e).mul(i.BigNumber.from(10).pow(i.BigNumber.from(t))).div(i.BigNumber.from(10).pow(i.BigNumber.from(n))).toString()
                }
                getFeeAndSlippageAdjustedMinReturn(e, t) {
                    if (t && !Number.isInteger(t)) throw Error("Extra Slippage BPS must an unsigned integer");
                    let r = (0, u.isEthereumChain)(this._chainId) ? 0 : i.BigNumber.from(e).mul(this._gelatoFeeBPS).div(1e4).gte(1) ? i.BigNumber.from(e).mul(this._gelatoFeeBPS).div(1e4) : i.BigNumber.from(1),
                        n = t || this._slippageBPS,
                        a = i.BigNumber.from(e).mul(n).div(1e4),
                        o = i.BigNumber.from(e).sub(r).sub(a);
                    return {
                        minReturn: o.toString(),
                        slippage: a.toString(),
                        gelatoFee: r.toString()
                    }
                }
                getAdjustedMinReturn(e, t) {
                    if ((0, u.isEthereumChain)(this._chainId)) throw Error("Method not available for current chain.");
                    let r = i.BigNumber.from(this._gelatoFeeBPS),
                        n = t ? i.BigNumber.from(t) : i.BigNumber.from(this._slippageBPS),
                        a = r.add(n),
                        o = i.BigNumber.from(e).mul(1e4).div(i.BigNumber.from(1e4).sub(a));
                    return o.toString()
                }
                getExecutionPrice(e, t, r, n, a = !1) {
                    let o = i.BigNumber.from(10).pow(i.BigNumber.from(a ? n : t));
                    return a ? i.BigNumber.from(e).mul(o).div(r).toString() : i.BigNumber.from(r).mul(o).div(e).toString()
                }
                _getKey(e) {
                    return i.utils.keccak256(this._abiEncoder.encode(["address", "address", "address", "address", "bytes"], [e.module, e.inputToken, e.owner, e.witness, e.data]))
                }
                _encodeSubmitData(e, t, r, a, o, l, _, p, c) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        let n, y, m;
                        if (!this.provider) throw Error("No provider");
                        if (!this.handlerAddress) throw Error("No handlerAddress");
                        if (e.toLowerCase() === t.toLowerCase()) throw Error("Input token and output token can not be equal");
                        let h = this.abiEncoder.encode(["address", "uint256", "address", "uint256"], [t, _, this.handlerAddress, l]);
                        if ((0, u.isNetworkGasToken)(e)) {
                            let e = yield this.contract.encodeEthOrder(this.moduleAddress, s.ETH_ADDRESS, r, a, h, p);
                            n = this.contract.interface.encodeFunctionData("depositEth", [e]), y = o, m = this.contract.address
                        } else {
                            if (c) {
                                let t = yield d.ERC20__factory.connect(e, this.provider).allowance(r, this.erc20OrderRouter.address);
                                if (t.lt(o)) throw Error("Insufficient token allowance for placing order")
                            }
                            n = this.erc20OrderRouter.interface.encodeFunctionData("depositToken", [o, this.moduleAddress, e, r, a, h, p]), y = i.constants.Zero, m = this.erc20OrderRouter.address
                        }
                        return {
                            data: n,
                            value: y,
                            to: m
                        }
                    })
                }
            }
        },
        58444: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GelatoStopLimitOrders = void 0;
            let n = r(64062),
                i = r(49569),
                a = r(34083),
                o = r(39876),
                s = r(89502);
            class d extends o.GelatoBase {
                constructor(e, t, r) {
                    var n;
                    if (r && !(0, o.isValidChainIdAndHandler)(e, r)) throw Error("Invalid chainId and handler");
                    let i = a.NETWORK_STOP_LIMIT_HANDLERS[e];
                    if (!r) throw Error("No Handler defined");
                    if (r && !i.includes(r)) throw Error("Handler not supported");
                    let s = a.GELATO_STOP_LIMIT_ORDERS_MODULE_ADDRESS[e];
                    if (!s) throw Error("Invalid chainId and handler");
                    let d = null === (n = a.HANDLERS_ADDRESSES[e][r]) || void 0 === n ? void 0 : n.toLowerCase();
                    super(e, s, t, r, d)
                }
                submitStopLimitOrder(e, t, r, a, o = !0, s) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        if (!this.signer) throw Error("No signer");
                        if (!a) throw Error("No StopLimit defined");
                        let n = yield this.signer.getAddress(), d = yield this.encodeStopLimitOrderSubmission(e, t, r, a, n, o);
                        return this.signer.sendTransaction(Object.assign(Object.assign({}, s), {
                            to: d.to,
                            data: d.data,
                            value: i.BigNumber.from(d.value)
                        }))
                    })
                }
                encodeStopLimitOrderSubmission(e, t, r, i, a, o = !0) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        let {
                            payload: n
                        } = yield this.encodeStopLimitOrderSubmissionWithSecret(e, t, r, i, a, o);
                        return n
                    })
                }
                encodeStopLimitOrderSubmissionWithSecret(e, t, r, a, o, s = !0) {
                    var d;
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        if (!a) throw Error("No StopLimit defined");
                        if (!this.handlerAddress) throw Error("No handlerAddress");
                        let n = i.utils.hexlify(i.utils.randomBytes(19)).replace("0x", ""),
                            u = `0x67656c61746f6e6574776f726b${n}`,
                            {
                                privateKey: l,
                                address: _
                            } = new i.Wallet(u),
                            {
                                minReturn: p
                            } = this.getFeeAndSlippageAdjustedMinReturn(a),
                            c = yield this._encodeSubmitData(e, t, o, _, r, a, p, l, s), y = this.abiEncoder.encode(["address", "uint256", "address", "uint256"], [t, p, this.handlerAddress, a]);
                        return {
                            payload: c,
                            secret: l,
                            witness: _,
                            order: {
                                id: this._getKey({
                                    module: this.moduleAddress,
                                    inputToken: e,
                                    owner: o,
                                    witness: _,
                                    data: y
                                }),
                                module: this.moduleAddress.toLowerCase(),
                                data: y,
                                inputToken: e.toLowerCase(),
                                outputToken: t.toLowerCase(),
                                owner: o.toLowerCase(),
                                witness: _.toLowerCase(),
                                inputAmount: r.toString(),
                                minReturn: p.toString(),
                                maxReturn: a.toString(),
                                adjustedMinReturn: a.toString(),
                                inputData: c.data.toString(),
                                secret: l.toLowerCase(),
                                handler: null !== (d = this.handlerAddress) && void 0 !== d ? d : null
                            }
                        }
                    })
                }
                getOpenStopLimitOrders(e) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        let t = yield(0, s.queryStopLimitOrders)(e, this.chainId);
                        return t
                    })
                }
                getStopLimitOrders(e) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        let t = yield(0, s.queryStopLimitOrders)(e, this.chainId);
                        return t
                    })
                }
                getExecutedStopLimitOrders(e) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        let t = yield(0, s.queryStopLimitExecutedOrders)(e, this.chainId);
                        return t
                    })
                }
                getCancelledStopLimitOrders(e) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        let t = yield(0, s.queryStopLimitCancelledOrders)(e, this.chainId);
                        return t
                    })
                }
                getPastStopLimitOrders(e) {
                    return (0, n.__awaiter)(this, void 0, void 0, function*() {
                        let t = yield(0, s.queryPastOrders)(e, this.chainId);
                        return t
                    })
                }
            }
            t.GelatoStopLimitOrders = d
        },
        77448: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        7385: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isEthereumChain = t.isTransactionCostDependentChain = t.isNetworkGasToken = t.queries = void 0;
            let n = r(64062),
                i = r(34083);
            t.queries = (0, n.__importStar)(r(48363));
            let a = e => e.toLowerCase() === i.ETH_ADDRESS.toLowerCase();
            t.isNetworkGasToken = a;
            let o = e => {
                switch (e) {
                    case 1:
                    case 3:
                    case 5:
                    case 56:
                    case 250:
                    case 43114:
                        return !0;
                    default:
                        return !1
                }
            };
            t.isTransactionCostDependentChain = o;
            let s = e => {
                switch (e) {
                    case 1:
                    case 3:
                    case 5:
                        return !0;
                    default:
                        return !1
                }
            };
            t.isEthereumChain = s
        },
        48363: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GET_ALL_STOP_LIMIT_ORDERS_BY_OWNER = t.GET_ALL_CANCELLED_ORDERS_BY_OWNER = t.GET_ALL_EXECUTED_ORDERS_BY_OWNER = t.GET_ALL_PAST_ORDERS_BY_OWNER = t.GET_ALL_OPEN_ORDERS_BY_OWNER = t.GET_ALL_ORDERS_BY_OWNER = t.GET_ORDER_BY_ID = void 0;
            let n = r(14322);
            t.GET_ORDER_BY_ID = (0, n.gql)
            `
  query getOrdersByOwner($id: String) {
    orders(where: { id: $id }) {
      id
      owner
      inputToken
      outputToken
      minReturn
      module
      witness
      secret
      inputAmount
      vault
      bought
      auxData
      status
      createdTxHash
      executedTxHash
      cancelledTxHash
      blockNumber
      createdAt
      updatedAt
      updatedAtBlock
      updatedAtBlockHash
      data
      inputData
      handler
    }
  }
`, t.GET_ALL_ORDERS_BY_OWNER = (0, n.gql)
            `
  query getOrdersByOwner($owner: String) {
    orders(
      first: 1000
      orderBy: updatedAtBlock
      orderDirection: desc
      where: { owner: $owner }
    ) {
      id
      owner
      inputToken
      outputToken
      minReturn
      module
      witness
      secret
      inputAmount
      vault
      bought
      auxData
      status
      createdTxHash
      executedTxHash
      cancelledTxHash
      blockNumber
      createdAt
      updatedAt
      updatedAtBlock
      updatedAtBlockHash
      data
      inputData
      handler
    }
  }
`, t.GET_ALL_OPEN_ORDERS_BY_OWNER = (0, n.gql)
            `
  query getOpenOrdersByOwner($owner: String) {
    orders(
      first: 1000
      orderBy: updatedAtBlock
      orderDirection: desc
      where: { owner: $owner, status: open }
    ) {
      id
      owner
      inputToken
      outputToken
      minReturn
      module
      witness
      secret
      inputAmount
      vault
      bought
      auxData
      status
      createdTxHash
      executedTxHash
      cancelledTxHash
      blockNumber
      createdAt
      updatedAt
      updatedAtBlock
      updatedAtBlockHash
      data
      inputData
      handler
    }
  }
`, t.GET_ALL_PAST_ORDERS_BY_OWNER = (0, n.gql)
            `
  query getPastOrdersByOwner($owner: String) {
    orders(
      first: 1000
      orderBy: updatedAtBlock
      orderDirection: desc
      where: { owner: $owner, status_not: open }
    ) {
      id
      owner
      inputToken
      outputToken
      minReturn
      module
      witness
      secret
      inputAmount
      vault
      bought
      auxData
      status
      createdTxHash
      executedTxHash
      cancelledTxHash
      blockNumber
      createdAt
      updatedAt
      updatedAtBlock
      updatedAtBlockHash
      data
      inputData
      handler
    }
  }
`, t.GET_ALL_EXECUTED_ORDERS_BY_OWNER = (0, n.gql)
            `
  query getExecutedOrdersByOwner($owner: String) {
    orders(
      first: 1000
      orderBy: updatedAtBlock
      orderDirection: desc
      where: { owner: $owner, status: executed }
    ) {
      id
      owner
      inputToken
      outputToken
      minReturn
      module
      witness
      secret
      inputAmount
      vault
      bought
      auxData
      status
      createdTxHash
      executedTxHash
      cancelledTxHash
      blockNumber
      createdAt
      updatedAt
      updatedAtBlock
      updatedAtBlockHash
      data
      inputData
      handler
    }
  }
`, t.GET_ALL_CANCELLED_ORDERS_BY_OWNER = (0, n.gql)
            `
  query getCancelledOrdersByOwner($owner: String) {
    orders(
      first: 1000
      orderBy: updatedAtBlock
      orderDirection: desc
      where: { owner: $owner, status: cancelled }
    ) {
      id
      owner
      inputToken
      outputToken
      minReturn
      module
      witness
      secret
      inputAmount
      vault
      bought
      auxData
      status
      createdTxHash
      executedTxHash
      cancelledTxHash
      blockNumber
      createdAt
      updatedAt
      updatedAtBlock
      updatedAtBlockHash
      data
      inputData
      handler
    }
  }
`, t.GET_ALL_STOP_LIMIT_ORDERS_BY_OWNER = (0, n.gql)
            `
  query getOrdersByOwner($owner: String, $module: String) {
    orders(
      first: 1000
      orderBy: updatedAtBlock
      orderDirection: desc
      where: { owner: $owner, module: $module }
    ) {
      id
      owner
      inputToken
      outputToken
      minReturn
      maxReturn
      module
      witness
      secret
      inputAmount
      vault
      bought
      auxData
      status
      createdTxHash
      executedTxHash
      cancelledTxHash
      blockNumber
      createdAt
      updatedAt
      updatedAtBlock
      updatedAtBlockHash
      data
      inputData
      handler
    }
  }
`
        },
        69239: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.queryCancelledOrders = t.queryExecutedOrders = t.queryPastOrders = t.queryOpenOrders = t.queryOrders = t.queryOrder = void 0;
            let n = r(64062),
                i = r(14322),
                a = r(34083),
                o = r(48363),
                s = e => a.GELATO_STOP_LIMIT_ORDERS_MODULE_ADDRESS[e].toLowerCase(),
                d = (e, t) => (0, n.__awaiter)(void 0, void 0, void 0, function*() {
                    var r;
                    try {
                        let n = a.OLD_SUBGRAPH_URL[t] ? yield(0, i.request)(a.OLD_SUBGRAPH_URL[t], o.GET_ORDER_BY_ID, {
                            id: e.toLowerCase()
                        }): {
                            orders: []
                        }, s = a.SUBGRAPH_URL[t] ? yield(0, i.request)(a.SUBGRAPH_URL[t], o.GET_ORDER_BY_ID, {
                            id: e.toLowerCase()
                        }): {
                            orders: []
                        }, d = [...n.orders, ...s.orders];
                        return null !== (r = y(d, t).pop()) && void 0 !== r ? r : null
                    } catch (e) {
                        throw Error("Could not query subgraph for all orders")
                    }
                });
            t.queryOrder = d;
            let u = (e, t) => (0, n.__awaiter)(void 0, void 0, void 0, function*() {
                try {
                    let r = a.OLD_SUBGRAPH_URL[t] ? yield(0, i.request)(a.OLD_SUBGRAPH_URL[t], o.GET_ALL_ORDERS_BY_OWNER, {
                        owner: e.toLowerCase()
                    }): {
                        orders: []
                    }, n = a.SUBGRAPH_URL[t] ? yield(0, i.request)(a.SUBGRAPH_URL[t], o.GET_ALL_ORDERS_BY_OWNER, {
                        owner: e.toLowerCase()
                    }): {
                        orders: []
                    }, s = [...r.orders, ...n.orders];
                    return y(s, t)
                } catch (e) {
                    throw Error("Could not query subgraph for all orders")
                }
            });
            t.queryOrders = u;
            let l = (e, t) => (0, n.__awaiter)(void 0, void 0, void 0, function*() {
                try {
                    let r = a.OLD_SUBGRAPH_URL[t] ? yield(0, i.request)(a.OLD_SUBGRAPH_URL[t], o.GET_ALL_ORDERS_BY_OWNER, {
                        owner: e.toLowerCase()
                    }): {
                        orders: []
                    }, n = a.SUBGRAPH_URL[t] ? yield(0, i.request)(a.SUBGRAPH_URL[t], o.GET_ALL_ORDERS_BY_OWNER, {
                        owner: e.toLowerCase()
                    }): {
                        orders: []
                    }, s = [...r.orders, ...n.orders];
                    return y(s, t).filter(e => "open" === e.status)
                } catch (e) {
                    throw Error("Could not query subgraph for open orders")
                }
            });
            t.queryOpenOrders = l;
            let _ = (e, t) => (0, n.__awaiter)(void 0, void 0, void 0, function*() {
                try {
                    let r = a.OLD_SUBGRAPH_URL[t] ? yield(0, i.request)(a.OLD_SUBGRAPH_URL[t], o.GET_ALL_ORDERS_BY_OWNER, {
                        owner: e.toLowerCase()
                    }): {
                        orders: []
                    }, n = a.SUBGRAPH_URL[t] ? yield(0, i.request)(a.SUBGRAPH_URL[t], o.GET_ALL_ORDERS_BY_OWNER, {
                        owner: e.toLowerCase()
                    }): {
                        orders: []
                    }, s = [...r.orders, ...n.orders];
                    return y(s, t).filter(e => "open" !== e.status)
                } catch (e) {
                    throw Error("Could not query subgraph for past orders")
                }
            });
            t.queryPastOrders = _;
            let p = (e, t) => (0, n.__awaiter)(void 0, void 0, void 0, function*() {
                try {
                    let r = a.OLD_SUBGRAPH_URL[t] ? yield(0, i.request)(a.OLD_SUBGRAPH_URL[t], o.GET_ALL_ORDERS_BY_OWNER, {
                        owner: e.toLowerCase()
                    }): {
                        orders: []
                    }, n = a.SUBGRAPH_URL[t] ? yield(0, i.request)(a.SUBGRAPH_URL[t], o.GET_ALL_ORDERS_BY_OWNER, {
                        owner: e.toLowerCase()
                    }): {
                        orders: []
                    }, s = [...r.orders, ...n.orders];
                    return y(s, t).filter(e => "executed" === e.status)
                } catch (e) {
                    throw Error("Could not query subgraph for executed orders")
                }
            });
            t.queryExecutedOrders = p;
            let c = (e, t) => (0, n.__awaiter)(void 0, void 0, void 0, function*() {
                try {
                    let r = a.OLD_SUBGRAPH_URL[t] ? yield(0, i.request)(a.OLD_SUBGRAPH_URL[t], o.GET_ALL_ORDERS_BY_OWNER, {
                        owner: e.toLowerCase()
                    }): {
                        orders: []
                    }, n = a.SUBGRAPH_URL[t] ? yield(0, i.request)(a.SUBGRAPH_URL[t], o.GET_ALL_ORDERS_BY_OWNER, {
                        owner: e.toLowerCase()
                    }): {
                        orders: []
                    }, s = [...r.orders, ...n.orders];
                    return y(s, t).filter(e => "cancelled" === e.status)
                } catch (e) {
                    throw Error("Could not query subgraph for cancelled orders")
                }
            });
            t.queryCancelledOrders = c;
            let y = (e, t) => [...new Map(e.map(e => [e.id, e])).values()].sort((e, t) => parseFloat(e.updatedAt) - parseFloat(t.updatedAt)).filter(e => e.module !== s(t)).map(e => {
                let t = Date.now() > (parseInt(e.createdAt) + a.MAX_LIFETIME_IN_SECONDS) * 1e3;
                return Object.assign(Object.assign({}, e), {
                    isExpired: t
                })
            })
        },
        89502: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t._getUniqueOrdersWithExpiry = t.queryPastOrders = t.queryStopLimitCancelledOrders = t.queryStopLimitExecutedOrders = t.queryOpenStopLimitOrders = t.queryStopLimitOrders = void 0;
            let n = r(64062),
                i = r(14322),
                a = r(34083),
                o = r(48363),
                s = (e, r) => (0, n.__awaiter)(void 0, void 0, void 0, function*() {
                    try {
                        let n = a.SUBGRAPH_URL[r] ? yield(0, i.request)(a.SUBGRAPH_URL[r], o.GET_ALL_STOP_LIMIT_ORDERS_BY_OWNER, {
                            owner: e.toLowerCase(),
                            module: a.GELATO_STOP_LIMIT_ORDERS_MODULE_ADDRESS[r].toLowerCase()
                        }): {
                            orders: []
                        }, s = n.orders;
                        return (0, t._getUniqueOrdersWithExpiry)(s)
                    } catch (e) {
                        throw console.error(e), Error("Could not query subgraph for all orders")
                    }
                });
            t.queryStopLimitOrders = s;
            let d = (e, r) => (0, n.__awaiter)(void 0, void 0, void 0, function*() {
                try {
                    let n = a.SUBGRAPH_URL[r] ? yield(0, i.request)(a.SUBGRAPH_URL[r], o.GET_ALL_STOP_LIMIT_ORDERS_BY_OWNER, {
                        owner: e.toLowerCase(),
                        module: a.GELATO_STOP_LIMIT_ORDERS_MODULE_ADDRESS[r].toLowerCase()
                    }): {
                        orders: []
                    }, s = n.orders;
                    return (0, t._getUniqueOrdersWithExpiry)(s).filter(e => "open" === e.status)
                } catch (e) {
                    throw Error("Could not query subgraph for open orders")
                }
            });
            t.queryOpenStopLimitOrders = d;
            let u = (e, r) => (0, n.__awaiter)(void 0, void 0, void 0, function*() {
                try {
                    let n = a.SUBGRAPH_URL[r] ? yield(0, i.request)(a.SUBGRAPH_URL[r], o.GET_ALL_STOP_LIMIT_ORDERS_BY_OWNER, {
                        owner: e.toLowerCase(),
                        module: a.GELATO_STOP_LIMIT_ORDERS_MODULE_ADDRESS[r].toLowerCase()
                    }): {
                        orders: []
                    }, s = n.orders;
                    return (0, t._getUniqueOrdersWithExpiry)(s).filter(e => "executed" === e.status)
                } catch (e) {
                    throw Error("Could not query subgraph for executed orders")
                }
            });
            t.queryStopLimitExecutedOrders = u;
            let l = (e, r) => (0, n.__awaiter)(void 0, void 0, void 0, function*() {
                try {
                    let n = a.SUBGRAPH_URL[r] ? yield(0, i.request)(a.SUBGRAPH_URL[r], o.GET_ALL_STOP_LIMIT_ORDERS_BY_OWNER, {
                        owner: e.toLowerCase(),
                        module: a.GELATO_STOP_LIMIT_ORDERS_MODULE_ADDRESS[r].toLowerCase()
                    }): {
                        orders: []
                    }, s = n.orders;
                    return (0, t._getUniqueOrdersWithExpiry)(s).filter(e => "cancelled" === e.status)
                } catch (e) {
                    throw Error("Could not query subgraph for cancelled orders")
                }
            });
            t.queryStopLimitCancelledOrders = l;
            let _ = (e, r) => (0, n.__awaiter)(void 0, void 0, void 0, function*() {
                try {
                    let n = a.SUBGRAPH_URL[r] ? yield(0, i.request)(a.SUBGRAPH_URL[r], o.GET_ALL_STOP_LIMIT_ORDERS_BY_OWNER, {
                        owner: e.toLowerCase(),
                        module: a.GELATO_STOP_LIMIT_ORDERS_MODULE_ADDRESS[r].toLowerCase()
                    }): {
                        orders: []
                    }, s = n.orders;
                    return (0, t._getUniqueOrdersWithExpiry)(s).filter(e => "open" !== e.status)
                } catch (e) {
                    throw Error("Could not query subgraph for past orders")
                }
            });
            t.queryPastOrders = _;
            let p = e => [...new Map(e.map(e => [e.id, e])).values()].sort((e, t) => parseFloat(e.updatedAt) - parseFloat(t.updatedAt)).map(e => {
                let t = Date.now() > (parseInt(e.createdAt) + a.MAX_LIFETIME_IN_SECONDS) * 1e3;
                return Object.assign(Object.assign({}, e), {
                    isExpired: t
                })
            });
            t._getUniqueOrdersWithExpiry = p
        },
        64062: function(e, t, r) {
            r.r(t), r.d(t, {
                __assign: function() {
                    return a
                },
                __asyncDelegator: function() {
                    return T
                },
                __asyncGenerator: function() {
                    return A
                },
                __asyncValues: function() {
                    return O
                },
                __await: function() {
                    return b
                },
                __awaiter: function() {
                    return l
                },
                __classPrivateFieldGet: function() {
                    return S
                },
                __classPrivateFieldIn: function() {
                    return N
                },
                __classPrivateFieldSet: function() {
                    return D
                },
                __createBinding: function() {
                    return p
                },
                __decorate: function() {
                    return s
                },
                __exportStar: function() {
                    return c
                },
                __extends: function() {
                    return i
                },
                __generator: function() {
                    return _
                },
                __importDefault: function() {
                    return g
                },
                __importStar: function() {
                    return w
                },
                __makeTemplateObject: function() {
                    return I
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return d
                },
                __read: function() {
                    return m
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return h
                },
                __spreadArray: function() {
                    return E
                },
                __spreadArrays: function() {
                    return f
                },
                __values: function() {
                    return y
                }
            });
            var n = function(e, t) {
                return (n = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                })(e, t)
            };

            function i(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function r() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var a = function() {
                return (a = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
                return r
            }

            function s(e, t, r, n) {
                var i, a = arguments.length,
                    o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, r, o) : i(t, r)) || o);
                return a > 3 && o && Object.defineProperty(t, r, o), o
            }

            function d(e, t) {
                return function(r, n) {
                    t(r, n, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, r, n) {
                return new(r || (r = Promise))(function(i, a) {
                    function o(e) {
                        try {
                            d(n.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            d(n.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function d(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, s)
                    }
                    d((n = n.apply(e, t || [])).next())
                })
            }

            function _(e, t) {
                var r, n, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function s(a) {
                    return function(s) {
                        return function(a) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, n = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1], i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2], o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                a = t.call(e, o)
                            } catch (e) {
                                a = [6, e], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, s])
                    }
                }
            }
            var p = Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                }), Object.defineProperty(e, n, i)
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            };

            function c(e, t) {
                for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || p(t, e, r)
            }

            function y(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function m(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, i, a = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = a.next()).done;) o.push(n.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = a.return) && r.call(a)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return o
            }

            function h() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(m(arguments[t]));
                return e
            }

            function f() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var n = Array(e), i = 0, t = 0; t < r; t++)
                    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) n[i] = a[o];
                return n
            }

            function E(e, t, r) {
                if (r || 2 == arguments.length)
                    for (var n, i = 0, a = t.length; i < a; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
                return e.concat(n || Array.prototype.slice.call(t))
            }

            function b(e) {
                return this instanceof b ? (this.v = e, this) : new b(e)
            }

            function A(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var n, i = r.apply(e, t || []),
                    a = [];
                return n = {}, o("next"), o("throw"), o("return"), n[Symbol.asyncIterator] = function() {
                    return this
                }, n;

                function o(e) {
                    i[e] && (n[e] = function(t) {
                        return new Promise(function(r, n) {
                            a.push([e, t, r, n]) > 1 || s(e, t)
                        })
                    })
                }

                function s(e, t) {
                    try {
                        var r;
                        (r = i[e](t)).value instanceof b ? Promise.resolve(r.value.v).then(d, u) : l(a[0][2], r)
                    } catch (e) {
                        l(a[0][3], e)
                    }
                }

                function d(e) {
                    s("next", e)
                }

                function u(e) {
                    s("throw", e)
                }

                function l(e, t) {
                    e(t), a.shift(), a.length && s(a[0][0], a[0][1])
                }
            }

            function T(e) {
                var t, r;
                return t = {}, n("next"), n("throw", function(e) {
                    throw e
                }), n("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function n(n, i) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: b(e[n](t)),
                            done: "return" === n
                        } : i ? i(t) : t
                    } : i
                }
            }

            function O(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = y(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(n, i) {
                            ! function(e, t, r, n) {
                                Promise.resolve(n).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(n, i, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function I(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }
            var R = Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            };

            function w(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && p(t, e, r);
                return R(t, e), t
            }

            function g(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S(e, t, r, n) {
                if ("a" === r && !n) throw TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
            }

            function D(e, t, r, n, i) {
                if ("m" === n) throw TypeError("Private method is not writable");
                if ("a" === n && !i) throw TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r), r
            }

            function N(e, t) {
                if (null === t || "object" != typeof t && "function" != typeof t) throw TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof e ? t === e : e.has(t)
            }
        }
    }
]);
//# sourceMappingURL=5298-539a87270c78d15a.js.map