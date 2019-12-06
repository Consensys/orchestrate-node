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
   * [constructor Wrapper for OrchestrateSDK with broker and web3]
   */
  constructor()

  /**
   * [broker creates a OrchestrateBroker instance]
   * @param  {string}             endpoint [Kafka endpoint]
   * @param  {KafkaClientOptions} options  [Options to instanciate kafka-node. see https://github.com/SOHU-Co/kafka-node#options]
   * @return {OrchestrateBroker}             [Class to produce, consume messages with a kafka]
   */
  broker(endpoint: string, options?: KafkaClientOptions) : OrchestrateBroker

  /**
   * [web3 creates a OrchestrateWeb3 instance]
   * @param  {Web3Endpoints}      endpoints [JSON/RPC endpoints with label as key and endpoints as value]
   * @param  {Object}  options   [web3.js options. see https://web3js.readthedocs.io/en/1.0/web3-shh.html#web3-module-options]
   * @return {OrchestrateWeb3}                [Class with web3 instances]
   */
  web3(endpoint: Web3Endpoints, options?: Object): OrchestrateWeb3 

  /**
   * [contractRegistry creates a ContractRegistry instance]
   * @param  {String} endpoints               [string object representing the remote gRPC endpoint]
   * @param  {Object} options                 [optional arguments, for instance "credentials" for the gRPC client]
   * @return {ContractRegistry}      [Class with contractRegistry instances]
   */
  contractRegistry(endpoint: string, options?: Object): ContractRegistry 
}  

/**
 * [ContractRegistry is a gRPC client for the contract registry]
 */
export class ContractRegistry {
  endpoint: string
  credentials: any
  stub: any
  stubSsl: any

  /**
   * [constructor init a gRPC client for the contract registry]
   * @param {String} endpoint     [mandatory params, indicate the endpoint of the remote gRPC server]
   * @param {Object} options      [optional params, can be used to pass custom credentials]
   */
  constructor(endpoint: string, options?: Object)

  /**
   * [Returns a preformatted request object that can be used by the gRPC client]
   * @param {Object} contract     [An abi.Contract object]
   * @return {Object}             [A preformatted instance of proto RegisterContractRequest]
   */
  formatRegisterRequest(contract: Object): Object

  /**
   * Call performs the inputed call and update the SSL configuration if necessary
   * @param {function} call
   * @return {Promise} A promise that resolves if the call succeed
   */
  performCall(call: any): any

  /**
   * createRegisterCall returns a promisified request to register a contract
   * @param {Object} contract     [An abi.Contract object]
   * @return {Promise}            [A promisied contract registering request]
   */
  createRegisterCall(contract: Object): Promise<any>

  /**
   * createGetCatalogCall returns the list of available contract names in the registry
   * @return {Promise}            [A promisied contract catalog request]
   */
  createGetCatalogCall(): Promise<any>

  /**
   * createGetCatalogCall returns the list of registered tags in the registry
   * @param {String} name          [Name of the contract to query tags for]
   * @return {Promise}             [A promisified contract getTag request]
   */
  createGetTagsCall(name: string): Promise<any>
}

/**
 * [OrchestrateWeb3 with multiple web3 instances]
 */
export class OrchestrateWeb3 {
   /**
   * [wallet class to generate wallet in Orchestrate]
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
 * [OrchestrateBroker class gathering producer, consumer for interacting with kafka]
 */
export class OrchestrateBroker {
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
   * @return  {Promise<OrchestrateProducer>}     [return a OrchestrateProducer instance]
   */
  producer(topic?: string, options?: ProducerOptions): Promise<OrchestrateProducer>
  
  /**
   * [Consume message from kafka topics]
   *
   * @param   {[string[]]}            topics?:   [List of topics to consume - default = DefaultCSOutTopic]
   * @param   {[ConsumerOptions]}  options?:  [Options of kafka-node Consumer, see https://github.com/SOHU-Co/kafka-node#consumerclient-payloads-options]
   *
   * @return  {Promise<OrchestrateConsumer>}     [return a Consumer instance]
   */
  consumer(topics?: string[], options?: ConsumerOptions) : Promise<OrchestrateConsumer>

  /**
   * [Advanced consumer that consume messages from kafka topics]
   *
   * @param   {[string[]]}  topics?:   [List of topics to consume - default = DefaultCSOutTopic]
   * @param   {[ConsumerGroupOptions]}  options?:  [Options of kafka-node ConsumerGroup, see https://github.com/SOHU-Co/kafka-node#consumergroupoptions-topics]
   *
   * @return  {Promise<OrchestrateConsumer>}     [return a Consumer instance ]
   */
  consumerGroup(topics?: string[], options?: ConsumerGroupOptions): Promise<OrchestrateConsumer>
  
  /**
   * [wallet class to generate wallet in Orchestrate]
   *
   * @param   {[type]}  topicIn?:   [topicIn?: topic to send wallet creation request - default: topic-wallet-generator]
   * @param   {[type]}  topicOut?:  [topicOut?: topic to consume wallet genrated in Orchestrate - default topic-wallet-generated]
   *
   * @return  {Promise<WalletGenerator>}     [return class with the method generate()]
   */
  walletGenerator(topicIn?: string, topicOut?: string[]): Promise<WalletGenerator>
}

/**
 * [WalletGenerator class that enables you to generate wallet]
 */
export class WalletGenerator {
  producer: OrchestrateProducer
  consumer: OrchestrateConsumer
  pendingWallets: object
  /**
   * [constructor init generator and listener]
   * @param  {OrchestrateProducer} producer [Kafka OrchestrateProducer]
   * @param  {OrchestrateConsumer} endpoint [Kafka OrchestrateConsumer]
   */
  constructor(producer?: OrchestrateProducer, consumer?: OrchestrateConsumer)

  /**
   * [generate method to create a wallet on Orchestrate]
   *
   * @return  {Promise<string>}  [return promise of an public address generated in Orchestrate]
   */
  generate(): Promise<string>
}

// # Interfaces
export interface OrchestrateProducer { 
  producer: Producer
  marshal(msg: OrchestrateRequest): any
  send(msg: OrchestrateRequest, topic?: string, kafkaOptions?: KafkaClientOptions): ProducerOutput
}


export interface OrchestrateConsumer {
  consumer: Consumer | ConsumerGroup
  unmarshaler: (msg: any) => any
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

export interface OrchestrateRequest {
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
  BesuOrion,
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
