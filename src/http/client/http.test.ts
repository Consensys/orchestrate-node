import { IncomingMessage, request } from 'http'

import { IHttpGETRequest, IHttpPOSTRequest } from '../types'

import { HttpClient } from './http'

const mockReq = {
  write: jest.fn(),
  on: jest.fn(),
  end: jest.fn()
}

jest.mock('http', () => ({
  request: jest.fn().mockImplementation(() => mockReq)
}))

const baseMockRes = {
  statusCode: 200,
  on: jest.fn(),
  setEncoding: jest.fn(),
  headers: {
    'content-type': 'application/json'
  }
}

describe('HttpClient', () => {
  let httpClient: HttpClient
  const host: string = 'endpoint:8081'

  beforeAll(() => {
    httpClient = new HttpClient({ host })
  })

  describe('get request', () => {
    it('should call get request successfully', async () => {
      const req: IHttpGETRequest = {
        authToken: 'authToken',
        path: '/path',
        query: { dkey: 'value' }
      }

      httpClient.get(req)

      expect(request).toHaveBeenCalledWith(
        `http://${host}${req.path}?dkey=value`,
        {
          method: 'GET',
          headers: {
            Authentication: `Bearer ${req.authToken}`,
            'Content-Type': 'application/json'
          }
        },
        expect.anything()
      )
      expect(mockReq.write).toHaveBeenCalledTimes(0)
      expect(mockReq.end).toHaveBeenCalled()
    })
  })

  describe('post request', () => {
    it('should call post request successfully', async () => {
      const req: IHttpPOSTRequest = {
        authToken: 'authToken',
        path: '/path',
        data: { dkey: 'value' }
      }

      httpClient.post(req)

      const postData = JSON.stringify(req.data)
      expect(request).toHaveBeenCalledWith(
        `http://${host}${req.path}`,
        {
          method: 'POST',
          headers: {
            Authentication: `Bearer ${req.authToken}`,
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData)
          }
        },
        expect.anything()
      )

      expect(mockReq.write).toHaveBeenCalledWith(postData)
      expect(mockReq.end).toHaveBeenCalled()
    })
  })

  describe('request callback', () => {
    it('should call request callback successfully', async () => {
      // @ts-ignore
      const mockRes: IncomingMessage = {
        ...baseMockRes
      }

      const resolve = jest.fn()
      const reject = jest.fn()
      const resData = { key: 'value' }

      // @ts-ignore
      mockRes.on.mockImplementation((event: any, cb: any): any => {
        if (event === 'end') {
          cb()
        } else if (event === 'data') {
          cb(JSON.stringify(resData))
        }
      })

      // @ts-ignore
      httpClient.requestCb(mockRes, resolve, reject)

      // @ts-ignore
      expect(mockRes.on).toHaveBeenCalledWith('data', expect.any(Function))
      expect(mockRes.on).toHaveBeenCalledWith('end', expect.any(Function))
      expect(mockRes.setEncoding).toHaveBeenCalledWith('utf8')
      expect(resolve).toHaveBeenCalledWith({
        headers: mockRes.headers,
        data: resData,
        status: mockRes.statusCode
      })
    })

    it('should call request callback with http error', async () => {
      // @ts-ignore
      const mockRes: IncomingMessage = {
        ...baseMockRes,
        statusCode: 500
      }

      const resolve = jest.fn()
      const reject = jest.fn()
      const resData = { key: 'value' }

      // @ts-ignore
      mockRes.on.mockImplementation((event: any, cb: any): any => {
        if (event === 'end') {
          cb()
        } else if (event === 'data') {
          cb(JSON.stringify(resData))
        }
      })

      // @ts-ignore
      httpClient.requestCb(mockRes, resolve, reject)

      // @ts-ignore
      expect(mockRes.on).toHaveBeenCalledWith('data', expect.any(Function))
      expect(mockRes.on).toHaveBeenCalledWith('end', expect.any(Function))
      expect(mockRes.setEncoding).toHaveBeenCalledWith('utf8')
      expect(resolve).toHaveBeenCalledWith({
        headers: mockRes.headers,
        err: expect.any(Error),
        status: mockRes.statusCode
      })
    })
  })

  it('should call request callback with invalid headers', async () => {
    // @ts-ignore
    const mockRes: IncomingMessage = {
      ...baseMockRes,
      headers: {
        'content-type': 'application/x-javascript'
      }
    }

    const resolve = jest.fn()
    const reject = jest.fn()

    // @ts-ignore
    mockRes.on.mockImplementation((event: any, cb: any): any => {
      if (event === 'end') {
        cb()
      }
    })

    // @ts-ignore
    httpClient.requestCb(mockRes, resolve, reject)

    // @ts-ignore
    expect(mockRes.on).toHaveBeenCalledWith('data', expect.any(Function))
    expect(mockRes.on).toHaveBeenCalledWith('end', expect.any(Function))
    expect(mockRes.setEncoding).toHaveBeenCalledWith('utf8')
    expect(resolve).toHaveBeenCalledWith({
      headers: mockRes.headers,
      err: expect.any(Error),
      status: mockRes.statusCode
    })
  })

  it('should call request callback and reject for invalid content response', async () => {
    // @ts-ignore
    const mockRes: IncomingMessage = {
      ...baseMockRes
    }

    const resolve = jest.fn()
    const reject = jest.fn()

    // @ts-ignore
    mockRes.on.mockImplementation((event: any, cb: any): any => {
      if (event === 'end') {
        cb()
      } else if (event === 'data') {
        cb('invalid_json_string')
      }
    })

    // @ts-ignore
    httpClient.requestCb(mockRes, resolve, reject)

    // @ts-ignore
    expect(mockRes.on).toHaveBeenCalledWith('data', expect.any(Function))
    expect(mockRes.on).toHaveBeenCalledWith('end', expect.any(Function))
    expect(mockRes.setEncoding).toHaveBeenCalledWith('utf8')
    expect(reject).toHaveBeenCalledWith(expect.any(Error))
  })
})
