import CoreStackSDK from '../../src'

// Simply register a contract in the registry

const ABI = [
    {
        constant: true,
        inputs: [],
        name: 'name',
        outputs: [
        {
            internalType: 'string',
            name: '',
            type: 'string'
        }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
];

(async () => {
    const CoreStack = new CoreStackSDK()
    const registry = CoreStack.contractRegistry('localhost:8087')

    const contract = {
        id: {
            registry: 'registry',
            name: 'nameTest',
            tag: 'tag'
        },
        bytecode: Buffer.from('bytecode'),
        deployedBytecode: Buffer.from('deployedBytecode'),
        abi: Buffer.from(JSON.stringify(ABI)),
    }

    await registry.register(contract)
        .then(res => console.log('Success', res))
        .catch(err => console.log('Error', err))

    await registry.getCatalog()
        .then(res => console.log('Success', res))
        .catch(err => console.log('Error', err))

    await registry.getTags('name')
        .then(res => console.log('Success', res))
        .catch(err => console.log('Error', err))
})()