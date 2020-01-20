// package: ethereum
// file: types/ethereum/base.proto

import * as jspb from 'google-protobuf'

export class Account extends jspb.Message {
  getRaw(): Uint8Array | string
  getRaw_asU8(): Uint8Array
  getRaw_asB64(): string
  setRaw(value: Uint8Array | string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Account.AsObject
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): Account
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account
}

export namespace Account {
  export type AsObject = {
    raw: Uint8Array | string
  }
}

export class Hash extends jspb.Message {
  getRaw(): Uint8Array | string
  getRaw_asU8(): Uint8Array
  getRaw_asB64(): string
  setRaw(value: Uint8Array | string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Hash.AsObject
  static toObject(includeInstance: boolean, msg: Hash): Hash.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: Hash, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): Hash
  static deserializeBinaryFromReader(message: Hash, reader: jspb.BinaryReader): Hash
}

export namespace Hash {
  export type AsObject = {
    raw: Uint8Array | string
  }
}

export class Quantity extends jspb.Message {
  getRaw(): Uint8Array | string
  getRaw_asU8(): Uint8Array
  getRaw_asB64(): string
  setRaw(value: Uint8Array | string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Quantity.AsObject
  static toObject(includeInstance: boolean, msg: Quantity): Quantity.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: Quantity, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): Quantity
  static deserializeBinaryFromReader(message: Quantity, reader: jspb.BinaryReader): Quantity
}

export namespace Quantity {
  export type AsObject = {
    raw: Uint8Array | string
  }
}

export class Data extends jspb.Message {
  getRaw(): Uint8Array | string
  getRaw_asU8(): Uint8Array
  getRaw_asB64(): string
  setRaw(value: Uint8Array | string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Data.AsObject
  static toObject(includeInstance: boolean, msg: Data): Data.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): Data
  static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data
}

export namespace Data {
  export type AsObject = {
    raw: Uint8Array | string
  }
}
