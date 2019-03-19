import call_pb from './call_pb'
import { marshallContract, marshallMethod } from '../abi/abi'

export const marshallCall = (trace, msg) => {
    let call = trace.getCall()
    if (call == null) {
        call = new call_pb.Call()
    }
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
        }
    })
    trace.setCall(call)
}

export const marshallArgs = (call, msg) => {
    call.setArgsList(msg)
}