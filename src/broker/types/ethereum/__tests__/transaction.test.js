import envelope_pb from '../../envelope/envelope_pb'
import { marshallTransaction, unmarshallRawTx } from '../transaction'
import { unmarshallQuantity } from '../base'
import { rawToHex } from '../../../utils/formatters'

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
            to: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
            value: '10000',
            gas: '100000000',
            gasPrice: '1',
            data: '0xbf0b3048242aff8287d1dd9de0d2d100cee25d4ea45b8afa28bdfc1e2a775afd',
            raw: '0xbf0b3048242aff8287d1dd9de0d2d100cee25d4ea45b8afa28bdfc1e2a775afd',
        }
        marshallTransaction(envelope, testMsg)
        const tx = unmarshallRawTx(envelope.getTx().toObject())

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
            value: '10000',
        }
        marshallTransaction(envelope, testMsg)
        tx = envelope.getTx().toObject()
        expect(rawToHex(tx.txData.to)).toEqual('')
        expect(unmarshallQuantity(tx.txData.value)).toEqual(testMsg.value)

        const testMsg2 = {
            to: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
        }
        marshallTransaction(envelope, testMsg2)
        let tx = envelope.getTx().toObject()
        expect(rawToHex(tx.txData.to)).toEqual(testMsg2.to)
        expect(unmarshallQuantity(tx.txData.value)).toEqual(testMsg.value)
    })

    test("marshallTo", () => {
        const testMsg = {
            to: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
        }
        marshallTransaction(envelope, testMsg)
        const tx = envelope.getTx().toObject()
        expect(rawToHex(tx.txData.to)).toEqual(testMsg.to)
    })

    test("marshallValue", () => {
        const testMsg = {
            value: '1000000',
        }
        marshallTransaction(envelope, testMsg)
        const tx = envelope.getTx().toObject()
        expect(unmarshallQuantity(tx.txData.value)).toEqual(testMsg.value)
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
            gasPrice: '100000',
        }
        marshallTransaction(envelope, testMsg)
        const tx = envelope.getTx().toObject()
        expect(unmarshallQuantity(tx.txData.gasPrice)).toEqual(testMsg.gasPrice)
    })

    test("marshallData", () => {
        const testMsg = {
            data: '0xbf0b3048242aff8287d1dd9de0d2d100cee25d4ea45b8afa28bdfc1e2a775afd',
        }
        marshallTransaction(envelope, testMsg)
        const tx = envelope.getTx().toObject()
        expect(rawToHex(tx.txData.data)).toEqual(testMsg.data)
    })
})