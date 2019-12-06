import { ProtocolType } from '../../../..'
import protocol_pb from '../../chain/protocol_pb'
import { marshalReceipt } from '../../ethereum/receipt'
import { marshalEnvelope, marshalMetadata, unmarshalEnvelope } from '../envelope'
import envelope_pb from '../envelope_pb'

let envelope

describe("# marshalEnvelope ", () => {


    test("set invalid format", () => {
        const testMsg = true

        expect(() => {
            marshalEnvelope(testMsg)
        }).toThrow();
    })

    test("set invalid object format", () => {
        const testMsg = {error: 'testError'}

        expect(() => {
            marshalEnvelope(testMsg)
        }).toThrow();
    })

    test("set invalid object format of other marshaler methods", () => {
        const testMsg = {chainId: {error: false}}
        try {
            marshalEnvelope(testMsg)
        } catch(e) {
            expect(e.message).toBe('marshalChain: "[object Object]" is not a number')
        }

    })

    test("set object", () => {
        const testMsg = {
            chainId: '3',
            protocol: {
                type: ProtocolType.BesuOrion,
                extra: {
                    test: 'test'
                }
            },
            to: '0xd71400daD07d70C976D6AAFC241aF1EA183a7236',
            value: '100000000000',
            gas: '10000',
            gasPrice: '100000',
            nonce: '1000',
            data: '0x000000000000000000000000b5747835141b46f7c472393b31f8f5a57f74a44f',
            raw: '0x000000000000000000000000b5747835141b46f7c472393b31f8f5a57f74a44f',
            hash: '0x000000000000000000000000b5747835141b46f7c472393b31f8f5a57f74a44f',
            from: '0xaf84242d70ae9d268e2be3616ed497ba28a7b62c',
            privateFrom: 'testPrivateFrom',
            privateFor: ['testPrivateFor'],
            call: {
                contract: 'testContract',
                method: 'testMethod(string,string)',
                args: ['arg1', 'arg2'],

            },
            metadata: 'testMetadata'
        }
        envelope = marshalEnvelope(testMsg)
        const bin = envelope.serializeBinary()
        const unmarshal = unmarshalEnvelope(bin)
        const expected = {
            chain: { id: '3' },
            protocol: {
                extraMap: {test: 'test'},
                type: protocol_pb.ProtocolType.BESU_ORION
            },
            from: '0xaf84242d70ae9d268e2be3616ed497ba28a7b62c',
            tx: {
                txData: {
                    nonce: 1000,
                    to: '0xd71400dad07d70c976d6aafc241af1ea183a7236',
                    value: '100000000000',
                    gas: 10000,
                    gasPrice: '100000',
                    data: '0x000000000000000000000000b5747835141b46f7c472393b31f8f5a57f74a44f'
                },
                raw: '0x000000000000000000000000b5747835141b46f7c472393b31f8f5a57f74a44f',
                hash: '0x000000000000000000000000b5747835141b46f7c472393b31f8f5a57f74a44f'
            },
            receipt: undefined,
            errorsList: [],
            args: {
                call: {
                    contract: {
                        id: { registry: '', name: 'testContract', tag: '' },
                        abi: '',
                        bytecode: '',
                        methodsList: [],
                        eventsList: [],
                        deployedbytecode: ''
                    },
                    method: { signature: 'testMethod(string,string)', abi: '' },
                    argsList: ['arg1', 'arg2']
                },
                pb_private: {
                    privateFrom: 'testPrivateFrom',
                    privateForList: ['testPrivateFor'],
                    privateTxType: ''
                }
            },
            metadata: { id: 'testMetadata', extraMap: {} }
        }
        expect(unmarshal).toEqual(expected)
    })

})

describe("# marshalMetadata ", () => {

    beforeEach(() => {
        envelope = new envelope_pb.Envelope()
    })


    test("set invalid format", () => {
        const testMsg = true

        expect(() => {
            marshalMetadata(envelope, testMsg)
        }).toThrow();
    })

    test("set invalid object format", () => {
        const testMsg = {error: 'testError'}

        expect(() => {
            marshalMetadata(envelope, testMsg)
        }).toThrow();
    })

    test("set default", () => {
        const testMsg = 'testMetaId'
        marshalMetadata(envelope, testMsg)
        const metadata = envelope.getMetadata().toObject()
        expect(metadata.id).toEqual(testMsg)
        expect(metadata.extraMap).toEqual([])
    })
   
    test("set object", () => {
        const testMsg = {
            id: 'testMetaId',
            extra: {
                extra1: 'testExtra1',
                extra2: 'testExtra2'
            }
        }
        marshalMetadata(envelope, testMsg)
        const metadata = envelope.getMetadata().toObject()
        expect(metadata.id).toEqual(testMsg.id)
        expect(metadata.extraMap).toEqual([
            ['extra1', 'testExtra1'],
            ['extra2', 'testExtra2'],
        ])
    })

    test("marshal multiple times", () => {
        const testMsg = {
            extra: {
                extra1: 'testExtra1',
                extra2: 'testExtra2'
            }
        }
        marshalMetadata(envelope, testMsg)
        let metadata = envelope.getMetadata().toObject()
        expect(metadata.extraMap).toEqual([
            ['extra1', 'testExtra1'],
            ['extra2', 'testExtra2'],
        ])
        expect(metadata.id).toEqual('')

        const testMsg2 = {
            id: 'testMetaId',
        }
        marshalMetadata(envelope, testMsg2)
        metadata = envelope.getMetadata().toObject()
        expect(metadata.extraMap).toEqual([
            ['extra1', 'testExtra1'],
            ['extra2', 'testExtra2'],
        ])
        expect(metadata.id).toEqual(testMsg2.id)
    })

})

describe("# unmarshalEnvelope ", () => {

    test("set object", () => {
        const testMsg = {
            chainId: '3',
            to: '0xd71400daD07d70C976D6AAFC241aF1EA183a7236',
            // value: '10000',
            gas: '100000',
            // gasPrice: '1000',
            data: '0xea2460a53299f7201d82483d891b26365ff2f49cd9c5c0c7686fd75599fda5b2',
            raw: '0xea2460a53299f7201d82483d891b26365ff2f49cd9c5c0c7686fd75599fda5b2',
            hash: '0xea2460a53299f7201d82483d891b26365ff2f49cd9c5c0c7686fd75599fda5b2',
            from: '0xaf84242d70ae9d268e2be3616ed497ba28a7b62c',
            call: {
                contract: 'testContract',
                method: 'testMethod(string,string)',
                args: ['arg1', 'arg2'],

            },
            metadata: {
                id: 'testMetadata',
                extra: {
                    test: 'testExtra'
                },
            }
        }
        envelope = marshalEnvelope(testMsg)
        const testReceipt = {
            txHash: '0xbf0b3048242aff8287d1dd9de0d2d100cee25d4ea45b8afa28bdfc1e2a775afd',
            blockHash: '0xea2460a53299f7201d82483d891b26365ff2f49cd9c5c0c7686fd75599fda5b2',
            blockNumber: 1,
            txIndex: 2,
            contractAddress: '0x75d2917bd1e6c7c94d24dfd11c8eeaefd3003c85',
            postState: '3b198bfd5d2907285af009e9ae84a0ecd63677110d89d7e030251acb87f6487e',
            status: 1,
            bloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001a055690d9db80000',
            logs: [
                {
                    address: '0xaf84242d70ae9d268e2be3616ed497ba28a7b62c',
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
                    address: '0xaf84242d70ae9d268e2be3616ed497ba28a7b62c',
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
        marshalReceipt(envelope, testReceipt)

        const bin = envelope.serializeBinary()
        const unmarshalT = unmarshalEnvelope(bin)
        const expected = {
            chain: { id: '3' },
            protocol: undefined,
            from: '0xaf84242d70ae9d268e2be3616ed497ba28a7b62c',
            tx: {
                txData: {
                    nonce: 0,
                    to: '0xd71400dad07d70c976d6aafc241af1ea183a7236',
                    value: undefined,
                    gas: 100000,
                    gasPrice: undefined,
                    data: '0xea2460a53299f7201d82483d891b26365ff2f49cd9c5c0c7686fd75599fda5b2'
                },
                raw: '0xea2460a53299f7201d82483d891b26365ff2f49cd9c5c0c7686fd75599fda5b2',
                hash: '0xea2460a53299f7201d82483d891b26365ff2f49cd9c5c0c7686fd75599fda5b2'
            },
            receipt: {
                txHash: '0xbf0b3048242aff8287d1dd9de0d2d100cee25d4ea45b8afa28bdfc1e2a775afd',
                blockHash: '0xea2460a53299f7201d82483d891b26365ff2f49cd9c5c0c7686fd75599fda5b2',
                blockNumber: 1,
                txIndex: 2,
                contractAddress: '0x75d2917bd1e6c7c94d24dfd11c8eeaefd3003c85',
                postState: 'GYv9XSkHKFrwCemuhKDs1jZ3EQ2J1+AwJRrLh/ZIfg==',
                status: 1,
                bloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001a055690d9db80000',
                logsList: [
                    {
                        address: '0xaf84242d70ae9d268e2be3616ed497ba28a7b62c',
                        topicsList: [
                            '0xe8f0a47da72ca43153c7a5693a827aa8456f52633de9870a736e5605bff4af6d',
                            '0x000000000000000000000000d71400dad07d70c976d6aafc241af1ea183a7236',
                            '0x000000000000000000000000d71400dad07d70c976d6aafc241af1ea183a7236',
                            '0x000000000000000000000000b5747835141b46f7c472393b31f8f5a57f74a44f'
                        ],
                        data: '0x0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000061000000000000000000000000000000000000000000000000000000006f0c7f50cd4b7e4466b726279b1506bc89d8e74ab9268a255eeb1c78f163d51a83c7380d54a8b597ee26351c15c83f922fd6b37334970d3f832e5e11e36acbecb460ffdb01000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
                        event: 'TransferWithData(address,address,address,uint256,bytes,bytes)',
                        decodedDataMap: {
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
                        address: '0xaf84242d70ae9d268e2be3616ed497ba28a7b62c',
                        topicsList: [
                            '0xe8f0a47da72ca43153c7a5693a827aa8456f52633de9870a736e5605bff4af6d',
                            '0x000000000000000000000000d71400dad07d70c976d6aafc241af1ea183a7236',
                            '0x000000000000000000000000d71400dad07d70c976d6aafc241af1ea183a7236',
                            '0x000000000000000000000000b5747835141b46f7c472393b31f8f5a57f74a44f'
                        ],
                        data: '0x0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000061000000000000000000000000000000000000000000000000000000006f0c7f50cd4b7e4466b726279b1506bc89d8e74ab9268a255eeb1c78f163d51a83c7380d54a8b597ee26351c15c83f922fd6b37334970d3f832e5e11e36acbecb460ffdb01000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
                        event: 'TransferWithData(address,address,address,uint256,bytes,bytes)',
                        decodedDataMap: {
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
                    }
                ],
                gasUsed: 10000,
                cumulativeGasUsed: 10000
            },
            errorsList: [],
            args: {
                call: { 
                    contract: { id: { name: 'testContract', registry: '', tag: ''}, abi: '', bytecode: '', deployedbytecode: '', eventsList: [], methodsList: [] },
                    method: { signature: 'testMethod(string,string)', abi: '' },
                    argsList: ['arg1', 'arg2']
                },
                pb_private: undefined
            },
            metadata: { id: 'testMetadata', extraMap: { test: 'testExtra' } }
        }
        expect(unmarshalT).toEqual(expected)

    })

    test("receipt -  decodedMap into object", () => {

    })
})