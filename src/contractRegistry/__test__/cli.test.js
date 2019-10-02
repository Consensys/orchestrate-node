const { handleGetCatalog, handleGetTags, handleAddContract } = require('../cli');

describe('# Contract registry CLI', () => {

    test('Get catalog, we expect a connexion error', async () => {
        let err;    
        try { 
            await handleGetCatalog({
                endpoint: 'dudulafourchette:1000',
            });
        } catch(e) {
            err = e;
        }
        expect(
            err.toString().includes('resolution')
        ).toBe(true);
    });

    test('Get tags, we expect a connexion error', async () => {
        let err;    
        try { 
            await handleGetTags({
                endpoint: 'dudulafourchette:1000',
                name: 'contract-name'
            });
        } catch(e) {
            err = e;
        }
        expect(
            err.toString().includes('resolution')
        ).toBe(true);
    });

    test('Add contracts, we expect a connexion error', async () => {
        let err; 
        const options = {
            endpoint: 'dudulafourchette:1000',
            name: 'contract-name',
            tag: 'tag',
            filepath: 'src/contractRegistry/__test__/SimpleToken.json',
        };

        try { 
            await handleAddContract(options);
        } catch(e) {
            err = e;
        }

        expect(
            err.toString().includes('resolution')
        ).toBe(true);
    });
})