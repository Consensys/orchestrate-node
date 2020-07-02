import { IScheduleResponse } from './ISchedule'

export interface ISendTransactionRequest extends IBaseRequest {
  params: ITransactionParams
}

export interface IDeployContractRequest extends IBaseRequest {
  params: IDeployContractParams
}

export interface ITransactionResponse {
  uuid: string
  idempotencyKey: string
  params: IETHTransactionParams
  schedule: IScheduleResponse
  createdAt: Date
}

interface IBaseRequest {
  chain: string
  labels?: object
}

interface ITransactionParams extends IBaseTransactionParams, IPrivateTransactionParams {
  methodSignature: string
  oneTimeKey?: boolean
}

interface IDeployContractParams extends IBaseTransactionParams, IPrivateTransactionParams {
  contractName: string
  contractTag?: string
  oneTimeKey?: boolean
}

interface IETHTransactionParams extends IBaseTransactionParams, IPrivateTransactionParams {
  raw: string
  nonce: string
}

interface IBaseTransactionParams {
  from?: string
  to?: string
  value?: string
  gas?: string
  gasPrice?: string
  args?: any[]
}

interface IPrivateTransactionParams {
  protocol?: string
  privateFrom?: string
  privateFor?: string[]
  privacyGroupId?: string
}
