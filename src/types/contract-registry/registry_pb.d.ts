// package: contractregistry
// file: types/contract-registry/registry.proto

import * as jspb from 'google-protobuf'
import * as types_abi_abi_pb from '../../types/abi/abi_pb'
import * as types_common_account_instance_pb from '../../types/common/account_instance_pb'

export class RegisterContractRequest extends jspb.Message {
  hasContract(): boolean
  clearContract(): void
  getContract(): types_abi_abi_pb.Contract | undefined
  setContract(value?: types_abi_abi_pb.Contract): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): RegisterContractRequest.AsObject
  static toObject(includeInstance: boolean, msg: RegisterContractRequest): RegisterContractRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: RegisterContractRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): RegisterContractRequest
  static deserializeBinaryFromReader(
    message: RegisterContractRequest,
    reader: jspb.BinaryReader
  ): RegisterContractRequest
}

export namespace RegisterContractRequest {
  export type AsObject = {
    contract?: types_abi_abi_pb.Contract.AsObject
  }
}

export class RegisterContractResponse extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): RegisterContractResponse.AsObject
  static toObject(includeInstance: boolean, msg: RegisterContractResponse): RegisterContractResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: RegisterContractResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): RegisterContractResponse
  static deserializeBinaryFromReader(
    message: RegisterContractResponse,
    reader: jspb.BinaryReader
  ): RegisterContractResponse
}

export namespace RegisterContractResponse {
  export type AsObject = {}
}

export class DeregisterContractRequest extends jspb.Message {
  hasContractid(): boolean
  clearContractid(): void
  getContractid(): types_abi_abi_pb.ContractId | undefined
  setContractid(value?: types_abi_abi_pb.ContractId): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): DeregisterContractRequest.AsObject
  static toObject(includeInstance: boolean, msg: DeregisterContractRequest): DeregisterContractRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: DeregisterContractRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): DeregisterContractRequest
  static deserializeBinaryFromReader(
    message: DeregisterContractRequest,
    reader: jspb.BinaryReader
  ): DeregisterContractRequest
}

export namespace DeregisterContractRequest {
  export type AsObject = {
    contractid?: types_abi_abi_pb.ContractId.AsObject
  }
}

export class DeregisterContractResponse extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): DeregisterContractResponse.AsObject
  static toObject(includeInstance: boolean, msg: DeregisterContractResponse): DeregisterContractResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: DeregisterContractResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): DeregisterContractResponse
  static deserializeBinaryFromReader(
    message: DeregisterContractResponse,
    reader: jspb.BinaryReader
  ): DeregisterContractResponse
}

export namespace DeregisterContractResponse {
  export type AsObject = {}
}

export class DeleteArtifactRequest extends jspb.Message {
  getBytecodehash(): Uint8Array | string
  getBytecodehash_asU8(): Uint8Array
  getBytecodehash_asB64(): string
  setBytecodehash(value: Uint8Array | string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): DeleteArtifactRequest.AsObject
  static toObject(includeInstance: boolean, msg: DeleteArtifactRequest): DeleteArtifactRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: DeleteArtifactRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): DeleteArtifactRequest
  static deserializeBinaryFromReader(message: DeleteArtifactRequest, reader: jspb.BinaryReader): DeleteArtifactRequest
}

export namespace DeleteArtifactRequest {
  export type AsObject = {
    bytecodehash: Uint8Array | string
  }
}

export class DeleteArtifactResponse extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): DeleteArtifactResponse.AsObject
  static toObject(includeInstance: boolean, msg: DeleteArtifactResponse): DeleteArtifactResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: DeleteArtifactResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): DeleteArtifactResponse
  static deserializeBinaryFromReader(message: DeleteArtifactResponse, reader: jspb.BinaryReader): DeleteArtifactResponse
}

export namespace DeleteArtifactResponse {
  export type AsObject = {}
}

export class GetContractRequest extends jspb.Message {
  hasContractid(): boolean
  clearContractid(): void
  getContractid(): types_abi_abi_pb.ContractId | undefined
  setContractid(value?: types_abi_abi_pb.ContractId): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GetContractRequest.AsObject
  static toObject(includeInstance: boolean, msg: GetContractRequest): GetContractRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: GetContractRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): GetContractRequest
  static deserializeBinaryFromReader(message: GetContractRequest, reader: jspb.BinaryReader): GetContractRequest
}

export namespace GetContractRequest {
  export type AsObject = {
    contractid?: types_abi_abi_pb.ContractId.AsObject
  }
}

export class GetContractResponse extends jspb.Message {
  hasContract(): boolean
  clearContract(): void
  getContract(): types_abi_abi_pb.Contract | undefined
  setContract(value?: types_abi_abi_pb.Contract): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GetContractResponse.AsObject
  static toObject(includeInstance: boolean, msg: GetContractResponse): GetContractResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: GetContractResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): GetContractResponse
  static deserializeBinaryFromReader(message: GetContractResponse, reader: jspb.BinaryReader): GetContractResponse
}

export namespace GetContractResponse {
  export type AsObject = {
    contract?: types_abi_abi_pb.Contract.AsObject
  }
}

export class GetContractABIResponse extends jspb.Message {
  getAbi(): Uint8Array | string
  getAbi_asU8(): Uint8Array
  getAbi_asB64(): string
  setAbi(value: Uint8Array | string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GetContractABIResponse.AsObject
  static toObject(includeInstance: boolean, msg: GetContractABIResponse): GetContractABIResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: GetContractABIResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): GetContractABIResponse
  static deserializeBinaryFromReader(message: GetContractABIResponse, reader: jspb.BinaryReader): GetContractABIResponse
}

export namespace GetContractABIResponse {
  export type AsObject = {
    abi: Uint8Array | string
  }
}

export class GetContractBytecodeResponse extends jspb.Message {
  getBytecode(): Uint8Array | string
  getBytecode_asU8(): Uint8Array
  getBytecode_asB64(): string
  setBytecode(value: Uint8Array | string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GetContractBytecodeResponse.AsObject
  static toObject(includeInstance: boolean, msg: GetContractBytecodeResponse): GetContractBytecodeResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: GetContractBytecodeResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): GetContractBytecodeResponse
  static deserializeBinaryFromReader(
    message: GetContractBytecodeResponse,
    reader: jspb.BinaryReader
  ): GetContractBytecodeResponse
}

export namespace GetContractBytecodeResponse {
  export type AsObject = {
    bytecode: Uint8Array | string
  }
}

export class GetContractDeployedBytecodeResponse extends jspb.Message {
  getDeployedbytecode(): Uint8Array | string
  getDeployedbytecode_asU8(): Uint8Array
  getDeployedbytecode_asB64(): string
  setDeployedbytecode(value: Uint8Array | string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GetContractDeployedBytecodeResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: GetContractDeployedBytecodeResponse
  ): GetContractDeployedBytecodeResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: GetContractDeployedBytecodeResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): GetContractDeployedBytecodeResponse
  static deserializeBinaryFromReader(
    message: GetContractDeployedBytecodeResponse,
    reader: jspb.BinaryReader
  ): GetContractDeployedBytecodeResponse
}

export namespace GetContractDeployedBytecodeResponse {
  export type AsObject = {
    deployedbytecode: Uint8Array | string
  }
}

export class GetCatalogRequest extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GetCatalogRequest.AsObject
  static toObject(includeInstance: boolean, msg: GetCatalogRequest): GetCatalogRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: GetCatalogRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): GetCatalogRequest
  static deserializeBinaryFromReader(message: GetCatalogRequest, reader: jspb.BinaryReader): GetCatalogRequest
}

export namespace GetCatalogRequest {
  export type AsObject = {}
}

export class GetCatalogResponse extends jspb.Message {
  clearNamesList(): void
  getNamesList(): Array<string>
  setNamesList(value: Array<string>): void
  addNames(value: string, index?: number): string

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GetCatalogResponse.AsObject
  static toObject(includeInstance: boolean, msg: GetCatalogResponse): GetCatalogResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: GetCatalogResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): GetCatalogResponse
  static deserializeBinaryFromReader(message: GetCatalogResponse, reader: jspb.BinaryReader): GetCatalogResponse
}

export namespace GetCatalogResponse {
  export type AsObject = {
    namesList: Array<string>
  }
}

export class GetTagsRequest extends jspb.Message {
  getName(): string
  setName(value: string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GetTagsRequest.AsObject
  static toObject(includeInstance: boolean, msg: GetTagsRequest): GetTagsRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: GetTagsRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): GetTagsRequest
  static deserializeBinaryFromReader(message: GetTagsRequest, reader: jspb.BinaryReader): GetTagsRequest
}

export namespace GetTagsRequest {
  export type AsObject = {
    name: string
  }
}

export class GetTagsResponse extends jspb.Message {
  clearTagsList(): void
  getTagsList(): Array<string>
  setTagsList(value: Array<string>): void
  addTags(value: string, index?: number): string

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GetTagsResponse.AsObject
  static toObject(includeInstance: boolean, msg: GetTagsResponse): GetTagsResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: GetTagsResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): GetTagsResponse
  static deserializeBinaryFromReader(message: GetTagsResponse, reader: jspb.BinaryReader): GetTagsResponse
}

export namespace GetTagsResponse {
  export type AsObject = {
    tagsList: Array<string>
  }
}

export class GetMethodsBySelectorRequest extends jspb.Message {
  getSelector(): Uint8Array | string
  getSelector_asU8(): Uint8Array
  getSelector_asB64(): string
  setSelector(value: Uint8Array | string): void

  hasAccountinstance(): boolean
  clearAccountinstance(): void
  getAccountinstance(): types_common_account_instance_pb.AccountInstance | undefined
  setAccountinstance(value?: types_common_account_instance_pb.AccountInstance): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GetMethodsBySelectorRequest.AsObject
  static toObject(includeInstance: boolean, msg: GetMethodsBySelectorRequest): GetMethodsBySelectorRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: GetMethodsBySelectorRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): GetMethodsBySelectorRequest
  static deserializeBinaryFromReader(
    message: GetMethodsBySelectorRequest,
    reader: jspb.BinaryReader
  ): GetMethodsBySelectorRequest
}

export namespace GetMethodsBySelectorRequest {
  export type AsObject = {
    selector: Uint8Array | string
    accountinstance?: types_common_account_instance_pb.AccountInstance.AsObject
  }
}

export class GetMethodsBySelectorResponse extends jspb.Message {
  getMethod(): Uint8Array | string
  getMethod_asU8(): Uint8Array
  getMethod_asB64(): string
  setMethod(value: Uint8Array | string): void

  clearDefaultmethodsList(): void
  getDefaultmethodsList(): Array<Uint8Array | string>
  getDefaultmethodsList_asU8(): Array<Uint8Array>
  getDefaultmethodsList_asB64(): Array<string>
  setDefaultmethodsList(value: Array<Uint8Array | string>): void
  addDefaultmethods(value: Uint8Array | string, index?: number): Uint8Array | string

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GetMethodsBySelectorResponse.AsObject
  static toObject(includeInstance: boolean, msg: GetMethodsBySelectorResponse): GetMethodsBySelectorResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: GetMethodsBySelectorResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): GetMethodsBySelectorResponse
  static deserializeBinaryFromReader(
    message: GetMethodsBySelectorResponse,
    reader: jspb.BinaryReader
  ): GetMethodsBySelectorResponse
}

export namespace GetMethodsBySelectorResponse {
  export type AsObject = {
    method: Uint8Array | string
    defaultmethodsList: Array<Uint8Array | string>
  }
}

export class GetEventsBySigHashRequest extends jspb.Message {
  getSighash(): Uint8Array | string
  getSighash_asU8(): Uint8Array
  getSighash_asB64(): string
  setSighash(value: Uint8Array | string): void

  hasAccountinstance(): boolean
  clearAccountinstance(): void
  getAccountinstance(): types_common_account_instance_pb.AccountInstance | undefined
  setAccountinstance(value?: types_common_account_instance_pb.AccountInstance): void

  getIndexedinputcount(): number
  setIndexedinputcount(value: number): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GetEventsBySigHashRequest.AsObject
  static toObject(includeInstance: boolean, msg: GetEventsBySigHashRequest): GetEventsBySigHashRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: GetEventsBySigHashRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): GetEventsBySigHashRequest
  static deserializeBinaryFromReader(
    message: GetEventsBySigHashRequest,
    reader: jspb.BinaryReader
  ): GetEventsBySigHashRequest
}

export namespace GetEventsBySigHashRequest {
  export type AsObject = {
    sighash: Uint8Array | string
    accountinstance?: types_common_account_instance_pb.AccountInstance.AsObject
    indexedinputcount: number
  }
}

export class GetEventsBySigHashResponse extends jspb.Message {
  getEvent(): Uint8Array | string
  getEvent_asU8(): Uint8Array
  getEvent_asB64(): string
  setEvent(value: Uint8Array | string): void

  clearDefaulteventsList(): void
  getDefaulteventsList(): Array<Uint8Array | string>
  getDefaulteventsList_asU8(): Array<Uint8Array>
  getDefaulteventsList_asB64(): Array<string>
  setDefaulteventsList(value: Array<Uint8Array | string>): void
  addDefaultevents(value: Uint8Array | string, index?: number): Uint8Array | string

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GetEventsBySigHashResponse.AsObject
  static toObject(includeInstance: boolean, msg: GetEventsBySigHashResponse): GetEventsBySigHashResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: GetEventsBySigHashResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): GetEventsBySigHashResponse
  static deserializeBinaryFromReader(
    message: GetEventsBySigHashResponse,
    reader: jspb.BinaryReader
  ): GetEventsBySigHashResponse
}

export namespace GetEventsBySigHashResponse {
  export type AsObject = {
    event: Uint8Array | string
    defaulteventsList: Array<Uint8Array | string>
  }
}

export class SetAccountCodeHashRequest extends jspb.Message {
  hasAccountinstance(): boolean
  clearAccountinstance(): void
  getAccountinstance(): types_common_account_instance_pb.AccountInstance | undefined
  setAccountinstance(value?: types_common_account_instance_pb.AccountInstance): void

  getCodehash(): Uint8Array | string
  getCodehash_asU8(): Uint8Array
  getCodehash_asB64(): string
  setCodehash(value: Uint8Array | string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): SetAccountCodeHashRequest.AsObject
  static toObject(includeInstance: boolean, msg: SetAccountCodeHashRequest): SetAccountCodeHashRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: SetAccountCodeHashRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): SetAccountCodeHashRequest
  static deserializeBinaryFromReader(
    message: SetAccountCodeHashRequest,
    reader: jspb.BinaryReader
  ): SetAccountCodeHashRequest
}

export namespace SetAccountCodeHashRequest {
  export type AsObject = {
    accountinstance?: types_common_account_instance_pb.AccountInstance.AsObject
    codehash: Uint8Array | string
  }
}

export class SetAccountCodeHashResponse extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): SetAccountCodeHashResponse.AsObject
  static toObject(includeInstance: boolean, msg: SetAccountCodeHashResponse): SetAccountCodeHashResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: SetAccountCodeHashResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): SetAccountCodeHashResponse
  static deserializeBinaryFromReader(
    message: SetAccountCodeHashResponse,
    reader: jspb.BinaryReader
  ): SetAccountCodeHashResponse
}

export namespace SetAccountCodeHashResponse {
  export type AsObject = {}
}
