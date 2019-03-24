import { marshallSender, marshallReceiver } from '../account'
import trace_pb from '../../trace/trace_pb'

let trace

describe("# marshallSender ", () => {

    beforeEach(() => {
        trace = new trace_pb.Trace()
    })

    test("set invalid format", () => {
        const testMsg = true

        expect(() => {
            marshallSender(trace, testMsg)
        }).toThrow();
    })

    test("set invalid object format", () => {
        const testMsg = {error: 'testError'}

        expect(() => {
            marshallSender(trace, testMsg)
        }).toThrow();
    })

    test("set default", () => {
        const testMsg = 'testName'
        marshallSender(trace, testMsg)
        const sender = trace.getSender().toObject()
        expect(sender.addr).toEqual(testMsg)
        expect(sender.id).toEqual('')
    })

    test("set object", () => {
        const testMsg = {
            id: 'testId',
            addr: 'testAddr',
        }
        marshallSender(trace, testMsg)
        const sender = trace.getSender().toObject()
        expect(sender.addr).toEqual(testMsg.addr)
        expect(sender.id).toEqual(testMsg.id)
    })

    test("marshall multiple times", () => {
        const testMsg = {
            addr: 'testAddr',
        }
        marshallSender(trace, testMsg)
        let sender = trace.getSender().toObject()
        expect(sender.addr).toEqual(testMsg.addr)
        expect(sender.id).toEqual('')

        const testMsg2 = {
            id: 'testId',
        }
        marshallSender(trace, testMsg2)
        sender = trace.getSender().toObject()
        expect(sender.addr).toEqual(testMsg.addr)
        expect(sender.id).toEqual(testMsg2.id)
    })

})

describe("# marshallReceiver ", () => {

    beforeEach(() => {
        trace = new trace_pb.Trace()
    })

    test("set invalid format", () => {
        const testMsg = true

        expect(() => {
            marshallReceiver(trace, testMsg)
        }).toThrow();
    })

    test("set invalid object format", () => {
        const testMsg = {error: 'testError'}

        expect(() => {
            marshallReceiver(trace, testMsg)
        }).toThrow();
    })

    test("set default", () => {
        const testMsg = 'testName'
        marshallReceiver(trace, testMsg)
        const receiver = trace.getReceiver().toObject()
        expect(receiver.addr).toEqual(testMsg)
        expect(receiver.id).toEqual('')
    })

    test("set object", () => {
        const testMsg = {
            id: 'testId',
            addr: 'testAddr',
        }
        marshallReceiver(trace, testMsg)
        const receiver = trace.getReceiver().toObject()
        expect(receiver.addr).toEqual(testMsg.addr)
        expect(receiver.id).toEqual(testMsg.id)
    })

    test("marshall multiple times", () => {
        const testMsg = {
            addr: 'testAddr',
        }
        marshallReceiver(trace, testMsg)
        let receiver = trace.getReceiver().toObject()
        expect(receiver.addr).toEqual(testMsg.addr)
        expect(receiver.id).toEqual('')

        const testMsg2 = {
            id: 'testId',
        }
        marshallReceiver(trace, testMsg2)
        receiver = trace.getReceiver().toObject()
        expect(receiver.addr).toEqual(testMsg.addr)
        expect(receiver.id).toEqual(testMsg2.id)
    })

})