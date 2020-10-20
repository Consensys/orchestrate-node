import { ICreateIdentityRequest, IIdentity, IImportIdentityRequest } from '../types'
import { IHttpPOSTRequest } from '../types/IHttpClient'

import { IdentityClient } from './IdentityClient'

const mockIdentityResp: IIdentity = {
  address: '0xaddress',
  publicKey: '0xpublicKey',
  compressedPublicKey: '0xcompressedPublicKey',
  namespace: 'namespace'
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

  describe('create', () => {
    const creq: ICreateIdentityRequest = {
      chain: 'MyChain',
      alias: 'MyAlias',
      attributes: {
        attr0: 'attribute0',
        attr1: 'attribute1'
      }
    }

    it('should create a new identity successfully', async () => {
      const req: IHttpPOSTRequest = {
        path: `/identities`,
        data: creq,
        authToken
      }

      mockHTTPClient.post.mockResolvedValueOnce({
        data: mockIdentityResp,
        status: 200,
        headers: {}
      })

      const data = await identityClient.create(creq, authToken)

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req)
      expect(data).toEqual(mockIdentityResp)
    })

    it('should fail to create an account', async () => {
      const req: IHttpPOSTRequest = {
        path: `/identities`,
        data: creq
      }

      const err = new Error('MyError')
      mockHTTPClient.post.mockRejectedValueOnce(err)
      try {
        await identityClient.create(creq)
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req)
    })
  })

  describe('import', () => {
    const creq: IImportIdentityRequest = {
      chain: 'MyChain',
      alias: 'MyAlias',
      attributes: {
        attr0: 'attribute0',
        attr1: 'attribute1'
      },
      privateKey: '0xprivateKey'
    }

    it('should import an identity successfully', async () => {
      const req: IHttpPOSTRequest = {
        path: `/identities/import`,
        data: creq,
        authToken
      }

      mockHTTPClient.post.mockResolvedValueOnce({
        data: mockIdentityResp,
        status: 200,
        headers: {}
      })

      const data = await identityClient.import(creq, authToken)

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req)
      expect(data).toEqual(mockIdentityResp)
    })

    it('should fail to import an account', async () => {
      const req: IHttpPOSTRequest = {
        path: `/identities/import`,
        data: creq
      }

      const err = new Error('MyError')
      mockHTTPClient.post.mockRejectedValueOnce(err)
      try {
        await identityClient.import(creq)
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req)
    })
  })
})
