import CoreStackSDK from '../lib'

const CoreStack = new CoreStackSDK('localhost:9092')

const prod = async () => {
    try {
        console.log('Init producer...')
        const producer = await CoreStack.producer('topic-tx-crafter')
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
prod()

const consume = async () => {
    try {
        console.log('Init consumer...')
        const consumer = await CoreStack.consumer('topic-tx-nonce')
        console.log('... consumer ready')

        const consume = consumer.consume()

        consume.on('message', message => {
            console.log('Message consumed: ', message);
        });
        
        consume.on('error', error => {
            console.error(error);
        });
        
        consume.on('offsetOutOfRange', error => {
            console.error(error);
        });
    } catch(e) {
        console.error(e)
    }
}
consume()
