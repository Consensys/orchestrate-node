import { IExtraData } from './IExtraData'
import { IReceipt } from './IReceipt'
import { ITransactionContext } from './ITransactionContext'

export interface IResponseValue {
  id: string
  txContext?: ITransactionContext
  receipt?: IReceipt
  errors?: IError[]
  extraData?: IExtraData
}

interface IError {
  message?: string
  code?: number
  component?: string
}
