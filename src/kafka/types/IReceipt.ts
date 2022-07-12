import { IEventLog } from './IEventLog'

export interface IReceipt {
  txHash?: string
  blockHash?: string
  blockNumber?: number
  txIndex?: number
  contractAddress?: string
  postState?: string
  status?: boolean
  bloom?: string
  logs?: IEventLog[]
  gasUsed?: number
  cumulativeGasUsed?: number
  effectiveGasPrice?: string
  revertReason?: string
  output?: string
  privateFrom?: string
  privateFor?: string[]
  privacyGroupId?: string
  contractName?: string
  contractTag?: string
}
