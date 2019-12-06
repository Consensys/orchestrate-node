import envelope_pb from '../../envelope/envelope_pb'
import { marshalTransaction, unmarshalRawTx } from '../transaction'
import { unmarshalQuantity } from '../base'
import { rawToHex } from '../../../utils/formatters'

let envelope

describe("# marshalTransaction ", () => {
    beforeEach(() => {
        envelope = new envelope_pb.Envelope()
    })

    test("set invalid format", () => {
        const testMsg = true

        expect(() => {
            marshalTransaction(envelope, testMsg)
        }).toThrow();
    })

    test("set invalid object format", () => {
        const testMsg = {error: 'testError'}

        expect(() => {
            marshalTransaction(envelope, testMsg)
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
            nonce: '10'
        }
        marshalTransaction(envelope, testMsg)
        const tx = unmarshalRawTx(envelope.getTx().toObject())

        expect(tx.txData.to).toEqual(testMsg.to)
        expect(tx.txData.value).toEqual(testMsg.value)
        expect(tx.txData.gas).toEqual(testMsg.gas)
        expect(tx.txData.gasPrice).toEqual(testMsg.gasPrice)
        expect(tx.txData.data).toEqual(testMsg.data)
        expect(tx.raw).toEqual(testMsg.raw)
        expect(tx.hash).toEqual(testMsg.hash)
        expect(tx.txData.nonce).toEqual(testMsg.nonce)
    })

    test("marshal multiple times", () => {
        const testMsg = {
            value: '10000',
        }
        marshalTransaction(envelope, testMsg)
        tx = envelope.getTx().toObject()
        expect(rawToHex(tx.txData.to)).toEqual('')
        expect(unmarshalQuantity(tx.txData.value)).toEqual(testMsg.value)

        const testMsg2 = {
            to: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
        }
        marshalTransaction(envelope, testMsg2)
        let tx = envelope.getTx().toObject()
        expect(rawToHex(tx.txData.to)).toEqual(testMsg2.to)
        expect(unmarshalQuantity(tx.txData.value)).toEqual(testMsg.value)
    })

    test("marshalTo", () => {
        const testMsg = {
            to: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
        }
        marshalTransaction(envelope, testMsg)
        const tx = envelope.getTx().toObject()
        expect(rawToHex(tx.txData.to)).toEqual(testMsg.to)
    })

    test("marshalValue", () => {
        const testMsg = {
            value: '1000000',
        }
        marshalTransaction(envelope, testMsg)
        const tx = envelope.getTx().toObject()
        expect(unmarshalQuantity(tx.txData.value)).toEqual(testMsg.value)
    })

    test("marshalGas", () => {
        const testMsg = {
            gas: 'testGas',
        }
        marshalTransaction(envelope, testMsg)
        const tx = envelope.getTx().toObject()
        expect(tx.txData.gas).toEqual(testMsg.gas)
    })

    test("marshalGasPrice", () => {
        const testMsg = {
            gasPrice: '100000',
        }
        marshalTransaction(envelope, testMsg)
        const tx = envelope.getTx().toObject()
        expect(unmarshalQuantity(tx.txData.gasPrice)).toEqual(testMsg.gasPrice)
    })

    test("marshalData", () => {
        const testMsg = {
            data: '0xbf0b3048242aff8287d1dd9de0d2d100cee25d4ea45b8afa28bdfc1e2a775afd',
        }
        marshalTransaction(envelope, testMsg)
        const tx = envelope.getTx().toObject()
        expect(rawToHex(tx.txData.data)).toEqual(testMsg.data)
    })
})