/**
 * @hidden
 * @class HttpResponseError
 */
export class HttpResponseError extends Error {
  headers: any
  isHttpError: boolean
  status: number
  data?: any

  public constructor(msg: string, status: number, headers?: any, data?: any) {
    super(msg)
    this.isHttpError = true
    this.status = status
    this.headers = headers
    this.data = data
  }
}
