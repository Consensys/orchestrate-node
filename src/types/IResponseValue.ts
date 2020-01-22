import { ICall } from './ICall'
import { IChain } from './IChain'
import { IExtraData } from './IExtraData'
import { IPrivate } from './IPrivate'
import { IProtocol } from './IProtocol'

export interface IResponseValue extends IProtocol, IChain {
  id: string
  from?: string
  txContext?: ITransactionContext
  receipt?: IReceipt
  errors?: IError[]
  extraData?: IExtraData
}

interface ITransactionContext extends IPrivate, ICall {
  gas?: number
  gasPrice?: string
  nonce?: number
  value?: string
  input?: string
}

interface IReceipt {
  txHash: string
  blockHash: string
  blockNumber: number
  txIndex: number
  contractAddress?: string
  postState: string
  status: boolean
  bloom: string
  logs: ILog[]
  gasUsed: number
  cumulativeGasUsed: number
}

interface IError {
  message: string
  code: number
  component?: string
}

interface ILog {
  address: string
  topics: string[]
  data: string
  event: string
  decodedData: IExtraData
  blockNumber: number
  txHash: string
  txIndex: number
  blockHash: string
  index: number
  removed: boolean
}
