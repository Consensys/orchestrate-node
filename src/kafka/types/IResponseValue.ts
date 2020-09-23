import { IContextLabels } from './IContextLabels'
import { IReceipt } from './IReceipt'
import { ITransactionContext } from './ITransactionContext'

export interface IResponseValue {
  id: string
  jobId: string
  txContext?: ITransactionContext
  receipt?: IReceipt
  errors?: IError[]
  chain?: string
  contextLabels?: IContextLabels
}

interface IError {
  message?: string
  code?: number
  component?: string
}
