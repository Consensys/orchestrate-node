import tx_pb from './transaction_pb'
import { capitalize } from '../../utils/formatters'

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
                        marshallRaw(tx, value)
                        break;
                    case 'hash':
                        marshallHash(tx, value)
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
  txData[`set${capitalize(key)}`](msg)
  transaction.setTxData(txData)
}

const marshallRaw = (transaction, msg) => {
    transaction.setRaw(msg)
}

const marshallHash = (transaction, msg) => {
    transaction.setHash(msg)
}
