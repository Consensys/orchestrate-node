import { marshallPrivate } from '../private'
import envelope_pb from '../../envelope/envelope_pb'

let args

describe("# marshallQuorum ", () => {

    beforeEach(() => {
        args = new envelope_pb.Args()
    })

    test("set invalid format", () => {
        const testMsg = 'testName'

        expect(() => {
            marshallPrivate(args, testMsg)
        }).toThrow();
    })

    test("set invalid object format", () => {
        const testMsg = {error: 'testError'}

        expect(() => {
            marshallPrivate(args, testMsg)
        }).toThrow();
    })

    test("set object", () => {
        const testMsg = {
            privateFrom: 'testPrivateFrom',
            privateFor: ['testPrivateFor'],
            privateTxType: 'testType'
        }
        marshallPrivate(args, testMsg)
        const privateProto = args.getPrivate().toObject()
        expect(privateProto.privateFrom).toEqual(testMsg.privateFrom)
        expect(privateProto.privateForList).toEqual(testMsg.privateFor)
        expect(privateProto.privateTxType).toEqual(testMsg.privateTxType)
    })

    test("marshall multiple times", () => {
        const testMsg = {
            privateTxType: 'testType',
            privateFrom: 'testPrivateFrom',
        }
        marshallPrivate(args, testMsg)
        let privateProto = args.getPrivate().toObject()
        expect(privateProto.privateFrom).toEqual(testMsg.privateFrom)
        expect(privateProto.privateForList).toEqual([])
        expect(privateProto.privateTxType).toEqual(testMsg.privateTxType)

        const testMsg2 = {
            privateFor: ['testPrivateFor'],
            privateTxType: 'testType'
        }
        marshallPrivate(args, testMsg2)
        privateProto = args.getPrivate().toObject()
        expect(privateProto.privateFrom).toEqual(testMsg.privateFrom)
        expect(privateProto.privateForList).toEqual(testMsg2.privateFor)
        expect(privateProto.privateTxType).toEqual(testMsg2.privateTxType)
    })

})