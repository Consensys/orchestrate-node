import { IRequest } from './IRequest'

export interface ITransactionRequest extends IRequest {
  to?: string
  value?: string
  gas?: number
  gasPrice?: string
  data?: string
  raw?: string
  from: string
  privateFrom?: string
  privateFor?: string[]
}
