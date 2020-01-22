import { createMockInstance } from 'jest-create-mock-instance'

import { EventType, ITransactionRequest } from '../../types'
import { ProtocolType } from '../../types/ProtocolType'
import { marshalTransactionRequest, unmarshalEnvelope } from '../helpers'

import { Consumer } from './Consumer'
import { onMessageReceived } from './onMessageReceived'
import { ResponseMessage } from './ResponseMessage'

const mockKey = '1-0xc1912fee45d61c87cc5ea59dae31190fffff232d'
const mockRequest: ITransactionRequest = {
  id: 'id',
  from: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
  contractName: 'myContract',
  contractTag: 'v.1.0.0',
  methodSignature: 'myMethod(string)',
  args: ['arg0'],
  authToken: 'authToken',
  chainId: 'chainId',
  extraData: {
    field0: 'field0'
  },
  gas: 200000,
  gasPrice: '12121212',
  nonce: 22,
  privateFrom: 'constellationAddress0',
  privateFor: ['constellationAddress1'],
  protocol: ProtocolType.BesuOrion,
  to: '0xc1912fee45d61c87cc5ea59dae31190fffff2333',
  value: '23232323',
  data: '0xdfede',
  raw: '0xfefe'
}
const mockEnvelopeMarshalled = marshalTransactionRequest(mockRequest)
const mockKafkaMessagePayload = {
  message: {
    value: mockEnvelopeMarshalled.value,
    offset: '0',
    key: Buffer.from(mockKey)
  },
  partition: 0,
  topic: 'topic'
}

describe('onMessageReceived', () => {
  let mockConsumer: jest.Mocked<Consumer>

  beforeEach(() => {
    mockConsumer = createMockInstance(Consumer)
  })

  it('should decode and emit a Message event', () => {
    const expectedMessage = {
      ...mockKafkaMessagePayload.message,
      topic: mockKafkaMessagePayload.topic,
      partition: mockKafkaMessagePayload.partition,
      key: mockKey,
      value: unmarshalEnvelope(mockKafkaMessagePayload.message.value as Buffer)
    }

    onMessageReceived(mockKafkaMessagePayload as any, mockConsumer)

    expect(mockConsumer.emit).toHaveBeenCalledWith(
      EventType.Response,
      new ResponseMessage(mockConsumer, expectedMessage as any)
    )
  })
})
