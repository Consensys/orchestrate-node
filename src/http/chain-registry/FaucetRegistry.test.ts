import { IFaucet, IRegisterFaucetRequest } from '../types'
import { IHttpGETRequest, IHttpPOSTRequest } from '../types/IHttpClient'

import { FaucetRegistry } from './FaucetRegistry'

const mockHTTPClient = {
  get: jest.fn(),
  post: jest.fn()
}

jest.mock('../client/http', () => ({
  HttpClient: jest.fn().mockImplementation(() => mockHTTPClient)
}))

const mockFaucet: IFaucet = {
  name: 'testChain',
  tenantID: 'tenantID',
  uuid: 'uuid',
  chainRule: 'chainUUID',
  creditorAccount: '0xCreditorAddrAcc',
  amount: '1000',
  cooldown: '1s',
  maxBalance: '1000',
  createdAt: new Date(),
  updatedAt: new Date()
}

describe('FaucetRegistry', () => {
  let faucetRegistry: FaucetRegistry

  beforeAll(() => {
    faucetRegistry = new FaucetRegistry('endpoint:8081')
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  describe('fetch', () => {
    it('should fetch faucets successfully', async () => {
      const req: IHttpPOSTRequest = {
        path: '/faucets'
      }

      try {
        mockHTTPClient.get.mockResolvedValueOnce({
          status: 200,
          headers: {},
          data: [mockFaucet]
        })
        const res = await faucetRegistry.faucets()
        expect(res).toEqual([mockFaucet])
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
    })

    it('should fetch a faucets with jwt successfully', async () => {
      const authToken = 'validJWT'
      const req: IHttpPOSTRequest = {
        path: '/faucets',
        authToken
      }

      try {
        mockHTTPClient.get.mockResolvedValueOnce({
          status: 200,
          headers: {},
          data: [mockFaucet]
        })
        const res = await faucetRegistry.faucets(authToken)
        expect(res).toEqual([mockFaucet])
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
    })

    it('should fetch faucets with jwt with errors', async () => {
      const authToken = 'validJWT'
      const req: IHttpGETRequest = {
        path: '/faucets',
        authToken
      }

      const err = new Error('fail message')
      try {
        mockHTTPClient.get.mockRejectedValueOnce({
          data: err,
          status: 500,
          headers: {}
        })
        await faucetRegistry.faucets(authToken)
        fail('expected to fail')
      } catch (e) {
        expect(e.data).toEqual(err)
        expect(e.status).toEqual(500)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
    })
  })

  describe('register', () => {
    it('should register a new chain successfully', async () => {
      const faucet: IRegisterFaucetRequest = {
        ...mockFaucet,
        cooldown: '10s',
        maxBalance: '100000000000',
        amount: '1000000'
      }
      const req: IHttpPOSTRequest = {
        path: '/faucets',
        data: faucet
      }

      try {
        mockHTTPClient.post.mockResolvedValueOnce({
          status: 200,
          headers: {},
          data: mockFaucet
        })
        const res = await faucetRegistry.registerFaucet(faucet)
        expect(res).toEqual(mockFaucet)
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req)
    })

    it('should register a new chain with jwt successfully', async () => {
      const authToken = 'validJWT'
      const faucet: IRegisterFaucetRequest = {
        ...mockFaucet,
        cooldown: '10s',
        maxBalance: '100000000000',
        amount: '1000000'
      }
      const req: IHttpPOSTRequest = {
        path: '/faucets',
        data: faucet,
        authToken
      }

      try {
        mockHTTPClient.post.mockResolvedValueOnce({
          status: 200,
          headers: {},
          data: mockFaucet
        })
        const res = await faucetRegistry.registerFaucet(faucet, authToken)
        expect(res).toEqual(mockFaucet)
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req)
    })

    it('should register a new chain with errors', async () => {
      const faucet: IRegisterFaucetRequest = {
        ...mockFaucet,
        cooldown: '10s',
        maxBalance: '100000000000',
        amount: '1000000'
      }
      const req: IHttpPOSTRequest = {
        path: '/faucets',
        data: faucet
      }

      const err = new Error('fail message')
      try {
        mockHTTPClient.post.mockRejectedValueOnce({
          data: err,
          status: 420,
          headers: {}
        })
        await faucetRegistry.registerFaucet(faucet)
        fail('expected to fail')
      } catch (e) {
        expect(e.data).toEqual(err)
        expect(e.status).toEqual(420)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req)
    })
  })
})
