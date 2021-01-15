import { IAnnotations } from './IAnnotations'
import { IETHTransaction } from './IETHTransaction'
import { ILog } from './ILog'

export interface IJobResponse {
  uuid: string
  chainUUID: string
  transaction: IETHTransaction
  logs: ILog[]
  labels?: object
  annotations?: IAnnotations
  status: string
  type: string
  createdAt: Date
  updatedAt: Date
}
