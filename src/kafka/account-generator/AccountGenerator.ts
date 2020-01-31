import { logLevel } from 'kafkajs'

import { DEFAULT_TOPIC_WALLET_GENERATED } from '../constants'
import { Consumer, ResponseMessage } from '../consumer'
import { Producer } from '../producer'
import { EventType, IGenerateAccountRequest } from '../types'

/**
 * Utility class used to generate Ethereum accounts
 */
export class AccountGenerator {
  private readonly producer: Producer
  private readonly consumer: Consumer
  private readonly pendingIds: Set<string>
  private isReady = false

  /**
   * Instantiates a new AccountGenerator
   *
   * @param producer - Producer used to interact with Orchestrate
   */
  constructor(brokers: string[]) {
    this.producer = new Producer(brokers, { brokers, logLevel: logLevel.ERROR })
    this.consumer = new Consumer(
      brokers,
      [DEFAULT_TOPIC_WALLET_GENERATED],
      { brokers, logLevel: logLevel.ERROR },
      { groupId: 'wallet-generator-sdk' }
    )

    this.pendingIds = new Set()
  }

  /**
   * Checks if the Account generator is connected
   */
  public ready() {
    return this.isReady
  }

  /**
   * Waits until a connection is established
   */
  public async connect() {
    if (!this.isReady) {
      await this.producer.connect()
      await this.consumer.connect()

      this.isReady = true
    }
  }

  /**
   * Disconnects and unsubscribes from Orchestrate
   */
  public async disconnect() {
    if (this.isReady) {
      await this.producer.disconnect()
      await this.consumer.disconnect()

      this.isReady = false
    }
  }

  /**
   * Generates a new Ethereum account
   *
   * @param request - Account generation request
   * @param timeout - time out in ms, 1min by default
   * @returns Ethereum address
   */
  public async generateAccount(request?: IGenerateAccountRequest, timeout?: number): Promise<string> {
    if (!this.isReady) {
      throw new Error('AccountGenerator is not currently connected, did you forget to call connect()?')
    }

    const timeoutPromise = new Promise<string>((_, reject) => {
      const id = setTimeout(() => {
        clearTimeout(id)
        reject('Request timed out')
      }, timeout || 60000)
    })

    const callPromise = new Promise<string>(async (resolve, _) => {
      this.consumer.once(EventType.Response, (message: ResponseMessage) => {
        const { id, from } = message.content().value

        if (this.pendingIds.has(id) && from) {
          this.pendingIds.delete(id)

          resolve(from)
        }
      })

      await this.consumer.consume()

      const messageId = await this.producer.generateAccount(request)
      this.pendingIds.add(messageId)
    })

    return Promise.race([timeoutPromise, callPromise])
  }
}
