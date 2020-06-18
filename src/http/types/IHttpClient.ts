import { IncomingHttpHeaders } from 'http'
import { ParsedUrlQueryInput } from 'querystring'

export interface IHttpClientConfig {
  host: string
  authToken?: string
}

export interface IHttpGETRequest {
  path: string
  query?: ParsedUrlQueryInput
  authToken?: string
}

export interface IHttpPOSTRequest {
  path: string
  data?: object
  authToken?: string
}

export interface IHttpResponse {
  status: number
  headers: IncomingHttpHeaders
  data?: any
  err?: Error
}
