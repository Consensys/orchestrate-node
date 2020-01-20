// package: args
// file: types/args/private.proto

import * as jspb from 'google-protobuf'

export class Private extends jspb.Message {
  getPrivateFrom(): string
  setPrivateFrom(value: string): void

  clearPrivateForList(): void
  getPrivateForList(): Array<string>
  setPrivateForList(value: Array<string>): void
  addPrivateFor(value: string, index?: number): string

  getPrivateTxType(): string
  setPrivateTxType(value: string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Private.AsObject
  static toObject(includeInstance: boolean, msg: Private): Private.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: Private, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): Private
  static deserializeBinaryFromReader(message: Private, reader: jspb.BinaryReader): Private
}

export namespace Private {
  export type AsObject = {
    privateFrom: string
    privateForList: Array<string>
    privateTxType: string
  }
}
