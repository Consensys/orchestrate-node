import { chain, ethereum } from '../../../stubs'
import { ICall } from '../../../types/ICall'
import { ProtocolType } from '../../../types/ProtocolType'
import { MAINNET_CHAIN_ID } from '../../constants'

import * as formatters from './stub-formatters'

describe('stub-formatters', () => {
  describe('formatMetadata', () => {
    const mockId = 'id'
    const mockExtraData = {
      fiel0: 'field0',
      field1: 'field1'
    }
    const mockAuthToken = 'authToken'

    it('should create a valid Metadata message', () => {
      const message = formatters.formatMetadata(mockId, mockExtraData)
      expect(message).toEqual({
        id: mockId,
        extra: mockExtraData
      })
    })

    it('should create a valid Metadata message with authToken', () => {
      const message = formatters.formatMetadata(mockId, mockExtraData, mockAuthToken)
      expect(message).toEqual({
        id: mockId,
        extra: { Authorization: mockAuthToken, ...mockExtraData }
      })
    })
  })

  describe('formatEnvelopeArgs', () => {
    const mockCall: ICall = {
      contractName: 'myContract',
      contractTag: 'contractTag',
      methodSignature: 'myMethod(string)',
      args: ['myArg']
    }
    const mockPrivateFrom = '0xconstellationAddress'
    const mockPrivateFor = ['0xconstellationFor']

    it('should create a valid Args message', () => {
      const message = formatters.formatEnvelopeArgs(mockCall, mockPrivateFrom, mockPrivateFor)
      expect(message).toEqual({
        call: {
          contract: {
            id: {
              name: mockCall.contractName,
              tag: mockCall.contractTag
            },
            events: [],
            methods: []
          },
          method: { signature: mockCall.methodSignature },
          args: mockCall.args
        },
        private: {
          privateFor: mockPrivateFor,
          privateFrom: mockPrivateFrom
        }
      })
    })
  })

  describe('formatProtocol', () => {
    it('should create a valid Protocol message for EthereumConstantinople', () => {
      const message = formatters.formatProtocol(ProtocolType.EthereumConstantinople)
      expect(message).toEqual({
        type: chain.ProtocolType.ETHEREUM_CONSTANTINOPLE,
        extra: {}
      })
    })

    it('should create a valid Protocol message for BesuOrion', () => {
      const message = formatters.formatProtocol(ProtocolType.BesuOrion)
      expect(message).toEqual({
        type: chain.ProtocolType.BESU_ORION,
        extra: {}
      })
    })

    it('should create a valid Protocol message for QuorumConstellation', () => {
      const message = formatters.formatProtocol(ProtocolType.QuorumConstellation)
      expect(message).toEqual({
        type: chain.ProtocolType.QUORUM_CONSTELLATION,
        extra: {}
      })
    })

    it('should create a valid Protocol message for QuorumTessera', () => {
      const message = formatters.formatProtocol(ProtocolType.QuorumTessera)
      expect(message).toEqual({
        type: chain.ProtocolType.QUORUM_TESSERA,
        extra: {}
      })
    })

    it('should create a valid Protocol message with EthereumConstantinople by default', () => {
      const message = formatters.formatProtocol()
      expect(message).toEqual({
        type: chain.ProtocolType.ETHEREUM_CONSTANTINOPLE,
        extra: {}
      })
    })
  })

  describe('formatChain', () => {
    const mockChainId = 'chainId'

    it('should create a valid Chain message', () => {
      const message = formatters.formatChain(mockChainId)
      expect(message).toEqual({
        id: Buffer.from(mockChainId)
      })
    })

    it('should create a valid Chain message with Mainnet by default', () => {
      const message = formatters.formatChain()
      expect(message).toEqual({
        id: Buffer.from(MAINNET_CHAIN_ID)
      })
    })
  })

  describe('formatTransaction', () => {
    const mockTransaction = {
      from: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
      gas: 20000,
      gasPrice: '29999999',
      nonce: 66,
      to: '0xc1912fee45d61c87cc5ea59dae31190fffff2333',
      value: '5555566',
      data: '0x43',
      raw: '0x53'
    }

    it('should create a valid Transaction message', () => {
      const message = formatters.formatTransaction(mockTransaction)
      expect(ethereum.Transaction.verify(message)).toBeNull()
    })

    it('should create a valid Transaction message with no "to" value', () => {
      const message = formatters.formatTransaction({ ...mockTransaction, to: undefined })
      expect(message.txData!.to).toBeNull()
    })

    it('should create a valid Transaction message with no "data" value', () => {
      const message = formatters.formatTransaction({ ...mockTransaction, data: undefined })
      expect(message.txData!.data).toBeNull()
    })

    it('should create a valid Transaction message with no "value" value', () => {
      const message = formatters.formatTransaction({ ...mockTransaction, value: undefined })
      expect(message.txData!.value).toBeNull()
    })
  })
})
