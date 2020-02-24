import { IContextLabels } from './IContextLabels'

export interface IRequest {
  id?: string
  contextLabels?: IContextLabels
  authToken?: string
}
