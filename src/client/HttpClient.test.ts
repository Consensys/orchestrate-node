import axios, { AxiosResponse } from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { HttpClient } from './HttpClient'
import { IHttpError, IHttpGETRequest } from './types/IHttpClient'

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

  describe('get', () => {
    beforeAll(() => {
      httpClient = new HttpClient({ host })
    })

    it('should send a successful get request', async () => {
      const req: IHttpGETRequest = {
        path: '/path',
        query: { dkey: 'value' }
      }

      const expectedRes = {
        ...axiosBaseRes,
        data: { dkey: 'value' }
      }

      mockedAxios
        .onGet(`${host}${req.path}?dkey=value`)
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

  describe('post', () => {
    beforeAll(() => {
      httpClient = new HttpClient({ host })
    })

    it('should send a successful post request', async () => {
      const expectedRes = {
        ...axiosBaseRes,
        data: { dkey: 'value' }
      }

      mockedAxios
        .onPost(
          `${host}/path`,
          undefined,
          expect.objectContaining({
            'Content-Type': 'application/json'
          })
        )
        .replyOnce(expectedRes.status, expectedRes.data, expectedRes.headers)

      const actualRes = await httpClient.post('/path', { dkey: 'value' })

      expect(actualRes).toEqual(expectedRes.data)
    })

    it('should send failure post request', async () => {
      mockedAxios
        .onPost(
          `${host}/path`,
          undefined,
          expect.objectContaining({
            'Content-Type': 'application/json'
          })
        )
        .replyOnce(() => {
          throw new Error('unexpected error')
        })

      try {
        await httpClient.post('/path', { dkey: 'value' })
        fail('request is expected to fail')
      } catch (e) {
        const err = e as IHttpError
        expect(err.message).toEqual('Error: unexpected error')
        expect(err.status).toEqual(500)
      }
    })
  })

  describe('patch', () => {
    beforeAll(() => {
      httpClient = new HttpClient({ host })
    })

    it('should send a successful patch request', async () => {
      const expectedRes = {
        ...axiosBaseRes,
        data: { dkey: 'value' }
      }

      mockedAxios
        .onPatch(
          `${host}/path`,
          undefined,
          expect.objectContaining({
            'Content-Type': 'application/json'
          })
        )
        .replyOnce(expectedRes.status, expectedRes.data, expectedRes.headers)

      const actualRes = await httpClient.patch('/path', { dkey: 'value' })

      expect(actualRes).toEqual(expectedRes.data)
    })

    it('should send failure patch request', async () => {
      mockedAxios
        .onPatch(
          `${host}/path`,
          undefined,
          expect.objectContaining({
            'Content-Type': 'application/json'
          })
        )
        .replyOnce(() => {
          throw new Error('unexpected error')
        })

      try {
        await httpClient.patch('/path', { dkey: 'value' })
        fail('request is expected to fail')
      } catch (e) {
        const err = e as IHttpError
        expect(err.message).toEqual('Error: unexpected error')
        expect(err.status).toEqual(500)
      }
    })
  })
})
