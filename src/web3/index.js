import Web3 from 'web3'
// import kafka from 'kafka-node'

/**
 * [Consumer description]
 */
export class CoreStackWeb3 {
    /**
     * [constructor description]
     * @param {[type]} endpoints    [description]
     * @param {[type]} options      [description]
     * @param {[type]} brokerClient [description]
     */
    constructor(endpoints, options, brokerClient) {
      this.endpoints = endpoints
      this.options = options
      this.brokerClient = brokerClient
      this.web3 = {}
      Object.keys(this.endpoints).map(async ethName => {
        return this.web3[ethName] = await new Web3(new Web3.providers.HttpProvider(this.endpoints[ethName]))  
      })
    }

    /**
     * [getWeb3 description]
     * @return {[Object]} [description]
     */
    getWeb3 = () => {
      return this.web3
    }

    /**
     * [getNetworks description]
     * @return {[Object]} [description]
     */
    getNetworks = () => {
      return Object.keys(this.web3)
    }
}

  