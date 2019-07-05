import { marshallProtocol, unmarshallProtocol } from '../protocol'
import envelope_pb from '../../envelope/envelope_pb'

let envelope

describe("# marshallTransaction ", () => {
    beforeEach(() => {
        envelope = new envelope_pb.Envelope()
    })

    test("set invalid format", () => {
        const testMsg = true

        expect(() => {
            marshallProtocol(envelope, testMsg)
        }).toThrow();
    })

    test("set invalid object format", () => {
        const testMsg = {error: 'testError'}

        expect(() => {
            marshallProtocol(envelope, testMsg)
        }).toThrow();
    })
    test("set object", () => {
        const testMsg = {
            name: 'test',
            tag: 'test',
            extra: {
                extra1: 'testExtra1',
                extra2: 'testExtra2'
            }
        }
        marshallProtocol(envelope, testMsg)
        const receipt = unmarshallProtocol(envelope.getProtocol().toObject())
        const expected = {
            name: 'test',
            tag: 'test',
            extraMap: {
                extra1: 'testExtra1',
                extra2: 'testExtra2'
            }        
        }
        expect(receipt).toEqual(expected)

    })
    
})