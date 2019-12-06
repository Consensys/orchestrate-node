import receipt_pb from './receipt_pb'
import { marshalHash, marshalAccount } from './base'
import { capitalize, unmarshalRawObj, b64ToHex, rawToHex } from '../../utils/formatters';

/**
 * [marshalReceipt takes an envelope protoBuff and a transaction payload as an input and sets the receipt protoBuff in our envelope protoBuff]
 * @param  {Object}         envelope     [envelope protoBuff]
 * @param  {Object}         msg          [transaction payload]
 */
export const marshalReceipt = (envelope, msg) => {
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
                        receipt[`set${capitalize(key)}`](marshalHash(value))
                        break;
                    case 'contractAddress':
                        receipt[`set${capitalize(key)}`](marshalAccount(value))
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
                        marshalLogs(receipt, value)
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
 * [marshalLogs takes the logList array of a transaction as an input and output a protoBuff version of it]
 * @param  {Object}         envelope     [envelope protoBuff]
 * @param  {Object}         msg          [logList array]
 */
export const marshalLogs = (receipt, msg) => {
    if(typeof msg === 'object') {
        msg.forEach(log => {
            if(typeof log === 'object') {
                const logpb = new receipt_pb.Log()
                Object.entries(log).forEach(([key, value]) => {
                    switch(key) {
                        case 'address':
                            logpb[`set${capitalize(key)}`](marshalAccount(value))
                            break;
                        case 'txHash':
                        case 'blockHash':
                            logpb[`set${capitalize(key)}`](marshalHash(value))
                            break;
                        case 'event':
                        case 'blockNumber':
                        case 'txIndex':
                        case 'index':
                        case 'removed':
                            logpb[`set${capitalize(key)}`](value)
                            break;
                        case 'topics':
                            marshalTopics(logpb, value)
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

/**
 * [marshalTopics a topicList as an input and sets it in our log protoBuff]
 * @param  {Object}  logpb   [log protoBuff]
 * @param  {Object}  msg     [topicList array]
 */
export const marshalTopics = (logpb, msg) => {
    if(Array.isArray(msg)) {
        msg.forEach(topic => {
            logpb.addTopics(marshalHash(topic))
        })
    }
}


/**
 * [unmarshalRawReceipt decerialize the Receipt protoBuff into a receipt payload]
 * @param   {Object}  receipt   [receipt object of our envelope protoBuff]
 * @return  {Object}  receipt   [raw receipt payload]
 */
export const unmarshalRawReceipt = receipt => {
    const format = ['txHash', 'blockHash', 'contractAddress']
    unmarshalRawObj(receipt, format)

    if (receipt['logsList']) {
        receipt['logsList'] = receipt['logsList'].map(log => unmarshalRawLog(log)) 
    }
    if (receipt['bloom']) {
        receipt['bloom'] = b64ToHex(receipt['bloom'])
    }
    return receipt
}

/**
 * [unmarshalRawLog decerialize the Log protoBuff into a LogList]
 * @param   {Object}  log   [Log object of our envelope protoBuff]
 * @return  {Object}  log   [LogList object]
 */
export const unmarshalRawLog = log => {
    const format = ['address', 'blockHash', 'txHash']
    unmarshalRawObj(log, format)

    if (log['data']) {
        log['data'] = b64ToHex(log['data'])
    }

    if (log['topicsList']) {
        log['topicsList'] = log['topicsList'].map(topic => rawToHex(topic)) 
    }
    return log
}