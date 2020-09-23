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
const mockRevertReason = 'test revert reason'
const mockOutput = 'testOutput'
const mockPrivateFrom = 'testPrivateFrom'
const mockPrivateFor = ['testPrivateFor']
const mockPrivacyGroupId = 'testPrivateGroupID'
export const mockTxResponse = {
  id: 'id',
  jobId: 'jobId',
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
    postState: mockPostState,
    revertReason: mockRevertReason,
    output: mockOutput,
    privateFrom: mockPrivateFrom,
    privateFor: mockPrivateFor,
    privacyGroupId: mockPrivacyGroupId
  },
  errors: [{ code: 1, message: 'errorMessage', component: 'component' }],
  chain: 'chainName'
}

// TODO: unmarshallers are not taken into account in the coverage until we have the new envelope format because of too many branches
describe('unmarshallers', () => {
  describe('unmarshalEnvelope', () => {
    it('should unmarshal an envelope successfully', () => {
      const expectedValue: IResponseValue = {
        id: mockTxResponse.id,
        jobId: mockTxResponse.jobId,
        errors: mockTxResponse.errors,
        contextLabels: mockTxResponse.contextLabels,
        receipt: {
          blockHash: mockHash,
          txHash: mockHash,
          txIndex: mockTxResponse.receipt.txIndex,
          blockNumber: mockTxResponse.receipt.blockNumber,
          gasUsed: mockTxResponse.receipt.gasUsed,
          status: false,
          cumulativeGasUsed: mockTxResponse.receipt.cumulativeGasUsed,
          logs: undefined,
          bloom: mockBloom,
          postState: mockPostState,
          contractAddress: mockContractAddress,
          revertReason: mockRevertReason,
          output: mockOutput,
          privateFrom: mockPrivateFrom,
          privateFor: mockPrivateFor,
          privacyGroupId: mockPrivacyGroupId
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
        },
        chain: 'chainName'
      }
      const envelopeBuffer = tx.TxResponse.encode(mockTxResponse).finish()

      const value = unmarshalEnvelope(envelopeBuffer as Buffer)

      expect(value).toEqual(expectedValue)
    })
  })
})
