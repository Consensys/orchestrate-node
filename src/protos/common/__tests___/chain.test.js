import trace_pb from '../../trace/trace_pb'
import { marshallChain } from '../chain'
import * as Utils from 'web3-utils'

let trace

describe("# marshallChain ", () => {

    beforeEach(() => {
        trace = new trace_pb.Trace()
    })

    test("set default", () => {
        const testMsg = '9'
        marshallChain(trace, testMsg)
        const chain = trace.getChain().toObject()
        expect(chain.id).toEqual(Utils.toHex(testMsg))
        expect(chain.iseip155).toBeFalsy()
    })

    test("set object", () => {
        const testMsg = {
            id: '9',
            iseip155: true,
        }
        marshallChain(trace, testMsg)
        const chain = trace.getChain().toObject()
        expect(chain.id).toEqual(Utils.toHex(testMsg.id))
        expect(chain.iseip155).toBeTruthy()
    })

    test("marshall multiple times", () => {
        const testMsg = {
            id: '9',
        }
        marshallChain(trace, testMsg)
        let chain = trace.getChain().toObject()
        expect(chain.id).toEqual(Utils.toHex(testMsg.id))
        expect(chain.iseip155).toBeFalsy()

        const testMsg2 = {
            iseip155: true,
        }
        marshallChain(trace, testMsg2)
        chain = trace.getChain().toObject()
        expect(chain.id).toEqual(Utils.toHex(testMsg.id))
        expect(chain.iseip155).toBeTruthy()
    })
})