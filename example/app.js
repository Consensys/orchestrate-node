import CoreStackSDK from '../src'
import {
    ganacheCli,
    ganacheUi,
    mainnetProvider,
    ropstenProvider,
    rinkedbyProvider
    } from './providers'

const providers = {
    ganacheCli,
    ganacheUi,
    mainnet: mainnetProvider,
    ropsten: ropstenProvider,
    rinkeby: rinkedbyProvider
} 

const prod = async coreBroker => {
    try {
        console.log('Init producer...')
        const producer = await coreBroker.producer('topic-tx-crafter')
        console.log('... producer ready')

        try {
            const tx = await producer.send({
                chainId: '888', //required
                call: {
                    contract: 'ERC20',
                    method: 'constructor()',
                }, // required
                gas: 2000000,
                from: '0x7e654d251da770a068413677967f6d3ea2fea9e4'
            })
            console.log('Message sent: ', tx)
        } catch(e) {
            console.error(e)
        }

    } catch(e) {
        console.error(e)
    }
} 

const consume = async coreBroker => {
    try {
        console.log('Init consumer...')
        const consumer = await coreBroker.consumer('topic-tx-nonce')
        console.log('... consumer ready')

        const consume = consumer.consume()

        consume.on('message', message => {
            console.log('Message consumed: ', message)
        })
        
        consume.on('error', error => {
            console.error(error)
        })
        
        consume.on('offsetOutOfRange', error => {
            console.error(error)
        })
    } catch(e) {
        console.error(e)
    }
}

const web3Example = async coreWeb3 => {
  try { 
        const web3 = coreWeb3.getWeb3()
        web3.rinkeby.eth.net.isListening().then(bool => console.log('Is the node listening? ', bool))

        web3.mainnet.eth.net.getNetworkType().then(name => console.log("Network's name: ", name))

        web3.ropsten.eth.net.getId().then(id => console.log("Ropsten's ID is: ", id))
        web3.ganacheCli.eth.net.getId().then(id => console.log("GanacheCli's ID is: ", id))
        web3.ganacheUi.eth.net.getId().then(id => console.log("GanacheUI's ID is: ", id))
        web3.mainnet.eth.net.getId().then(id => console.log("Mainnet's ID is: ", id))

        const networks = coreWeb3.getNetworks()
        console.log('Instantiated networks: ',networks)

        networks.map( network => {
            web3[network].eth.net.getNetworkType().then(type => console.log("Network's type is: ", type)) //Using private networks, the type will always be private
        })
  } catch (e) {
        console.error(e)
  }
}

(async () => {
    try {
        const CoreStack = new CoreStackSDK()
        const coreBroker = CoreStack.broker('localhost:9092')
        const coreWeb3 = await CoreStack.web3(providers) 
        prod(coreBroker)
        consume(coreBroker)
        web3Example(coreWeb3)
    } catch (e) {
        console.error(e)
    }
})()