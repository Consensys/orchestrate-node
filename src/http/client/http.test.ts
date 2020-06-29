import axios, { AxiosResponse } from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { IHttpError, IHttpGETRequest, IHttpPOSTRequest } from '../types'

import { HttpClient } from './http'

const axiosBaseRes: AxiosResponse = {
  status: 200,
  statusText: '200',
  config: {},
  headers: {
    'Content-Type': 'application/json'
  },
  data: {}
}

describe('HttpClient', () => {
  let httpClient: HttpClient
  const host: string = 'http://localhost:8011'
  const mockedAxios = new MockAdapter(axios)

  describe('get request', () => {
    beforeAll(() => {
      httpClient = new HttpClient({ host })
    })

    it('should send a successful get request', async () => {
      const req: IHttpGETRequest = {
        authToken: 'authToken',
        path: '/path',
        query: { dkey: 'value' }
      }

      const expectedRes = {
        ...axiosBaseRes,
        data: { dkey: 'value' }
      }

      mockedAxios
        .onGet(
          `${host}${req.path}?dkey=value`,
          '',
          expect.objectContaining({
            Authorization: `Bearer ${req.authToken}`
          })
        )
        .replyOnce(expectedRes.status, expectedRes.data, expectedRes.headers)

      const actualRes = await httpClient.get(req)

      expect(actualRes.status).toEqual(expectedRes.status)
      expect(actualRes.data).toEqual(expectedRes.data)
      expect(actualRes.headers).toEqual(expectedRes.headers)
    })

    it('should send a failure get request', async () => {
      const req: IHttpGETRequest = {
        path: '/path',
        query: { dkey: 'value', dkey2: 'value2' }
      }

      mockedAxios.onGet(`${host}${req.path}?dkey=value&dkey2=value2`).replyOnce(500, { error: 'unexpected error' })

      try {
        await httpClient.get(req)
        fail('request is expected to fail')
      } catch (e) {
        const err = e as IHttpError
        expect(err.status).toEqual(500)
        expect(err.data).toEqual({ error: 'unexpected error' })
      }
    })
  })

  describe('post request', () => {
    const globalToken = 'globalToken'

    beforeAll(() => {
      httpClient = new HttpClient({ host, authToken: globalToken })
    })

    it('should send a successful post request', async () => {
      const req: IHttpPOSTRequest = {
        path: '/path',
        data: { dkey: 'value' }
      }

      const expectedRes = {
        ...axiosBaseRes,
        data: { dkey: 'value' }
      }

      mockedAxios
        .onPost(
          `${host}${req.path}`,
          undefined,
          expect.objectContaining({
            Authorization: `Bearer ${globalToken}`,
            'Content-Type': 'application/json'
          })
        )
        .replyOnce(expectedRes.status, expectedRes.data, expectedRes.headers)

      const actualRes = await httpClient.post(req)

      expect(actualRes.status).toEqual(expectedRes.status)
      expect(actualRes.data).toEqual(expectedRes.data)
      expect(actualRes.headers).toEqual(expectedRes.headers)
    })

    it('should send failure post request', async () => {
      const req: IHttpPOSTRequest = {
        path: '/path',
        data: { dkey: 'value' }
      }

      mockedAxios
        .onPost(
          `${host}${req.path}`,
          undefined,
          expect.objectContaining({
            Authorization: `Bearer ${globalToken}`,
            'Content-Type': 'application/json'
          })
        )
        .replyOnce(() => {
          throw new Error('unexpected error')
        })

      try {
        await httpClient.post(req)
        fail('request is expected to fail')
      } catch (e) {
        const err = e as IHttpError
        expect(err.message).toEqual('Error: unexpected error')
        expect(err.status).toEqual(500)
      }
    })
  })
})
