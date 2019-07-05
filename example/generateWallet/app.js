import CoreStackSDK from '../../src'

// Test for generating many wallets
(async () => {
    try {
        //Init CoreStackSDK
        const CoreStack = new CoreStackSDK()

        // Init broker to connect to a kafka borker
        const broker = CoreStack.broker('localhost:9092')

        // Init class to generate wallets in CoreStack
        const wallet = await broker.wallet()
        
        // Generate wallets and get addresses
        const wallets = await Promise.all([
            wallet.generate(),
            wallet.generate(),
            wallet.generate(),
            wallet.generate(),
            wallet.generate(),
            wallet.generate(),
            wallet.generate()
        ])
        console.log(wallets)
    } catch (e) {
        console.error(e)
    }
})()
