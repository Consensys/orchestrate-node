import trace_pb from '../../trace/trace_pb'
import { marshallTransaction } from '../transaction'

let trace

describe("# marshallTransaction ", () => {
    beforeEach(() => {
        trace = new trace_pb.Trace()
    })

    test("set object", () => {
        const testMsg = {
            to: 'testTo',
            value: 'testValue',
            gas: 'testGas',
            gasPrice: 'testGasPrice',
            data: 'testData',
            raw: 'testRaw',
            hash: 'testHash',
        }
        marshallTransaction(trace, testMsg)
        const tx = trace.getTx().toObject()

        expect(tx.txData.to).toEqual(testMsg.to)
        expect(tx.txData.value).toEqual(testMsg.value)
        expect(tx.txData.gas).toEqual(testMsg.gas)
        expect(tx.txData.gasPrice).toEqual(testMsg.gasPrice)
        expect(tx.txData.data).toEqual(testMsg.data)
        expect(tx.raw).toEqual(testMsg.raw)
        expect(tx.hash).toEqual(testMsg.hash)
    })

    test("marshall multiple times", () => {
        const testMsg = {
            value: 'testValue',
        }
        marshallTransaction(trace, testMsg)
        tx = trace.getTx().toObject()
        expect(tx.txData.to).toEqual('')
        expect(tx.txData.value).toEqual(testMsg.value)

        const testMsg2 = {
            to: 'testTo',
        }
        marshallTransaction(trace, testMsg2)
        let tx = trace.getTx().toObject()
        expect(tx.txData.to).toEqual(testMsg2.to)
        expect(tx.txData.value).toEqual(testMsg.value)
    })

    test("marshallTo", () => {
        const testMsg = {
            to: 'testTo',
        }
        marshallTransaction(trace, testMsg)
        const tx = trace.getTx().toObject()
        expect(tx.txData.to).toEqual(testMsg.to)
    })

    test("marshallValue", () => {
        const testMsg = {
            value: 'testValue',
        }
        marshallTransaction(trace, testMsg)
        const tx = trace.getTx().toObject()
        expect(tx.txData.value).toEqual(testMsg.value)
    })

    test("marshallGas", () => {
        const testMsg = {
            gas: 'testGas',
        }
        marshallTransaction(trace, testMsg)
        const tx = trace.getTx().toObject()
        expect(tx.txData.gas).toEqual(testMsg.gas)
    })

    test("marshallGasPrice", () => {
        const testMsg = {
            gasPrice: 'testGasPrice',
        }
        marshallTransaction(trace, testMsg)
        const tx = trace.getTx().toObject()
        expect(tx.txData.gasPrice).toEqual(testMsg.gasPrice)
    })

    test("marshallData", () => {
        const testMsg = {
            data: 'testData',
        }
        marshallTransaction(trace, testMsg)
        const tx = trace.getTx().toObject()
        expect(tx.txData.data).toEqual(testMsg.data)
    })
})