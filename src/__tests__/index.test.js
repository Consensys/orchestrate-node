import Orchestrate from '../index'

describe("# orch ", () => {

    test('Init orch', async () => {
        const orch = new Orchestrate()
        expect(typeof orch.broker).toBe('function')
        expect(typeof orch.web3).toBe('function')

        const broker = orch.broker()
        expect(typeof broker).toBe('object')

        const providers = {
            mainnet: 'mainnetProvider',
            ropsten: 'ropstenProvider',
            rinkeby: 'rinkedbyProvider'
        }
        const web3 = orch.web3(providers)
        expect(typeof web3).toBe('object')
    })

})