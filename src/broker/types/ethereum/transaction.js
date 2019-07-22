import tx_pb from './transaction_pb'
import { capitalize, unmarshallRawObj } from '../../utils/formatters'
import { marshallData, marshallHash, marshallAccount, marshallQuantity, unmarshallQuantity } from './base'

/**
 * [marshallTransaction takes an envelope protoBuff and a transaction payload as an input and sets the Tx protoBuff in our envelope protoBuff]
 * @param  {Object}  envelope  [envelope protoBuff]
 * @param  {Object}  msg       [transaction payload]
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

/**
 * [marshallTransactionField sets the to, value, gas, nonce, gasPrice and data of the transaction in our TxData protoBuff]
 * @param   {Object}  tx   [tx protoBuff]
 * @param   {Object}  value   [value of the object to be set in our protoBuff]
 */
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

/**
 * [unmarshallRawTx decerialize the Tx protoBuff into a raw transaction paylaod]
 * @param   {Object}  receipt   [tx object of our envelope protoBuff]
 * @return  {Object}  receipt   [raw transaction payload]
 */
export const unmarshallRawTx = tx => {
    const formatList = ['hash', 'raw']
    unmarshallRawObj(tx, formatList)
    if (typeof tx['txData'] === 'object') {
        tx['txData'] = unmarshallRawTxData(tx['txData'])
    }
    return tx
}

/**
 * [unmarshallRawTxData decerialize the txData protoBuff into a txData payload]
 * @param   {Object}  txData   [txData protoBuff]
 * @return  {Object}  txData   [txData payload]
 */
export const unmarshallRawTxData = txData => {
    const formatList = ['data', 'to']
    unmarshallRawObj(txData, formatList)
    txData.value = unmarshallQuantity(txData.value)
    txData.gasPrice = unmarshallQuantity(txData.gasPrice)

    return txData
}
