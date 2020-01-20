// package: envelopestore
// file: types/envelope-store/store.proto

import * as jspb from 'google-protobuf'
import * as google_api_annotations_pb from '../../google/api/annotations_pb'
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'
import * as protoc_gen_swagger_options_annotations_pb from '../../protoc-gen-swagger/options/annotations_pb'
import * as types_envelope_envelope_pb from '../../types/envelope/envelope_pb'
import * as types_ethereum_base_pb from '../../types/ethereum/base_pb'
import * as types_chain_chain_pb from '../../types/chain/chain_pb'

export class StatusInfo extends jspb.Message {
  getStatus(): StatusMap[keyof StatusMap]
  setStatus(value: StatusMap[keyof StatusMap]): void

  hasStoredat(): boolean
  clearStoredat(): void
  getStoredat(): google_protobuf_timestamp_pb.Timestamp | undefined
  setStoredat(value?: google_protobuf_timestamp_pb.Timestamp): void

  hasSentat(): boolean
  clearSentat(): void
  getSentat(): google_protobuf_timestamp_pb.Timestamp | undefined
  setSentat(value?: google_protobuf_timestamp_pb.Timestamp): void

  hasMinedat(): boolean
  clearMinedat(): void
  getMinedat(): google_protobuf_timestamp_pb.Timestamp | undefined
  setMinedat(value?: google_protobuf_timestamp_pb.Timestamp): void

  hasErrorat(): boolean
  clearErrorat(): void
  getErrorat(): google_protobuf_timestamp_pb.Timestamp | undefined
  setErrorat(value?: google_protobuf_timestamp_pb.Timestamp): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): StatusInfo.AsObject
  static toObject(includeInstance: boolean, msg: StatusInfo): StatusInfo.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: StatusInfo, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): StatusInfo
  static deserializeBinaryFromReader(message: StatusInfo, reader: jspb.BinaryReader): StatusInfo
}

export namespace StatusInfo {
  export type AsObject = {
    status: StatusMap[keyof StatusMap]
    storedat?: google_protobuf_timestamp_pb.Timestamp.AsObject
    sentat?: google_protobuf_timestamp_pb.Timestamp.AsObject
    minedat?: google_protobuf_timestamp_pb.Timestamp.AsObject
    errorat?: google_protobuf_timestamp_pb.Timestamp.AsObject
  }
}

export class StoreRequest extends jspb.Message {
  hasEnvelope(): boolean
  clearEnvelope(): void
  getEnvelope(): types_envelope_envelope_pb.Envelope | undefined
  setEnvelope(value?: types_envelope_envelope_pb.Envelope): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): StoreRequest.AsObject
  static toObject(includeInstance: boolean, msg: StoreRequest): StoreRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: StoreRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): StoreRequest
  static deserializeBinaryFromReader(message: StoreRequest, reader: jspb.BinaryReader): StoreRequest
}

export namespace StoreRequest {
  export type AsObject = {
    envelope?: types_envelope_envelope_pb.Envelope.AsObject
  }
}

export class StoreResponse extends jspb.Message {
  hasEnvelope(): boolean
  clearEnvelope(): void
  getEnvelope(): types_envelope_envelope_pb.Envelope | undefined
  setEnvelope(value?: types_envelope_envelope_pb.Envelope): void

  hasStatusInfo(): boolean
  clearStatusInfo(): void
  getStatusInfo(): StatusInfo | undefined
  setStatusInfo(value?: StatusInfo): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): StoreResponse.AsObject
  static toObject(includeInstance: boolean, msg: StoreResponse): StoreResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: StoreResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): StoreResponse
  static deserializeBinaryFromReader(message: StoreResponse, reader: jspb.BinaryReader): StoreResponse
}

export namespace StoreResponse {
  export type AsObject = {
    envelope?: types_envelope_envelope_pb.Envelope.AsObject
    statusInfo?: StatusInfo.AsObject
  }
}

export class LoadByIDRequest extends jspb.Message {
  getId(): string
  setId(value: string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): LoadByIDRequest.AsObject
  static toObject(includeInstance: boolean, msg: LoadByIDRequest): LoadByIDRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: LoadByIDRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): LoadByIDRequest
  static deserializeBinaryFromReader(message: LoadByIDRequest, reader: jspb.BinaryReader): LoadByIDRequest
}

export namespace LoadByIDRequest {
  export type AsObject = {
    id: string
  }
}

export class LoadByTxHashRequest extends jspb.Message {
  hasChain(): boolean
  clearChain(): void
  getChain(): types_chain_chain_pb.Chain | undefined
  setChain(value?: types_chain_chain_pb.Chain): void

  hasTxHash(): boolean
  clearTxHash(): void
  getTxHash(): types_ethereum_base_pb.Hash | undefined
  setTxHash(value?: types_ethereum_base_pb.Hash): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): LoadByTxHashRequest.AsObject
  static toObject(includeInstance: boolean, msg: LoadByTxHashRequest): LoadByTxHashRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: LoadByTxHashRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): LoadByTxHashRequest
  static deserializeBinaryFromReader(message: LoadByTxHashRequest, reader: jspb.BinaryReader): LoadByTxHashRequest
}

export namespace LoadByTxHashRequest {
  export type AsObject = {
    chain?: types_chain_chain_pb.Chain.AsObject
    txHash?: types_ethereum_base_pb.Hash.AsObject
  }
}

export class SetStatusRequest extends jspb.Message {
  getId(): string
  setId(value: string): void

  getStatus(): StatusMap[keyof StatusMap]
  setStatus(value: StatusMap[keyof StatusMap]): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): SetStatusRequest.AsObject
  static toObject(includeInstance: boolean, msg: SetStatusRequest): SetStatusRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: SetStatusRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): SetStatusRequest
  static deserializeBinaryFromReader(message: SetStatusRequest, reader: jspb.BinaryReader): SetStatusRequest
}

export namespace SetStatusRequest {
  export type AsObject = {
    id: string
    status: StatusMap[keyof StatusMap]
  }
}

export class StatusResponse extends jspb.Message {
  hasStatusInfo(): boolean
  clearStatusInfo(): void
  getStatusInfo(): StatusInfo | undefined
  setStatusInfo(value?: StatusInfo): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): StatusResponse.AsObject
  static toObject(includeInstance: boolean, msg: StatusResponse): StatusResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: StatusResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): StatusResponse
  static deserializeBinaryFromReader(message: StatusResponse, reader: jspb.BinaryReader): StatusResponse
}

export namespace StatusResponse {
  export type AsObject = {
    statusInfo?: StatusInfo.AsObject
  }
}

export class LoadPendingRequest extends jspb.Message {
  hasDuration(): boolean
  clearDuration(): void
  getDuration(): google_protobuf_duration_pb.Duration | undefined
  setDuration(value?: google_protobuf_duration_pb.Duration): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): LoadPendingRequest.AsObject
  static toObject(includeInstance: boolean, msg: LoadPendingRequest): LoadPendingRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: LoadPendingRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): LoadPendingRequest
  static deserializeBinaryFromReader(message: LoadPendingRequest, reader: jspb.BinaryReader): LoadPendingRequest
}

export namespace LoadPendingRequest {
  export type AsObject = {
    duration?: google_protobuf_duration_pb.Duration.AsObject
  }
}

export class LoadPendingResponse extends jspb.Message {
  clearResponsesList(): void
  getResponsesList(): Array<StoreResponse>
  setResponsesList(value: Array<StoreResponse>): void
  addResponses(value?: StoreResponse, index?: number): StoreResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): LoadPendingResponse.AsObject
  static toObject(includeInstance: boolean, msg: LoadPendingResponse): LoadPendingResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: LoadPendingResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): LoadPendingResponse
  static deserializeBinaryFromReader(message: LoadPendingResponse, reader: jspb.BinaryReader): LoadPendingResponse
}

export namespace LoadPendingResponse {
  export type AsObject = {
    responsesList: Array<StoreResponse.AsObject>
  }
}

export interface StatusMap {
  STORED: 0
  PENDING: 1
  MINED: 2
  ERROR: 3
}

export const Status: StatusMap
