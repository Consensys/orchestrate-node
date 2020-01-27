import { ContractRegistry } from './ContractRegistry'

const mockABI = [
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
  }
]

describe('ContractRegistry', () => {
  let contractRegistry: ContractRegistry

  beforeEach(() => {
    contractRegistry = new ContractRegistry('endpoint:3000')
  })

  describe('register', () => {
    it('should register a new contract successfully', async () => {
      const registerResponse = await contractRegistry.register({
        name: 'myContract',
        tag: '1',
        abi: mockABI,
        bytecode: '0xfefe',
        deployedBytecode: '0xdede'
      })

      // tslint:disable-next-line: no-console
      console.log(registerResponse)
    })
  })
})
