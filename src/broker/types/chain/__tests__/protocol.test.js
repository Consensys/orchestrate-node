import envelope_pb from '../../envelope/envelope_pb'
import { marshalProtocol, ProtocolType, unmarshalProtocol } from '../protocol'

let envelope

describe("# marshalTransaction ", () => {
    beforeEach(() => {
        envelope = new envelope_pb.Envelope()
    })

    test("set invalid format", () => {
        const testMsg = true

        expect(() => {
            marshalProtocol(envelope, testMsg)
        }).toThrow('Protocol message has invalid format');
    })

    test("set invalid object format", () => {
        const testMsg = {error: 'testError'}

        expect(() => {
            marshalProtocol(envelope, testMsg)
        }).toThrow('Protocol message do not expect "error" field');
    })

    test("invalid protocol type", () => {
        const testMsg = {
            type: 'invalid.protocol'
        }

        expect(() => {
            marshalProtocol(envelope, testMsg)
        }).toThrow('Cannot convert protocol type "invalid.protocol"');
    })

    test("should unmarshal unknown protocol type", () => {
        const pbMessage = {
            type: 123,
            extraMap: {}
        }

        const receipt = unmarshalProtocol(pbMessage)
        const expected = {
            type: undefined,
            extra: {}
        }
        expect(receipt).toEqual(expected)
    })

    test("set object", () => {
        const testMsg = {
            type: ProtocolType.EthereumConstantinople,
            extra: {
                extra1: 'testExtra1',
                extra2: 'testExtra2'
            }
        }

        marshalProtocol(envelope, testMsg)
        const receipt = unmarshalProtocol(envelope.getProtocol().toObject())
        expect(receipt).toEqual(testMsg)
    })

})