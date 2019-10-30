import { ContractRegistry } from '../index'

describe('# ContractRegistry', () => {

    test('Init ContractRegistry', async () => {
        const CSCR = new ContractRegistry('localhost:1000');
        expect(typeof CSCR.formatRegisterRequest).toBe('function');
        expect(typeof CSCR.register).toBe('function');

        const contract = {
            id: {
                registry: 'registry',
                name: 'name',
                tag: 'tag'
            },
            abi: Buffer.from('abi'),
            bytecode: Buffer.from('bytecode'),
            deployedBytecode: Buffer.from('deployedBytecode'),
        }

        // We attempt to register the contract to a non-existant remote host
        let err = await CSCR.register(contract).catch(err => err);
        // This should fails only because the connection failed
        expect(err.toString().includes('connect')).toBe(true);

        err = await CSCR.getCatalog().catch(err => err);
        // This should fails only because the connection failed
        expect(err.toString().includes('connect')).toBe(true);

        err = await CSCR.getTags('name').catch(err => err);
        // This should fails only because the connection failed
        expect(err.toString().includes('connect')).toBe(true);

    })

})
