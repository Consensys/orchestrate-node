# CHANGELOG

All notable changes to this project will be documented in this file.

## 4.2.0 (2021-06-3)

### 🆕 Features

- Adds new `headers` parameter to every method enabling users to pass complex headers such as `X-Tenant-ID`.

## 4.1.1 (2021-07-02)

### 🛠 Bug fixes

- Missing support for delete chain

## 4.1.0 (2021-06-3)

### 🆕 Features

- Support for chain's metadata

## 4.0.0 (2021-01-25)

### 🆕 Features

- New Identity Management API to enable fine-grained management of Ethereum accounts
- Support for remote transaction signing, random payload signing and signature verify
- New unified API client, **OrchestrateClient`**

### ⚠ BREAKING CHANGES

- Remove support for account generation using the kafka. Removes `AccountGenerator` class and usages
- Remove support for contract-registry GRPC
- Remove account generation using CLI
- Remove client API classes TransactionClient, FaucetRegistry, ContractRegistry and ChainRegistry
- Renamed client API methods:
  - send(...) -> sendTransaction(...)
  - search() -> searchTransactions(...)
  - register(...) -> registerContract(...)
  - getCatalog(...) -> getContractsCatalog(...)
  - getTags(...) -> getContractTags(...)

## 3.1.2 (2020-10-12)

### 🛠 Bug fixes

- Fixes a bug where the consumer crashes when a raw transaction fails in the topic tx-recover

## 3.1.1 (2020-09-29)

### 🆕 Features

- Adding interfaces to create transactions with a gas price retry policy with an increment, limit and interval
- Adds job UUID to the transaction response

## 3.1.0 (2020-09-02)

### 🛠 Bug fixes

- Fixes a search of transactions by idempotency key issue
- Adapt transaction request interfaces to include gasPricePolicy

## 3.0.1 (2020-07-31)

### 🛠 Bug fixes

- Fixes a security issue by upgrading ethers to version 5

## 3.0.0 (2020-07-29)

### 🆕 Features

- Adapt SDK to be compatible with Orchestrate v2.3.0-rcX

## 2.3.0 (2020-07-08)

### 🆕 Features

- Manage your chains using a new HTTP wrapper **chainRegistry**
- Manage your faucets using a new HTTP wrapper **faucetRegistry**

## 2.2.0 (2020-06-08)

### 🛠 Bug fixes

- Update `AccountGenerator` constructor to be able to pass configurations for the producer and consumer, including the consumer group id.

### Breaking changes

- `chainName` field was replaced by `chain` in `TxRequest` and `TxResponse` interfaces

## 2.1.0 (2020-06-02)

### 🆕 Features

- Support private transaction with Besu/Orion and Quorum/Tessera
- Support revert reason in transaction receipt
- Adds chain information to the transaction response

## 2.0.1 (2020-03-24)

### 🛠 Bug fixes

- Fixes a bug where the status of a receipt is always true when the transaction reverted

## 2.0.0 (2020-02-03)

Complete rewrite of the SDK in pure TypeScript and redefinition of the interfaces

### 🆕 Features

- Support version 2.0+ of Orchestrate
- Complete rewrite of the SDK in TypeScript
- Usage of [kafkajs](https://kafka.js.org/) instead of [kafka-node](https://www.npmjs.com/package/kafka-node)
- Usage of [grpc-js](https://www.npmjs.com/package/@grpc/grpc-js) instead of [grpc](https://www.npmjs.com/package/grpc)
- Switch from an auto-commit mode to a manual commit which prevents to inadvertently commit non-processed messages and lose them.
- `Consumer`, `Producer`, `ContractRegistry` and `AccountGenerator` exposed as standalone classes
- **`Producer`**:
  - Accepts Options to increase flexibility of usage with Kafka
  - Specific functions for specific actions such as `sendTransaction`, `sendRawTransaction` and `generateAccount`.
  - Functions default to correct topics
- **`Consumer`**:
  - Accepts Options to increase flexibility of usage with Kafka
  - Implements a `commit` function to commit the message offsets manually
  - Returns output messages of the type `ResponseMessage`
- Rename `Wallet` into `Account`

## 1.0.0 (Unreleased)

Version 1.0.0 not released as the SDK has been rewritten completely as version 2.0.0

## 1.0.0-rc1 to 1.0.0-rc3 (2020-01-24)

### 🆕 Features

- Add the `GetContract` gRPC function call
- Add the `nonce` field
- Export the marshal and unmarshal methods in the consumer and producer

### 🛠 Bug fixes

- Rename `geNetworks` in `getNetworks`
- Correct typo to make ConsumerGroup extending from the correct class
- Add types in the package.json

## 0.5.0 (2019-10-30)

### 🆕 Features

- Make cli installable
- Support for TLS gRPC servers
- Rename to PegaSys Orchestrate

## 0.4.0 to 0.4.8 (2019-09-24)

### 🆕 Features

- Update `ProducerOutput` type with 'id' field as a string
- Update Readme - redirect to documentation website
- Update `web3` to v1.2.0
- Update `pkg` to v0.7.0
- Update docstring

### 🛠 Bug fixes

- Update type definition file - add class attributes
- Update types for methods with Promises
- Update types options for producer, consumer, consumerGroup
- Update type definition path in `package.json`
- Use webpack instead of babel to build
- Use regenerator-runtime in main file

## 0.3.0 to 0.3.1 (2019-07-11)

### 🆕 Features

- Add typescript definitions
- Clean code and naming
- Update `pkg` to v0.6.1
- Check signature, input arguments, arguments

## 0.2.0 to 0.2.1 (2019-06-28)

### 🆕 Features

- Update `pkg` to v0.5.7
- Create wallet asynchronously
- Add web3 wrapper

## 0.1.0 to 0.1.8

### 🆕 Features

- Unmarshal extra metadata into Object instead of Array
- Unmarshal DecodedData into an Object instead of an Array
- Update README
- Update protobuf messages (v0.2.0-alpha.8 of pkg) including Quorum
- Handling error message type
- Create Producer, Consumer, ConsumerGroup
- Marshal message in protobuf
