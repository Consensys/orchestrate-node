import tx_pb from './transaction_pb'

export const marshallTransaction = (trace, msg) => {
    let tx = trace.getTx()
    if (tx == null) {
        tx = new tx_pb.Transaction()
    }
    Object.entries(msg).forEach(([key, value]) => {
        switch(key) {
            case 'to':
                marshallTo(tx, value)
                break;
            case 'value':
                marshallValue(tx, value)
                break;
            case 'gas':
                marshallGas(tx, value)
                break;
            case 'gasPrice':
                marshallGasPrice(tx, value)
                break;
            case 'data':
                marshallData(tx, value)
                break;
            case 'raw':
                marshallRaw(tx, value)
                break;
            case 'hash':
                marshallHash(tx, value)
                break;
        }
    })
    trace.setTx(tx)
}

const marshallTo = (transaction, msg) => {
    let txData = transaction.getTxData()
    if (txData == null) {
        txData = new tx_pb.TxData()
    }
    txData.setTo(msg)
    transaction.setTxData(txData)
}

const marshallValue = (transaction, msg) => {
    let txData = transaction.getTxData()
    if (txData == null) {
        txData = new tx_pb.TxData()
    }
    txData.setValue(msg)
    transaction.setTxData(txData)
}

const marshallGas = (transaction, msg) => {
    let txData = transaction.getTxData()
    if (txData == null) {
        txData = new tx_pb.TxData()
    }
    txData.setGas(msg)
    transaction.setTxData(txData)
}

const marshallGasPrice = (transaction, msg) => {
    let txData = transaction.getTxData()
    if (txData == null) {
        txData = new tx_pb.TxData()
    }
    txData.setGasPrice(msg)
    transaction.setTxData(txData)
}

const marshallData = (transaction, msg) => {
    let txData = transaction.getTxData()
    if (txData == null) {
        txData = new tx_pb.TxData()
    }
    txData.setData(msg)
    transaction.setTxData(txData)
}

const marshallRaw = (transaction, msg) => {
    transaction.setRaw(msg)
}

const marshallHash = (transaction, msg) => {
    transaction.setHash(msg)
}