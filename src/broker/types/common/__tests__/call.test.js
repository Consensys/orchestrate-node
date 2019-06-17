import { marshallCall, marshallArgs } from '../call'
import envelope_pb from '../../envelope/envelope_pb'
import call_pb from '../../common/call_pb'

let envelope

describe("# marshallCall ", () => {

    beforeEach(() => {
        envelope = new envelope_pb.Envelope()
    })

    test("set invalid format", () => {
        const testMsg = 'testName'
        expect(() => {
            marshallCall(envelope, testMsg)
        }).toThrow();
    })

    test("set invalid object format", () => {
        const testMsg = {error: 'testError'}

        expect(() => {
            marshallCall(envelope, testMsg)
        }).toThrow();
    })

    test("set object", () => {
        const testMsg = {
            contract: 'testContract',
            method: 'testMethode',
            args: ['testArgs'],
            quorum: {
                privateFor: ['testPrivateFor'],
            }
        }
        marshallCall(envelope, testMsg)
        const call = envelope.getCall().toObject()
        expect(call.method.signature).toEqual(testMsg.method)
        expect(call.argsList).toEqual(testMsg.args)
        expect(call.quorum.privateForList).toEqual(testMsg.quorum.privateFor)
    })

    test("marshall multiple times", () => {
        const testMsg = {
            quorum: {
                version: "1"
            },
        }
        marshallCall(envelope, testMsg)
        let getCall = envelope.getCall().toObject()
        expect(getCall.quorum.version).toEqual(testMsg.quorum.version)
        expect(getCall.method).toBeUndefined()
        expect(getCall.argsList).toEqual([])

        const testMsg1 = {
            method: 'testMethod',
        }
        marshallCall(envelope, testMsg1)
        getCall = envelope.getCall().toObject()
        expect(getCall.quorum.version).toEqual(testMsg.quorum.version)
        expect(getCall.method.signature).toEqual(testMsg1.method)
        expect(getCall.argsList).toEqual([])


        const testMsg2 = {
            args: ['testArgs'],
        }
        marshallCall(envelope, testMsg2)
        getCall = envelope.getCall().toObject()
        expect(getCall.quorum.version).toEqual(testMsg.quorum.version)
        expect(getCall.method.signature).toEqual(testMsg1.method)
        expect(getCall.argsList).toEqual(testMsg2.args)
    })

})

let call

describe("# marshallArgs ", () => {

    beforeEach(() => {
        call = new call_pb.Call()
    })

    test("set args", () => {
        const testMsg = ['arg1', 'arg2', 'arg3']
        marshallArgs(call, testMsg)
        expect(call.getArgsList()).toEqual(testMsg)
    })

})