// package: envelope
// file: types/envelope/envelope.proto

import * as jspb from 'google-protobuf'
import * as types_chain_chain_pb from '../../types/chain/chain_pb'
import * as types_chain_protocol_pb from '../../types/chain/protocol_pb'
import * as types_ethereum_base_pb from '../../types/ethereum/base_pb'
import * as types_ethereum_transaction_pb from '../../types/ethereum/transaction_pb'
import * as types_ethereum_receipt_pb from '../../types/ethereum/receipt_pb'
import * as types_args_private_pb from '../../types/args/private_pb'
import * as types_args_call_pb from '../../types/args/call_pb'
import * as types_error_error_pb from '../../types/error/error_pb'

export class Metadata extends jspb.Message {
  getId(): string
  setId(value: string): void

  getExtraMap(): jspb.Map<string, string>
  clearExtraMap(): void
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Metadata.AsObject
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): Metadata
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata
}

export namespace Metadata {
  export type AsObject = {
    id: string
    extraMap: Array<[string, string]>
  }
}

export class Args extends jspb.Message {
  hasCall(): boolean
  clearCall(): void
  getCall(): types_args_call_pb.Call | undefined
  setCall(value?: types_args_call_pb.Call): void

  hasPrivate(): boolean
  clearPrivate(): void
  getPrivate(): types_args_private_pb.Private | undefined
  setPrivate(value?: types_args_private_pb.Private): void

  hasData(): boolean
  clearData(): void
  getData(): types_ethereum_base_pb.Data | undefined
  setData(value?: types_ethereum_base_pb.Data): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Args.AsObject
  static toObject(includeInstance: boolean, msg: Args): Args.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: Args, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): Args
  static deserializeBinaryFromReader(message: Args, reader: jspb.BinaryReader): Args
}

export namespace Args {
  export type AsObject = {
    call?: types_args_call_pb.Call.AsObject
    pb_private?: types_args_private_pb.Private.AsObject
    data?: types_ethereum_base_pb.Data.AsObject
  }
}

export class Envelope extends jspb.Message {
  hasChain(): boolean
  clearChain(): void
  getChain(): types_chain_chain_pb.Chain | undefined
  setChain(value?: types_chain_chain_pb.Chain): void

  hasProtocol(): boolean
  clearProtocol(): void
  getProtocol(): types_chain_protocol_pb.Protocol | undefined
  setProtocol(value?: types_chain_protocol_pb.Protocol): void

  hasFrom(): boolean
  clearFrom(): void
  getFrom(): types_ethereum_base_pb.Account | undefined
  setFrom(value?: types_ethereum_base_pb.Account): void

  hasTx(): boolean
  clearTx(): void
  getTx(): types_ethereum_transaction_pb.Transaction | undefined
  setTx(value?: types_ethereum_transaction_pb.Transaction): void

  hasReceipt(): boolean
  clearReceipt(): void
  getReceipt(): types_ethereum_receipt_pb.Receipt | undefined
  setReceipt(value?: types_ethereum_receipt_pb.Receipt): void

  clearErrorsList(): void
  getErrorsList(): Array<types_error_error_pb.Error>
  setErrorsList(value: Array<types_error_error_pb.Error>): void
  addErrors(value?: types_error_error_pb.Error, index?: number): types_error_error_pb.Error

  hasArgs(): boolean
  clearArgs(): void
  getArgs(): Args | undefined
  setArgs(value?: Args): void

  hasMetadata(): boolean
  clearMetadata(): void
  getMetadata(): Metadata | undefined
  setMetadata(value?: Metadata): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Envelope.AsObject
  static toObject(includeInstance: boolean, msg: Envelope): Envelope.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: Envelope, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): Envelope
  static deserializeBinaryFromReader(message: Envelope, reader: jspb.BinaryReader): Envelope
}

export namespace Envelope {
  export type AsObject = {
    chain?: types_chain_chain_pb.Chain.AsObject
    protocol?: types_chain_protocol_pb.Protocol.AsObject
    from?: types_ethereum_base_pb.Account.AsObject
    tx?: types_ethereum_transaction_pb.Transaction.AsObject
    receipt?: types_ethereum_receipt_pb.Receipt.AsObject
    errorsList: Array<types_error_error_pb.Error.AsObject>
    args?: Args.AsObject
    metadata?: Metadata.AsObject
  }
}
