import { ILog } from './ILog'

export interface IReceipt {
  txHash?: string
  blockHash?: string
  blockNumber?: number
  txIndex?: number
  contractAddress?: string
  postState?: string
  status?: boolean
  bloom?: string
  logs?: ILog[]
  gasUsed?: number
  cumulativeGasUsed?: number
  revertReason?: string
  output?: string
  privateFrom?: string
  privateFor?: string[]
  privacyGroupId?: string
}
