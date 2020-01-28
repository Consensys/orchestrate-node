import { createMockInstance } from 'jest-create-mock-instance'

import { envelope } from '../../stubs'
import { unmarshalEnvelope } from '../helpers'
import { mockEnvelope } from '../helpers/unmarshallers.test'
import { EventType } from '../types'

import { Consumer } from './Consumer'
import { onMessageReceived } from './onMessageReceived'
import { ResponseMessage } from './ResponseMessage'

const mockKey = '1-0xc1912fee45d61c87cc5ea59dae31190fffff232d'

const mockKafkaMessagePayload = {
  message: {
    value: envelope.Envelope.encode(mockEnvelope).finish(),
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
