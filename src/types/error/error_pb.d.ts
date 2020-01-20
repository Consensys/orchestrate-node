// package: error
// file: types/error/error.proto

import * as jspb from 'google-protobuf'

export class Error extends jspb.Message {
  getMessage(): string
  setMessage(value: string): void

  getCode(): number
  setCode(value: number): void

  getComponent(): string
  setComponent(value: string): void

  getExtraMap(): jspb.Map<string, string>
  clearExtraMap(): void
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Error.AsObject
  static toObject(includeInstance: boolean, msg: Error): Error.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): Error
  static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error
}

export namespace Error {
  export type AsObject = {
    message: string
    code: number
    component: string
    extraMap: Array<[string, string]>
  }
}
