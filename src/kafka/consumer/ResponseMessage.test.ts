import { createMockInstance } from 'jest-create-mock-instance'

import { Consumer } from './Consumer'
import { ResponseMessage } from './ResponseMessage'

const mockMessage = { field: 'myMessage' }

describe('ResponseMessage', () => {
  let responseMessage: ResponseMessage
  let mockConsumer: jest.Mocked<Consumer>

  beforeEach(() => {
    mockConsumer = createMockInstance(Consumer)

    responseMessage = new ResponseMessage(mockConsumer, mockMessage as any)
  })

  describe('commit', () => {
    it('should commit the message successfully', async () => {
      await responseMessage.commit()

      expect(mockConsumer.commit).toHaveBeenCalledWith(mockMessage)
    })
  })

  describe('content', () => {
    it('should return the message successfully', () => {
      const message = responseMessage.content()

      expect(message).toEqual(mockMessage)
    })
  })
})
