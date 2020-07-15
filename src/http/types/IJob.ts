import { IAnnotationsResponse } from './IAnnotations'
import { IETHTransaction } from './IETHTransaction'
import { ILog } from './ILog'

export interface IJobResponse {
  uuid: string
  chainUUID: string
  transaction: IETHTransaction
  logs: ILog[]
  labels?: object
  annotations?: IAnnotationsResponse
  status: string
  type: string
  createdAt: Date
}
