import call_pb from './call_pb'
import { marshallContract, marshallMethod } from '../abi/abi'
import { marshallQuorum } from '../quorum/quorum'

/**
 * [marshallCall description]
 * @param  {[type]} envelope [description]
 * @param  {[type]} msg   [description]
 * @return {[type]}       [description]
 */
export const marshallCall = (envelope, msg) => {
    let call = envelope.getCall()
    if (!call) {
        call = new call_pb.Call()
    }
    switch (typeof msg) {
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'contract':
                        marshallContract(call, value)
                        break;
                    case 'method':
                        marshallMethod(call, value)
                        break;
                    case 'args':
                        marshallArgs(call, value)
                        break;
                    case 'quorum':
                        marshallQuorum(call, value)
                        break;
                    default:
                        throw new Error(`Call message do not expect a "${key}" field`)
                }
            })
            break;
        default:
            throw new Error('Call message not in a valid format')
    }
    envelope.setCall(call)
}

/**
 * [marshallArgs description]
 * @param  {[type]} call [description]
 * @param  {[type]} msg  [description]
 * @return {[type]}      [description]
 */
export const marshallArgs = (call, msg) => {
    call.setArgsList(msg)
}
