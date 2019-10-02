
const { CoreStackContractRegistry } = require('./index');
const web3 = require('web3');
const commander = require('commander');
const program = new commander.Command();

export const handleGetTags = async options => {
    if (!options.name || !options.endpoint) {
        throw new Error('Not all options where submitted. See add-contract --help for usages');
    }

    const CSCR = new CoreStackContractRegistry(options.endpoint);
    let err = await CSCR.getTags(options.name)
        .then(res => 
            // eslint-disable-next-line no-console
            console.log(res))
        .catch(err => err);

    if (err) {
        throw err
    }
}

program
    .command('get-tags')
    .description('Returns all the registered tags under a contract name')
    .option('-n, --name <str>', 'Which contract name to get tags for')
    .option('-e, --endpoint <host:port>', 'Contract registry endpoint in the form host:port')
    .action(handleGetTags);

export const handleGetCatalog = async options => {
    if (!options.endpoint) {
        throw new Error('No endpoint specified. See get-catalog --help for usage');
    }

    const CSCR = new CoreStackContractRegistry(options.endpoint);
    let err = await CSCR.getCatalog()
        .then(res => 
            // eslint-disable-next-line no-console
            console.log(res))
        .catch(err => err);

    if (err) {
        throw err;
    }
}

program
    .command('get-catalog')
    .description('Returns all the contracts name registered')
    .option('-e, --endpoint <host:port>', 'Contract registry endpoint in the form host:port')
    .action(handleGetCatalog);

export const handleAddContract = async options => {

    if (!options.name || !options.tag || !options.filepath || !options.endpoint) {
        throw new Error('Not all options where submitted. See add-contract --help for usages');
    }

    const CSCR = new CoreStackContractRegistry(options.endpoint);
    let artifact;

    try {
        // Import the artifacts with a require. 
        // Breaks if the file does not exist or invalid json
        artifact = require('../../' + options.filepath);
        checkArtifact(artifact); // Throws if the check is not OK
    } catch (e) {      
        throw new Error(`Could not import artifacts: ${e}`);
    }

    const contract = {
        id: {
            registry: 'registry',
            name: options.name,
            tag: options.tag,
        },
        abi: Buffer.from(JSON.stringify(artifact.abi)),
        bytecode: web3.utils.hexToBytes(artifact.bytecode),
        deployedBytecode: web3.utils.hexToBytes(artifact.deployedBytecode),
    }

    let err = await CSCR.register(contract)
        .catch(err => err);

    if (err) {      
        throw err
    }
}

program
    .command('add-contract')
    .description('Registers a contract in the remote registry')
    .option('-n, --name <str>', 'Name of the contract')
    .option('-t, --tag <str>', 'Tag to be attached to the contract')
    .option('-f, --filepath <filepath>', 'Location of the artifact.json file of the contract')
    .option('-e, --endpoint <host:port>', 'Contract registry endpoint in the form host:port')
    .action(handleAddContract);

const checkArtifact = (artifact) => {
    if (!artifact.abi || typeof artifact.abi !== 'object') {      
        throw new Error('No abi in artifact');
    }
    if (!artifact.deployedBytecode || typeof artifact.deployedBytecode !== 'string') {      
        throw new Error('No deployedBytecode in artifact');
    }
    if (!artifact.bytecode || typeof artifact.bytecode !== 'string') {      
        throw new Error('No bytecode in artifact');
    }
}

export const cli = args => {
    program.parse(args)
}
