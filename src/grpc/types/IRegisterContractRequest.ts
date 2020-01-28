import { IContractRequest } from './IContractRequest'

export interface IRegisterContractRequest extends IContractRequest {
  abi: any[]
  bytecode: string
  deployedBytecode: string
}
