import { chain, envelope } from '../../stubs'
import { IResponseValue } from '../../types'
import { ProtocolType } from '../../types/ProtocolType'
import { MAINNET_CHAIN_ID } from '../constants'

import { unmarshalEnvelope } from './unmarshallers'

const mockData = '0xfefe'
const mockFrom = '0xc1912fee45d61c87cc5ea59dae31190fffff2333'
const mockGasPrice = '233333'
const mockValue = '44444'
const mockHash = '0xhash'
const mockContractAddress = '0xc1912fee45d61c87cc5ea59dae31190fffff233f'
const mockBloom = '0x31232344fff'
const mockPostState = '0x31232344fffee'
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
    data: { raw: Buffer.from(mockData) },
    private: {
      privateFrom: 'constellationFrom',
      privateFor: ['constellationFor0', 'constellationFor1']
    }
  },
  chain: {
    id: Buffer.from(MAINNET_CHAIN_ID)
  },
  from: { raw: Buffer.from(mockFrom) },
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
    hash: { raw: Buffer.from(mockHash) },
    raw: { raw: Buffer.from('0x38213ef') },
    txData: {
      data: { raw: Buffer.from('0xfefe') },
      gas: 13221321,
      gasPrice: { raw: Buffer.from(mockGasPrice) },
      nonce: 66,
      to: { raw: Buffer.from('0xc1912fee45d61c87cc5ea59dae31190fffff233e') },
      value: { raw: Buffer.from(mockValue) }
    }
  },
  receipt: {
    blockHash: { raw: Buffer.from(mockHash) },
    blockNumber: 10,
    txIndex: 2,
    txHash: { raw: Buffer.from(mockHash) },
    status: 0,
    gasUsed: 555,
    contractAddress: { raw: Buffer.from(mockContractAddress) },
    cumulativeGasUsed: 7777,
    logs: [],
    bloom: Buffer.from(mockBloom),
    postState: Buffer.from(mockPostState)
  }
}

describe('unmarshallers', () => {
  describe('unmarshalEnvelope', () => {
    it('should unmarshall an envelope successfully', () => {
      const expectedValue: IResponseValue = {
        id: mockEnvelope.metadata.id,
        chainId: MAINNET_CHAIN_ID,
        from: mockFrom,
        protocol: ProtocolType.BesuOrion,
        errors: mockEnvelope.errors,
        extraData: mockEnvelope.metadata.extra,
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
          gas: mockEnvelope.tx.txData.gas,
          gasPrice: mockGasPrice,
          nonce: mockEnvelope.tx.txData.nonce,
          methodSignature: mockEnvelope.args.call.method.signature,
          value: mockValue,
          args: mockEnvelope.args.call.args,
          input: mockData,
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
