import kafka from 'kafka-node'
import { CoreStackConsumer, CoreStackConsumerGroup } from './consumer'
import { CoreStackProducer } from './producer'

/**
 * [hostname description]
 * @type {[type]}
 */
export default class CoreStackBroker {
    /**
     * [constructor description]
     * @param {[type]} endpoint [description]
     * @param {[type]} options  [description]
     */
    constructor(endpoint, options, web3Client) {
      this.endpoint = endpoint
      this.options = options
      this.web3Client = web3Client
      this.client = new kafka.KafkaClient({kafkaHost: endpoint, ...options})
    }

    /**
     * [producer description]
     * @param  {[type]} topic   [description]
     * @param  {[type]} options [description]
     * @return {[type]}         [description]
     */
    producer = (topic, options) => {
      const CSProducer = new CoreStackProducer(this.client, topic, options)
      return CSProducer.connect();
    }

    /**
     * [getLatestOffset description]
     * @param {[type]} topic [description]
     */
    getLatestOffset = topic => new Promise((resolve, reject) => {
        const offset = new kafka.Offset(this.client)
        offset.fetchLatestOffsets([topic], (err, offsets) => {
            if(err) {
                reject(err)
            } else {
                resolve(offsets[topic][0])
            }
        })
    })

    /**
     * [consumer description]
     * @param  {[type]} topic   [description]
     * @param  {[type]} options [description]
     * @return {[type]}         [description]
     */
    consumer = async (topic, options) => {
      const latestOffset = await this.getLatestOffset(topic)
      const CSConsumer = new CoreStackConsumer(this.client, topic, latestOffset, options)
      return CSConsumer.connect();
    }

    /**
     * [consumerGroup description]
     * @param  {[type]} topic   [description]
     * @param  {[type]} options [description]
     * @return {[type]}         [description]
     */
    consumerGroup = (topic, options) => {
      const CSConsumerGroup =  new CoreStackConsumerGroup(this.hostname, topic, options);
      return CSConsumerGroup.connect();
    }
}
