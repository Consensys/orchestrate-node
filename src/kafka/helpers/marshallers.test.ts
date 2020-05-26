import { ProtocolType } from '../types'

import { marshalTransactionRequest } from './marshallers'

describe('marshallers', () => {
  describe('kafka partition key', () => {
    it('creates a kafka partition key for classic transaction', () => {
      const msg = marshalTransactionRequest({
        chain: 'test',
        from: '0xc1912fee45d61c87cc5ea59dae31190fffff232d'
      })

      expect(msg.key).toEqual('0xc1912fee45d61c87cc5ea59dae31190fffff232d@test')
    })

    it('creates a kafka partition key for eea_sendRawTransaction with privateFor', () => {
      const msg = marshalTransactionRequest({
        chain: 'test',
        from: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
        protocol: ProtocolType.BesuOrion,
        privateFor: ['testPrivateFor'],
        privateFrom: 'testPrivateFrom'
      })

      expect(msg.key).toEqual('0xc1912fee45d61c87cc5ea59dae31190fffff232d@orion-59401c240e113cdcb06cd35f7e160e4f@test')
    })

    it('creates a kafka partition key for eea_sendRawTransaction with privateFor', () => {
      const msg = marshalTransactionRequest({
        chain: 'test',
        from: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
        protocol: ProtocolType.BesuOrion,
        privacyGroupId: 'testPrivacyGroupId',
        privateFrom: 'testPrivateFrom'
      })

      expect(msg.key).toEqual('0xc1912fee45d61c87cc5ea59dae31190fffff232d@orion-testPrivacyGroupId@test')
    })

    it('creates a kafka partition key for eea_sendRawTransaction without privateFor or privacyGroupId', () => {
      const msg = marshalTransactionRequest({
        chain: 'chainName',
        from: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
        protocol: ProtocolType.BesuOrion
      })

      expect(msg.key).toEqual('0xc1912fee45d61c87cc5ea59dae31190fffff232d@orion-chainName')
    })
  })
})
