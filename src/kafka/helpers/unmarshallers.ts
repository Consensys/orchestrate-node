import { error, ethereum, tx } from '../../stubs'
import { IResponseValue } from '../types'
import { IReceipt } from '../types/IReceipt'
import { ITransactionContext } from '../types/ITransactionContext'

export function unmarshalEnvelope(data: Buffer): IResponseValue {
  const envelopeMessage = tx.TxResponse.decode(data)
  return {
    id: envelopeMessage.id!,
    txContext: parseTxContext(envelopeMessage.transaction),
    receipt: parseReceipt(envelopeMessage.receipt),
    jobUUID: envelopeMessage.jobUUID!,
    errors: parseErrors(envelopeMessage.errors),
    chain: envelopeMessage.chain,
    contextLabels: envelopeMessage.contextLabels!
  }
}

function parseTxContext(transaction?: ethereum.ITransaction | null): ITransactionContext | undefined {
  if (transaction) {
    return {
      from: parseString(transaction.from),
      nonce: parseStringNumber(transaction.nonce),
      to: parseString(transaction.to),
      value: parseString(transaction.value),
      gas: parseStringNumber(transaction.gas),
      gasPrice: parseString(transaction.gasPrice),
      gasTipCap: parseString(transaction.gasTipCap),
      gasFeeCap: parseString(transaction.gasFeeCap),
      txType: parseString(transaction.txType),
      input: parseString(transaction.data),
      raw: parseString(transaction.raw),
      txHash: parseString(transaction.txHash)
    }
  }
}

function parseReceipt(receipt?: ethereum.IReceipt | null): IReceipt | undefined {
  if (receipt) {
    const status = !(receipt.status as Long).isZero()

    return {
      blockHash: parseString(receipt.blockHash),
      blockNumber: parseNumber(receipt.blockNumber),
      txIndex: parseNumber(receipt.txIndex),
      txHash: parseString(receipt.txHash),
      status,
      contractAddress: parseString(receipt.contractAddress),
      gasUsed: parseNumber(receipt.gasUsed),
      cumulativeGasUsed: parseNumber(receipt.cumulativeGasUsed),
      effectiveGasPrice: parseString(receipt.effectiveGasPrice),
      postState: parseString(receipt.postState),
      bloom: parseString(receipt.bloom),
      logs: parseLogs(receipt.logs),
      revertReason: parseString(receipt.revertReason),
      output: parseString(receipt.output),
      privateFrom: parseString(receipt.privateFrom),
      privateFor: receipt.privateFor ? receipt.privateFor : undefined,
      privacyGroupId: parseString(receipt.privacyGroupId),
      contractName: parseString(receipt.contractName),
      contractTag: parseString(receipt.contractTag)
    }
  }
}

function parseErrors(errors?: error.IError[] | null) {
  if (errors && errors.length !== 0) {
    return errors.map((err) => ({
      code: err.code ? Number(err.code) : undefined,
      message: err.message ? err.message : undefined,
      component: err.component ? err.component : undefined
    }))
  }
}

function parseLogs(logs?: ethereum.ILog[] | null) {
  if (logs && logs.length !== 0) {
    return logs.map((log) => ({
      address: parseString(log.address),
      topics: parseStringArray(log.topics),
      data: parseString(log.data),
      event: log.event ? log.event : undefined,
      decodedData: log.decodedData ? log.decodedData : undefined,
      blockNumber: parseNumber(log.blockNumber),
      txHash: parseString(log.txHash),
      txIndex: parseNumber(log.txIndex),
      blockHash: parseString(log.blockHash),
      index: parseNumber(log.index),
      removed: Boolean(log.removed)
    }))
  }
}

function parseString(value?: string | null) {
  return value ? value : undefined
}

function parseStringNumber(value?: string | null) {
  return value ? Number(value) : undefined
}

function parseStringArray(arr?: string[] | null) {
  if (arr && arr.length !== 0) {
    return arr.map((el) => el)
  }
}

function parseNumber(value?: number | Long | null) {
  return value ? Number(value) : undefined
}
