export interface IRegisterContractRequest {
  name: string
  tag: string
  abi: any[]
  bytecode: string
  deployedBytecode: string
}
