import CoreStack from '../index'

describe("# CoreStack ", () => {

    test('Init CoreStack', async () => {
        const CS = new CoreStack()
        expect(typeof CS.broker).toBe('function')
        expect(typeof CS.web3).toBe('function')

        const broker = CS.broker()
        expect(typeof broker).toBe('object')

        const providers = {
            mainnet: 'mainnetProvider',
            ropsten: 'ropstenProvider',
            rinkeby: 'rinkedbyProvider'
        }
        const web3 = CS.web3(providers)
        expect(typeof web3).toBe('object')
    })

})