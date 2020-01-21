import { IExtraData } from './IExtraData'

export interface IRequest {
  id?: string
  extraData?: IExtraData
  authToken?: string
}
