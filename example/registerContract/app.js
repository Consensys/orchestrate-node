import Orchestrate from '../../src'

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
    const orch = new Orchestrate()
    const registry = orch.contractRegistry('localhost:8020')

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

    await registry.performCall(registry.createRegisterCall(contract))
        .then(res => console.log('Success', res))
        .catch(err => console.log('Error', err))

    await registry.performCall(registry.createGetCatalogCall())
        .then(res => console.log('Success', res))
        .catch(err => console.log('Error', err))

    await registry.performCall(registry.createGetTagsCall('name'))
        .then(res => console.log('Success', res))
        .catch(err => console.log('Error', err))

    await registry.performCall(registry.createGetContractCall({name: 'nameTest', tag: 'tag'}))
        .then(res => console.log('Success', {
            contract: {
                ...res.contract,
                bytecode: Buffer.from(res.contract.bytecode).toString(),
                deployedBytecode: Buffer.from(res.contract.deployedBytecode).toString(),
                abi: Buffer.from(res.contract.abi).toString(),
            }
        }))
        .catch(err => console.log('Error', err))
})()
