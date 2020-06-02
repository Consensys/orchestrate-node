import * as KakfaJS from 'kafkajs'

import { DEFAULT_TIMEOUT_ACCOUNT_GENERATOR, DEFAULT_TOPIC_ACCOUNT_GENERATED } from '../constants'
import { Consumer, ResponseMessage } from '../consumer'
import { Producer } from '../producer'
import { EventType, IGenerateAccountRequest } from '../types'

/**
 * @hidden
 */
type ResolveFunction = (address: string) => void

/**
 * Utility class used to generate Ethereum accounts
 */
export class AccountGenerator {
  private readonly producer: Producer
  private readonly consumer: Consumer
  private readonly resolveFuncs: Map<string, ResolveFunction> // Mapping from id to resolve function
  private isReady = false

  /**
   * Instantiates a new AccountGenerator
   *
   * @param producer - Producer used to interact with Orchestrate
   */
  constructor(
    brokers: string[],
    kafkaConfig?: Omit<KakfaJS.KafkaConfig, 'brokers'>,
    producerConfig?: KakfaJS.ProducerConfig,
    consumerConfig?: KakfaJS.ConsumerConfig
  ) {
    this.producer = new Producer(brokers, { clientId: 'wallet-generator-sdk-producer', ...kafkaConfig }, producerConfig)

    this.consumer = new Consumer(brokers, [DEFAULT_TOPIC_ACCOUNT_GENERATED], kafkaConfig, {
      groupId: 'wallet-generator-sdk-consumer',
      ...consumerConfig
    })

    this.resolveFuncs = new Map()
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
      // We connect the producer and consumer
      await this.producer.connect()
      await this.consumer.connect()

      // We start consuming account generation messages
      await this.consumer.consume()
      this.listenForAccounts()

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
      this.consumer.removeAllListeners()

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
  public async generateAccount(
    request?: IGenerateAccountRequest,
    timeout: number = DEFAULT_TIMEOUT_ACCOUNT_GENERATOR
  ): Promise<string> {
    if (!this.isReady) {
      throw new Error('AccountGenerator is not currently connected, did you forget to call connect()?')
    }

    let timeoutId: NodeJS.Timeout
    const timeoutPromise = new Promise<string>((_, reject) => {
      timeoutId = setTimeout(() => {
        clearTimeout(timeoutId)
        reject('Request timed out')
      }, timeout)
    })

    const callPromise = new Promise<string>(async (resolve, _) => {
      const messageId = await this.producer.generateAccount(request)
      this.resolveFuncs.set(messageId, resolve)
    })

    const result = Promise.race([timeoutPromise, callPromise]).then(v => {
      clearTimeout(timeoutId)
      return v
    })

    return result
  }

  private listenForAccounts() {
    this.consumer.on(EventType.Response, (message: ResponseMessage) => {
      const { id, txContext } = message.content().value
      const resolve = this.resolveFuncs.get(id)

      if (resolve && txContext) {
        this.resolveFuncs.delete(id)
        resolve(txContext.from!)
      }
    })
  }
}
