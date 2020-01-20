// package: abi
// file: types/abi/abi.proto

import * as jspb from 'google-protobuf'

export class ContractId extends jspb.Message {
  getRegistry(): string
  setRegistry(value: string): void

  getName(): string
  setName(value: string): void

  getTag(): string
  setTag(value: string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ContractId.AsObject
  static toObject(includeInstance: boolean, msg: ContractId): ContractId.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: ContractId, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): ContractId
  static deserializeBinaryFromReader(message: ContractId, reader: jspb.BinaryReader): ContractId
}

export namespace ContractId {
  export type AsObject = {
    registry: string
    name: string
    tag: string
  }
}

export class Contract extends jspb.Message {
  hasId(): boolean
  clearId(): void
  getId(): ContractId | undefined
  setId(value?: ContractId): void

  getAbi(): Uint8Array | string
  getAbi_asU8(): Uint8Array
  getAbi_asB64(): string
  setAbi(value: Uint8Array | string): void

  getBytecode(): Uint8Array | string
  getBytecode_asU8(): Uint8Array
  getBytecode_asB64(): string
  setBytecode(value: Uint8Array | string): void

  clearMethodsList(): void
  getMethodsList(): Array<Method>
  setMethodsList(value: Array<Method>): void
  addMethods(value?: Method, index?: number): Method

  clearEventsList(): void
  getEventsList(): Array<Event>
  setEventsList(value: Array<Event>): void
  addEvents(value?: Event, index?: number): Event

  getDeployedbytecode(): Uint8Array | string
  getDeployedbytecode_asU8(): Uint8Array
  getDeployedbytecode_asB64(): string
  setDeployedbytecode(value: Uint8Array | string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Contract.AsObject
  static toObject(includeInstance: boolean, msg: Contract): Contract.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: Contract, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): Contract
  static deserializeBinaryFromReader(message: Contract, reader: jspb.BinaryReader): Contract
}

export namespace Contract {
  export type AsObject = {
    id?: ContractId.AsObject
    abi: Uint8Array | string
    bytecode: Uint8Array | string
    methodsList: Array<Method.AsObject>
    eventsList: Array<Event.AsObject>
    deployedbytecode: Uint8Array | string
  }
}

export class Method extends jspb.Message {
  getSignature(): string
  setSignature(value: string): void

  getAbi(): Uint8Array | string
  getAbi_asU8(): Uint8Array
  getAbi_asB64(): string
  setAbi(value: Uint8Array | string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Method.AsObject
  static toObject(includeInstance: boolean, msg: Method): Method.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: Method, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): Method
  static deserializeBinaryFromReader(message: Method, reader: jspb.BinaryReader): Method
}

export namespace Method {
  export type AsObject = {
    signature: string
    abi: Uint8Array | string
  }
}

export class Event extends jspb.Message {
  getSignature(): string
  setSignature(value: string): void

  getAbi(): Uint8Array | string
  getAbi_asU8(): Uint8Array
  getAbi_asB64(): string
  setAbi(value: Uint8Array | string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Event.AsObject
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): Event
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event
}

export namespace Event {
  export type AsObject = {
    signature: string
    abi: Uint8Array | string
  }
}
