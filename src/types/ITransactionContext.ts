import { ICall } from './ICall'
import { IPrivate } from './IPrivate'

export interface ITransactionContext extends IPrivate, ICall {
  gas?: number
  gasPrice?: string
  nonce?: number
  value?: string
  input?: string
  to?: string
}
