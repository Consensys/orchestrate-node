import { ParsedQs } from 'qs'

/**
 * @hidden
 */
export interface IHttpClientConfig {
  host: string
  authToken?: string
}

/**
 * @hidden
 */
export interface IHttpGETRequest {
  path: string
  query?: ParsedQs
  authToken?: string
}

/**
 * @hidden
 */
export interface IHttpPOSTRequest {
  path: string
  data?: object
  authToken?: string
}

/**
 * @hidden
 */
export interface IHttpResponse {
  status: number
  headers: any
  data?: any
}

export interface IHttpError extends Error {
  status?: number
  headers?: any
  data?: any
  isHttpError: boolean
}
