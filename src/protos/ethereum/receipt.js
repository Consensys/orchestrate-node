import receipt_pb from './receipt_pb'

export const marshallReceipt = (trace, msg) => {
    let receipt = trace.getReceipt()
    if (receipt == null) {
        receipt = new receipt_pb.Receipt()
    }
    switch (typeof msg) {
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'txHash':
                        receipt.setTxHash(value)
                        break;
                    case 'blockHash':
                        receipt.setBlockHash(value)
                        break;
                    case 'blockNumber':
                        receipt.setBlockNumber(value)
                        break;
                    case 'txIndex':
                        receipt.setTxIndex(value)
                        break;
                    case 'contractAddress':
                        receipt.setContractAddress(value)
                        break;
                    case 'postState':
                        receipt.setPostState(Buffer.from(value.substr(2), "hex"))
                        break;
                    case 'status':
                        receipt.setStatus(value)
                        break;
                    case 'bloom':
                        receipt.setBloom(Buffer.from(value.substr(2), "hex"))
                        break;
                    case 'logs':
                        marshallLogs(receipt, value)
                        break;
                    case 'gasUsed':
                        receipt.setGasUsed(value)
                        break;
                    case 'cumulativeGasUsed':
                        receipt.setCumulativeGasUsed(value)
                        break;
                    default:
                        throw new Error('Metadata message do not expect a "' + key + '" field')
                }
            })
            break;
        default:
            throw new Error('Metadata message not valid')

    }
    trace.setReceipt(receipt)

}

export const marshallLogs = (receipt, msg) => {
    if(Array.isArray(msg)) {
        msg.forEach(log => {
            if(typeof log == 'object') {
                const logpb = new receipt_pb.Log()
                Object.entries(log).forEach(([key, value]) => {
                    switch(key) {
                        case 'address':
                            logpb.setAddress(value)
                            break;
                        case 'topics':
                            logpb.setTopicsList(value)
                            break;
                        case 'data':
                            logpb.setData(Buffer.from(value.substr(2), "hex"))
                            break;
                        case 'event':
                            logpb.setEvent(value)
                            break;
                        case 'decodedData':
                            const decodedData = logpb.getDecodedDataMap()
                            Object.entries(value).forEach(([keyMap, valueMap]) => {
                                decodedData.set(keyMap, valueMap)
                            })
                            break;
                        case 'blockNumber':
                            logpb.setBlockNumber(value)
                            break;
                        case 'txHash':
                            logpb.setTxHash(value)
                            break;
                        case 'txIndex':
                            logpb.setTxIndex(value)
                            break;
                        case 'blockHash':
                            logpb.setBlockHash(value)
                            break;
                        case 'index':
                            logpb.setIndex(value)
                            break;
                        case 'removed':
                            logpb.setRemoved(value)
                            break;
                        default:
                            throw new Error('Logs message do not expect a "' + key + '" field')
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