import CoreStack, { CoreStackRequest } from "../../";

(async() => {
    const CS = new CoreStack();
    const broker = CS.broker("localhost:9092");
  
    // Init producer, consumer, wallet generator
    const producer = await broker.producer();
    const consumer = await broker.consumerGroup();
    const walletGenerator = await broker.walletGenerator()

    // Start consuming
    const consume = consumer.consume();
    consume.on("message", message => {
      console.log("Message consumed: ", message);
    });
  
    // Produce a transaction
    const payload: CoreStackRequest = {
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
    console.log("Message sent: ", tx)

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
})()
