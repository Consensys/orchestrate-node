import Orchestrate from '../../src'

 // Should be in your .env for example
const INFURA_API_KEY = ''

const infuraProvider = network => {
  return `https://${network}.infura.io/v3/${INFURA_API_KEY}`
}

const endpoints = {
    mainnet: infuraProvider('mainnet'),
    ropsten: infuraProvider('ropsten'),
    rinkeby: infuraProvider('rinkeby')
}

const test = async () => {
    try {
        //Init orch
        const orch = new Orchestrate()

        // Init broker to connect to a kafka borker
        const web3providers = orch.web3(endpoints)

        const web3 = web3providers.getWeb3()
        web3.mainnet.eth.net.getId().then(id => console.log("Mainnet's ID is: ", id))
        web3.ropsten.eth.net.getId().then(id => console.log("Ropsten's ID is: ", id))
        web3.rinkeby.eth.net.getId().then(id => console.log("Rinkeby's ID is: ", id))

    } catch (e) {
        console.error(e)
    }
}

test()
