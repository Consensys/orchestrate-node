import { IContextLabels } from './IContextLabels'
import { IReceipt } from './IReceipt'
import { ITransactionContext } from './ITransactionContext'

export interface IResponseValue {
  id: string
  txContext?: ITransactionContext
  receipt?: IReceipt
  errors?: IError[]
  contextLabels?: IContextLabels
}

interface IError {
  message?: string
  code?: number
  component?: string
}
