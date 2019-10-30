import { ContractRegistry } from '../index'

describe('# ContractRegistry', () => {

    test('Init ContractRegistry', async () => {
        const CSCR = new ContractRegistry('localhost:1000');
        expect(typeof CSCR.formatRegisterRequest).toBe('function');
        expect(typeof CSCR.createRegisterCall).toBe('function');

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
        const registerCall = CSCR.createRegisterCall(contract);
        const catalogCall = CSCR.createGetCatalogCall();
        const tagsCall = CSCR.createGetTagsCall('name')

        let err = await CSCR.performCall(registerCall).catch(err => err);
        // This should fails only because the connection failed
        expect(err.toString().includes('connect')).toBe(true);

        err = await CSCR.performCall(catalogCall).catch(err => err);
        // This should fails only because the connection failed
        expect(err.toString().includes('connect')).toBe(true);

        err = await CSCR.performCall(tagsCall).catch(err => err);
        // This should fails only because the connection failed
        expect(err.toString().includes('connect')).toBe(true);
    })

})
