import Orchestrate from '../../src'

// Test for generating many wallets
(async () => {
    try {
        //Init client
        const orch = new Orchestrate()

        // Init broker to connect to a kafka broker
        const broker = orch.broker('localhost:9092')

        // Init class to generate wallets
        const walletGenerator = await broker.walletGenerator()
        
        // Generate wallets and get addresses
        const wallets = await Promise.all([
            walletGenerator.generate(),
            walletGenerator.generate(),
            walletGenerator.generate(),
            walletGenerator.generate(),
            walletGenerator.generate(),
            walletGenerator.generate(),
            walletGenerator.generate()
        ])
        console.log(wallets)
    } catch (e) {
        console.error(e)
    }
})()
