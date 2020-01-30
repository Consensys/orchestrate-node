import { ICall } from './ICall'
import { IChain } from './IChain'
import { IPrivate } from './IPrivate'

export interface ITransactionContext extends IPrivate, ICall, IChain {
  from?: string
  gas?: number
  gasPrice?: string
  nonce?: number
  value?: string
  input?: string
  to?: string
}
