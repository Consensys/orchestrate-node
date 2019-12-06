import Orchestrate, { OrchestrateRequest, OrchestrateBroker } from "pegasys-orchestrate";

const produce = async (broker: OrchestrateBroker) => {
    try {
        const producer = await broker.producer()
        console.log('...producer initialized')

        try {
            const payload: OrchestrateRequest = {
                chainId: '888',
                to: "0x71b7d704598945e72e7581bac3b070d300dc6eb3",
                call: {
                    contract: "SimpleToken",
                    method: "constructor()"
                    // method: 'transfer(address,uint256)',
                    // args: ["dbb881a51cd4023e4400cef3ef73046743f08da3", "100000"]
                },
                gas: 2000000,
                from: "0x7e654d251da770a068413677967f6d3ea2fea9e4"
                // protocol: {
                //     name: 'test'
                // },
                // gasPrice: '100000000',
                // data: '0x0000000000000000000000000000000',
                // raw: '0x0000000000000000000000000000000',
                // hash: '0x0000000000000000000000000000000',
                // privateFrom: '0x0000000000000000000000000000000',
                // privateFor: ['0x0000000000000000000000000000000'],
            }

            const tx = await producer.send(payload);
        
            console.log('Message sent: ', tx)
        } catch(e) {
            console.error(e)
        }

    } catch(e) {
        console.error(e)
    }
}

const consume = async (broker: OrchestrateBroker) => {
    try {
        const consumer = await broker.consumerGroup()
        console.log('...consumerGroup initialized')

        const consume = consumer.consume()

        consume.on('message', (message: any) => {
            console.log('Message consumed: ', message)
        })
        
        consume.on('error', (error: any) => {
            console.error(error)
        })
        
        consume.on('offsetOutOfRange', (error: any) => {
            console.error(error)
        })
    } catch(e) {
        console.error(e)
    }
}

const wallet = async (broker: OrchestrateBroker) => {
    const walletGenerator = await broker.walletGenerator()
    console.log('...walletGenerator initialized')

    // Generate a wallet
    const wallets = await Promise.all([
        walletGenerator.generate(),
        walletGenerator.generate(),
        walletGenerator.generate(),
        walletGenerator.generate(),
        walletGenerator.generate(),
        walletGenerator.generate(),
        walletGenerator.generate()
    ])
    console.log("Wallets created", wallets)
}

(async () => {
    try {
        const orch = new Orchestrate()
        const broker = orch.broker('localhost:9092')

        consume(broker)
        produce(broker)
        wallet(broker)
    } catch (e) {
        console.error(e)
    }
})()