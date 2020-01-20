// package: args
// file: types/args/call.proto

import * as jspb from 'google-protobuf'
import * as types_abi_abi_pb from '../../types/abi/abi_pb'

export class Call extends jspb.Message {
  hasContract(): boolean
  clearContract(): void
  getContract(): types_abi_abi_pb.Contract | undefined
  setContract(value?: types_abi_abi_pb.Contract): void

  hasMethod(): boolean
  clearMethod(): void
  getMethod(): types_abi_abi_pb.Method | undefined
  setMethod(value?: types_abi_abi_pb.Method): void

  clearArgsList(): void
  getArgsList(): Array<string>
  setArgsList(value: Array<string>): void
  addArgs(value: string, index?: number): string

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Call.AsObject
  static toObject(includeInstance: boolean, msg: Call): Call.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: Call, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): Call
  static deserializeBinaryFromReader(message: Call, reader: jspb.BinaryReader): Call
}

export namespace Call {
  export type AsObject = {
    contract?: types_abi_abi_pb.Contract.AsObject
    method?: types_abi_abi_pb.Method.AsObject
    argsList: Array<string>
  }
}
