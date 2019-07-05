import receipt_pb from './receipt_pb'
import { marshallHash, marshallAccount } from './base'
import { capitalize, unmarshallRawObj, b64ToHex, rawToHex } from '../../utils/formatters';

/**
 * [marshallReceipt description]
 * @param  {[type]} envelope [description]
 * @param  {[type]} msg   [description]
 * @return {[type]}       [description]
 */
export const marshallReceipt = (envelope, msg) => {
    let receipt = envelope.getReceipt()
    if (!receipt) {
        receipt = new receipt_pb.Receipt()
    }
    switch (typeof msg) {
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'txHash':
                    case 'blockHash':
                        receipt[`set${capitalize(key)}`](marshallHash(value))
                        break;
                    case 'contractAddress':
                        receipt[`set${capitalize(key)}`](marshallAccount(value))
                        break;
                    case 'blockNumber':
                    case 'txIndex':
                    case 'status':
                    case 'gasUsed':
                    case 'cumulativeGasUsed':
                        receipt[`set${capitalize(key)}`](value)
                        break;
                    case 'postState':
                        receipt.setPostState(Buffer.from(value.substr(2), "hex"))
                        break;
                    case 'bloom':
                        receipt.setBloom(Buffer.from(value.substr(2), "hex"))
                        break;
                    case 'logs':
                        marshallLogs(receipt, value)
                        break;
                    default:
                        throw new Error(`Metadata message do not expect a "${key}" field`)
                }
            })
            break;
        default:
            throw new Error('Metadata message not valid')

    }
    envelope.setReceipt(receipt)

}

/**
 * [marshallLogs description]
 * @param  {[type]} receipt [description]
 * @param  {[type]} msg     [description]
 * @return {[type]}         [description]
 */
export const marshallLogs = (receipt, msg) => {
    if(typeof msg === 'object') {
        msg.forEach(log => {
            if(typeof log === 'object') {
                const logpb = new receipt_pb.Log()
                Object.entries(log).forEach(([key, value]) => {
                    switch(key) {
                        case 'address':
                            logpb[`set${capitalize(key)}`](marshallAccount(value))
                            break;
                        case 'txHash':
                        case 'blockHash':
                            logpb[`set${capitalize(key)}`](marshallHash(value))
                            break;
                        case 'event':
                        case 'blockNumber':
                        case 'txIndex':
                        case 'index':
                        case 'removed':
                            logpb[`set${capitalize(key)}`](value)
                            break;
                        case 'topics':
                            marshallTopics(logpb, value)
                            break;
                        case 'data':
                            logpb.setData(Buffer.from(value.substr(2), "hex"))
                            break;
                        case 'decodedData':
                            const decodedData = logpb.getDecodedDataMap()
                            Object.entries(value).forEach(([keyMap, valueMap]) => {
                                decodedData.set(keyMap, valueMap)
                            })
                            break;
                        default:
                            throw new Error(`Logs message do not expect a "${key}" field`)
                    }
                })
                receipt.addLogs(logpb)
            } else {
                throw new Error('Logs message not valid')
            }
        })
    } else {
        throw new Error('Logs message not valid')
    }

}

export const marshallTopics = (logpb, msg) => {
    if(Array.isArray(msg)) {
        msg.forEach(topic => {
            logpb.addTopics(marshallHash(topic))
        })
    }
}


export const unmarshallRawReceipt = receipt => {
    const format = ['txHash', 'blockHash', 'contractAddress']
    unmarshallRawObj(receipt, format)

    if (receipt['logsList']) {
        receipt['logsList'] = receipt['logsList'].map(log => unmarshallRawLog(log)) 
    }
    if (receipt['bloom']) {
        receipt['bloom'] = b64ToHex(receipt['bloom'])
    }
    return receipt
}

export const unmarshallRawLog = log => {
    const format = ['address', 'blockHash', 'txHash']
    unmarshallRawObj(log, format)

    if (log['data']) {
        log['data'] = b64ToHex(log['data'])
    }

    if (log['topicsList']) {
        log['topicsList'] = log['topicsList'].map(topic => rawToHex(topic)) 
    }
    return log
}