import { ICall } from './ICall'
import { IRequest } from './IRequest'
import { ITransaction } from './ITransaction'
import { ProtocolType } from './ProtocolType'

export interface ITransactionRequest extends IRequest, ITransaction, ICall {
  // nodeId?: string
  // nodeName?: string
  chainId?: string // TODO: To be removed for nodeId and nodeName
  protocol?: ProtocolType
  privateFrom?: string
  privateFor?: string[]
}
