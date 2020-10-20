import { IAccount, ICreateAccountRequest, IImportAccountRequest } from '../types'
import { IHttpPOSTRequest } from '../types/IHttpClient'

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
  post: jest.fn()
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
})
