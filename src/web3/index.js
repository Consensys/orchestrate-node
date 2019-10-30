import BaseWeb3 from 'web3'

/**
 * [Web3 with multiple web3 instances]
 */
export class Web3 {
    /**
     * [constructor init web3 instances]
     * @param {Object} endpoints    [JSON/RPC endpoints with label as key and endpoints as value]
     * @param {Object} options      [web3.js options. see https://web3js.readthedocs.io/en/1.0/web3-shh.html#web3-module-options]
     */
    constructor(endpoints, options) {
      this.endpoints = endpoints
      this.web3 = {}
      Object.keys(this.endpoints).forEach(async ethName => {
        this.web3[ethName] = new BaseWeb3(new BaseWeb3.providers.HttpProvider(this.endpoints[ethName]), null, options)  
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
     * @return {Array} [Names of web3 instances]
     */
    getNetworks = () => {
      return Object.keys(this.web3)
    }
}

  