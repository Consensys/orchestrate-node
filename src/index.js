import CoreStackBroker from './broker'
import { CoreStackWeb3 } from './web3'

/**
 * [hostname description]
 * @type {[type]}
 */
export default class CoreStack {
    /**
     * [constructor description]
     */
    constructor() {
        this.brokerClient = {}
        this.web3Client = {}
    }

    /**
     * [broker description]
     * @param  {[type]} endpoint [description]
     * @param  {[type]} options  [description]
     * @return {[type]}          [description]
     */
    broker = (endpoint, options) => {
        this.brokerClient = new CoreStackBroker(endpoint, options, this.web3Client)
        return this.brokerClient
    }

    /**
     * [web3 description]
     * @param  {[type]} endpoint [description]
     * @param  {[type]} options  [description]
     * @return {[type]}          [description]
     */
    web3 = (endpoint, options) => {
        this.web3Client = new CoreStackWeb3(endpoint, options, this.brokerClient);
        return this.web3Client
    }
}
