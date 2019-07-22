import envelope_pb from '../../envelope/envelope_pb'
import { marshallProtocol, ProtocolType, unmarshallProtocol } from '../protocol'

let envelope

describe("# marshallTransaction ", () => {
    beforeEach(() => {
        envelope = new envelope_pb.Envelope()
    })

    test("set invalid format", () => {
        const testMsg = true

        expect(() => {
            marshallProtocol(envelope, testMsg)
        }).toThrow('Protocol message has invalid format');
    })

    test("set invalid object format", () => {
        const testMsg = {error: 'testError'}

        expect(() => {
            marshallProtocol(envelope, testMsg)
        }).toThrow('Protocol message do not expect "error" field');
    })

    test("invalid protocol type", () => {
        const testMsg = {
            type: 'invalid.protocol'
        }

        expect(() => {
            marshallProtocol(envelope, testMsg)
        }).toThrow('Cannot convert protocol type "invalid.protocol"');
    })

    test("should unmarshall unknown protocol type", () => {
        const pbMessage = {
            type: 123,
            extraMap: {}
        }

        const receipt = unmarshallProtocol(pbMessage)
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

        marshallProtocol(envelope, testMsg)
        const receipt = unmarshallProtocol(envelope.getProtocol().toObject())
        expect(receipt).toEqual(testMsg)
    })

})