const { handleGetCatalog, handleGetTags, handleAddContract } = require('../../../cli/contract-registry/cli');

describe('# Contract registry CLI', () => {

    test('Get catalog, we expect a connexion error', async () => {   
        await handleGetCatalog({
            endpoint: 'dudulafourchette:1000',
        });
    });

    test('Get tags, we expect a connexion error', async () => {   
        await handleGetTags({
            endpoint: 'dudulafourchette:1000',
            name: 'contract-name'
        });
    });

    test('Add contracts, we expect a connexion error', async () => {
        const options = {
            endpoint: 'dudulafourchette:1000',
            name: 'contract-name',
            tag: 'tag',
            filepath: 'src/contractRegistry/__test__/SimpleToken.json',
        };
        await handleAddContract(options);
    });
})