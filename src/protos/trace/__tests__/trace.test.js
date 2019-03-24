import { marshallTrace, marshallMetadata, unmarshallTrace } from '../trace'
import trace_pb from '../trace_pb'

let trace

describe("# marshallTrace ", () => {


    test("set invalid format", () => {
        const testMsg = true

        expect(() => {
            marshallTrace(testMsg)
        }).toThrow();
    })

    test("set invalid object format", () => {
        const testMsg = {error: 'testError'}

        expect(() => {
            marshallTrace(testMsg)
        }).toThrow();
    })

    test("set object", () => {
        const testMsg = {
            chainId: '3',
            to: 'testTo',
            value: 'testValue',
            gas: 'testGas',
            gasPrice: 'testGasPrice',
            data: 'testData',
            raw: 'testRaw',
            hash: 'testHash',
            from: 'testFrom',
            privateFrom: 'testPrivateFrom',
            privateFor: ['testPrivateFor'],
            call: {
                contract: 'testContract',
                method: 'testMethod',
                args: ['arg1', 'arg2'],

            },
            metadata: 'testMetadata'
        }
        trace = marshallTrace(testMsg).toObject()
        const expected = { 
            chain: { id: '0x3', iseip155: false },
            sender: { id: '', addr: 'testFrom' },
            receiver: undefined,
            call: { 
                contract: { name: 'testContract', tag: '', abi: '', bytecode: '' },
                method: { name: 'testMethod', abi: '' },
                argsList: [ 'arg1', 'arg2' ],
                quorum: {
                    privateFrom: 'testPrivateFrom',
                    privateForList: ['testPrivateFor'],
                    version: '',
                    privateTxType: ''    
                }
            },
            tx: { 
                txData: {
                    nonce: 0,
                    to: 'testTo',
                    value: 'testValue',
                    gas: 'testGas',
                    gasPrice: 'testGasPrice',
                    data: 'testData' 
                },
                raw: 'testRaw',
                hash: 'testHash' 
            },
            receipt: undefined,
            errorsList: [],
            metadata: { id: 'testMetadata', extraMap: [] }
        }
        expect(trace).toEqual(expected)

    })

})

describe("# marshallMetadata ", () => {

    beforeEach(() => {
        trace = new trace_pb.Trace()
    })


    test("set invalid format", () => {
        const testMsg = true

        expect(() => {
            marshallMetadata(trace, testMsg)
        }).toThrow();
    })

    test("set invalid object format", () => {
        const testMsg = {error: 'testError'}

        expect(() => {
            marshallMetadata(trace, testMsg)
        }).toThrow();
    })

    test("set default", () => {
        const testMsg = 'testMetaId'
        marshallMetadata(trace, testMsg)
        const metadata = trace.getMetadata().toObject()
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
        marshallMetadata(trace, testMsg)
        const metadata = trace.getMetadata().toObject()
        expect(metadata.id).toEqual(testMsg.id)
        expect(metadata.extraMap).toEqual([
            ['extra1', 'testExtra1'],
            ['extra2', 'testExtra2'],
        ])
    })

    test("marshall multiple times", () => {
        const testMsg = {
            extra: {
                extra1: 'testExtra1',
                extra2: 'testExtra2'
            }
        }
        marshallMetadata(trace, testMsg)
        let metadata = trace.getMetadata().toObject()
        expect(metadata.extraMap).toEqual([
            ['extra1', 'testExtra1'],
            ['extra2', 'testExtra2'],
        ])
        expect(metadata.id).toEqual('')

        const testMsg2 = {
            id: 'testMetaId',
        }
        marshallMetadata(trace, testMsg2)
        metadata = trace.getMetadata().toObject()
        expect(metadata.extraMap).toEqual([
            ['extra1', 'testExtra1'],
            ['extra2', 'testExtra2'],
        ])
        expect(metadata.id).toEqual(testMsg2.id)
    })

})

describe("# unmarshallTrace ", () => {

    test("set object", () => {
        const testMsg = {
            chainId: '3',
            to: 'testTo',
            value: 'testValue',
            gas: 100000,
            gasPrice: 'testGasPrice',
            data: 'testData',
            raw: 'testRaw',
            hash: 'testHash',
            from: 'testFrom',
            call: {
                contract: 'testContract',
                method: 'testMethod',
                args: ['arg1', 'arg2'],

            },
            metadata: 'testMetadata'
        }
        trace = marshallTrace(testMsg)
        const bin = trace.serializeBinary()
        const unmarshallT = unmarshallTrace(bin)

        const expected = { 
            chain: { id: '0x3', iseip155: false },
            sender: { id: '', addr: 'testFrom' },
            receiver: undefined,
            call: { 
                contract: { name: 'testContract', tag: '', abi: '', bytecode: '' },
                method: { name: 'testMethod', abi: '' },
                argsList: [ 'arg1', 'arg2' ] 
            },
            tx: { 
                txData: {
                    nonce: 0,
                    to: 'testTo',
                    value: 'testValue',
                    gas: 100000,
                    gasPrice: 'testGasPrice',
                    data: 'testData' 
                },
                raw: 'testRaw',
                hash: 'testHash' 
            },
            receipt: undefined,
            errorsList: [],
            metadata: { id: 'testMetadata', extraMap: [] }
        }
        expect(unmarshallT).toEqual(expected)

    })

})