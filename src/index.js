import CoreStackBroker from './broker'
import { CoreStackWeb3 } from './web3'

export { ProtocolType } from './broker/types/chain/protocol'

/**
 * [CoreStack with broker and web3]
 * @type {class}
 */
export default class CoreStack {
    /**
     * [constructor Wrapper for CoreStackSDK with broker and web3]
     */
    constructor() {
        this.brokerClient = {}
        this.web3Client = {}
    }

    /**
     * [broker creates a CoreStackBroker instance]
     * @param  {string} endpoint [Kafka endpoint]
     * @param  {Object} options  [Options to instanciate kafka-node. see https://github.com/SOHU-Co/kafka-node#options]
     * @return {CoreStackBroker} [Class to produce, consume messages with a kafka]
     */
    broker = (endpoint, options) => {
        this.brokerClient = new CoreStackBroker(endpoint, options)
        return this.brokerClient
    }

    /**
     * [web3 creates a CoreStackWeb3 instance]
     * @param  {Object} endpoints [JSON/RPC endpoints with label as key and endpoints as value]
     * @param  {Object} options   [web3.js options. see https://web3js.readthedocs.io/en/1.0/web3-shh.html#web3-module-options]
     * @return {CoreStackWeb3}    [Class with web3 instances]
     */
    web3 = (endpoints, options) => {
        this.web3Client = new CoreStackWeb3(endpoints, options);
        return this.web3Client
    }
}
