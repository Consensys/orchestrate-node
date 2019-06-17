import envelope_pb from '../../envelope/envelope_pb'
import { marshallReceipt, marshallLogs } from '../receipt'

let envelope

describe("# marshallTransaction ", () => {
    beforeEach(() => {
        envelope = new envelope_pb.Envelope()
    })

    test("set invalid format", () => {
        const testMsg = true

        expect(() => {
            marshallReceipt(envelope, testMsg)
        }).toThrow();
    })

    test("set invalid object format", () => {
        const testMsg = {error: 'testError'}

        expect(() => {
            marshallReceipt(envelope, testMsg)
        }).toThrow();
    })

    test("set object", () => {
        const testMsg = {
            txHash: '0xbf0b3048242aff8287d1dd9de0d2d100cee25d4ea45b8afa28bdfc1e2a775afd',
            blockHash: '0xea2460a53299f7201d82483d891b26365ff2f49cd9c5c0c7686fd75599fda5b2',
            blockNumber: 1,
            txIndex: 2,
            contractAddress: '0x75d2917bD1E6C7c94d24dFd11C8EeAeFd3003C85',
            postState: '0x3b198bfd5d2907285af009e9ae84a0ecd63677110d89d7e030251acb87f6487e',
            status: 1,
            bloom: '0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001a055690d9db80000',
            logs: [
                {
                    address: '0xAf84242d70aE9D268E2bE3616ED497BA28A7b62C',
                    topics: [
                        '0xe8f0a47da72ca43153c7a5693a827aa8456f52633de9870a736e5605bff4af6d',
                        '0x000000000000000000000000d71400dad07d70c976d6aafc241af1ea183a7236',
                        '0x000000000000000000000000d71400dad07d70c976d6aafc241af1ea183a7236',
                        '0x000000000000000000000000b5747835141b46f7c472393b31f8f5a57f74a44f'
                    ],
                    data: '0x0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000061000000000000000000000000000000000000000000000000000000006f0c7f50cd4b7e4466b726279b1506bc89d8e74ab9268a255eeb1c78f163d51a83c7380d54a8b597ee26351c15c83f922fd6b37334970d3f832e5e11e36acbecb460ffdb01000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
                    event: 'TransferWithData(address,address,address,uint256,bytes,bytes)',
                    decodedData: {
                        data: '0x000000000000000000000000000000000000000000000000000000006f0c7f50cd4b7e4466b726279b1506bc89d8e74ab9268a255eeb1c78f163d51a83c7380d54a8b597ee26351c15c83f922fd6b37334970d3f832e5e11e36acbecb460ffdb01',
                        from: '0xd71400daD07d70C976D6AAFC241aF1EA183a7236',
                        operator: '0xd71400daD07d70C976D6AAFC241aF1EA183a7236',
                        operatorData: '0x',
                        to: '0xb5747835141b46f7C472393B31F8F5A57F74A44f',
                        value: '3',
                    },
                    blockNumber: 10,
                    txHash: '0xbf0b3048242aff8287d1dd9de0d2d100cee25d4ea45b8afa28bdfc1e2a775afd',
                    txIndex: 10,
                    blockHash: '0xea2460a53299f7201d82483d891b26365ff2f49cd9c5c0c7686fd75599fda5b2',
                    index: 0,
                    removed: false
                },
                {
                    address: '0xAf84242d70aE9D268E2bE3616ED497BA28A7b62C',
                    topics: [
                        '0xe8f0a47da72ca43153c7a5693a827aa8456f52633de9870a736e5605bff4af6d',
                        '0x000000000000000000000000d71400dad07d70c976d6aafc241af1ea183a7236',
                        '0x000000000000000000000000d71400dad07d70c976d6aafc241af1ea183a7236',
                        '0x000000000000000000000000b5747835141b46f7c472393b31f8f5a57f74a44f'
                    ],
                    data: '0x0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000061000000000000000000000000000000000000000000000000000000006f0c7f50cd4b7e4466b726279b1506bc89d8e74ab9268a255eeb1c78f163d51a83c7380d54a8b597ee26351c15c83f922fd6b37334970d3f832e5e11e36acbecb460ffdb01000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
                    event: 'TransferWithData(address,address,address,uint256,bytes,bytes)',
                    decodedData: {
                        data: '0x000000000000000000000000000000000000000000000000000000006f0c7f50cd4b7e4466b726279b1506bc89d8e74ab9268a255eeb1c78f163d51a83c7380d54a8b597ee26351c15c83f922fd6b37334970d3f832e5e11e36acbecb460ffdb01',
                        from: '0xd71400daD07d70C976D6AAFC241aF1EA183a7236',
                        operator: '0xd71400daD07d70C976D6AAFC241aF1EA183a7236',
                        operatorData: '0x',
                        to: '0xb5747835141b46f7C472393B31F8F5A57F74A44f',
                        value: '3',
                    },
                    blockNumber: 10,
                    txHash: '0xbf0b3048242aff8287d1dd9de0d2d100cee25d4ea45b8afa28bdfc1e2a775afd',
                    txIndex: 10,
                    blockHash: '0xea2460a53299f7201d82483d891b26365ff2f49cd9c5c0c7686fd75599fda5b2',
                    index: 1,
                    removed: false
                },
            ],
            gasUsed: 10000,
            cumulativeGasUsed: 10000,
        }
        marshallReceipt(envelope, testMsg)
        const receipt = envelope.getReceipt().toObject()
        const expected = {
            txHash: testMsg.txHash,
            blockHash: testMsg.blockHash,
            blockNumber: testMsg.blockNumber,
            txIndex: testMsg.txIndex,
            contractAddress: testMsg.contractAddress,
            bloom: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGgVWkNnbgAAA==',
            status: 1,
            postState: 'OxmL/V0pByha8AnproSg7NY2dxENidfgMCUay4f2SH4=',
            logsList: [ 
                {
                    address: '0xAf84242d70aE9D268E2bE3616ED497BA28A7b62C',
                    topicsList: [
                        '0xe8f0a47da72ca43153c7a5693a827aa8456f52633de9870a736e5605bff4af6d',
                        '0x000000000000000000000000d71400dad07d70c976d6aafc241af1ea183a7236',
                        '0x000000000000000000000000d71400dad07d70c976d6aafc241af1ea183a7236',
                        '0x000000000000000000000000b5747835141b46f7c472393b31f8f5a57f74a44f'
                    ],
                    data: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbwx/UM1LfkRmtyYnmxUGvInY50q5JoolXuscePFj1RqDxzgNVKi1l+4mNRwVyD+SL9azczSXDT+DLl4R42rL7LRg/9sBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                    event: 'TransferWithData(address,address,address,uint256,bytes,bytes)',
                    decodedDataMap: [
                        ["data", "0x000000000000000000000000000000000000000000000000000000006f0c7f50cd4b7e4466b726279b1506bc89d8e74ab9268a255eeb1c78f163d51a83c7380d54a8b597ee26351c15c83f922fd6b37334970d3f832e5e11e36acbecb460ffdb01"],
                        ["from", "0xd71400daD07d70C976D6AAFC241aF1EA183a7236"],
                        ["operator", "0xd71400daD07d70C976D6AAFC241aF1EA183a7236"],
                        ["operatorData", "0x"],
                        ["to", "0xb5747835141b46f7C472393B31F8F5A57F74A44f"],
                        ["value", "3"],
                    ],
                    blockNumber: 10,
                    txHash: '0xbf0b3048242aff8287d1dd9de0d2d100cee25d4ea45b8afa28bdfc1e2a775afd',
                    txIndex: 10,
                    blockHash: '0xea2460a53299f7201d82483d891b26365ff2f49cd9c5c0c7686fd75599fda5b2',
                    index: 0,
                    removed: false 
                },
                {
                    address: '0xAf84242d70aE9D268E2bE3616ED497BA28A7b62C',
                    topicsList: [
                        '0xe8f0a47da72ca43153c7a5693a827aa8456f52633de9870a736e5605bff4af6d',
                        '0x000000000000000000000000d71400dad07d70c976d6aafc241af1ea183a7236',
                        '0x000000000000000000000000d71400dad07d70c976d6aafc241af1ea183a7236',
                        '0x000000000000000000000000b5747835141b46f7c472393b31f8f5a57f74a44f'
                    ],
                    data: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbwx/UM1LfkRmtyYnmxUGvInY50q5JoolXuscePFj1RqDxzgNVKi1l+4mNRwVyD+SL9azczSXDT+DLl4R42rL7LRg/9sBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                    event: 'TransferWithData(address,address,address,uint256,bytes,bytes)',
                    decodedDataMap: [
                        ["data", "0x000000000000000000000000000000000000000000000000000000006f0c7f50cd4b7e4466b726279b1506bc89d8e74ab9268a255eeb1c78f163d51a83c7380d54a8b597ee26351c15c83f922fd6b37334970d3f832e5e11e36acbecb460ffdb01"],
                        ["from", "0xd71400daD07d70C976D6AAFC241aF1EA183a7236"],
                        ["operator", "0xd71400daD07d70C976D6AAFC241aF1EA183a7236"],
                        ["operatorData", "0x"],
                        ["to", "0xb5747835141b46f7C472393B31F8F5A57F74A44f"],
                        ["value", "3"],
                    ],
                    blockNumber: 10,
                    txHash: '0xbf0b3048242aff8287d1dd9de0d2d100cee25d4ea45b8afa28bdfc1e2a775afd',
                    txIndex: 10,
                    blockHash: '0xea2460a53299f7201d82483d891b26365ff2f49cd9c5c0c7686fd75599fda5b2',
                    index: 1,
                    removed: false 
                }
            ],
            gasUsed: testMsg.gasUsed,
            cumulativeGasUsed: testMsg.cumulativeGasUsed 
        }
        expect(receipt).toEqual(expected)

    })

    test("marshall multiple times", () => {
        const testMsg = {
            txHash: 'test',
        }
        marshallReceipt(envelope, testMsg)
        let receipt = envelope.getReceipt().toObject()
        expect(receipt.txHash).toEqual(testMsg.txHash)
        expect(receipt.blockHash).toEqual('')

        const testMsg2 = {
            blockHash: '0x',
        }
        marshallReceipt(envelope, testMsg2)
        receipt = envelope.getReceipt().toObject()
        expect(receipt.txHash).toEqual(testMsg.txHash)
        expect(receipt.blockHash).toEqual(testMsg2.blockHash)

    })

})

describe("# marshallLogs ", () => {
    beforeEach(() => {
        envelope = new envelope_pb.Envelope()
    })

    test("set invalid format", () => {
        const testMsg = true

        expect(() => {
            marshallLogs(envelope, testMsg)
        }).toThrow();
    })

    test("set invalid array format", () => {
        const testMsg = ['testError']

        expect(() => {
            marshallLogs(envelope, testMsg)
        }).toThrow();
    })

    test("set invalid array object format", () => {
        const testMsg = [{error: 'testError'}]

        expect(() => {
            marshallLogs(envelope, testMsg)
        }).toThrow();
    })


})