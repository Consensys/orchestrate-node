import kafka from 'kafka-node'
import uuidv4 from 'uuid/v4'
import { marshalEnvelope } from './types/envelope/envelope'

/**
 * [BaseProducer is a generic class for a kafka.Producer including connect and produce]
 * @type {class}
 */
export class BaseProducer {
    /**
     * [constructor initialize a kafka.Producer]
     * @param {kafka.KafkaClient} client  [kafka.KafkaClient instance]
     * @param {Object} options            [Options of kafka-node Producer, see https://github.com/SOHU-Co/kafka-node#producerkafkaclient-options-custompartitioner]
     */
    constructor(client, options) {
        this.producer = new kafka.Producer(client, options)
    }

    /**
     * [Handles the readiness of the instance]
     * @return {Promise} [Resolves if the Producer is already ready or
     * successfully connected, throws the received error otherwise]
     */
    connect = () => new Promise((resolve, reject) => {
      if (this.producer.ready) {
        resolve(this)
      }
      this.producer.on('ready', () => resolve(this))
      this.producer.on('error', err => reject(err))
    })

    /**
     * [send message]
     * @param  {Object} msg [Kafka message to send (non opinionated)]
     * @return  {Promise}  [return Promise]
     */
    produce = msg => new Promise((resolve, reject) => {
      this.producer.send(msg, (err, data) => {
          if (err) {
              reject(err)
          } else {
              resolve(data)
          }
      })
  })

}

/**
 * [Producer is a Producer wrapper to be used to send transaction envelopes into PegaSys Orchestrate]
 */
export class Producer extends BaseProducer {
  /**
   * [constructor initialize a kafka producer capable of sending shaped envelopes]
   * @param {kafka.KafkaClient} client  [kafka.KafkaClient instance]
   * @param {string} topic              [Topic name to send envelopes]
   * @param {Object} options            [Options of kafka-node Producer, see https://github.com/SOHU-Co/kafka-node#producerkafkaclient-options-custompartitioner]
   */
  constructor(client, topic, options) {
    super(client, topic, options)
    this.topic = topic
  }

  /**
   * [marshal encode raw message to an Envelope]
   * @param  {Object} msg  [raw message to produce an envelope]
   * @return {Buffer}       [return Envelope in proto format]
   */
  marshal = msg => {
    const envelope = marshalEnvelope(msg);
    return Buffer.from(envelope.serializeBinary())
}

  /**
   * [send message to Kafka in a particular topic]
   * @param  {Object} msg           [raw message to produce an envelope]
   * @param  {string} topic         [Name of the topic to send the envelope]
   * @param  {Object} kafkaOptions  [Options to the payload sent, see https://github.com/SOHU-Co/kafka-node#sendpayloads-cb]
   * @return {Object}               [return metadata id and offset]
   */
  send = async (msg, topic = this.topic, kafkaOptions) => {
      // Init an id
      switch(typeof msg['metadata']) {
        case 'undefined':
            msg['metadata'] = {id: uuidv4()}
            break;
        case 'string':
            msg['metadata'] = {id: msg['metadata']}
            break;
        case 'object':
            if(!msg['metadata']['id']) {
                msg['metadata']['id'] = uuidv4()
            }
            break;
    }

    const id = msg['metadata']['id']
    const payloads = [
        {
            topic,
            key: msg['chainId'] + '-' + msg['from'],
            ...kafkaOptions,
            messages: this.marshal(msg)
        },
    ]

    try {
      const result = await this.produce(payloads)
      return {offset: result[topic]['0'], id}
    } catch(e) {
      throw new Error('Producer: could not send message')
    }
  }

}