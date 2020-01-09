import "core-js/stable";
import "regenerator-runtime/runtime"

import Broker from './broker'
import { Web3 } from './web3'
import { ContractRegistry } from  './contractRegistry'
export { ProtocolType } from './broker/types/chain/protocol'

/**
 * [Orchestrate is the main class to connect to a PegaSys Orchestrate APIs]
 * @type {class}
 */
export default class Orchestrate {
    /**
     * [constructor Wrapper for Orchestrate with broker and web3]
     */
    constructor() {
        this.brokerClient = {}
        this.web3Client = {}
        this.contractRegistryClient = {}
    }

    /**
     * [broker creates a broker instance to connect to Kafka]
     * @param  {string} endpoint [Kafka endpoint]
     * @param  {Object} options  [Options to instantiate kafka-node. see https://github.com/SOHU-Co/kafka-node#options]
     * @return {Broker} [Class to produce, consume messages with a kafka]
     */
    broker = (endpoint, options) => {
        this.brokerClient = new Broker(endpoint, options);
        return this.brokerClient
    }

    /**
     * [web3 creates a Web3 instance to connect to Ethereum clients]
     * @param  {Object} endpoints [JSON/RPC endpoints with label as key and endpoints as value]
     * @param  {Object} options   [web3.js options. see https://web3js.readthedocs.io/en/1.0/web3-shh.html#web3-module-options]
     * @return {Web3}    [Class with web3 instances]
     */
    web3 = (endpoints, options) => {
        this.web3Client = new Web3(endpoints, options);
        return this.web3Client
    }

    /**
     * [contractRegistry creates a ContractRegistry instance]
     * @param  {String} endpoints               [string object representing the remote gRPC endpoint]
     * @param  {Object} options                 [optional arguments, for instance "credentials" for the gRPC client]
     * @return {ContractRegistry}      [Class with contractRegistry instances]
     */
    contractRegistry = (endpoint, options) => {
        this.contractRegistryClient = new ContractRegistry(endpoint, options);
        return this.contractRegistryClient
    }
}
export var __useDefault = true