import CoreStackSDK from '../src'

const CoreStack = new CoreStackSDK('localhost:9092')
const prod = async () => {
    try {
        console.log('Init producer...')
        const producer = await CoreStack.producer('topic-tx-crafter')
        console.log('... producer ready')

        try {
            const tx = await producer.send({
                chainId: '3', //required
                to: '0x8f371DAA8A5325f53b754A7017Ac3803382bc847', // required
                call: {
                    contract: 'ERC1400',
                    method: 'setDocument',
                    args: ["0xabcd", "0xabcd", "0xabcd"],
                }, // required
                from: '0xd71400daD07d70C976D6AAFC241aF1EA183a7236'
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

// const consumerGroup = async () => {
//     try {
//         console.log('Init consumer group...')
//         const consumerGroup = await CoreStack.consumerGroup('topic-tx-nonce')
//         console.log('... consumer group ready')

//         const consume = consumerGroup.consume()

//         consume.on('message', message => {
//             console.log(message);
//         });
        
//         consume.on('error', error => {
//             console.log(error);
//         });
        
//         consume.on('offsetOutOfRange', error => {
//             console.log(error);
//         });
//     } catch(e) {
//         console.error(e)
//     }


// }
// consumerGroup()
