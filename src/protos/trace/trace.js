import trace_pb from './trace_pb'
import { marshallChain } from '../common/chain'
import { marshallTransaction } from '../ethereum/transaction'
import { marshallSender } from '../common/account'
import { marshallCall } from '../common/call'

export const marshallTrace = msg => {
    const trace = new trace_pb.Trace()
    switch (typeof msg) {
        case 'object':
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
                    case 'privateFrom':
                    case 'privateFor':
                        marshallCall(trace, {quorum: {[key]: value}})
                        break;
                    case 'metadata':
                        marshallMetadata(trace, value)
                        break;
                    default:
                        throw new Error('Trace message do not expect a "' + key + '" field')
                }
            })
            break;
        default:
            throw new Error('Trace message not in a valid format')
    }
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
                    default:
                        throw new Error('Metadata message do not expect a "' + key + '" field')
            
                }
            })
            break;
        default:
            throw new Error('Metadata message not valid')

    }
    trace.setMetadata(metadata)
}

export const unmarshallTrace = msg => {
    const trace = trace_pb.Trace.deserializeBinary(msg)
    const objTrace = trace.toObject()
    return mapToObject(objTrace)
}

const mapToObject = objTrace => {
    if (objTrace['receipt']) {
        const logs = objTrace.receipt.logsList
        const newLogs = logs.map(log => ({...log, decodedDataMap: arrayToObject(log.decodedDataMap)}))
        objTrace.receipt['logsList'] = newLogs
    }
    return objTrace
}

const arrayToObject = array => {
    let obj = {}
    array.forEach(([key, value]) => {
        obj[key] = value
    })
    return obj
}