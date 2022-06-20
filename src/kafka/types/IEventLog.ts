import { IContextLabels } from './IContextLabels'

export interface IEventLog {
  address?: string
  topics?: string[]
  data?: string
  event?: string
  decodedData?: IContextLabels
  blockNumber?: number
  txHash?: string
  txIndex?: number
  blockHash?: string
  index?: number
  removed?: boolean
}
