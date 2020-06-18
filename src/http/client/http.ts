import { IncomingMessage, request, RequestOptions } from 'http'
import * as querystring from 'querystring'

import { IHttpClientConfig, IHttpGETRequest, IHttpPOSTRequest, IHttpResponse } from '../types'

/**
 * @class HttpClient
 */
export class HttpClient {
  private readonly config: IHttpClientConfig

  public constructor(config: IHttpClientConfig) {
    if (config.host.indexOf('http://') === -1 && config.host.indexOf('https://') === -1) {
      config.host = `http://${config.host}`
    }

    this.config = config
  }

  public get(req: IHttpGETRequest, options?: RequestOptions): Promise<IHttpResponse> {
    let url = `${this.config.host}${req.path}`
    if (req.query) {
      url += `?${querystring.stringify(req.query)}`
    }

    return this.request(
      url,
      '',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        ...(options || {})
      },
      req.authToken || this.config.authToken
    )
  }

  public post(req: IHttpPOSTRequest, options?: RequestOptions): Promise<IHttpResponse> {
    const postData = req.data ? JSON.stringify(req.data) : ''
    return this.request(
      `${this.config.host}${req.path}`,
      postData,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData)
        },
        ...(options || {})
      },
      req.authToken || this.config.authToken
    )
  }

  protected request(
    url: string,
    postData: string,
    options: RequestOptions,
    authToken?: string
  ): Promise<IHttpResponse> {
    return new Promise((resolve, reject) => {
      if (authToken !== '') {
        options.headers = {
          ...options.headers,
          Authentication: `Bearer ${authToken}`
        }
      }

      const req = request(url, options, (res: IncomingMessage) => {
        this.requestCb(res, resolve, reject)
      })

      req.on('error', (err) => {
        reject(err)
      })

      // Write data to request body in case POST
      if (postData !== '') {
        req.write(postData)
      }

      req.end()
    })
  }

  private requestCb(res: IncomingMessage, resolve: (t: any) => void, reject: (t: any) => void): void {
    const { statusCode } = res
    const contentType = res.headers['content-type']

    let errMsg: string = ''
    if (statusCode !== 200 && statusCode !== 202) {
      errMsg = 'Request Failed.\n' + `Status Code: ${statusCode}`
    } else if (!/^application\/json/.test(contentType!)) {
      errMsg = 'Invalid content-type.\n' + `Expected application/json but received ${contentType}`
    }

    let rawData: string = ''
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
      rawData += chunk
    })

    res.on('end', () => {
      const response: IHttpResponse = {
        status: statusCode!,
        headers: res.headers
      }

      if (errMsg !== '') {
        response.err = new Error(`${errMsg} \n ${rawData}`)
        resolve(response)
        return
      }

      try {
        response.data = JSON.parse(rawData)
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  }
}
