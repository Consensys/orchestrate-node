import { EventType, IExtraData } from '../../types'
import { DEFAULT_TOPIC_WALLET_GENERATOR } from '../constants'
import { Consumer, ResponseMessage } from '../consumer'
import { Producer } from '../producer'

/**
 * Class used to generate Ethereum wallets
 */
export class WalletGenerator {
  private readonly topic: string

  constructor(private readonly consumer: Consumer, private readonly producer: Producer, walletGeneratorTopic?: string) {
    this.topic = walletGeneratorTopic ? walletGeneratorTopic : DEFAULT_TOPIC_WALLET_GENERATOR
  }

  public async generate(numberOfWallets = 1, requestId?: string, extraData?: IExtraData) {
    // Be sure to avoid side effects by disconnecting if the consumer is already connected
    if (this.consumer.ready()) {
      await this.consumer.disconnect()
    }
    await this.consumer.connect()

    const walletAddresses: string[] = []

    return new Promise(async (resolve, _) => {
      this.consumer.on(EventType.Response, (message: ResponseMessage) => {
        const { value } = message.content()

        // TODO: Push the ethereum address in the "from" field when unmarshalling is done
        walletAddresses.push(value.toString())

        if (walletAddresses.length === numberOfWallets) {
          resolve(walletAddresses)
        }
      })

      Array(numberOfWallets).forEach(async () => {
        await this.producer.generateWallet(this.topic, requestId, extraData)
      })
    })
  }
}
