// package: ethereum
// file: types/ethereum/transaction.proto

import * as jspb from 'google-protobuf'
import * as types_ethereum_base_pb from '../../types/ethereum/base_pb'

export class TxData extends jspb.Message {
  getNonce(): number
  setNonce(value: number): void

  hasTo(): boolean
  clearTo(): void
  getTo(): types_ethereum_base_pb.Account | undefined
  setTo(value?: types_ethereum_base_pb.Account): void

  hasValue(): boolean
  clearValue(): void
  getValue(): types_ethereum_base_pb.Quantity | undefined
  setValue(value?: types_ethereum_base_pb.Quantity): void

  getGas(): number
  setGas(value: number): void

  hasGasPrice(): boolean
  clearGasPrice(): void
  getGasPrice(): types_ethereum_base_pb.Quantity | undefined
  setGasPrice(value?: types_ethereum_base_pb.Quantity): void

  hasData(): boolean
  clearData(): void
  getData(): types_ethereum_base_pb.Data | undefined
  setData(value?: types_ethereum_base_pb.Data): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): TxData.AsObject
  static toObject(includeInstance: boolean, msg: TxData): TxData.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: TxData, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): TxData
  static deserializeBinaryFromReader(message: TxData, reader: jspb.BinaryReader): TxData
}

export namespace TxData {
  export type AsObject = {
    nonce: number
    to?: types_ethereum_base_pb.Account.AsObject
    value?: types_ethereum_base_pb.Quantity.AsObject
    gas: number
    gasPrice?: types_ethereum_base_pb.Quantity.AsObject
    data?: types_ethereum_base_pb.Data.AsObject
  }
}

export class Transaction extends jspb.Message {
  hasTxData(): boolean
  clearTxData(): void
  getTxData(): TxData | undefined
  setTxData(value?: TxData): void

  hasRaw(): boolean
  clearRaw(): void
  getRaw(): types_ethereum_base_pb.Data | undefined
  setRaw(value?: types_ethereum_base_pb.Data): void

  hasHash(): boolean
  clearHash(): void
  getHash(): types_ethereum_base_pb.Hash | undefined
  setHash(value?: types_ethereum_base_pb.Hash): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Transaction.AsObject
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): Transaction
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction
}

export namespace Transaction {
  export type AsObject = {
    txData?: TxData.AsObject
    raw?: types_ethereum_base_pb.Data.AsObject
    hash?: types_ethereum_base_pb.Hash.AsObject
  }
}
