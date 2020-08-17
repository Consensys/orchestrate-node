import { ParsedQs } from 'qs'

import { IAnnotations } from './IAnnotations'
import { IScheduleResponse } from './ISchedule'
import { Priority } from './Priority'
import { ProtocolType } from './ProtocolType'

interface IBaseRequest {
  chain: string
  labels?: object
}

export interface ISendTransactionRequest extends IBaseRequest {
  params: ITransactionParams
}
interface ITransactionParams extends IBaseTransactionParams, IPrivateTransactionParams {
  to: string
  methodSignature: string
  annotations?: IAnnotations
}

export interface IDeployContractRequest extends IBaseRequest {
  params: IDeployContractParams
}
interface IDeployContractParams extends IBaseTransactionParams, IPrivateTransactionParams {
  contractName: string
  contractTag?: string
  annotations?: IAnnotations
}

export interface ISendRawRequest extends IBaseRequest {
  params: {
    raw: string
  }
}

export interface ITransferRequest extends IBaseRequest {
  params: {
    from: string
    to: string
    value: string
    gas?: string
    gasPrice?: string
    priority?: Priority
  }
}

export interface ISearchRequest extends ParsedQs {
  idempotency_keys: string[]
}

export interface ITransactionResponse {
  uuid: string
  idempotencyKey: string
  chain: string
  params: IETHTransactionParams
  schedule: IScheduleResponse
  createdAt: Date
}

export interface IETHTransactionParams extends IBaseTransactionParams, IPrivateTransactionParams {
  raw?: string
}

interface IBaseTransactionParams {
  from?: string
  value?: string
  gas?: string
  gasPrice?: string
  args?: any[]
}

interface IPrivateTransactionParams {
  protocol?: ProtocolType
  privateFrom?: string
  privateFor?: string[]
  privacyGroupId?: string
}
