// package: chain
// file: types/chain/chain.proto

import * as jspb from 'google-protobuf'

export class Chain extends jspb.Message {
  getId(): Uint8Array | string
  getId_asU8(): Uint8Array
  getId_asB64(): string
  setId(value: Uint8Array | string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Chain.AsObject
  static toObject(includeInstance: boolean, msg: Chain): Chain.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: Chain, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): Chain
  static deserializeBinaryFromReader(message: Chain, reader: jspb.BinaryReader): Chain
}

export namespace Chain {
  export type AsObject = {
    id: Uint8Array | string
  }
}
