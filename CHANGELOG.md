# CHANGELOG

All notable changes to this project will be documented in this file.

## 2.0.0 (2020-02-03)

Complete rewrite of the SDK in pure TypeScript and redefinition of the interfaces

### 🆕 Features

- Complete rewrite of the SDK in TypeScript
- `Consumer`, `Producer`, `ContractRegistry` and `AccountGenerator` exposed as standalone classes
- **`Producer`**:
  - Accepts Options to increase flexibility of usage with Kafka
  - Specific functions for specific actions such as `sendTransaction`, `sendRawTransaction` and `generateAccount`.
  - Functions default to correct topics
- **`Consumer`**:
  - Accepts Options to increase flexibility of usage with Kafka
  - Does not lose messages. Implements a `commit` function to commit the message offsets manually
  - Returns output messages of the type `ResponseMessage`

### ⚠ Bug fixes:

- `Consumer` does not lose messages anymore if a client-side error occurs but the user must commit messages manually.

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
