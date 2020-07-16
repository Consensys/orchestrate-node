import { IChain, IRegisterChainRequest } from '../types'
import { IHttpGETRequest, IHttpPOSTRequest } from '../types/IHttpClient'

import { ChainRegistry } from './ChainRegistry'

const mockHTTPClient = {
  get: jest.fn(),
  post: jest.fn()
}

jest.mock('../client/http', () => ({
  HttpClient: jest.fn().mockImplementation(() => mockHTTPClient)
}))

const mockChain: IChain = {
  name: 'testChain',
  tenantID: 'tenantID',
  urls: ['endpoint:8545'],
  uuid: 'uuid',
  createdAt: new Date(),
  updatedAt: new Date()
}

describe('ChainRegistry', () => {
  let chainRegistry: ChainRegistry

  beforeAll(() => {
    chainRegistry = new ChainRegistry('endpoint:8081')
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  describe('fetch', () => {
    it('should fetch chains successfully', async () => {
      const req: IHttpGETRequest = {
        path: '/chains'
      }

      mockHTTPClient.get.mockResolvedValueOnce({
        data: [mockChain],
        status: 200,
        headers: {}
      })
      chainRegistry.chains()

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
    })

    it('should fetch chains with jwt successfully', async () => {
      const authToken = 'validJWT'
      const req: IHttpGETRequest = {
        path: '/chains',
        authToken
      }

      try {
        mockHTTPClient.get.mockResolvedValueOnce({
          data: [mockChain],
          status: 200,
          headers: {}
        })
        const res = await chainRegistry.chains(authToken)
        expect(res).toEqual([mockChain])
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
    })

    it('should fetch chains with jwt with errors', async () => {
      const authToken = 'validJWT'
      const req: IHttpGETRequest = {
        path: '/chains',
        authToken
      }

      const err = new Error('fail message')
      try {
        mockHTTPClient.get.mockRejectedValueOnce({
          data: err,
          status: 500,
          headers: {}
        })
        await chainRegistry.chains(authToken)
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
      const chain: IRegisterChainRequest = {
        name: 'chainName',
        urls: ['localhost:8545']
      }
      const req: IHttpPOSTRequest = {
        path: '/chains',
        data: chain
      }

      try {
        mockHTTPClient.post.mockResolvedValueOnce({
          data: mockChain,
          status: 200,
          headers: {}
        })
        const res = await chainRegistry.registerChain(chain)
        expect(res).toEqual(mockChain)
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req)
    })

    it('should register a new chain with jwt successfully', async () => {
      const authToken = 'validJWT'
      const chain: IRegisterChainRequest = {
        name: 'chainName',
        urls: ['localhost:8545']
      }

      const req: IHttpPOSTRequest = {
        path: '/chains',
        data: chain,
        authToken
      }

      mockHTTPClient.post.mockResolvedValueOnce({
        data: mockChain,
        status: 200,
        headers: {}
      })

      try {
        const res = await chainRegistry.registerChain(chain, authToken)
        expect(res).toEqual(mockChain)
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req)
    })
  })

  it('should to register a new chain and return and error', async () => {
    const chain: IRegisterChainRequest = {
      name: 'chainName',
      urls: ['localhost:8545']
    }
    const req: IHttpPOSTRequest = {
      path: '/chains',
      data: chain
    }

    const err = new Error('fail message')
    try {
      mockHTTPClient.post.mockRejectedValueOnce({
        data: err,
        status: 500,
        headers: {}
      })
      await chainRegistry.registerChain(chain)
      fail(`expected to fail`)
    } catch (e) {
      expect(e.data).toEqual(err)
    }

    expect(mockHTTPClient.post).toHaveBeenCalledWith(req)
  })

  it('should error to register a new chain', async () => {
    const chain: IRegisterChainRequest = {
      name: 'chainName',
      urls: ['localhost:8545']
    }
    const req: IHttpPOSTRequest = {
      path: '/chains',
      data: chain
    }
    const err = new Error('fail message')

    try {
      mockHTTPClient.post.mockRejectedValueOnce(err)
      await chainRegistry.registerChain(chain)
      fail(`expected to fail`)
    } catch (e) {
      expect(e).toEqual(err)
    }

    expect(mockHTTPClient.post).toHaveBeenCalledWith(req)
  })
})
