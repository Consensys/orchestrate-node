import { IExtraData } from './IExtraData'

export interface ILog {
  address?: string
  topics?: string[]
  data?: string
  event?: string
  decodedData?: IExtraData
  blockNumber?: number
  txHash?: string
  txIndex?: number
  blockHash?: string
  index?: number
  removed?: boolean
}
