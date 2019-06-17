import envelope_pb from '../../envelope/envelope_pb'
import { marshallChain } from '../chain'

let envelope

describe("# marshallChain ", () => {

    beforeEach(() => {
        envelope = new envelope_pb.Envelope()
    })

    test("set invalid format", () => {
        const testMsg = true

        expect(() => {
            marshallChain(envelope, testMsg)
        }).toThrow();
    })

    test("set invalid object format", () => {
        const testMsg = {error: 'testError'}

        expect(() => {
            marshallChain(envelope, testMsg)
        }).toThrow();
    })

    test("set default string", () => {
        const testMsg = '9'
        marshallChain(envelope, testMsg)
        const chain = envelope.getChain().toObject()
        expect(chain.id).toEqual(testMsg)
        expect(chain.iseip155).toBeFalsy()
    })

    test("set default number", () => {
        const testMsg = 9
        marshallChain(envelope, testMsg)
        const chain = envelope.getChain().toObject()
        expect(chain.id).toEqual(testMsg)
        expect(chain.iseip155).toBeFalsy()
    })

    test("set object", () => {
        const testMsg = {
            id: '9',
            iseip155: true,
        }
        marshallChain(envelope, testMsg)
        const chain = envelope.getChain().toObject()
        expect(chain.id).toEqual(testMsg.id)
        expect(chain.iseip155).toBeTruthy()
    })

    test("marshall multiple times", () => {
        const testMsg = {
            id: '9',
        }
        marshallChain(envelope, testMsg)
        let chain = envelope.getChain().toObject()
        expect(chain.id).toEqual(testMsg.id)
        expect(chain.iseip155).toBeFalsy()

        const testMsg2 = {
            iseip155: true,
        }
        marshallChain(envelope, testMsg2)
        chain = envelope.getChain().toObject()
        expect(chain.id).toEqual(testMsg.id)
        expect(chain.iseip155).toBeTruthy()
    })
})