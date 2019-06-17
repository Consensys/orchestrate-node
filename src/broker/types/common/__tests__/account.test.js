import { marshallSender, marshallReceiver } from '../account'
import envelope_pb from '../../envelope/envelope_pb'

let envelope

describe("# marshallSender ", () => {

    beforeEach(() => {
        envelope = new envelope_pb.Envelope()
    })

    test("set invalid format", () => {
        const testMsg = true

        expect(() => {
            marshallSender(envelope, testMsg)
        }).toThrow();
    })

    test("set invalid object format", () => {
        const testMsg = {error: 'testError'}

        expect(() => {
            marshallSender(envelope, testMsg)
        }).toThrow();
    })

    test("set default", () => {
        const testMsg = 'testName'
        marshallSender(envelope, testMsg)
        const sender = envelope.getSender().toObject()
        expect(sender.addr).toEqual(testMsg)
        expect(sender.id).toEqual('')
    })

    test("set object", () => {
        const testMsg = {
            id: 'testId',
            addr: 'testAddr',
        }
        marshallSender(envelope, testMsg)
        const sender = envelope.getSender().toObject()
        expect(sender.addr).toEqual(testMsg.addr)
        expect(sender.id).toEqual(testMsg.id)
    })

    test("marshall multiple times", () => {
        const testMsg = {
            addr: 'testAddr',
        }
        marshallSender(envelope, testMsg)
        let sender = envelope.getSender().toObject()
        expect(sender.addr).toEqual(testMsg.addr)
        expect(sender.id).toEqual('')

        const testMsg2 = {
            id: 'testId',
        }
        marshallSender(envelope, testMsg2)
        sender = envelope.getSender().toObject()
        expect(sender.addr).toEqual(testMsg.addr)
        expect(sender.id).toEqual(testMsg2.id)
    })

})

describe("# marshallReceiver ", () => {

    beforeEach(() => {
        envelope = new envelope_pb.Envelope()
    })

    test("set invalid format", () => {
        const testMsg = true

        expect(() => {
            marshallReceiver(envelope, testMsg)
        }).toThrow();
    })

    test("set invalid object format", () => {
        const testMsg = {error: 'testError'}

        expect(() => {
            marshallReceiver(envelope, testMsg)
        }).toThrow();
    })

    test("set default", () => {
        const testMsg = 'testName'
        marshallReceiver(envelope, testMsg)
        const receiver = envelope.getReceiver().toObject()
        expect(receiver.addr).toEqual(testMsg)
        expect(receiver.id).toEqual('')
    })

    test("set object", () => {
        const testMsg = {
            id: 'testId',
            addr: 'testAddr',
        }
        marshallReceiver(envelope, testMsg)
        const receiver = envelope.getReceiver().toObject()
        expect(receiver.addr).toEqual(testMsg.addr)
        expect(receiver.id).toEqual(testMsg.id)
    })

    test("marshall multiple times", () => {
        const testMsg = {
            addr: 'testAddr',
        }
        marshallReceiver(envelope, testMsg)
        let receiver = envelope.getReceiver().toObject()
        expect(receiver.addr).toEqual(testMsg.addr)
        expect(receiver.id).toEqual('')

        const testMsg2 = {
            id: 'testId',
        }
        marshallReceiver(envelope, testMsg2)
        receiver = envelope.getReceiver().toObject()
        expect(receiver.addr).toEqual(testMsg.addr)
        expect(receiver.id).toEqual(testMsg2.id)
    })

})