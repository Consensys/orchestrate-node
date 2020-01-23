import { createMockInstance } from 'jest-create-mock-instance'

import { EventType, ITransactionRequest } from '../../types'
import { marshalTransactionRequest, unmarshalEnvelope } from '../helpers'

import { Consumer } from './Consumer'
import { onMessageReceived } from './onMessageReceived'
import { ResponseMessage } from './ResponseMessage'

const mockKey = '1-0xc1912fee45d61c87cc5ea59dae31190fffff232d'
const mockRequest: ITransactionRequest = {
  from: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
  contractName: 'myContract'
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
