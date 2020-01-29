import { DEFAULT_TOPIC_WALLET_GENERATED } from '../constants'
import { Consumer, ResponseMessage } from '../consumer'
import { Producer } from '../producer'
import { EventType } from '../types'
import { IExtraData } from '../types/IExtraData'

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
  public async ready() {
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

    this.isReady = false
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
   * @param authToken - authorization token
   * @param extraData - extra data
   * @param commitMessages - Whether or not the messages should be committed
   * @returns a list of Ethereum addresses
   */
  public async generateAccounts(
    amount: number,
    authToken?: string,
    extraData?: IExtraData,
    commitMessages?: boolean
  ): Promise<string[]> {
    if (!this.isReady) {
      await this.connect()
    }

    return new Promise(async (resolve, _) => {
      const addressList: string[] = []

      this.consumer.on(EventType.Response, async (message: ResponseMessage) => {
        const { id, from } = message.content().value

        if (this.pendingIds.has(id) && from) {
          addressList.push(from)
          this.pendingIds.delete(id)

          if (commitMessages) {
            await message.commit()
          }

          if (this.pendingIds.size === 0) {
            resolve(addressList)
          }
        }
      })

      await this.consumer.consume()
      await this.produceAccounts(amount, authToken, extraData)
    })
  }

  private async produceAccounts(amount: number, authToken?: string, extraData?: IExtraData) {
    for (let i = 0; i < amount; i++) {
      const id = await this.producer.generateAccount({ authToken, extraData })
      this.pendingIds.add(id)
    }
  }
}
