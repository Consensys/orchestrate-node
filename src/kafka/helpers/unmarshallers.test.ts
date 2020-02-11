import { chain, envelope } from '../../stubs'
import { IResponseValue } from '../types'
import { ProtocolType } from '../types/ProtocolType'

import { unmarshalEnvelope } from './unmarshallers'

const mockData = '0xdata'
const mockFrom = '0xfrom'
const mockTo = '0xto'
const mockValue = '4554545455'
const mockHash = '0xhash'
const mockContractAddress = '0xcontractAddress'
const mockBloom = '0xbloomFilter'
const mockPostState = '0xpostState'
export const mockEnvelope = {
  args: {
    call: {
      args: ['arg0', 'arg1'],
      contract: {
        id: {
          name: 'myContract',
          tag: 'contractTag'
        }
      },
      method: {
        signature: 'myMethod(string,string)'
      }
    },
    data: mockData,
    private: {
      privateFrom: 'constellationFrom',
      privateFor: ['constellationFor0', 'constellationFor1']
    }
  },
  chain: {
    uuid: 'chainUUID',
    name: 'chainName'
  },
  from: mockFrom,
  protocol: {
    type: chain.ProtocolType.BESU_ORION
  },
  errors: [{ code: 1, message: 'errorMessage', component: 'component' }],
  metadata: {
    id: 'id',
    extra: {
      field0: 'field0',
      field1: 'field1'
    }
  },
  tx: {
    hash: mockHash,
    raw: mockData,
    txData: {
      data: mockData,
      gas: 13221321,
      gasPrice: mockValue,
      nonce: 66,
      to: mockTo,
      value: mockValue
    }
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
  }
}

// TODO: unmarshallers are not taken into account in the coverage until we have the new envelope format because of too many branches
describe('unmarshallers', () => {
  describe('unmarshalEnvelope', () => {
    it('should unmarshall an envelope successfully', () => {
      const expectedValue: IResponseValue = {
        id: mockEnvelope.metadata.id,
        errors: mockEnvelope.errors,
        extraData: mockEnvelope.metadata.extra,
        from: mockFrom,
        receipt: {
          blockHash: mockHash,
          txHash: mockHash,
          txIndex: mockEnvelope.receipt.txIndex,
          blockNumber: mockEnvelope.receipt.blockNumber,
          gasUsed: mockEnvelope.receipt.gasUsed,
          status: true,
          cumulativeGasUsed: mockEnvelope.receipt.cumulativeGasUsed,
          logs: undefined,
          bloom: mockBloom,
          postState: mockPostState,
          contractAddress: mockContractAddress
        },
        txContext: {
          contractName: mockEnvelope.args.call.contract.id.name,
          contractTag: mockEnvelope.args.call.contract.id.tag,
          chainUUID: mockEnvelope.chain.uuid,
          chainName: mockEnvelope.chain.name,
          from: mockFrom,
          protocol: ProtocolType.BesuOrion,
          gas: mockEnvelope.tx.txData.gas,
          gasPrice: mockValue,
          nonce: mockEnvelope.tx.txData.nonce,
          methodSignature: mockEnvelope.args.call.method.signature,
          value: mockValue,
          args: mockEnvelope.args.call.args,
          input: mockData,
          to: mockTo,
          privateFor: mockEnvelope.args.private.privateFor,
          privateFrom: mockEnvelope.args.private.privateFrom
        }
      }
      const envelopeBuffer = envelope.Envelope.encode(mockEnvelope).finish()

      const value = unmarshalEnvelope(envelopeBuffer as Buffer)

      expect(value).toEqual(expectedValue)
    })
  })
})
