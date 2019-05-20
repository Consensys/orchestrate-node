import EventEmitter from 'events'
import  { unmarshallEnvelope } from './types/envelope/envelope'
import kafka from 'kafka-node'

/**
 * [Consumer description]
 */
class Consumer {

    /**
     * [constructor description]
     * @param {[type]} consumer [description]
     */
    constructor(consumer) {
        this.consumer = consumer
        this.emitter = new EventEmitter()
    }

    /**
     * [consume description]
     * @return {[type]} [description]
     */
    consume = () => {
        this.consumer.on(
          'message',
          msg => this.emitter.emit('message', unmarshallEnvelope(msg.value))
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
 * @type {kafka}
 */
export class CoreStackConsumer extends Consumer {
    /**
     * [constructor description]
     * @param {[type]} client       [description]
     * @param {[type]} topic        [description]
     * @param {[type]} latestOffset [description]
     * @param {[type]} options      [description]
     */
    constructor(client, topic, latestOffset, options) {
        const consumer = new kafka.Consumer(
            client,
            [
                { topic: topic, offset: latestOffset },
            ],
            {
                encoding: 'buffer',
                fromOffset: true,
                ...options
            }
        )
        super(consumer)
        this.topic = topic
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
      this.consumer.on('ready', () => resolve(this))
      this.consumer.on('error', err => reject(err))
    })
}

/**
 * [consumer description]
 * @type {kafka}
 */
export class CoreStackConsumerGroup extends Consumer {
    /**
     * [constructor description]
     * @param {[type]} hostname [description]
     * @param {[type]} topic    [description]
     * @param {[type]} options  [description]
     */
    constructor(hostname, topic, options) {
        const consumer = new kafka.ConsumerGroup(
            {
                kafkaHost: hostname,
                encoding: 'buffer',
                ...options
            },
            topic
        )
        super(consumer)
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
}
