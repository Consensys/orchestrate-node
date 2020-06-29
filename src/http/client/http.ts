import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import * as querystring from 'querystring'

import { IHttpClientConfig, IHttpError, IHttpGETRequest, IHttpPOSTRequest, IHttpResponse } from '../types'

import { HttpResponseError } from './httpErr'

/**
 * @hidden
 * @class HttpClient
 */
export class HttpClient {
  protected readonly baseURL: string
  protected readonly authToken?: string

  public constructor(config: IHttpClientConfig) {
    this.baseURL = config.host
    this.authToken = config.authToken
  }

  public async get(req: IHttpGETRequest): Promise<IHttpResponse> {
    let path = req.path
    if (req.query) {
      path += `?${querystring.stringify(req.query)}`
    }

    try {
      return HttpClient.parseResponse(await axios.get(path, this.requestConfig(req)))
    } catch (e) {
      throw HttpClient.parseErrResponse(e)
    }
  }

  public async post(req: IHttpPOSTRequest): Promise<IHttpResponse> {
    try {
      return HttpClient.parseResponse(await axios.post(req.path, req.data, this.requestConfig(req)))
    } catch (e) {
      throw HttpClient.parseErrResponse(e)
    }
  }

  protected requestConfig(req: IHttpPOSTRequest | IHttpGETRequest): AxiosRequestConfig {
    const cfg: AxiosRequestConfig = {
      baseURL: this.baseURL,
      headers: {}
    }

    if (req.authToken) {
      cfg.headers.Authorization = `Bearer ${req.authToken}`
    } else if (this.authToken) {
      cfg.headers.Authorization = `Bearer ${this.authToken}`
    }

    const reqP = req as IHttpPOSTRequest
    if (reqP.data) {
      cfg.headers['Content-Type'] = 'application/json'
    }

    return cfg
  }

  protected static parseResponse(res: AxiosResponse): IHttpResponse {
    return {
      status: res.status,
      headers: res.headers,
      data: res.data
    }
  }

  protected static parseErrResponse(e: any): IHttpError {
    if (e.isAxiosError && e.response) {
      return new HttpResponseError(e, e.response.status, e.response.headers, e.response.data)
    } else if (e.isAxiosError) {
      return new HttpResponseError(e, 500, e.config)
    } else {
      return new HttpResponseError(e, 500)
    }
  }
}
