import kafka from 'kafka-node'
import { CoreStackConsumer, CoreStackConsumerGroup } from './consumer'
import { CoreStackProducer } from './producer'
import { WalletGenerator } from './wallet'
import { unmarshallEnvelope } from './types/envelope/envelope';
import { 
  DefaultCSInTopic,
  DefaultCSOutTopic,
  DefaultTopicWalletGenerator,
  DefaultTopicWalletGenerated
} from './default'

/**
 * [CoreStackBroker class gathering producer, consumer for interacting with kafka]
 * @type {class}
 */
export default class CoreStackBroker {
    /**
     * [instanciate a kafka broker with custom corestack producer and consumer]
     * @param {string} endpoint [Kafka endpoint]
     * @param {Object} options  [Options to instanciate kafka-node. see https://github.com/SOHU-Co/kafka-node#options]
     */
    constructor(endpoint, options) {
      this.endpoint = endpoint
      this.options = options
      this.client = new kafka.KafkaClient({kafkaHost: endpoint, ...options})
    }

    /**
     * [producer creates a CoreStackProducer instance]
     * @param  {string} topic       [Topic name to send envelopes]
     * @param  {Object} options     [Options of kafka-node Producer, see https://github.com/SOHU-Co/kafka-node#producerkafkaclient-options-custompartitioner]
     * @return {CoreStackProducer}  [CoreStackProducer instance]
     */
    producer = async (topic = DefaultCSInTopic, options) => {
      const CSProducer = new CoreStackProducer(this.client, topic, options)
      try {
        return await CSProducer.connect()
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
     * [Consumer creates a CoreStackConsumer instance]
     * @param  {Array} topics      [List of topics to consume - default = DefaultCSOutTopic]
     * @param  {Object} options    [Options of a kafka.Consumer, see https://github.com/SOHU-Co/kafka-node#consumerclient-payloads-options]
     * @return {CoreStackConsumer} [return a new CoreStackConsumer instance]
     */
    consumer = async (topics = [DefaultCSOutTopic], options) => {
      const latestOffsetByTopics = await this.getLatestOffset(topics)
      const CSConsumer = new CoreStackConsumer(this.client, latestOffsetByTopics, unmarshallEnvelope, options)
      try {
        return await CSConsumer.connect()
      } catch (e) {
        throw new Error('Consumer not able to connect:', e)
      }
    }
    
    /**
     * [ConsumerGroup creates a CoreSatckConsumerGroup instance]
     * @param  {Array} topics           [List of topics to consume - default = DefaultCSOutTopic]
     * @param  {Object} options         [Options of a kafka.ConsumerGroup, see https://github.com/SOHU-Co/kafka-node#consumergroupoptions-topics]
     * @return {CoreStackConsumerGroup} [return a new CoreStackConsumerGroup instance]
     */
    consumerGroup = async (topics = [DefaultCSOutTopic], options) => {
      const CSConsumerGroup = new CoreStackConsumerGroup(this.client, topics, unmarshallEnvelope, options);
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
    walletGenerator = async (topicIn = DefaultTopicWalletGenerator, topicOut = [DefaultTopicWalletGenerated]) => { 
      let producer, consumer
      [producer, consumer] = await Promise.all([this.producer(topicIn), this.consumer(topicOut)])
      return new WalletGenerator(producer, consumer)
    }

}
