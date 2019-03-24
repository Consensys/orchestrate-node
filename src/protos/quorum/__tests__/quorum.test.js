import { marshallQuorum } from '../quorum'
import call_pb from '../../common/call_pb'

let call

describe("# marshallQuorum ", () => {

    beforeEach(() => {
        call = new call_pb.Call()
    })

    test("set invalid format", () => {
        const testMsg = 'testName'

        expect(() => {
            marshallQuorum(call, testMsg)
        }).toThrow();
    })

    test("set invalid object format", () => {
        const testMsg = {error: 'testError'}

        expect(() => {
            marshallQuorum(call, testMsg)
        }).toThrow();
    })

    test("set object", () => {
        const testMsg = {
            version: 'testVersion',
            privateFrom: 'testPrivateFrom',
            privateFor: ['testPrivateFor'],
            privateTxType: 'testType'
        }
        marshallQuorum(call, testMsg)
        const quorum = call.getQuorum().toObject()
        expect(quorum.version).toEqual(testMsg.version)
        expect(quorum.privateFrom).toEqual(testMsg.privateFrom)
        expect(quorum.privateForList).toEqual(testMsg.privateFor)
        expect(quorum.privateTxType).toEqual(testMsg.privateTxType)
    })

    test("marshall multiple times", () => {
        const testMsg = {
            version: 'testVersion',
            privateFrom: 'testPrivateFrom',
        }
        marshallQuorum(call, testMsg)
        let quorum = call.getQuorum().toObject()
        expect(quorum.version).toEqual(testMsg.version)
        expect(quorum.privateFrom).toEqual(testMsg.privateFrom)
        expect(quorum.privateForList).toEqual([])
        expect(quorum.privateTxType).toEqual('')

        const testMsg2 = {
            privateFor: ['testPrivateFor'],
            privateTxType: 'testType'
        }
        marshallQuorum(call, testMsg2)
        quorum = call.getQuorum().toObject()
        expect(quorum.version).toEqual(testMsg.version)
        expect(quorum.privateFrom).toEqual(testMsg.privateFrom)
        expect(quorum.privateForList).toEqual(testMsg2.privateFor)
        expect(quorum.privateTxType).toEqual(testMsg2.privateTxType)
    })

})