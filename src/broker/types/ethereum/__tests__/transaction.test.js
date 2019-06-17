import envelope_pb from '../../envelope/envelope_pb'
import { marshallTransaction } from '../transaction'

let envelope

describe("# marshallTransaction ", () => {
    beforeEach(() => {
        envelope = new envelope_pb.Envelope()
    })

    test("set invalid format", () => {
        const testMsg = true

        expect(() => {
            marshallTransaction(envelope, testMsg)
        }).toThrow();
    })

    test("set invalid object format", () => {
        const testMsg = {error: 'testError'}

        expect(() => {
            marshallTransaction(envelope, testMsg)
        }).toThrow();
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
        marshallTransaction(envelope, testMsg)
        const tx = envelope.getTx().toObject()

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
        marshallTransaction(envelope, testMsg)
        tx = envelope.getTx().toObject()
        expect(tx.txData.to).toEqual('')
        expect(tx.txData.value).toEqual(testMsg.value)

        const testMsg2 = {
            to: 'testTo',
        }
        marshallTransaction(envelope, testMsg2)
        let tx = envelope.getTx().toObject()
        expect(tx.txData.to).toEqual(testMsg2.to)
        expect(tx.txData.value).toEqual(testMsg.value)
    })

    test("marshallTo", () => {
        const testMsg = {
            to: 'testTo',
        }
        marshallTransaction(envelope, testMsg)
        const tx = envelope.getTx().toObject()
        expect(tx.txData.to).toEqual(testMsg.to)
    })

    test("marshallValue", () => {
        const testMsg = {
            value: 'testValue',
        }
        marshallTransaction(envelope, testMsg)
        const tx = envelope.getTx().toObject()
        expect(tx.txData.value).toEqual(testMsg.value)
    })

    test("marshallGas", () => {
        const testMsg = {
            gas: 'testGas',
        }
        marshallTransaction(envelope, testMsg)
        const tx = envelope.getTx().toObject()
        expect(tx.txData.gas).toEqual(testMsg.gas)
    })

    test("marshallGasPrice", () => {
        const testMsg = {
            gasPrice: 'testGasPrice',
        }
        marshallTransaction(envelope, testMsg)
        const tx = envelope.getTx().toObject()
        expect(tx.txData.gasPrice).toEqual(testMsg.gasPrice)
    })

    test("marshallData", () => {
        const testMsg = {
            data: 'testData',
        }
        marshallTransaction(envelope, testMsg)
        const tx = envelope.getTx().toObject()
        expect(tx.txData.data).toEqual(testMsg.data)
    })
})