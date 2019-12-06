import tx_pb from './transaction_pb'
import { capitalize, unmarshalRawObj } from '../../utils/formatters'
import { marshalData, marshalHash, marshalAccount, marshalQuantity, unmarshalQuantity } from './base'

/**
 * [marshalTransaction takes an envelope protoBuff and a transaction payload as an input and sets the Tx protoBuff in our envelope protoBuff]
 * @param  {Object}  envelope  [envelope protoBuff]
 * @param  {Object}  msg       [transaction payload]
 */
export const marshalTransaction = (envelope, msg) => {
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
                    case 'nonce':
                        marshalTransactionField(key)(tx, value)
                        break;
                    case 'raw':
                        tx.setRaw(marshalData(value))
                        break;
                    case 'hash':
                        tx.setHash(marshalHash(value))
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
 * [marshalTransactionField sets the to, value, gas, nonce, gasPrice and data of the transaction in our TxData protoBuff]
 * @param   {Object}  tx   [tx protoBuff]
 * @param   {Object}  value   [value of the object to be set in our protoBuff]
 */
const marshalTransactionField = key => (transaction, msg) => {
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
        txData[`set${capitalize(key)}`](marshalAccount(msg))
        break;
    case 'value':
    case 'gasPrice':
        txData[`set${capitalize(key)}`](marshalQuantity(msg))
        break;
    case 'data':
        txData[`set${capitalize(key)}`](marshalData(msg))
        break;
    default:
        throw new Error(`Tx message do not expect a "${key}" field`)
    }
  transaction.setTxData(txData)
}

/**
 * [unmarshalRawTx decerialize the Tx protoBuff into a raw transaction paylaod]
 * @param   {Object}  receipt   [tx object of our envelope protoBuff]
 * @return  {Object}  receipt   [raw transaction payload]
 */
export const unmarshalRawTx = tx => {
    const formatList = ['hash', 'raw']
    unmarshalRawObj(tx, formatList)
    if (typeof tx['txData'] === 'object') {
        tx['txData'] = unmarshalRawTxData(tx['txData'])
    }
    return tx
}

/**
 * [unmarshalRawTxData decerialize the txData protoBuff into a txData payload]
 * @param   {Object}  txData   [txData protoBuff]
 * @return  {Object}  txData   [txData payload]
 */
export const unmarshalRawTxData = txData => {
    const formatList = ['data', 'to']
    unmarshalRawObj(txData, formatList)
    txData.value = unmarshalQuantity(txData.value)
    txData.gasPrice = unmarshalQuantity(txData.gasPrice)

    return txData
}
