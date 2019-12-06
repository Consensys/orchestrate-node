import { marshalPrivate } from '../private'
import envelope_pb from '../../envelope/envelope_pb'

let args

describe("# marshalQuorum ", () => {

    beforeEach(() => {
        args = new envelope_pb.Args()
    })

    test("set invalid format", () => {
        const testMsg = 'testName'

        expect(() => {
            marshalPrivate(args, testMsg)
        }).toThrow();
    })

    test("set invalid object format", () => {
        const testMsg = {error: 'testError'}

        expect(() => {
            marshalPrivate(args, testMsg)
        }).toThrow();
    })

    test("set object", () => {
        const testMsg = {
            privateFrom: 'testPrivateFrom',
            privateFor: ['testPrivateFor'],
            privateTxType: 'testType'
        }
        marshalPrivate(args, testMsg)
        const privateProto = args.getPrivate().toObject()
        expect(privateProto.privateFrom).toEqual(testMsg.privateFrom)
        expect(privateProto.privateForList).toEqual(testMsg.privateFor)
        expect(privateProto.privateTxType).toEqual(testMsg.privateTxType)
    })

    test("marshal multiple times", () => {
        const testMsg = {
            privateTxType: 'testType',
            privateFrom: 'testPrivateFrom',
        }
        marshalPrivate(args, testMsg)
        let privateProto = args.getPrivate().toObject()
        expect(privateProto.privateFrom).toEqual(testMsg.privateFrom)
        expect(privateProto.privateForList).toEqual([])
        expect(privateProto.privateTxType).toEqual(testMsg.privateTxType)

        const testMsg2 = {
            privateFor: ['testPrivateFor'],
            privateTxType: 'testType'
        }
        marshalPrivate(args, testMsg2)
        privateProto = args.getPrivate().toObject()
        expect(privateProto.privateFrom).toEqual(testMsg.privateFrom)
        expect(privateProto.privateForList).toEqual(testMsg2.privateFor)
        expect(privateProto.privateTxType).toEqual(testMsg2.privateTxType)
    })

})