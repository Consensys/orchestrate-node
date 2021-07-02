import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import * as qs from 'qs'

import { HttpResponseError } from './errors/HttpResponseError'
import {
  IHttpClientConfig,
  IHttpError,
  IHttpGETRequest,
  IHttpPATCHRequest,
  IHttpPOSTRequest,
  IHttpResponse
} from './types/IHttpClient'

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

  public async get(req: IHttpGETRequest, headers?: object): Promise<IHttpResponse> {
    let path = req.path
    if (req.query) {
      path += `?${qs.stringify(req.query, { arrayFormat: 'comma' })}`
    }

    try {
      return HttpClient.parseResponse(await axios.get(path, this.requestConfig(req, headers)))
    } catch (e) {
      throw HttpClient.parseErrResponse(e)
    }
  }

  public async post<T>(path: string, data: any, authToken?: string, headers?: object): Promise<T> {
    const req: IHttpPOSTRequest = {
      path,
      data,
      authToken
    }

    try {
      return HttpClient.parseResponse(await axios.post(req.path, req.data, this.requestConfig(req, headers))).data
    } catch (e) {
      throw HttpClient.parseErrResponse(e)
    }
  }

  public async patch<T>(path: string, data: any, authToken?: string, headers?: object): Promise<T> {
    const req: IHttpPATCHRequest = {
      path,
      data,
      authToken
    }

    try {
      return HttpClient.parseResponse(await axios.patch(req.path, req.data, this.requestConfig(req, headers))).data
    } catch (e) {
      throw HttpClient.parseErrResponse(e)
    }
  }

  public async delete<T>(path: string, authToken?: string, headers?: object): Promise<T> {
    const req: IHttpPATCHRequest = {
      path,
      authToken
    }

    try {
      return HttpClient.parseResponse(await axios.delete(req.path, this.requestConfig(req, headers))).data
    } catch (e) {
      throw HttpClient.parseErrResponse(e)
    }
  }

  protected requestConfig(req: IHttpPOSTRequest | IHttpGETRequest, headers?: object): AxiosRequestConfig {
    const cfg: AxiosRequestConfig = {
      baseURL: this.baseURL,
      headers: headers || {}
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
