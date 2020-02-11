import { abi, args, chain, envelope, error, ethereum } from '../../stubs'
import { IResponseValue } from '../types'
import { IReceipt } from '../types/IReceipt'
import { ITransactionContext } from '../types/ITransactionContext'
import { ProtocolType } from '../types/ProtocolType'

export function unmarshalEnvelope(data: Buffer): IResponseValue {
  const envelopeMessage = envelope.Envelope.decode(data)
  return mapEnvelopeToResponse(envelopeMessage)
}

function mapEnvelopeToResponse(envelopeMessage: envelope.IEnvelope): IResponseValue {
  return {
    id: envelopeMessage.metadata!.id!,
    from: parseString(envelopeMessage.from),
    txContext: parseTxContext(envelopeMessage),
    receipt: parseReceipt(envelopeMessage.receipt),
    errors: parseErrors(envelopeMessage.errors),
    extraData: parseMetadata(envelopeMessage.metadata)
  }
}

function parseChainUUID(chainMessage?: chain.IChain | null) {
  return chainMessage && chainMessage.uuid ? chainMessage.uuid : undefined
}

function parseChainName(chainMessage?: chain.IChain | null) {
  return chainMessage && chainMessage.name ? chainMessage.name : undefined
}

function parseProtocol(value?: chain.IProtocol | null) {
  if (value && value.type) {
    switch (value.type) {
      case chain.ProtocolType.BESU_ORION:
        return ProtocolType.BesuOrion
      case chain.ProtocolType.QUORUM_CONSTELLATION:
        return ProtocolType.QuorumConstellation
      case chain.ProtocolType.QUORUM_TESSERA:
        return ProtocolType.QuorumTessera
      default:
        return ProtocolType.EthereumConstantinople
    }
  }
}

function parseTxContext(envelopeMessage: envelope.IEnvelope): ITransactionContext | undefined {
  const { args: argsV, tx } = envelopeMessage

  // A complete transaction context exists if we have a contract name
  if (argsV && argsV.call && argsV.call.contract && argsV.call.contract.id && argsV.call.contract.id.name) {
    return {
      contractName: argsV.call.contract.id.name,
      contractTag: parseString(argsV.call.contract.id.tag),
      chainUUID: parseChainUUID(envelopeMessage.chain),
      chainName: parseChainName(envelopeMessage.chain),
      from: parseString(envelopeMessage.from),
      protocol: parseProtocol(envelopeMessage.protocol),
      methodSignature: parseMethod(argsV.call.method),
      input: parseString(argsV.data),
      args: parseStringArray(argsV.call.args),
      ...parseTx(tx),
      ...parsePrivate(argsV.private)
    }
  }
}

function parseReceipt(receipt?: ethereum.IReceipt | null): IReceipt | undefined {
  if (receipt) {
    return {
      blockHash: parseString(receipt.blockHash),
      blockNumber: parseNumber(receipt.blockNumber),
      txIndex: receipt.txIndex ? Number(receipt.txIndex) : undefined,
      txHash: parseString(receipt.txHash),
      status: receipt.status ? Boolean(receipt.status) : undefined,
      contractAddress: parseString(receipt.contractAddress),
      gasUsed: receipt.gasUsed ? Number(receipt.gasUsed) : undefined,
      cumulativeGasUsed: receipt.cumulativeGasUsed ? Number(receipt.cumulativeGasUsed) : undefined,
      postState: parseString(receipt.postState),
      bloom: parseString(receipt.bloom),
      logs: parseLogs(receipt.logs)
    }
  }
}

function parseErrors(errors?: error.IError[] | null) {
  if (errors && errors.length !== 0) {
    return errors.map(err => ({
      code: err.code ? Number(err.code) : undefined,
      message: err.message ? err.message : undefined,
      component: err.component ? err.component : undefined
    }))
  }
}

function parseLogs(logs?: ethereum.ILog[] | null) {
  if (logs && logs.length !== 0) {
    return logs.map(log => ({
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

function parseMetadata(metadata?: envelope.IMetadata | null) {
  return metadata && metadata.extra ? metadata.extra : undefined
}

function parseMethod(method?: abi.IMethod | null) {
  return method && method.signature ? method.signature : undefined
}

function parseString(value?: string | null) {
  return value ? value : undefined
}

function parseStringArray(arr?: string[] | null) {
  if (arr && arr.length !== 0) {
    return arr.map(el => el)
  }
}

function parseTx(tx?: ethereum.ITransaction | null) {
  if (tx && tx.txData) {
    const value = parseString(tx.txData.value)
    const gas = parseNumber(tx.txData.gas)
    const gasPrice = parseString(tx.txData.gasPrice)
    const nonce = parseNumber(tx.txData.nonce)
    const to = parseString(tx.txData.to)

    return {
      value,
      gas,
      gasPrice,
      nonce,
      to
    }
  }
}

function parsePrivate(priv?: args.IPrivate | null) {
  if (priv) {
    const privateFrom = parseString(priv.privateFrom)
    const privateFor = parseStringArray(priv.privateFor)

    return {
      privateFrom,
      privateFor
    }
  }
}

function parseNumber(value?: number | Long | null) {
  return value ? Number(value) : undefined
}
