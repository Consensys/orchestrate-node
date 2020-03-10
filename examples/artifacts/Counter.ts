export const Counter = {
  contractName: 'Counter',
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'from',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'by',
          type: 'uint256'
        }
      ],
      name: 'Incremented',
      type: 'event'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256'
        }
      ],
      name: 'increment',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    }
  ],
  metadata:
    '{"compiler":{"version":"0.5.16+commit.9c3226ce"},"language":"Solidity","output":{"abi":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"by","type":"uint256"}],"name":"Incremented","type":"event"},{"constant":false,"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"increment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],"devdoc":{"details":"Implementation of the Counter contract for demo ","methods":{"increment(uint256)":{"details":"increment counter of `value`"}}},"userdoc":{"methods":{}}},"settings":{"compilationTarget":{"/home/dario/Documents/ConsenSys/PegaSys/Orchestrate/quick-start/smart-contracts/Counter.sol":"Counter"},"evmVersion":"istanbul","libraries":{},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"/home/dario/Documents/ConsenSys/PegaSys/Orchestrate/quick-start/smart-contracts/Counter.sol":{"keccak256":"0x7c4a2df07efc118816706ace70dfe9664da870cca7db8197c62aad54ec8452a1","urls":["bzz-raw://80c819633e52ec11654e02532c7eba756f3f1a0a2052a4ac8833b1f6b9b722bf","dweb:/ipfs/Qmeqw8LEcNCD1div9Q2yLkFBhdpDfeDVrut3By8C7sFhqm"]}},"version":1}',
  bytecode:
    '0x6080604052348015600f57600080fd5b5061010a8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80637cf5dab014602d575b600080fd5b605660048036036020811015604157600080fd5b81019080803590602001909291905050506058565b005b8060008082825401925050819055507f38ac789ed44572701765277c4d0970f2db1c1a571ed39e84358095ae4eaa54203382604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15056fea265627a7a7231582047f0937eed22d0cd2ce2eb7c89d1ef3323fa25ba9839d9c7e55fdc20c906396764736f6c63430005100032',
  deployedBytecode:
    '0x6080604052348015600f57600080fd5b506004361060285760003560e01c80637cf5dab014602d575b600080fd5b605660048036036020811015604157600080fd5b81019080803590602001909291905050506058565b005b8060008082825401925050819055507f38ac789ed44572701765277c4d0970f2db1c1a571ed39e84358095ae4eaa54203382604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15056fea265627a7a7231582047f0937eed22d0cd2ce2eb7c89d1ef3323fa25ba9839d9c7e55fdc20c906396764736f6c63430005100032',
  sourceMap: '92:271:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;92:271:0;;;;;;;',
  deployedSourceMap:
    '92:271:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;92:271:0;;;;;;;;;;;;;;;;;;;242:119;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;242:119:0;;;;;;;;;;;;;;;;;:::i;:::-;;;304:5;293:7;;:16;;;;;;;;;;;324:30;336:10;348:5;324:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;242:119;:::o',
  source:
    'pragma solidity ^0.5.0;\n\n/**\n * @dev Implementation of the Counter contract for demo\n *\n */\ncontract Counter {\n    uint256 counter;\n\n    event Incremented(address from, uint256 by);\n\n    /**\n    * @dev increment counter of `value`\n    */\n    function increment(uint256 value) public {\n        counter += value;\n        emit Incremented(msg.sender, value);\n    }\n}\n',
  sourcePath: '/home/dario/Documents/ConsenSys/PegaSys/Orchestrate/quick-start/smart-contracts/Counter.sol',
  ast: {
    absolutePath: '/home/dario/Documents/ConsenSys/PegaSys/Orchestrate/quick-start/smart-contracts/Counter.sol',
    exportedSymbols: {
      Counter: [26]
    },
    id: 27,
    nodeType: 'SourceUnit',
    nodes: [
      {
        id: 1,
        literals: ['solidity', '^', '0.5', '.0'],
        nodeType: 'PragmaDirective',
        src: '0:23:0'
      },
      {
        baseContracts: [],
        contractDependencies: [],
        contractKind: 'contract',
        documentation: '@dev Implementation of the Counter contract for demo\n ',
        fullyImplemented: true,
        id: 26,
        linearizedBaseContracts: [26],
        name: 'Counter',
        nodeType: 'ContractDefinition',
        nodes: [
          {
            constant: false,
            id: 3,
            name: 'counter',
            nodeType: 'VariableDeclaration',
            scope: 26,
            src: '115:15:0',
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_uint256',
              typeString: 'uint256'
            },
            typeName: {
              id: 2,
              name: 'uint256',
              nodeType: 'ElementaryTypeName',
              src: '115:7:0',
              typeDescriptions: {
                typeIdentifier: 't_uint256',
                typeString: 'uint256'
              }
            },
            value: null,
            visibility: 'internal'
          },
          {
            anonymous: false,
            documentation: null,
            id: 9,
            name: 'Incremented',
            nodeType: 'EventDefinition',
            parameters: {
              id: 8,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 5,
                  indexed: false,
                  name: 'from',
                  nodeType: 'VariableDeclaration',
                  scope: 9,
                  src: '155:12:0',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 4,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '155:7:0',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                },
                {
                  constant: false,
                  id: 7,
                  indexed: false,
                  name: 'by',
                  nodeType: 'VariableDeclaration',
                  scope: 9,
                  src: '169:10:0',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 6,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '169:7:0',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '154:26:0'
            },
            src: '137:44:0'
          },
          {
            body: {
              id: 24,
              nodeType: 'Block',
              src: '283:78:0',
              statements: [
                {
                  expression: {
                    argumentTypes: null,
                    id: 16,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      id: 14,
                      name: 'counter',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 3,
                      src: '293:7:0',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '+=',
                    rightHandSide: {
                      argumentTypes: null,
                      id: 15,
                      name: 'value',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 11,
                      src: '304:5:0',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '293:16:0',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 17,
                  nodeType: 'ExpressionStatement',
                  src: '293:16:0'
                },
                {
                  eventCall: {
                    argumentTypes: null,
                    arguments: [
                      {
                        argumentTypes: null,
                        expression: {
                          argumentTypes: null,
                          id: 19,
                          name: 'msg',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 41,
                          src: '336:3:0',
                          typeDescriptions: {
                            typeIdentifier: 't_magic_message',
                            typeString: 'msg'
                          }
                        },
                        id: 20,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: 'sender',
                        nodeType: 'MemberAccess',
                        referencedDeclaration: null,
                        src: '336:10:0',
                        typeDescriptions: {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        }
                      },
                      {
                        argumentTypes: null,
                        id: 21,
                        name: 'value',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 11,
                        src: '348:5:0',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        },
                        {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      ],
                      id: 18,
                      name: 'Incremented',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 9,
                      src: '324:11:0',
                      typeDescriptions: {
                        typeIdentifier: 't_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$',
                        typeString: 'function (address,uint256)'
                      }
                    },
                    id: 22,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '324:30:0',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 23,
                  nodeType: 'EmitStatement',
                  src: '319:35:0'
                }
              ]
            },
            documentation: '@dev increment counter of `value`',
            id: 25,
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'increment',
            nodeType: 'FunctionDefinition',
            parameters: {
              id: 12,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 11,
                  name: 'value',
                  nodeType: 'VariableDeclaration',
                  scope: 25,
                  src: '261:13:0',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 10,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '261:7:0',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '260:15:0'
            },
            returnParameters: {
              id: 13,
              nodeType: 'ParameterList',
              parameters: [],
              src: '283:0:0'
            },
            scope: 26,
            src: '242:119:0',
            stateMutability: 'nonpayable',
            superFunction: null,
            visibility: 'public'
          }
        ],
        scope: 27,
        src: '92:271:0'
      }
    ],
    src: '0:364:0'
  },
  legacyAST: {
    absolutePath: '/home/dario/Documents/ConsenSys/PegaSys/Orchestrate/quick-start/smart-contracts/Counter.sol',
    exportedSymbols: {
      Counter: [26]
    },
    id: 27,
    nodeType: 'SourceUnit',
    nodes: [
      {
        id: 1,
        literals: ['solidity', '^', '0.5', '.0'],
        nodeType: 'PragmaDirective',
        src: '0:23:0'
      },
      {
        baseContracts: [],
        contractDependencies: [],
        contractKind: 'contract',
        documentation: '@dev Implementation of the Counter contract for demo\n ',
        fullyImplemented: true,
        id: 26,
        linearizedBaseContracts: [26],
        name: 'Counter',
        nodeType: 'ContractDefinition',
        nodes: [
          {
            constant: false,
            id: 3,
            name: 'counter',
            nodeType: 'VariableDeclaration',
            scope: 26,
            src: '115:15:0',
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_uint256',
              typeString: 'uint256'
            },
            typeName: {
              id: 2,
              name: 'uint256',
              nodeType: 'ElementaryTypeName',
              src: '115:7:0',
              typeDescriptions: {
                typeIdentifier: 't_uint256',
                typeString: 'uint256'
              }
            },
            value: null,
            visibility: 'internal'
          },
          {
            anonymous: false,
            documentation: null,
            id: 9,
            name: 'Incremented',
            nodeType: 'EventDefinition',
            parameters: {
              id: 8,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 5,
                  indexed: false,
                  name: 'from',
                  nodeType: 'VariableDeclaration',
                  scope: 9,
                  src: '155:12:0',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 4,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '155:7:0',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                },
                {
                  constant: false,
                  id: 7,
                  indexed: false,
                  name: 'by',
                  nodeType: 'VariableDeclaration',
                  scope: 9,
                  src: '169:10:0',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 6,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '169:7:0',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '154:26:0'
            },
            src: '137:44:0'
          },
          {
            body: {
              id: 24,
              nodeType: 'Block',
              src: '283:78:0',
              statements: [
                {
                  expression: {
                    argumentTypes: null,
                    id: 16,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      argumentTypes: null,
                      id: 14,
                      name: 'counter',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 3,
                      src: '293:7:0',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '+=',
                    rightHandSide: {
                      argumentTypes: null,
                      id: 15,
                      name: 'value',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 11,
                      src: '304:5:0',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '293:16:0',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 17,
                  nodeType: 'ExpressionStatement',
                  src: '293:16:0'
                },
                {
                  eventCall: {
                    argumentTypes: null,
                    arguments: [
                      {
                        argumentTypes: null,
                        expression: {
                          argumentTypes: null,
                          id: 19,
                          name: 'msg',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 41,
                          src: '336:3:0',
                          typeDescriptions: {
                            typeIdentifier: 't_magic_message',
                            typeString: 'msg'
                          }
                        },
                        id: 20,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: 'sender',
                        nodeType: 'MemberAccess',
                        referencedDeclaration: null,
                        src: '336:10:0',
                        typeDescriptions: {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        }
                      },
                      {
                        argumentTypes: null,
                        id: 21,
                        name: 'value',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 11,
                        src: '348:5:0',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        },
                        {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      ],
                      id: 18,
                      name: 'Incremented',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 9,
                      src: '324:11:0',
                      typeDescriptions: {
                        typeIdentifier: 't_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$',
                        typeString: 'function (address,uint256)'
                      }
                    },
                    id: 22,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '324:30:0',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 23,
                  nodeType: 'EmitStatement',
                  src: '319:35:0'
                }
              ]
            },
            documentation: '@dev increment counter of `value`',
            id: 25,
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'increment',
            nodeType: 'FunctionDefinition',
            parameters: {
              id: 12,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 11,
                  name: 'value',
                  nodeType: 'VariableDeclaration',
                  scope: 25,
                  src: '261:13:0',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 10,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '261:7:0',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  value: null,
                  visibility: 'internal'
                }
              ],
              src: '260:15:0'
            },
            returnParameters: {
              id: 13,
              nodeType: 'ParameterList',
              parameters: [],
              src: '283:0:0'
            },
            scope: 26,
            src: '242:119:0',
            stateMutability: 'nonpayable',
            superFunction: null,
            visibility: 'public'
          }
        ],
        scope: 27,
        src: '92:271:0'
      }
    ],
    src: '0:364:0'
  },
  compiler: {
    name: 'solc',
    version: '0.5.16+commit.9c3226ce.Emscripten.clang'
  },
  networks: {},
  schemaVersion: '3.0.23',
  updatedAt: '2020-03-09T16:47:47.211Z',
  devdoc: {
    details: 'Implementation of the Counter contract for demo ',
    methods: {
      'increment(uint256)': {
        details: 'increment counter of `value`'
      }
    }
  },
  userdoc: {
    methods: {}
  }
}
