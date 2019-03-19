import trace_pb from './trace_pb'
import { marshallChain } from '../common/chain'
import { marshallTransaction } from '../ethereum/transaction'
import { marshallSender } from '../common/account'
import { marshallCall } from '../common/call'

export const marshallTrace = msg => {
    const trace = new trace_pb.Trace()

    Object.entries(msg).forEach(([key, value]) => {
        switch(key) {
            case 'chainId':
                marshallChain(trace, value)
                break;
            case 'to':
            case 'value':
            case 'gas':
            case 'gasPrice':
            case 'data':
            case 'raw':
            case 'hash':
                marshallTransaction(trace, {[key]: value})
                break;
            case 'from':
                marshallSender(trace, value)
                break;
            case 'call':
                marshallCall(trace, value)
                break;
            case 'metadata':
                marshallMetadata(trace, value)
                break;
        }
    })
    
    return trace
}

export const marshallMetadata = (trace, msg) => {
    let metadata = trace.getMetadata()
    if (metadata == null) {
        metadata = new trace_pb.Metadata()
    }
    switch (typeof msg) {
        case 'string':
            metadata.setId(msg)
            break;
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'id':
                        metadata.setId(value)
                        break;
                    case 'extra':
                        const extra = metadata.getExtraMap()
                        Object.entries(value).forEach(([keyMap, valueMap]) => {
                            extra.set(keyMap, valueMap)
                        })
                        break;
                }
            })
            break;
    }

    trace.setMetadata(metadata)
}

export const unmarshallTrace = msg => {
    const trace = trace_pb.Trace.deserializeBinary(msg)
    return trace.toObject()
}