import { tx } from '../../stubs'
import { IGenerateAccountRequest } from '../types'

export function marshalRequest(request: IGenerateAccountRequest) {
  const envelopeMessage: tx.ITxRequest = {
    id: request.id,
    chain: request.chain,
    contextLabels: request.contextLabels
  }
  if (request.authToken) {
    envelopeMessage.headers = { Authorization: request.authToken, ...envelopeMessage.headers }
  }

  // The type is Buffer on Node
  return { value: tx.TxRequest.encode(envelopeMessage).finish() as Buffer }
}
