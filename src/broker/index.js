import kafka from 'kafka-node'
import { Consumer, ConsumerGroup } from './consumer'
import { Producer } from './producer'
import { WalletGenerator } from './wallet'
import { unmarshalEnvelope } from './types/envelope/envelope';
import { 
  DEFAULT_TOPIC_TX_CRAFTER,
  DEFAULT_TOPIC_TX_DECODED,
  DEFAULT_TOPIC_WALLET_GENERATOR,
  DEFAULT_TOPIC_WALLET_GENERATED
} from './default'

/**
 * [Broker class gathering producer, consumer for interacting with kafka]
 * @type {class}
 */
export default class Broker {
    /**
     * [instanciate a kafka broker with custom producer and consumer]
     * @param {string} endpoint [Kafka endpoint]
     * @param {Object} options  [Options to instanciate kafka-node. see https://github.com/SOHU-Co/kafka-node#options]
     */
    constructor(endpoint, options) {
      this.endpoint = endpoint
      this.options = options
      this.client = new kafka.KafkaClient({kafkaHost: endpoint, ...options})
    }

    /**
     * [producer creates a Producer instance]
     * @param  {string} topic       [Topic name to send envelopes]
     * @param  {Object} options     [Options of kafka-node Producer, see https://github.com/SOHU-Co/kafka-node#producerkafkaclient-options-custompartitioner]
     * @return {Producer}  [Producer instance]
     */
    producer = async (topic = DEFAULT_TOPIC_TX_CRAFTER, options) => {
      const producer = new Producer(this.client, topic, options)
      try {
        return await producer.connect()
      } catch (e) {
        throw new Error('Producer not able to connect:', e)
      }
    }

    /**
     * [getLatestOffset get latest offset of topic(s)]
     * @param {Array} topics [Name of topics]
     * @return {Promise}     [return list of topics and their latest offset]
     */
    getLatestOffset = topics => new Promise((resolve, reject) => {
        const offset = new kafka.Offset(this.client)
        offset.fetchLatestOffsets(topics, (err, offsets) => {
            if(err) {
                reject(err)
            } else {
              // Get latest offset in the partition 0 by default
              let offsetsbyTopics = {}
              Object.keys(offsets).forEach(topic => {
                Object.assign(offsetsbyTopics, {[topic]: offsets[topic][0]});
              })
              resolve(offsetsbyTopics)
            }
        })
    })

    /**
     * [Consumer creates a Consumer instance]
     * @param  {Array} topics      [List of topics to consume - default = DEFAULT_TOPIC_TX_DECODED]
     * @param  {Object} options    [Options of a kafka.Consumer, see https://github.com/SOHU-Co/kafka-node#consumerclient-payloads-options]
     * @return {Consumer} [return a new Consumer instance]
     */
    consumer = async (topics = [DEFAULT_TOPIC_TX_DECODED], options) => {
      const latestOffsetByTopics = await this.getLatestOffset(topics)
      const CSConsumer = new Consumer(this.client, latestOffsetByTopics, unmarshalEnvelope, options)
      try {
        return await CSConsumer.connect()
      } catch (e) {
        throw new Error('Consumer not able to connect:', e)
      }
    }
    
    /**
     * [ConsumerGroup creates a ConsumerGroup instance]
     * @param  {Array} topics           [List of topics to consume - default = DEFAULT_TOPIC_TX_DECODED]
     * @param  {Object} options         [Options of a kafka.ConsumerGroup, see https://github.com/SOHU-Co/kafka-node#consumergroupoptions-topics]
     * @return {ConsumerGroup} [return a new ConsumerGroup instance]
     */
    consumerGroup = async (topics = [DEFAULT_TOPIC_TX_DECODED], options) => {
      const CSConsumerGroup = new ConsumerGroup(this.client, topics, unmarshalEnvelope, options);
      try {
        return await CSConsumerGroup.connect()
      } catch (e) {
        throw new Error('ConsumerGroup not able to connect:', e)
      }
    }
    
    /**
     * [creates a WalletGenerator instance]
     * @param  {string} topicIn  [Name of the topic to send a wallet generation message]
     * @param  {Array} topicOut  [Name of the topic to consume a wallet generated]
     * @return {WalletGenerator} [return a new WalletGenerator instance]
     */
    walletGenerator = async (topicIn = DEFAULT_TOPIC_WALLET_GENERATOR, topicOut = [DEFAULT_TOPIC_WALLET_GENERATED]) => { 
      let producer, consumer
      [producer, consumer] = await Promise.all([this.producer(topicIn), this.consumer(topicOut)])
      return new WalletGenerator(producer, consumer)
    }

}
