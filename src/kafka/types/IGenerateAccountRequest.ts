import { IContextLabels } from './IContextLabels'

export interface IGenerateAccountRequest {
  id?: string
  contextLabels?: IContextLabels
  authToken?: string
  chain?: string
}
