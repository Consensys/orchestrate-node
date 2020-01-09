# CHANGELOG

### Version 2.0.0

_Unreleased_

- TODO

### Version 1.0.0

_Unreleased_

- [FEAT] Add the `GetContract` gRPC function call
- [FEAT] Add the `nonce` field
- [FEAT] Export the marshal and unmarshal methods in the consumer and producer
- [FIX] Rename `geNetworks` in `getNetworks`
- [FIX] Correct typo to make ConsumerGroup extending from the correct class
- [FIX] Add types in the package.json

### Version 0.5.0

_Released on October 30th 2019_

- [FEAT] Make cli installable
- [FEAT] Support for TLS gRPC servers
- [REFACTOR] Rename to PegaSys Orchestrate

### Version 0.4.8

_Released on September 24th 2019_

- [FIX]: Update type definition file - add class attributes

### Version 0.4.7

_Released on September 24th 2019_

- [FIX]: Update ProducerOutput type with 'id' field as a string

### Version 0.4.6

_Released on September 24th 2019_

- [FIX]: Update types for methods with Promises

### Version 0.4.5

_Released on September 13th 2019_

- [FIX]: Update types options for producer, consumer, consumerGroup

### Version 0.4.4

_Released on August 5th 2019_

- [FEAT]: Update Readme - redirect to documentation website

### Version 0.4.3

_Released on July 25th 2019_

- [FEAT]: Update web3 to v1.2.0
- [FIX]: Use regenerator-runtime in main file

### Version 0.4.2

_Released on July 23th 2019_

- [FIX]: Use webpack instead of babel to build

### Version 0.4.1

_Released on July 23th 2019_

- [FIX]: Update type definition path in `package.json`

### Version 0.4.0

_Released on July 23th 2019_

- [FEAT]: Update `pkg` to v0.7.0
- [DOCS]: Update docstring

### Version 0.3.1

_Released on July 11th 2019_

- [FEAT]: Add typescript definitions
- [FIX]: Clean code and naming

### Version 0.3.0

_Released on July 5th 2019_

- [FEAT]: Update `pkg` to v0.6.1
- [FEAT]: Check signature, input arguments, arguments

### Version 0.2.1

_Released on June 28th 2019_

- [FEAT]: Update `pkg` to v0.5.7
- [FEAT]: Create wallet asynchronously
- [FEAT]: Add web3 wrapper

### Version 0.2.0

_Released on May 20th 2019_

- [FEAT]: Update protobuf types (v0.5.2 of pkg)

### Version 0.1.8

_Released on April 2nd 2019_

- [FEAT]: Unmarshal extra metadata into Object instead of Array

### Version 0.1.7

_Released on March 26th 2019_

- [FIX]: Marshal Metadata string without error

### Version 0.1.6

_Released on March 25th 2019_

- [FEAT]: Unmarshal DecodedData into an Object instead of an Array
- [DOCS]: Update README

### Version 0.1.5

_Released on March 24th 2019_

- [FEAT]: Update protobuf messages (v0.2.0-alpha.8 of pkg) including Quorum
- [FEAT]: Handling error message type

### Versions 0.1.0 to 0.1.4

- [FEAT]: Create Producer, Consumer, ConsumerGroup
- [FEAT]: Marshal message in protobuf
