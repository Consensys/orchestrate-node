import { CoreStackWeb3 } from '../index'

describe("# CoreStackWeb3 ", () => {

    test('Init CoreStackWeb3', async () => {
        const providers = {
            mainnet: 'mainnetProvider',
            ropsten: 'ropstenProvider',
            rinkeby: 'rinkedbyProvider'
        }

        const CSWeb3 = new CoreStackWeb3(providers)
        expect(CSWeb3.endpoints).toMatchObject(providers)
        expect(Object.keys(CSWeb3.web3)).toHaveLength(Object.keys(providers).length)
        expect(Object.keys(CSWeb3.getWeb3())).toHaveLength(Object.keys(providers).length)
        expect(CSWeb3.getNetworks()).toHaveLength(Object.keys(providers).length)
        expect(typeof CSWeb3.getWeb3).toBe('function')
        expect(typeof CSWeb3.getNetworks).toBe('function')
    })
})