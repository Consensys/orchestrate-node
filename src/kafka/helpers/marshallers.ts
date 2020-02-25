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
    privateFrom: request.privateFrom
  }

  const envelopeMessage = marshalTxRequest(request.id, request.chainName, request.authToken)
  envelopeMessage.params = params
  envelopeMessage.method = formatters.formatProtocol(request.protocol)
  envelopeMessage.contextLabels = request.contextLabels

  return marshalEnvelope(envelopeMessage)
}

export function marshalRawTransactionRequest(request: IRawTransactionRequest) {
  const params: tx.IParams = {
    raw: request.signedTransaction
  }

  const envelopeMessage = marshalTxRequest(request.id, request.chainName, request.authToken)
  envelopeMessage.params = params
  envelopeMessage.method = formatters.formatProtocol(request.protocol)
  envelopeMessage.contextLabels = { ...request.contextLabels, txMode: 'raw' }

  return marshalEnvelope(envelopeMessage)
}

export function marshalGenerateAccountRequest(request: IGenerateAccountRequest) {
  const params: tx.IParams = {
    value: request.value
  }

  const envelopeMessage = marshalTxRequest(request.id, request.chain, request.authToken)
  envelopeMessage.params = params
  envelopeMessage.contextLabels = request.contextLabels

  return marshalEnvelope(envelopeMessage)
}

function marshalEnvelope(envelopeMessage: tx.ITxRequest): Message {
  const { encode } = tx.TxRequest

  // The type is Buffer on Node
  return { value: encode(envelopeMessage).finish() as Buffer }
}

function marshalTxRequest(id?: string, chainName?: string, authToken?: string) {
  const envelopeMessage: tx.ITxRequest = {
    id,
    chain: chainName
  }
  if (authToken) {
    envelopeMessage.headers = { Authorization: authToken, ...envelopeMessage.headers }
  }

  return envelopeMessage
}
