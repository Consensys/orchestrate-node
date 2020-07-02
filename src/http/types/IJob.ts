import { IETHTransaction } from './IETHTransaction'

export interface JobResponse {
  uuid: string
  chainUUID: string
  transaction: IETHTransaction
  logs: Log[]
  labels: object
  annotations?: Annotations
  status: string
  type: string
  createdAt: Date
}

export interface Log {
  status: string
  message: string
  createdAt: Date
}

export interface Annotations {
  oneTimeKey: boolean
}
