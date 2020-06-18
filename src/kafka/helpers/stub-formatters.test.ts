import { tx } from '../../stubs'
import { ProtocolType } from '../types'

import * as formatters from './stub-formatters'

describe('stub-formatters', () => {
  describe('formatContract', () => {
    it('should format contract', () => {
      const contract = formatters.formatContract('testContractName', 'testContractTag')
      expect(contract).toEqual('testContractName[testContractTag]')
    })

    it('should format contract without tag', () => {
      const contract = formatters.formatContract('testContractName', undefined)
      expect(contract).toEqual('testContractName')
    })

    it('should return empty contract', () => {
      const contract = formatters.formatContract(undefined, 'uselessContractTag')
      expect(contract).toBeNull()
    })
  })

  describe('formatProtocol', () => {
    it('should create a valid Protocol message for EthereumConstantinople', () => {
      const message = formatters.formatProtocol(ProtocolType.EthereumConstantinople)
      expect(message).toEqual(tx.Method.ETH_SENDRAWTRANSACTION)
    })

    it('should create a valid Protocol message for BesuOrion', () => {
      const message = formatters.formatProtocol(ProtocolType.BesuOrion)
      expect(message).toEqual(tx.Method.EEA_SENDPRIVATETRANSACTION)
    })

    it('should create a valid Protocol message for QuorumConstellation', () => {
      const message = formatters.formatProtocol(ProtocolType.QuorumConstellation)
      expect(message).toEqual(tx.Method.ETH_SENDPRIVATETRANSACTION)
    })

    it('should create a valid Protocol message for QuorumTessera', () => {
      const message = formatters.formatProtocol(ProtocolType.QuorumTessera)
      expect(message).toEqual(tx.Method.ETH_SENDRAWPRIVATETRANSACTION)
    })

    it('should create a valid Protocol message with EthereumConstantinople by default', () => {
      const message = formatters.formatProtocol()
      expect(message).toEqual(tx.Method.ETH_SENDRAWTRANSACTION)
    })
  })
})
