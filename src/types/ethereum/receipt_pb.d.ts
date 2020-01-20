// package: ethereum
// file: types/ethereum/receipt.proto

import * as jspb from 'google-protobuf'
import * as types_ethereum_base_pb from '../../types/ethereum/base_pb'

export class Log extends jspb.Message {
  hasAddress(): boolean
  clearAddress(): void
  getAddress(): types_ethereum_base_pb.Account | undefined
  setAddress(value?: types_ethereum_base_pb.Account): void

  clearTopicsList(): void
  getTopicsList(): Array<types_ethereum_base_pb.Hash>
  setTopicsList(value: Array<types_ethereum_base_pb.Hash>): void
  addTopics(value?: types_ethereum_base_pb.Hash, index?: number): types_ethereum_base_pb.Hash

  getData(): Uint8Array | string
  getData_asU8(): Uint8Array
  getData_asB64(): string
  setData(value: Uint8Array | string): void

  getEvent(): string
  setEvent(value: string): void

  getDecodedDataMap(): jspb.Map<string, string>
  clearDecodedDataMap(): void
  getBlockNumber(): number
  setBlockNumber(value: number): void

  hasTxHash(): boolean
  clearTxHash(): void
  getTxHash(): types_ethereum_base_pb.Hash | undefined
  setTxHash(value?: types_ethereum_base_pb.Hash): void

  getTxIndex(): number
  setTxIndex(value: number): void

  hasBlockHash(): boolean
  clearBlockHash(): void
  getBlockHash(): types_ethereum_base_pb.Hash | undefined
  setBlockHash(value?: types_ethereum_base_pb.Hash): void

  getIndex(): number
  setIndex(value: number): void

  getRemoved(): boolean
  setRemoved(value: boolean): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Log.AsObject
  static toObject(includeInstance: boolean, msg: Log): Log.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: Log, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): Log
  static deserializeBinaryFromReader(message: Log, reader: jspb.BinaryReader): Log
}

export namespace Log {
  export type AsObject = {
    address?: types_ethereum_base_pb.Account.AsObject
    topicsList: Array<types_ethereum_base_pb.Hash.AsObject>
    data: Uint8Array | string
    event: string
    decodedDataMap: Array<[string, string]>
    blockNumber: number
    txHash?: types_ethereum_base_pb.Hash.AsObject
    txIndex: number
    blockHash?: types_ethereum_base_pb.Hash.AsObject
    index: number
    removed: boolean
  }
}

export class Receipt extends jspb.Message {
  hasTxHash(): boolean
  clearTxHash(): void
  getTxHash(): types_ethereum_base_pb.Hash | undefined
  setTxHash(value?: types_ethereum_base_pb.Hash): void

  hasBlockHash(): boolean
  clearBlockHash(): void
  getBlockHash(): types_ethereum_base_pb.Hash | undefined
  setBlockHash(value?: types_ethereum_base_pb.Hash): void

  getBlockNumber(): number
  setBlockNumber(value: number): void

  getTxIndex(): number
  setTxIndex(value: number): void

  hasContractAddress(): boolean
  clearContractAddress(): void
  getContractAddress(): types_ethereum_base_pb.Account | undefined
  setContractAddress(value?: types_ethereum_base_pb.Account): void

  getPostState(): Uint8Array | string
  getPostState_asU8(): Uint8Array
  getPostState_asB64(): string
  setPostState(value: Uint8Array | string): void

  getStatus(): number
  setStatus(value: number): void

  getBloom(): Uint8Array | string
  getBloom_asU8(): Uint8Array
  getBloom_asB64(): string
  setBloom(value: Uint8Array | string): void

  clearLogsList(): void
  getLogsList(): Array<Log>
  setLogsList(value: Array<Log>): void
  addLogs(value?: Log, index?: number): Log

  getGasUsed(): number
  setGasUsed(value: number): void

  getCumulativeGasUsed(): number
  setCumulativeGasUsed(value: number): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Receipt.AsObject
  static toObject(includeInstance: boolean, msg: Receipt): Receipt.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: Receipt, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): Receipt
  static deserializeBinaryFromReader(message: Receipt, reader: jspb.BinaryReader): Receipt
}

export namespace Receipt {
  export type AsObject = {
    txHash?: types_ethereum_base_pb.Hash.AsObject
    blockHash?: types_ethereum_base_pb.Hash.AsObject
    blockNumber: number
    txIndex: number
    contractAddress?: types_ethereum_base_pb.Account.AsObject
    postState: Uint8Array | string
    status: number
    bloom: Uint8Array | string
    logsList: Array<Log.AsObject>
    gasUsed: number
    cumulativeGasUsed: number
  }
}
