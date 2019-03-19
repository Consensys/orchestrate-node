import tx_pb from './transaction_pb'

export const marshallTransaction = (trace, msg) => {
    console.log('trace.toObject()', trace.toObject())
    console.log('trace.getTx()', trace.getTx())

    let tx = trace.getTx()
    if (tx == null) {
        tx = new tx_pb.Transaction()
        console.log('eeeeeeeeeeeeeeeeeeeeeee', msg)

    }
    console.log('tx', tx.toObject())

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

const marshallTo = async (transaction, msg) => {
    let txData = transaction.getTxData()
    if (txData == null) {
        txData = new tx_pb.TxData()
        console.log('fffffffffffffffff', txData.toObject())
    }
    txData.setTo(msg)
    transaction.setTxData(txData)
}

const marshallValue = async (transaction, msg) => {
    let txData = transaction.getTxData()
    if (txData == null) {
        txData = new tx_pb.TxData()
    }
    txData.setValue(msg)
    transaction.setTxdata(txData)
}

const marshallGas = (transaction, msg) => {
    let txData = transaction.getTxData()
    if (txData == null) {
        txData = new tx_pb.TxData()
    }
    txData.setGas(msg)
    transaction.setTxdata(txData)
}

const marshallGasPrice = (transaction, msg) => {
    let txData = transaction.getTxData()
    if (txData == null) {
        txData = new tx_pb.TxData()
    }
    txData.setGasPrice(msg)
    transaction.setTxdata(txData)
}

const marshallData = (transaction, msg) => {
    let txData = transaction.getTxData()
    if (txData == null) {
        txData = new tx_pb.TxData()
    }
    txData.setData(msg)
    transaction.setTxdata(txData)
}

const marshallRaw = (transaction, msg) => {
    transaction.setRaw(msg)
}

const marshallHash = (transaction, msg) => {
    transaction.setHash(msg)
}