import Web3 from 'web3'

/**
 * [CoreStackWeb3 with multiple web3 instances]
 */
export class CoreStackWeb3 {
    /**
     * [constructor init web3 instances]
     * @param {Object} endpoints    [JSON/RPC endpoints with label as key and endpoints as value]
     * @param {Object} options      [web3.js options. see https://web3js.readthedocs.io/en/1.0/web3-shh.html#web3-module-options]
     */
    constructor(endpoints, options) {
      this.endpoints = endpoints
      this.web3 = {}
      Object.keys(this.endpoints).forEach(async ethName => {
        this.web3[ethName] = new Web3(new Web3.providers.HttpProvider(this.endpoints[ethName]), null, options)  
      })
    }

    /**
     * [getWeb3 get web3 instances]
     * @return {Object} [multiple instances of web3 with their labels as key]
     */
    getWeb3 = () => {
      return this.web3
    }

    /**
     * [getNetworks get web3 instances labels]
     * @return {Array} [description]
     */
    getNetworks = () => {
      return Object.keys(this.web3)
    }
}

  