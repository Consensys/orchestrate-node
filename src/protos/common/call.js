import call_pb from './call_pb'
import { marshallContract, marshallMethod } from '../abi/abi'
import { marshallQuorum } from '../quorum/quorum'

export const marshallCall = (trace, msg) => {
    let call = trace.getCall()
    if (call == null) {
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
                        throw new Error('Call message do not expect a "' + key + '" field')
                }
            })
            break;
        default:
            throw new Error('Call message not in a valid format')
    }
    trace.setCall(call)
}

export const marshallArgs = (call, msg) => {
    call.setArgsList(msg)
}