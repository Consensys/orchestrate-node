export interface IEndpointOptions {
  endpoint: string
}

export interface IRegisterContractOptions extends IEndpointOptions {
  name: string
  tag?: string
  filePath: string
}

export interface IGetContractOptions extends IEndpointOptions {
  name: string
  tag?: string
}

export interface IGetTagsOptions extends IEndpointOptions {
  name: string
}
