import { createMockInstance } from 'jest-create-mock-instance'

import { EventType } from '../../definitions'

import { Consumer } from './Consumer'
import { onMessageReceived } from './helpers'
import { ResponseMessage } from './ResponseMessage'

const mockKafkaMessagePayload = {
  message: {
    value: Buffer.from('my message value'),
    offset: '0'
  },
  partition: 0,
  topic: 'topic'
}

describe('helpers', () => {
  let mockConsumer: jest.Mocked<Consumer>

  beforeEach(() => {
    mockConsumer = createMockInstance(Consumer)
  })

  describe('onMessageReceived', () => {
    it('should decode and emit a Message event', () => {
      const expectedMessage = {
        ...mockKafkaMessagePayload.message,
        topic: mockKafkaMessagePayload.topic,
        partition: mockKafkaMessagePayload.partition,
        value: mockKafkaMessagePayload.message.value // TODO: Update this when the unmarshaller of the new enveloppe has been defined
      }

      onMessageReceived(mockKafkaMessagePayload as any, mockConsumer)

      expect(mockConsumer.emit).toHaveBeenCalledWith(
        EventType.Response,
        new ResponseMessage(mockConsumer, expectedMessage as any)
      )
    })
  })
})
