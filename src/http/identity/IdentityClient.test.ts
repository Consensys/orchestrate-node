import {
  IAccount,
  ICreateAccountRequest,
  IImportAccountRequest,
  ISearchAccountsRequest,
  IUpdateAccountRequest
} from '../types'
import { IHttpGETRequest, IHttpPATCHRequest, IHttpPOSTRequest } from '../types/IHttpClient'

import { IdentityClient } from './IdentityClient'

const mockAccountResp: IAccount = {
  alias: 'myAlias',
  tenantID: '_',
  active: true,
  address: '0xaddress',
  publicKey: '0xpublicKey',
  compressedPublicKey: '0xcompressedPublicKey',
  createdAt: new Date(),
  updatedAt: new Date()
}

const authToken = 'MyTenantAuthToken'

const mockHTTPClient = {
  get: jest.fn(),
  post: jest.fn(),
  patch: jest.fn()
}

jest.mock('../HttpClient', () => ({
  HttpClient: jest.fn().mockImplementation(() => mockHTTPClient)
}))

describe('IdentityClient', () => {
  let identityClient: IdentityClient

  beforeAll(() => {
    identityClient = new IdentityClient('endpoint:8081')
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  describe('search', () => {
    it('should fetch filtered accounts successfully', async () => {
      const creq: ISearchAccountsRequest = {
        aliases: ['alias']
      }
      const req: IHttpGETRequest = {
        path: `/accounts`,
        query: creq,
        authToken
      }

      mockHTTPClient.get.mockResolvedValueOnce({
        data: [mockAccountResp],
        status: 200,
        headers: {}
      })

      const data = await identityClient.search(creq, authToken)

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
      expect(data).toEqual([mockAccountResp])
    })

    it('should fail to filter accounts', async () => {
      const req: IHttpGETRequest = {
        path: `/accounts`
      }

      const err = new Error('MyError')
      mockHTTPClient.get.mockRejectedValueOnce(err)
      try {
        await identityClient.search()
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
    })
  })

  describe('get', () => {
    it('should fetch one account by address successfully', async () => {
      const address = '0xaddress'
      const req: IHttpGETRequest = {
        path: `/accounts/${address}`
      }

      mockHTTPClient.get.mockResolvedValueOnce({
        data: mockAccountResp,
        status: 200,
        headers: {}
      })
      const data = await identityClient.get(address)

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
      expect(data).toEqual(mockAccountResp)
    })

    it('should fail to fetch one account by address', async () => {
      const address = '0xaddress'
      const req: IHttpGETRequest = {
        path: `/accounts/${address}`,
        authToken
      }
      const err = new Error('MyError')

      mockHTTPClient.get.mockRejectedValueOnce(err)
      try {
        await identityClient.get(address, authToken)
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
    })
  })

  describe('createAccount', () => {
    const creq: ICreateAccountRequest = {
      chain: 'MyChain',
      alias: 'MyAlias',
      attributes: {
        attr0: 'attribute0',
        attr1: 'attribute1'
      }
    }

    it('should create a new account successfully', async () => {
      const req: IHttpPOSTRequest = {
        path: `/accounts`,
        data: creq,
        authToken
      }

      mockHTTPClient.post.mockResolvedValueOnce({
        data: mockAccountResp,
        status: 200,
        headers: {}
      })

      const data = await identityClient.createAccount(creq, authToken)

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req)
      expect(data).toEqual(mockAccountResp)
    })

    it('should create a new account successfully with empty request', async () => {
      const req: IHttpPOSTRequest = {
        path: `/accounts`,
        data: {}
      }

      mockHTTPClient.post.mockResolvedValueOnce({
        data: mockAccountResp,
        status: 200,
        headers: {}
      })

      const data = await identityClient.createAccount()

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req)
      expect(data).toEqual(mockAccountResp)
    })

    it('should fail to create an account', async () => {
      const req: IHttpPOSTRequest = {
        path: `/accounts`,
        data: creq
      }

      const err = new Error('MyError')
      mockHTTPClient.post.mockRejectedValueOnce(err)
      try {
        await identityClient.createAccount(creq)
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req)
    })
  })

  describe('importAccount', () => {
    const creq: IImportAccountRequest = {
      chain: 'MyChain',
      alias: 'MyAlias',
      attributes: {
        attr0: 'attribute0',
        attr1: 'attribute1'
      },
      privateKey: '0xprivateKey'
    }

    it('should import an account successfully', async () => {
      const req: IHttpPOSTRequest = {
        path: `/accounts/import`,
        data: creq,
        authToken
      }

      mockHTTPClient.post.mockResolvedValueOnce({
        data: mockAccountResp,
        status: 200,
        headers: {}
      })

      const data = await identityClient.importAccount(creq, authToken)

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req)
      expect(data).toEqual(mockAccountResp)
    })

    it('should fail to import an account', async () => {
      const req: IHttpPOSTRequest = {
        path: `/accounts/import`,
        data: creq
      }

      const err = new Error('MyError')
      mockHTTPClient.post.mockRejectedValueOnce(err)
      try {
        await identityClient.importAccount(creq)
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req)
    })
  })

  describe('sign', () => {
    const address = '0xaddress'
    const signature = '0xsignature'
    const data = 'my data to sign'

    it('should sign a message successfully', async () => {
      const req: IHttpPOSTRequest = {
        path: `/accounts/${address}/sign`,
        data: { data },
        authToken
      }

      mockHTTPClient.post.mockResolvedValueOnce({
        data: signature,
        status: 200,
        headers: {}
      })

      const response = await identityClient.sign(address, data, authToken)

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req)
      expect(response).toEqual(signature)
    })

    it('should fail to sign a message', async () => {
      const req: IHttpPOSTRequest = {
        path: `/accounts/${address}/sign`,
        data: { data }
      }

      const err = new Error('MyError')
      mockHTTPClient.post.mockRejectedValueOnce(err)
      try {
        await identityClient.sign(address, 'my data to sign')
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req)
    })
  })

  describe('update', () => {
    const address = '0xaddress'
    const creq: IUpdateAccountRequest = {
      alias: 'MyAlias',
      attributes: { attr1: 'val1' }
    }

    it('should update an account successfully', async () => {
      const req: IHttpPATCHRequest = {
        path: `/accounts/${address}`,
        data: creq,
        authToken
      }

      mockHTTPClient.patch.mockResolvedValueOnce({
        data: mockAccountResp,
        status: 200,
        headers: {}
      })

      const data = await identityClient.update(address, creq, authToken)

      expect(mockHTTPClient.patch).toHaveBeenCalledWith(req)
      expect(data).toEqual(mockAccountResp)
    })

    it('should fail to update an account', async () => {
      const req: IHttpPATCHRequest = {
        path: `/accounts/${address}`,
        data: creq
      }

      const err = new Error('MyError')
      mockHTTPClient.patch.mockRejectedValueOnce(err)
      try {
        await identityClient.update(address, creq)
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.patch).toHaveBeenCalledWith(req)
    })
  })
})
