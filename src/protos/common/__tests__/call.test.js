import { marshallCall, marshallArgs } from '../call'
import trace_pb from '../../trace/trace_pb'
import call_pb from '../../common/call_pb'

let trace

describe("# marshallCall ", () => {

    beforeEach(() => {
        trace = new trace_pb.Trace()
    })

    test("set invalid format", () => {
        const testMsg = 'testName'
        expect(() => {
            marshallCall(trace, testMsg)
        }).toThrow();
    })

    test("set invalid object format", () => {
        const testMsg = {error: 'testError'}

        expect(() => {
            marshallCall(trace, testMsg)
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
        marshallCall(trace, testMsg)
        const call = trace.getCall().toObject()
        expect(call.contract.name).toEqual(testMsg.contract)
        expect(call.method.name).toEqual(testMsg.method)
        expect(call.argsList).toEqual(testMsg.args)
        expect(call.quorum.privateForList).toEqual(testMsg.quorum.privateFor)
    })

    test("marshall multiple times", () => {
        const testMsg = {
            contract: 'testContract',
        }
        marshallCall(trace, testMsg)
        let getCall = trace.getCall().toObject()
        expect(getCall.contract.name).toEqual(testMsg.contract)
        expect(getCall.method).toBeUndefined()
        expect(getCall.argsList).toEqual([])

        const testMsg1 = {
            method: 'testMethode',
        }
        marshallCall(trace, testMsg1)
        getCall = trace.getCall().toObject()
        expect(getCall.contract.name).toEqual(testMsg.contract)
        expect(getCall.method.name).toEqual(testMsg1.method)
        expect(getCall.argsList).toEqual([])


        const testMsg2 = {
            args: ['testArgs'],
        }
        marshallCall(trace, testMsg2)
        getCall = trace.getCall().toObject()
        expect(getCall.contract.name).toEqual(testMsg.contract)
        expect(getCall.method.name).toEqual(testMsg1.method)
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