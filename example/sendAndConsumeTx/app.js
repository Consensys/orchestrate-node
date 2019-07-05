import CoreStackSDK from '../../src'

// Simple getting started example to send a transaction and consume a tx once mined

const produce = async broker => {
    try {
        console.log('Init producer...')
        const producer = await broker.producer()

        try {
            const tx = await producer.send({
                chainId: 888,
                to: '0xe5ce65038f9d1c841a33cc816ee674f8a0e31e74',
                call: {
                    contract: 'SimpleToken',
                    method: 'constructor()'
                    // method: 'transfer(address,uint256)',
                    // args: ["dbb881a51cd4023e4400cef3ef73046743f08da3", "100000"]
                },
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

const consume = async broker => {
    try {
        console.log('Init consumer...')
        const consumer = await broker.consumer()

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

(async () => {
    try {
        const CoreStack = new CoreStackSDK()
        const broker = CoreStack.broker('localhost:9092')

        consume(broker)
        produce(broker)
    } catch (e) {
        console.error(e)
    }
})()
