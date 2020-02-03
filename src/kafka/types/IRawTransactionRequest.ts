import { IChain } from './IChain'
import { IRequest } from './IRequest'

export interface IRawTransactionRequest extends IRequest, IChain {
  signedTransaction: string
}
