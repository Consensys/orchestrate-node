import { utils } from 'ethers'
import { Message } from 'kafkajs'

import { envelope } from '../../stubs'
import { IGenerateAccountRequest, IRawTransactionRequest, ITransactionRequest } from '../types'

import * as formatters from './stub-formatters'

export function marshalTransactionRequest(request: ITransactionRequest) {
  const envelopeMessage: envelope.IEnvelope = {
    metadata: formatters.formatMetadata(request.id!, request.extraData, request.authToken),
    args: formatters.formatEnvelopeArgs(
      {
        contractName: request.contractName,
        contractTag: request.contractTag,
        methodSignature: request.methodSignature,
        args: request.args
      },
      request.data,
      request.privateFrom,
      request.privateFor
    ),
    protocol: formatters.formatProtocol(request.protocol),
    from: formatters.formatAccount(request.from),
    chain: formatters.formatChain(request.chainUUID, request.chainName),
    tx: formatters.formatTransaction(request)
  }

  return marshalEnvelope(envelopeMessage)
}

export function marshalRawTransactionRequest(request: IRawTransactionRequest) {
  const envelopeMessage: envelope.IEnvelope = {
    metadata: formatters.formatMetadata(request.id!, request.extraData, request.authToken),
    tx: {
      hash: formatters.formatData(utils.keccak256(request.signedTransaction)),
      raw: formatters.formatData(request.signedTransaction)
    },
    protocol: formatters.formatProtocol(request.protocol),
    chain: formatters.formatChain(request.chainUUID, request.chainName)
  }

  return marshalEnvelope(envelopeMessage)
}

export function marshalGenerateAccountRequest(request: IGenerateAccountRequest) {
  const envelopeMessage: envelope.IEnvelope = {
    metadata: formatters.formatMetadata(request.id, request.extraData, request.authToken)
  }

  if (request.chain) {
    envelopeMessage.chain = {
      chainId: Buffer.from(request.chain)
    }
  }

  if (request.value) {
    envelopeMessage.tx = {
      txData: {
        value: formatters.formatQuantity(request.value)
      }
    }
  }

  return marshalEnvelope(envelopeMessage)
}

function marshalEnvelope(envelopeMessage: envelope.IEnvelope): Message {
  const { encode } = envelope.Envelope

  // The type is Buffer on Node
  return { value: encode(envelopeMessage).finish() as Buffer }
}
