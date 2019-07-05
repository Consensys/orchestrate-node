import tx_pb from './transaction_pb'
import { capitalize, unmarshallRawObj } from '../../utils/formatters'
import { marshallData, marshallHash, marshallAccount, marshallQuantity, unmarshallQuantity } from './base'

/**
 * [marshallTransaction description]
 * @param  {[type]} envelope [description]
 * @param  {[type]} msg   [description]
 * @return {[type]}       [description]
 */
export const marshallTransaction = (envelope, msg) => {
    let tx = envelope.getTx()
    if (!tx) {
        tx = new tx_pb.Transaction()
    }
    switch (typeof msg) {
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'to':
                    case 'value':
                    case 'gas':
                    case 'gasPrice':
                    case 'data':
                        marshallTransactionField(key)(tx, value)
                        break;
                    case 'raw':
                        tx.setRaw(marshallData(value))
                        break;
                    case 'hash':
                        tx.setHash(marshallHash(value))
                        break;
                    default:
                        throw new Error(`Tx message do not expect a "${key}" field`)
                }
            })
            break;
        default:
            throw new Error('Tx message not in a valid format')
    }
    envelope.setTx(tx)
}

const marshallTransactionField = key => (transaction, msg) => {
  let txData = transaction.getTxData()
  if (!txData) {
      txData = new tx_pb.TxData()
  }
  switch(key) {
    case 'gas':
    case 'nonce':
        txData[`set${capitalize(key)}`](msg)
        break;
    case 'to':
        txData[`set${capitalize(key)}`](marshallAccount(msg))
        break;
    case 'value':
    case 'gasPrice':
        txData[`set${capitalize(key)}`](marshallQuantity(msg))
        break;
    case 'data':
        txData[`set${capitalize(key)}`](marshallData(msg))
        break;
    default:
        throw new Error(`Tx message do not expect a "${key}" field`)
    }
  transaction.setTxData(txData)
}

export const unmarshallRawTx = tx => {
    const formatList = ['hash', 'raw']
    unmarshallRawObj(tx, formatList)
    if (typeof tx['txData'] === 'object') {
        tx['txData'] = unmarshallRawTxData(tx['txData'])
    }
    return tx
}


export const unmarshallRawTxData = txData => {
    const formatList = ['data', 'to']
    unmarshallRawObj(txData, formatList)
    txData.value = unmarshallQuantity(txData.value)
    txData.gasPrice = unmarshallQuantity(txData.gasPrice)

    return txData
}
