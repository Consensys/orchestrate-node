import { ParsedUrlQueryInput } from 'querystring'

import { IAnnotationsRequest } from './IAnnotations'
import { IScheduleResponse } from './ISchedule'

export interface ISendTransactionRequest extends IBaseRequest {
  params: ITransactionParams
  annotations?: IAnnotationsRequest
}

export interface IDeployContractRequest extends IBaseRequest {
  params: IDeployContractParams
  annotations?: IAnnotationsRequest
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
  }
}

export interface ISearchRequest extends ParsedUrlQueryInput {
  idempotencyKeys: string[]
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

export interface IETHTransactionParams extends IBaseTransactionParams, IPrivateTransactionParams {
  raw?: string
  nonce?: string
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
