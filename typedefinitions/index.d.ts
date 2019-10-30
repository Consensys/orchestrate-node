import Web3 from 'web3'
import { EventEmitter } from 'events';
import { 
  KafkaClientOptions,
  Message,
  ProducerOptions,
  ConsumerOptions,
  ConsumerGroupOptions,
  KafkaClient,
  Producer,
  Consumer,
  ConsumerGroup
} from 'kafka-node'

/**
 * [Orchestrate with broker and web3]
 */
export default class Orchestrate {
  /**
   * [constructor Wrapper for Orchestrate with broker and web3]
   */
  constructor()

  /**
   * [broker creates a Broker instance]
   * @param  {string}             endpoint [Kafka endpoint]
   * @param  {KafkaClientOptions} options  [Options to instanciate kafka-node. see https://github.com/SOHU-Co/kafka-node#options]
   * @return {Broker}             [Class to produce, consume messages with a kafka]
   */
  broker(endpoint: string, options?: KafkaClientOptions) : Broker

  /**
   * [web3 creates a Web3 instance]
   * @param  {Web3Endpoints}      endpoints [JSON/RPC endpoints with label as key and endpoints as value]
   * @param  {Object}  options   [web3.js options. see https://web3js.readthedocs.io/en/1.0/web3-shh.html#web3-module-options]
   * @return {Web3}                [Class with web3 instances]
   */
  web3(endpoint: Web3Endpoints, options?: Object): Web3 
}  

/**
 * [Web3 with multiple web3 instances]
 */
export class Web3 {
   /**
   * [wallet class to generate wallet in ]
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
 * [Broker class gathering producer, consumer for interacting with kafka]
 */
export class Broker {
  endpoint: string
  options: KafkaClientOptions
  client: KafkaClient
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
   * [wallet class to generate wallet]
   *
   * @param   {[type]}  topicIn?:   [topicIn?: topic to send wallet creation request - default: topic-wallet-generator]
   * @param   {[type]}  topicOut?:  [topicOut?: topic to consume wallet generated - default topic-wallet-generated]
   *
   * @return  {Promise<WalletGenerator>}     [return class with the method generate()]
   */
  walletGenerator(topicIn?: string, topicOut?: string[]): Promise<WalletGenerator>
}

/**
 * [WalletGenerator class that enables you to generate wallet]
 */
export class WalletGenerator {
  producer: Producer
  consumer: Consumer
  pendingWallets: object
  /**
   * [constructor init generator and listener]
   * @param  {Producer} producer [Kafka Producer]
   * @param  {Consumer} endpoint [Kafka Consumer]
   */
  constructor(producer?: Producer, consumer?: Consumer)

  /**
   * [generate method to create a wallet]
   *
   * @return  {Promise<string>}  [return promise of an public address generated]
   */
  generate(): Promise<string>
}

// # Interfaces
export interface Producer { 
  producer: Producer
  send(msg: Request, topic?: string, kafkaOptions?: KafkaClientOptions): ProducerOutput
}

export interface Consumer {
  consumer: Consumer | ConsumerGroup
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
  id: string
} 

export interface Web3Instances {
  [web3InstanceName: string]: Web3
}

export interface Request {
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
