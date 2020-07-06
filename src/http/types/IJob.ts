import { IETHTransaction } from './IETHTransaction'

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
}

export interface ILog {
  status: string
  message: string
  createdAt: Date
}

export interface IAnnotations {
  oneTimeKey: boolean
}
