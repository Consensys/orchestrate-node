import { ILog } from './ILog'

export interface IReceipt {
  txHash?: string
  blockHash?: string
  blockNumber?: string
  txIndex?: number
  contractAddress?: string
  postState?: string
  status?: boolean
  bloom?: string
  logs?: ILog[]
  gasUsed?: number
  cumulativeGasUsed?: number
}
