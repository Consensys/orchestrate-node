# NodeJs SDK

- [NodeJs SDK](#NodeJs-SDK)
  - [Goal](#Goal)
  - [Quick-Start](#Quick-Start)
  - [Generate wallets stored in a vault](#Generate-wallets-stored-in-a-vault)
  - [High Level Architecture](#High-Level-Architecture)
  - [API](#API)
    - [CoreStack client](#CoreStack-client)
    - [Broker](#Broker)
      - [Producer](#Producer)
        - [Initilization](#Initilization)
        - [Producer payload](#Producer-payload)
        - [Returns](#Returns)
      - [Consumer](#Consumer)
        - [Initilization](#Initilization-1)
        - [Message consumed](#Message-consumed)
  - [Technical Architecture](#Technical-Architecture)

CoreStack is a blockchain **Transaction Orchestration** system that can operate multiple chains simultaneously.
It provides production grade and agnostic mechanisms for transaction crafting, nonce management, transaction signing, transaction receipt listening, transaction receipt decoding, faucet and more.

CoreStack is a **microservices architecture** composed of APIs & Workers. 
Workers communicate following **publish-subscribe** pattern using *Apache Kafka* as message broker. 
All messages are standardized using **protobuf** and **GRPC**.

CoreStack is Plug & Play, a user only needs to send a business protobuf message to CoreStack input topic,
CoreStack then manages the full lifecycle of the transaction from crafting the transaction to decoding event logs data.

## Goal

NodeJs SDK is able to

- **Send transaction via CoreStack**  
- **Consume mined transactions in a decoded format from CoreStack**
- **Generate wallets stored in CoreStack**

## Quick-Start

To quickly start implement CoreStack

1. Install
```js
$ npm install core-stack-sdk --save
```

2. Import and initialize SDK

```js
import CoreStackSDK from 'core-stack-sdk'
const CoreStack = new CoreStackSDK()
// Initialize broker with a kafka endpoint
const broker = CoreStack.broker('localhost:9092')
```

3.1. Init producer to a specific topic

```js
try {
    // Create a producer that will send a transaction to CoreStack (by default, the message is sent to the topic "topic-tx-crafter", see broker.producer doc to pass options) 
    const producer = await broker.producer()
    const tx = await producer.send({
        chainId: '888',
        call: {
            contract: 'SimpleToken',
            method: 'constructor()',
        },
        gas: 2000000,
        from: '0x7e654d251da770a068413677967f6d3ea2fea9e4'
    })
    console.log('Message sent: ', tx)
    // Message sent:  { offset: 9, id: '5b479d04-8dcc-498d-af51-c3e456a070f4' }
} catch(e) {
    console.error(e)
}
```

3.2. Init consumer to a specific topic

```js
try {
    // Create a consumer to listen CoreStack topics (by default, the broker is consumming "topic-tx-decoded", see broker.consumer doc to pass options)
    const consumer = await broker.consumer()
    const consume = consumer.consume()

    consume.on('message', message => {
        console.log('Message consumed: ', message)
// Message consumed:  {
//     topic: 'topic-tx-decoded',
//     value: {
//         chain: {
//             id: '888',
//             iseip155: false
//         },
//         sender: {
//             id: '',
//             addr: '0x7e654d251da770a068413677967f6d3ea2fea9e4'
//         },
//         receiver: undefined,
//         call: {
//             contract: {
//                 registry: '',
//                 name: 'SimpleToken',
//                 tag: '',
//                 abi: '',
//                 bytecode: '',
//                 deployedbytecode: ''
//             },
//             method: {
//                 signature: 'constructor()',
//                 abi: ''
//             },
//             argsList: [],
//             quorum: undefined
//         },
//         tx: {
//             txData: {
//                 nonce: 1,
//                 to: '',
//                 value: '',
//                 gas: 2000000,
//                 gasPrice: '0x4a817c800',
//                 data: '0x60806040523480156100......7ddfc7f0d879a47389c19964d60029'
//             },
//             raw: '0xf90c65808504........714f64e08440f53c8b70'
//             ',
//             hash: '0x71c6cd4fe0d6c17dbae9dde7deb38cb14aafc2fed5eb41b0c7a3b596501da41c'
//         },
//         receipt: {
//             txHash: '0x71c6cd4fe0d6c17dbae9dde7deb38cb14aafc2fed5eb41b0c7a3b596501da41c',
//             blockHash: '0xbaca9e2e5843704a0f6bf42557bba155cc07885726f9a0faafda27e4803ed1c5',
//             blockNumber: 35,
//             txIndex: 0,
//             contractAddress: '0xe5ce65038f9d1c841a33CC816eE674F8a0E31E74',
//             postState: '',
//             status: 1,
//             bloom: 'AAIAAAAAAAAAA........AAAAAAAAAAAAAAA==',
//             logsList: [{
//                 address: '0x71B7d704598945e72E7581BAC3b070D300dc6Eb3',
//                 topicsList: [
//                     '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
//                     '0x0000000000000000000000000000000000000000000000000000000000000000',
//                     '0x0000000000000000000000007e654d251da770a068413677967f6d3ea2fea9e4'
//                 ],
//                 data: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIeGeDJurJAAAA=',
//                 event: 'Transfer(address,address,uint256)',
//                 decodedDataMap: {
//                     from: '0x0000000000000000000000000000000000000000',
//                     to: '0x7E654d251Da770A068413677967F6d3Ea2FeA9E4',
//                     value: '10000000000000000000000'
//                 },
//                 blockNumber: 128,
//                 txHash: '0xcbb8c17e59156500a668954353120b948d9397c8ba4d74935ebd32b702ca7b7a',
//                 txIndex: 0,
//                 blockHash: '0x942f9916e22c011d424a2ac9c65fbaaa529b52952d5b800fb71e1f754f2b838c',
//                 index: 0,
//                 removed: false
//             }],
//             gasUsed: 815261,
//             cumulativeGasUsed: 815261
//         },
//         errorsList: [],
//         metadata: {
//             id: '471b3dec-6f8c-4394-8fa8-ef7d3e8c59e1',
//             extraMap: {}
//         }
//     },
//     offset: 0,
//     partition: 0,
//     highWaterOffset: 1,
//     key: < Buffer 03 78 >
// }
```
## Generate wallets stored in a vault

```js
        //Init CoreStackSDK
        const CoreStack = new CoreStackSDK()

        // Init broker to connect to a kafka borker
        const broker = CoreStack.broker('localhost:9092')

        // Init class to generate wallets in CoreStack
        const wallet = await broker.wallet()

        // Generate multiple wallets asynchronously and get addresses
        const wallets = await Promise.all([
            wallet.generate(),
            wallet.generate(),
            wallet.generate(),
            wallet.generate(),
            wallet.generate(),
            wallet.generate(),
            wallet.generate()
        ])
        console.log('Wallets generated: ' wallets)
        // Wallets generated: [
        //   '0x171cfe7D47f3F6316A5128215dc960a2812D557D',
        //   '0x9cD7eE2014a2dA810AB51166835c9cc3601D9516',
        //   '0xaAdCe2f8764c155e01711dD1bC6aE340ae4D5735',
        //   '0x28ea3Cec494F86B71b9B62482963f36f82F0b5Fd',
        //   '0xD0062dFB39180C2Ef8FCbcFEb75944e3059895ce',
        //   '0xE2d3e35c0e0731208eC09A21955E557b59aa08d6',
        //   '0x499d0E4990c8ce51cA189fb2960064442E39b98e'
        // ]
```

## High Level Architecture

In charge of interacting with CoreStack this SDK will:
* marshal message in protobuf format and send it to a kafka queue
* listening a kafka queue of decoded transactions, and unmarshall messages 

## API

### CoreStack client

```js
const CoreStack = new CoreStackSDK()
```

### Broker

```js
const broker = CoreStack.broker(endpoint, [options])
```

* `endpoint` : A string of kafka broker/host combination delimited by comma.
* `options` : see [kafka-node options](https://github.com/SOHU-Co/kafka-node#options)

#### Producer

##### Initilization

```js
const producer = await CoreStack.producer(topic, [options])
```

* `topic` (optional) : A string of kafka topic to produce message.
* `options` : see [kafka-node producer options](https://github.com/SOHU-Co/kafka-node#producerkafkaclient-options-custompartitioner)

```javascript
const tx = await producer.send(object)
```

##### Producer payload
* `chainId` : string|hex|number - the chain id to send the transaction - ex: '3'
* `to` : hex - address to send the transaction - ex: '0x8f371DAA8A5325f53b754A7017Ac3803382bc847'
* `protocol` : object:
  * `name`: string - name of the protocol (e.g. `pantheon`, `quorum`, etc.)
  * `tag`: string - version tag of the protocol
  * `extra`: object - extra information (optional)
* `value` : string|hex|number - value to transfer - ex: 10000
* `from` : hex - the public address that will sign the transaction - ex: '0xd71400daD07d70C976D6AAFC241aF1EA183a7236'
* `call` : object:
    * `contract`: string or object:
        * `string`: Name of the contract stored in the Contract registry - ex: 'SimpleToken'
        * `object`:
            * `name`: string - Name of the contract stored in the ABI registry - ex: 'SimpleToken'
            * `tag`: string - tag version to query in the ABI registry - ex: 'v0.2.0'
            * `abi`: object/json - Abi in json format to call - ex: '[{
                constant: false,
                inputs: [
                    {name: 'partition', type: 'bytes32'},
                    {name: 'operator',type: 'address'}
                ],
                name: 'authorizeOperatorByPartition',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function'
            }]'
            * `bytecode`: string(hex) - contract bytecode - ex: '0x608060405234801561001057600080fd5b5061160a806100206000396000f3006080604052600436106100955763ffffffff60e060020a60003504166316d390bf811461009a5780633c8ac88e146100c357806353faa9a91461015157806373b40a5c14610178578063781f5a83146101e7578063898d5a5b1461020e578063995fac'
    * `method`: string or object:
        * `string`: Signature of the method referenced in the ABI registry - ex: 'transfer(address,uint256)' or 'constructor()'
        * `object`:
            * `signature`: string - Signature of the method referenced in the ABI registry - ex: 'transfer(address,uint256)' or 'constructor()'. Please note that the number of arguments should match with 'call.args'
            * `abi`: object/json - Method ABI in json format to call - ex: '{
                constant: false,
                inputs: [
                    {name: 'partition', type: 'bytes32'},
                    {name: 'operator',type: 'address'}
                ],
                name: 'authorizeOperatorByPartition',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function'
            }'
    * `args`: array[string|hex|number|bool|array] - list of arguments to call the method - ex: '['arg1', 'arg2', 'arg3']'
      * Possible args:
        * bool: true|false
        * uint/int: string number|hex|number
        * address: hex
        * bytes: hex
        * string: string
        * array: array[bool|uint/int|address|bytes]
* `privateFrom` : string - when sending a private transaction, the sending party's base64-encoded public key to use. If not present and passing private_for, use the default key as configured in Quorum TransactionManager - ex: 'ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc='
* `privateFor` : array[string] - when sending a private transaction, an array of the recipients' base64-encoded public keys - ex: '['ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc']='
* `metadata` : string or object:
    * `string`: ID to attach in CoreStack - ex: 'a78b0e65-2ae5-48c3-97d0-0c3a2bbe8110'
    * `object`:
        * `id`: string - ID to attach in CoreStack - ex: 'a78b0e65-2ae5-48c3-97d0-0c3a2bbe8110'
        * `extra`: object - extra metadata to attach in the kafka message - ex: '{
                extra1: 'testExtra1',
                extra2: 'testExtra2'
            }'

##### Returns
* `offset` : number: offset of the message sent
* `id` : string: the metadata id created by CoreStack is not declared in the message
```javascript
{ offset: 9, id: '5b479d04-8dcc-498d-af51-c3e456a070f4' }
```

#### Consumer

##### Initilization

```javascript
const consumer = await CoreStack.consumer(topic, [options])
```

* `topic` : string - topic name to consume message.
* `options` : object - see [kafka-node consumer options](https://github.com/SOHU-Co/kafka-node#consumer)

```javascript
const consume = consumer.consume()

consume.on('message', message => {
    console.log('Message consumed: ', message)
})
```

##### Message consumed
The message consume CoreStack `Trace` corresponding to one transaction with the following fields:

* `topic`: Topic name of the message
* `value`: Envelope containing the data related to the transaction and its receipt:
  * `chain`: object
  * `protocol`: object
  * `from`: string
  * `args`: object
  * `tx`: object
  * `receipt`: object:
      * `txHash`
      * `blockHash`
      * `blockNumber`
      * `contractAddress`
      * `bloom`
      * `status`
      * `postState`
      * `logsList`: arrary[object]:
          * `address`
          * `topicsList`
          * `data`
          * `event`: string - ABI of the event - ex: 'TransferWithData(address,address,address,uint256,bytes,bytes)'
          * `decodedDataMap`: object - data decoded - ex: '{
                          data: '0x000000000000000000000000000000000000000000000000000000006f0c7f50cd4b7e4466b726279b1506bc89d8e74ab9268a255eeb1c78f163d51a83c7380d54a8b597ee26351c15c83f922fd6b37334970d3f832e5e11e36acbecb460ffdb01',
                          from: '0xd71400daD07d70C976D6AAFC241aF1EA183a7236',
                          operator: '0xd71400daD07d70C976D6AAFC241aF1EA183a7236',
                          operatorData: '0x',
                          to: '0xb5747835141b46f7C472393B31F8F5A57F74A44f',
                          value: '3',
                      }'
          * `blockNumber`
          * `txHash`
          * `txIndex`
          * `blockHash`
          * `index`
          * `removed`
      * `gasUsed`
      * `cumulativeGasUsed`
  * `errors`: object
  * `metadata`: object:
      * `id`: string - ID to attach in CoreStack - ex: 'a78b0e65-2ae5-48c3-97d0-0c3a2bbe8110'
      * `extra`: object - extra metadata to attach in the kafka message - ex: '{
              extra1: 'testExtra1',
              extra2: 'testExtra2'
          }'
* `offset`: Message offset in the topic
* `partition`: Partition of the message
* `key`: Partition key of the message



## Technical Architecture

![alt CoreStack-architecture](https://gitlab.com/ConsenSys/client/fr/core-stack/doc/blob/master/diagrams/Core_Stack_Architecture.png)
