import * as crypto from 'crypto'
import { Message } from 'kafkajs'

import { tx } from '../../stubs'
import { IGenerateAccountRequest, IRawTransactionRequest, ITransactionRequest } from '../types'

import * as solFormatters from './solidity-formatters'
import * as formatters from './stub-formatters'

export function marshalTransactionRequest(request: ITransactionRequest) {
  const params: tx.IParams = {
    from: request.from,
    to: request.to,
    gas: request.gas ? request.gas.toString() : null,
    gasPrice: request.gasPrice,
    value: request.value,
    nonce: request.nonce ? request.nonce.toString() : null,
    data: request.data,
    contract: formatters.formatContract(request.contractName, request.contractTag),
    methodSignature: request.methodSignature,
    args: solFormatters.formatMethodArgs(request.methodSignature, request.args),
    privateFor: request.privateFor,
    privateFrom: request.privateFrom,
    privacyGroupId: request.privacyGroupId
  }

  const envelopeMessage = marshalTxRequest(request.id, request.chain, request.authToken)
  envelopeMessage.params = params
  envelopeMessage.method = formatters.formatProtocol(request.protocol)
  envelopeMessage.contextLabels = request.contextLabels

  return marshalEnvelope(envelopeMessage)
}

export function marshalRawTransactionRequest(request: IRawTransactionRequest) {
  const params: tx.IParams = {
    raw: request.signedTransaction
  }

  const envelopeMessage = marshalTxRequest(request.id, request.chain, request.authToken)
  envelopeMessage.params = params
  envelopeMessage.method = formatters.formatProtocol(request.protocol)
  envelopeMessage.contextLabels = { ...request.contextLabels, txMode: 'raw' }

  return marshalEnvelope(envelopeMessage)
}

export function marshalGenerateAccountRequest(request: IGenerateAccountRequest) {
  const envelopeMessage = marshalTxRequest(request.id, request.chain, request.authToken)
  envelopeMessage.contextLabels = request.contextLabels

  return marshalEnvelope(envelopeMessage)
}

function marshalEnvelope(envelopeMessage: tx.ITxRequest): Message {
  const { encode } = tx.TxRequest

  // The type is Buffer on Node
  return { value: encode(envelopeMessage).finish() as Buffer, key: marshalKafkaKey(envelopeMessage) }
}

// Attribute kafka partition keys to well attribute nonce
// For a classic eth_sendRawTransaction transaction - <from>@<chain>
// For a eea_sendRawTransaction with a privacyGroupID - <from>@orion-<privacyGroupID>@<chain>
// For a eea_sendRawTransaction with a privateFor - <from>@orion-<hash(privateFor-privateFrom)>@<chain>
export function marshalKafkaKey(envelopeMessage: tx.ITxRequest) {
  if (envelopeMessage.params === undefined || envelopeMessage.params === null) {
    return undefined
  }
  switch (envelopeMessage.method) {
    case tx.Method.EEA_SENDPRIVATETRANSACTION: {
      if (envelopeMessage.params.privacyGroupId !== undefined) {
        return `${envelopeMessage.params.from}@orion-${envelopeMessage.params.privacyGroupId}@${envelopeMessage.chain}`
      } else if (envelopeMessage.params.privateFor?.length! > 0) {
        const raw: string[] = [...envelopeMessage.params.privateFor!, envelopeMessage.params.privateFrom!]
        const key = crypto
          .createHash('md5')
          .update(raw.sort().join('-'))
          .digest('hex')
        return `${envelopeMessage.params.from}@orion-${key}@${envelopeMessage.chain}`
      }
      return `${envelopeMessage.params.from}@orion-${envelopeMessage.chain}`
    }
    default:
      return `${envelopeMessage.params.from}@${envelopeMessage.chain}`
  }
}

function marshalTxRequest(id?: string, chain?: string, authToken?: string) {
  const envelopeMessage: tx.ITxRequest = {
    id,
    chain
  }
  if (authToken) {
    envelopeMessage.headers = { Authorization: authToken, ...envelopeMessage.headers }
  }

  return envelopeMessage
}
