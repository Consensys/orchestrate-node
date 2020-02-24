import { tx } from '../../stubs'
import { IResponseValue } from '../types'

import { unmarshalEnvelope } from './unmarshallers'

const mockData = '0xdata'
const mockFrom = '0xfrom'
const mockTo = '0xto'
const mockValue = '4554545455'
const mockHash = '0xhash'
const mockContractAddress = '0xcontractAddress'
const mockBloom = '0xbloomFilter'
const mockPostState = '0xpostState'
export const mockTxResponse = {
  id: 'id',
  transaction: {
    from: mockFrom,
    contract: 'myContract[contractTag]',
    txHash: mockHash,
    raw: mockData,
    data: mockData,
    gas: '13221321',
    gasPrice: mockValue,
    nonce: '66',
    to: mockTo,
    value: mockValue
  },
  contextLabels: {
    field0: 'field0',
    field1: 'field1'
  },
  receipt: {
    blockHash: mockHash,
    blockNumber: 10,
    txIndex: 2,
    txHash: mockHash,
    status: 0,
    gasUsed: 555,
    contractAddress: mockContractAddress,
    cumulativeGasUsed: 7777,
    logs: [],
    bloom: mockBloom,
    postState: mockPostState
  },
  errors: [{ code: 1, message: 'errorMessage', component: 'component' }]
}

// TODO: unmarshallers are not taken into account in the coverage until we have the new envelope format because of too many branches
describe('unmarshallers', () => {
  describe('unmarshalEnvelope', () => {
    it('should unmarshall an envelope successfully', () => {
      const expectedValue: IResponseValue = {
        id: mockTxResponse.id,
        errors: mockTxResponse.errors,
        contextLabels: mockTxResponse.contextLabels,
        receipt: {
          blockHash: mockHash,
          txHash: mockHash,
          txIndex: mockTxResponse.receipt.txIndex,
          blockNumber: mockTxResponse.receipt.blockNumber,
          gasUsed: mockTxResponse.receipt.gasUsed,
          status: true,
          cumulativeGasUsed: mockTxResponse.receipt.cumulativeGasUsed,
          logs: undefined,
          bloom: mockBloom,
          postState: mockPostState,
          contractAddress: mockContractAddress
        },
        txContext: {
          from: mockFrom,
          gas: Number(mockTxResponse.transaction.gas),
          gasPrice: mockValue,
          nonce: Number(mockTxResponse.transaction.nonce),
          value: mockValue,
          input: mockData,
          to: mockTo,
          raw: mockData,
          txHash: mockHash
        }
      }
      const envelopeBuffer = tx.TxResponse.encode(mockTxResponse).finish()

      const value = unmarshalEnvelope(envelopeBuffer as Buffer)

      expect(value).toEqual(expectedValue)
    })
  })
})
