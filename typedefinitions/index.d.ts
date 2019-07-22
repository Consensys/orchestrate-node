import { Web3ModuleOptions } from 'web3-core'
import Web3 from 'web3'
import { EventEmitter } from 'events';
import { 
  KafkaClientOptions,
  Message
} from 'kafka-node'

export default class CoreStack {
  constructor()
  broker(endpoint: string, options?: KafkaClientOptions) : CoreStackBroker
  web3(endpoint: Web3Endpoints, options?: Web3ModuleOptions): CoreStackWeb3 
}  

export class CoreStackWeb3 {
  constructor(endpoints: Web3Endpoints, options?: Web3ModuleOptions)
  getWeb3(): Web3Instances
  getNeworks(): string[]
}

export class CoreStackBroker {
  constructor(endpoint: string, options?: KafkaClientOptions)
  producer(topic?: string, options?: KafkaClientOptions): Producer
  consumer(topics?: string[], options?: KafkaClientOptions) : Consumer
  consumerGroup(topics?: string[], options?: KafkaClientOptions): Consumer
  /**
   * [wallet class to generate wallet in CoreStack]
   *
   * @param   {[type]}  topicIn?:   [topicIn?: topic to send wallet creation request - default: topic-wallet-generator]
   * @param   {[type]}  topicOut?:  [topicOut?: topic to consume wallet genrated in CoreStack - default topic-wallet-generated]
   *
   * @return  {WalletGenerator}     [return class with the method generate()]
   */
  walletGenerator(topicIn?: string, topicOut?: string[]): WalletGenerator
}

export interface Producer { 
  send(msg: CoreStackRequest, topic?: string, kafkaOptions?: KafkaClientOptions): ProducerOutput
}

export interface Consumer {
  consume(): EventEmitter
}

export class WalletGenerator {
  constructor(producer?: Producer, consumer?: Consumer)
  /**
   * [generate method to create a wallet on CoreStack]
   *
   * @return  {Promise<string>}  [return promise of an public address generated in CoreStack]
   */
  generate(): Promise<string>
}

export interface ConsumerOutput extends Omit<Message, 'value'> {
  topic: string;
  value: object | Buffer
  offset?: number
  partition?: number
  highWaterOffset?: number
  key?: string | Buffer
}

// # Interfaces
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
