import Web3 from 'web3'
import { EventEmitter } from 'events';
import { 
  KafkaClientOptions,
  Message,
  ProducerOptions,
  ConsumerOptions,
  ConsumerGroupOptions
} from 'kafka-node'

/**
 * [CoreStack with broker and web3]
 */
export default class CoreStack {
  /**
   * [constructor Wrapper for CoreStackSDK with broker and web3]
   */
  constructor()

  /**
   * [broker creates a CoreStackBroker instance]
   * @param  {string}             endpoint [Kafka endpoint]
   * @param  {KafkaClientOptions} options  [Options to instanciate kafka-node. see https://github.com/SOHU-Co/kafka-node#options]
   * @return {CoreStackBroker}             [Class to produce, consume messages with a kafka]
   */
  broker(endpoint: string, options?: KafkaClientOptions) : CoreStackBroker

  /**
   * [web3 creates a CoreStackWeb3 instance]
   * @param  {Web3Endpoints}      endpoints [JSON/RPC endpoints with label as key and endpoints as value]
   * @param  {Object}  options   [web3.js options. see https://web3js.readthedocs.io/en/1.0/web3-shh.html#web3-module-options]
   * @return {CoreStackWeb3}                [Class with web3 instances]
   */
  web3(endpoint: Web3Endpoints, options?: Object): CoreStackWeb3 
}  

/**
 * [CoreStackWeb3 with multiple web3 instances]
 */
export class CoreStackWeb3 {
   /**
   * [wallet class to generate wallet in CoreStack]
   *
   * @param   {[Web3Endpoints]}      endpoint:  [JSON/RPC endpoints with label as key and endpoints as value]
   * @param   {[Object]}  options?:  [web3.js options. see https://web3js.readthedocs.io/en/1.0/web3-shh.html#web3-module-options]
   *
   */
  constructor(endpoints: Web3Endpoints, options?: Object)

  /**
   * [getWeb3 get web3 instances]
   * @return {Web3Instances}  [multiple instances of web3 with their labels as key]
   */
  getWeb3(): Web3Instances

  /**
   * [getNetworks get web3 instances labels]
   * @return {string[]} [Names of web3 instances]
   */
  getNeworks(): string[]
}

/**
 * [CoreStackBroker class gathering producer, consumer for interacting with kafka]
 */
export class CoreStackBroker {
  /**
   * [constructor initialize a Kafka broker]
   *
   * @param   {[string]}              endpoint:  [Kafka endpoint]
   * @param   {[KafkaClientOptions]}  options?:  [Options?: to instanciate kafka-node. see https://github.com/SOHU-Co/kafka-node#options]
   *
   */
  constructor(endpoint: string, options?: KafkaClientOptions)
  
  /**
   * [produce message on a kafka topic]
   *
   * @param   {[string]}              topic?:    [topicIn?: topic to send wallet creation request - default: topic-wallet-generator]
   * @param   {[ProducerOptions]}  options?:  [Options?: to instanciate kafka-node. see https://github.com/SOHU-Co/kafka-node#producerkafkaclient-options-custompartitioner]
   *
   * @return  {Promise<Producer>}     [return a Producer instance]
   */
  producer(topic?: string, options?: ProducerOptions): Promise<Producer>
  
  /**
   * [Consume message from kafka topics]
   *
   * @param   {[string[]]}            topics?:   [List of topics to consume - default = DefaultCSOutTopic]
   * @param   {[ConsumerOptions]}  options?:  [Options of kafka-node Consumer, see https://github.com/SOHU-Co/kafka-node#consumerclient-payloads-options]
   *
   * @return  {Promise<Consumer>}     [return a Consumer instance]
   */
  consumer(topics?: string[], options?: ConsumerOptions) : Promise<Consumer>

  /**
   * [Advanced consumer that consume messages from kafka topics]
   *
   * @param   {[string[]]}  topics?:   [List of topics to consume - default = DefaultCSOutTopic]
   * @param   {[ConsumerGroupOptions]}  options?:  [Options of kafka-node ConsumerGroup, see https://github.com/SOHU-Co/kafka-node#consumergroupoptions-topics]
   *
   * @return  {Promise<Consumer>}     [return a Consumer instance ]
   */
  consumerGroup(topics?: string[], options?: ConsumerGroupOptions): Promise<Consumer>
  
  /**
   * [wallet class to generate wallet in CoreStack]
   *
   * @param   {[type]}  topicIn?:   [topicIn?: topic to send wallet creation request - default: topic-wallet-generator]
   * @param   {[type]}  topicOut?:  [topicOut?: topic to consume wallet genrated in CoreStack - default topic-wallet-generated]
   *
   * @return  {Promise<WalletGenerator>}     [return class with the method generate()]
   */
  walletGenerator(topicIn?: string, topicOut?: string[]): Promise<WalletGenerator>
}

/**
 * [WalletGenerator class that enables you to generate wallet]
 */
export class WalletGenerator {

  /**
   * [constructor init generator and listener]
   * @param  {Producer} producer [Kafka producer]
   * @param  {Consumer} endpoint [Kafka Consumer]
   */
  constructor(producer?: Producer, consumer?: Consumer)

  /**
   * [generate method to create a wallet on CoreStack]
   *
   * @return  {Promise<string>}  [return promise of an public address generated in CoreStack]
   */
  generate(): Promise<string>
}

// # Interfaces
export interface Producer { 
  send(msg: CoreStackRequest, topic?: string, kafkaOptions?: KafkaClientOptions): ProducerOutput
}

export interface Consumer {
  consume(): EventEmitter
}

export interface ConsumerOutput extends Omit<Message, 'value'> {
  topic: string;
  value: object | Buffer
  offset?: number
  partition?: number
  highWaterOffset?: number
  key?: string | Buffer
}
export interface Web3Endpoints {
  [endpointName: string]: string
}

export interface ProducerOutput {
  offset: number
  id: number
} 

export interface Web3Instances {
  [web3InstanceName: string]: Web3
}

export interface CoreStackRequest {
  chainId?: string
  protocol?: Protocol
  to?: string
  value?: string
  gas?: string | number
  gasPrice?: string
  data?: string
  raw?: string
  hash?: string
  from?: string
  privateFrom?: string
  privateFor?: string[]
  call?: Call
  metadata?: Metadata | string
}

export interface Protocol {
  type: ProtocolType
  extra?: object
}

export declare enum ProtocolType {
  EthereumConstantinople,
  QuorumConstellation,
  QuorumTessera,
  PantheonOrion,
}

export interface Metadata {
  id: string
  extra?: object
}

export interface Call {
  contract?: Contract | string
  method?: Method | string
  args?: any[]
}

export interface Method {
  signature?: string
  abi?: string
}

export interface Contract {
  registry?: string
  name: string
  tag?: string
  abi?: object
  bytecode?: string
  deployedBytecode?: string
  methods?: object[]
  events?: object[]
}
