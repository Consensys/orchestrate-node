import { DEFAULT_TOPIC_WALLET_GENERATED } from '../constants'
import { Consumer, ResponseMessage } from '../consumer'
import { Producer } from '../producer'
import { EventType, IGenerateAccountRequest } from '../types'

/**
 * Utility class used to generate Ethereum accounts
 */
export class AccountGenerator {
  private readonly consumer: Consumer
  private readonly pendingIds: Set<string>
  private isReady = false

  /**
   * Instantiates a new AccountGenerator
   *
   * @param producer - Producer used to interact with Orchestrate
   */
  constructor(private readonly producer: Producer) {
    this.consumer = new Consumer(this.producer.getBrokers(), [DEFAULT_TOPIC_WALLET_GENERATED])
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
    if (!this.producer.ready()) {
      await this.producer.connect()
    }

    if (!this.consumer.ready()) {
      await this.consumer.connect()
    }

    this.isReady = true
  }

  /**
   * Disconnects and unsubscribes from Orchestrate
   */
  public async disconnect() {
    if (this.producer.ready()) {
      await this.producer.disconnect()
    }

    if (this.consumer.ready()) {
      await this.consumer.disconnect()
    }

    this.isReady = false
  }

  /**
   * Generates a given amount of Ethereum accounts
   *
   * @param amount - number of addresses to create
   * @param request - Account generation request
   * @returns a list of Ethereum addresses
   */
  public async generateAccounts(amount: number = 1, request?: IGenerateAccountRequest): Promise<string[]> {
    return new Promise(async (resolve, _) => {
      if (!this.isReady) {
        await this.connect()
      }

      const addressList: string[] = []

      this.consumer.on(EventType.Response, (message: ResponseMessage) => {
        const { id, from } = message.content().value

        if (this.pendingIds.has(id) && from) {
          addressList.push(from)
          this.pendingIds.delete(id)

          if (this.pendingIds.size === 0) {
            resolve(addressList)
          }
        }
      })

      await this.consumer.consume()

      for (let i = 0; i < amount; i++) {
        const id = await this.producer.generateAccount(request)
        this.pendingIds.add(id)
      }
    })
  }
}
