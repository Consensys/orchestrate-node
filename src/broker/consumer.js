import EventEmitter from 'events'
import kafka from 'kafka-node'

/**
 * [Consumer is a generic class for a kafka.Consumer and kafka.ConsumerGroup]
 */
class Consumer {

    /**
     * [constructor initialize an event emitter]
     * @param {kafka.Consumer|kafka.ConsumerGroup} consumer [consumer]
     * @param {function} unmarshaller [unmarshaller function to process raw message consumed]
     */
    constructor(consumer, unmarshaller) {
        this.consumer = consumer
        this.unmarshaller = unmarshaller
        this.emitter = new EventEmitter()
    }

    /**
     * Handles the readiness of the instance
     * @return {Promise} Resolves if the Consumer is already ready or
     * successfully connected, throws the received error otherwise
     */
    connect = () => new Promise((resolve, reject) => {
      if (this.consumer.ready) {
        resolve(this)
      }
      this.consumer.on('connect', () => resolve(this))
      this.consumer.on('error', err => reject(err))
    })

    /**
     * [consume consume a message with an unmarshaller]
     * @return {EventEmitter} [description]
     */
    consume = () => {
        this.consumer.on(
          'message',
          msg => {
            this.emitter.emit('message', {
              ...msg,
              value: this.unmarshaller(msg.value),
            }
          )
          }
        );

        this.consumer.on(
          'error',
          error => this.emitter.emit('error', error)
        );

        this.consumer.on(
          'offsetOutOfRange',
          error => this.emitter.emit('offsetOutOfRange', error)
        );

        return this.emitter
    }
}

/**
 * [consumer description]
 * @type {class}
 */
export class CoreStackConsumer extends Consumer {

    /**
     * [constructor description]
     * @param {kafka.KafkaClient} client       [kafka.KafkaClient instance]
     * @param {Array}             topics       [List of topics to consume]
     * @param {function}          unmarshaller [unmarshaller function to process raw message consumed]
     * @param {Object}            options      [Options of a kafka.Consumer, see https://github.com/SOHU-Co/kafka-node#consumerclient-payloads-options]
     */
    constructor(client, topics, unmarshaller, options) {
      const fetchRequests = Object.keys(topics).map(topic => ({topic, offset: topics[topic]}))
      const consumer = new kafka.Consumer(
        client,
        fetchRequests,
        {
          encoding: 'buffer',
          fromOffset: true,
          ...options
        }
      )
      super(consumer, unmarshaller)
      this.topics = topics
    }
}

/**
 * [consumer description]
 * @type {kafka}
 */
export class CoreStackConsumerGroup extends Consumer {
    
    /**
     * [constructor description]
     * @param {kafka.KafkaClient} client       [kafka.KafkaClient instance]
     * @param {Array}             topics       [List of topics to consume]
     * @param {function}          unmarshaller [unmarshaller function to process raw message consumed]
     * @param {Object}            options      [Options of a kafka.Consumer, see https://github.com/SOHU-Co/kafka-node#consumerclient-payloads-options]
     */
    constructor(client, topics, unmarshaller, options) {
      const consumer = new kafka.ConsumerGroup(
            {
                kafkaHost: client.options.kafkaHost,
                encoding: 'buffer',
                ...options
            },
            topics
        )
      super(consumer, unmarshaller)
      this.topics = topics
    }
}
