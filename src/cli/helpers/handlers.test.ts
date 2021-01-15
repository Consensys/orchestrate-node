import { getCatalogHandler, getContractHandler, getTagsHandler, registerContractHandler } from './handlers'

const mockOrchestrateClient = {
  getContractsCatalog: jest.fn(),
  getContract: jest.fn(),
  getContractTags: jest.fn(),
  registerContract: jest.fn()
}

jest.mock('fs')
jest.mock('../../client', () => ({
  OrchestrateClient: jest.fn().mockImplementation(() => mockOrchestrateClient)
}))

const mockEndpoint = 'endpoint:5000'
const mockName = 'myContract'
const mockTag = 'v1'

describe('handlers', () => {
  describe('getCatalogHandler', () => {
    it('should return and not fail if registry fails', async () => {
      mockOrchestrateClient.getContractsCatalog.mockRejectedValueOnce(new Error())

      await getCatalogHandler({
        endpoint: mockEndpoint
      })

      expect(mockOrchestrateClient.getContractsCatalog).toHaveBeenCalled()
    })

    it('should call the handler successfully', async () => {
      mockOrchestrateClient.getContractsCatalog.mockResolvedValueOnce(['contract0', 'contract1'])

      await getCatalogHandler({
        endpoint: mockEndpoint
      })

      expect(mockOrchestrateClient.getContractsCatalog).toHaveBeenCalled()
    })
  })

  describe('getContractHandler', () => {
    it('should return and not fail if registry fails', async () => {
      mockOrchestrateClient.getContract.mockRejectedValueOnce(new Error())

      await getContractHandler({
        endpoint: mockEndpoint,
        name: mockName
      })

      expect(mockOrchestrateClient.getContract).toHaveBeenCalled()
    })

    it('should call the handler successfully', async () => {
      mockOrchestrateClient.getContract.mockResolvedValueOnce('0xbytecodeHash')

      await getContractHandler({
        endpoint: mockEndpoint,
        name: mockName,
        tag: mockTag
      })

      expect(mockOrchestrateClient.getContract).toHaveBeenCalledWith(mockName, mockTag)
    })
  })

  describe('getTagsHandler', () => {
    it('should return and not fail if registry fails', async () => {
      mockOrchestrateClient.getContractTags.mockRejectedValueOnce(new Error())

      await getTagsHandler({
        endpoint: mockEndpoint,
        name: mockName
      })

      expect(mockOrchestrateClient.getContractTags).toHaveBeenCalled()
    })

    it('should call the handler successfully', async () => {
      mockOrchestrateClient.getContractTags.mockResolvedValueOnce('0xbytecodeHash')

      await getTagsHandler({
        endpoint: mockEndpoint,
        name: mockName
      })

      expect(mockOrchestrateClient.getContractTags).toHaveBeenCalledWith(mockName)
    })
  })

  describe('registerContractHandler', () => {
    const mockFilepath = 'path'
    const mockArtifact = {
      abi: [
        {
          constant: true,
          inputs: [],
          name: 'name',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function'
        }
      ],
      bytecode: '0xfefe',
      deployedBytecode: '0xdede'
    }

    let fs: any

    beforeEach(async () => {
      fs = await require('fs')
    })

    it('should return and not fail if reading artifacts fails', async () => {
      fs.readFileSync.mockImplementationOnce(() => {
        throw new Error()
      })

      await registerContractHandler({
        endpoint: mockEndpoint,
        name: mockName,
        filepath: mockFilepath
      })

      expect(fs.readFileSync).toHaveBeenCalledWith(mockFilepath)
      expect(mockOrchestrateClient.registerContract).not.toHaveBeenCalled()
    })

    it('should throw if no ABI in the artifacts', async () => {
      fs.readFileSync.mockReturnValueOnce({ toString: () => JSON.stringify({ ...mockArtifact, abi: undefined }) })

      await registerContractHandler({
        endpoint: mockEndpoint,
        name: mockName,
        tag: mockTag,
        filepath: mockFilepath
      })

      expect(mockOrchestrateClient.registerContract).not.toHaveBeenCalled()
    })

    it('should throw if no bytecode in the artifacts', async () => {
      fs.readFileSync.mockReturnValueOnce({ toString: () => JSON.stringify({ ...mockArtifact, bytecode: undefined }) })

      await registerContractHandler({
        endpoint: mockEndpoint,
        name: mockName,
        tag: mockTag,
        filepath: mockFilepath
      })

      expect(mockOrchestrateClient.registerContract).not.toHaveBeenCalled()
    })

    it('should throw if no deployedBytecode in the artifacts', async () => {
      fs.readFileSync.mockReturnValueOnce({
        toString: () => JSON.stringify({ ...mockArtifact, deployedBytecode: undefined })
      })

      await registerContractHandler({
        endpoint: mockEndpoint,
        name: mockName,
        tag: mockTag,
        filepath: mockFilepath
      })

      expect(mockOrchestrateClient.registerContract).not.toHaveBeenCalled()
    })

    it('should call the handler successfully', async () => {
      fs.readFileSync.mockReturnValueOnce({ toString: () => JSON.stringify(mockArtifact) })

      await registerContractHandler({
        endpoint: mockEndpoint,
        name: mockName,
        tag: mockTag,
        filepath: mockFilepath
      })

      expect(mockOrchestrateClient.registerContract).toHaveBeenCalledWith({
        name: mockName,
        tag: mockTag,
        abi: mockArtifact.abi,
        bytecode: mockArtifact.bytecode,
        deployedBytecode: mockArtifact.deployedBytecode
      })
    })
  })
})
