import kafka from 'kafka-node'
import uuidv4 from 'uuid/v4'
import { marshallEnvelope } from './types/envelope/envelope';

/**
 * [producer description]
 * @type {kafka}
 */
export class CoreStackProducer {
    /**
     * [constructor description]
     * @param {[type]} client  [description]
     * @param {[type]} topic   [description]
     * @param {[type]} options [description]
     */
    constructor(client, topic, options) {
        this.producer = new kafka.Producer(client, options)
        this.topic = topic
    }

    /**
     * Handles the readiness of the instance
     * @return {Promise} Resolves if the CoreStackProducer is already ready or
     * successfully connected, throws the received error otherwise
     */
    connect = () => new Promise((resolve, reject) => {
      if (this.producer.ready) {
        resolve(this)
      }
      this.producer.on('ready', () => resolve(this))
      this.producer.on('error', err => reject(err))
    })

    /**
     * [marshall description]
     * @param  {[type]} msg [description]
     * @return {[type]}     [description]
     */
    marshall = msg => {
        const envelope = marshallEnvelope(msg);
        return Buffer.from(envelope.serializeBinary())
    }

    /**
     * [send description]
     * @param  {[type]} msg          [description]
     * @param  {[type]} kafkaOptions [description]
     * @return {[type]}              [description]
     */
    send = (msg, kafkaOptions) => new Promise((resolve, reject) => {

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
                topic: this.topic,
                key: msg['chainId'] + '-' + msg['from'],
                ...kafkaOptions,
                messages: this.marshall(msg)
            },
        ]

        this.producer.send(payloads, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve({offset: data[this.topic]['0'], id})
            }
        })
    })
}
