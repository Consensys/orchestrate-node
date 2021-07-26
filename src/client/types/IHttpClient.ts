import { ParsedQs } from 'qs'

/**
 * @hidden
 */
export interface IHttpClientConfig {
  host: string
}

/**
 * @hidden
 */
export interface IHttpGETRequest {
  path: string
  query?: ParsedQs
}

/**
 * @hidden
 */
export interface IHttpPOSTRequest {
  path: string
  data?: object
}

/**
 * @hidden
 */
export interface IHttpPATCHRequest extends IHttpPOSTRequest {}

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
