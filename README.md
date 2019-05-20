# NodeJs SDK

Core-Stack is a blockchain **Transaction Orchestration** system that can operate multiple chains simultaneously.
It provides production grade and agnostic mechanisms for transaction crafting, nonce management, transaction signing, transaction receipt listening, transaction receipt decoding, faucet and more.

Core-Stack is a **microservices architecture** composed of APIs & Workers. 
Workers communicate following **publish-subscribe** pattern using *Apache Kafka* as message broker. 
All messages are standardized using **protobuf** and **GRPC**.

Core-Stack is Plug & Play, a user only needs to send a business protobuf message to Core-Stack input topic,
Core-Stack then manages the full lifecycle of the transaction from crafting the transaction to decoding event logs data.

## Goal

NodeJs SDK is able to

- **Send transaction via core-stack**  
- **Retrieve mined transactions in a decoded format from core-stack**

## Quick-Start

To quickly start implement core-stack

1. Install
```js
$ npm install core-stack-sdk --save
```

2. Import and initialize SDK

```js
import CoreStackSDK from 'core-stack-sdk'
const CoreStack = new CoreStackSDK('localhost:9092')
```

3.1. Init producer to a specific topic

```js
try {
    const producer = await CoreStack.producer('topic-tx-crafter')
    const tx = await producer.send({
        chainId: '3', //required
        to: '0x8f371DAA8A5325f53b754A7017Ac3803382bc847', // required
        call: {
            contract: 'ERC1400',
            method: 'setDocument(bytes32,string,bytes32)',
            args: ["0xabcd", "0xabcd", "0xabcd"],
        }, // required
        from: '0xd71400daD07d70C976D6AAFC241aF1EA183a7236' // required
    })
    console.log('Message sent: ', tx)
    // Message sent:  { offset: 9, id: '5b479d04-8dcc-498d-af51-c3e456a070f4' }
} catch(e) {
    console.error(e)
}
```

3.1. Init consumer to a specific topic

```js
try {
    const consumer = await CoreStack.consumer('topic-tx-decoded')
    console.log('... consumer ready')

    const consume = consumer.consume()

    consume.on('message', message => {
        console.log('Message consumed: ', message)
//         Message consumed:  { 
//     chain: { id: '3', iseip155: false }, 
//     ...
//     receipt: { 
//         txHash: '0xbf0b3048242aff8287d1dd9de0d2d100cee25d4ea45b8afa28bdfc1e2a775afd',
//         blockHash: '0x',
//         blockNumber: 0,
//         txIndex: 0,
//         contractAddress: '0x75d2917bD1E6C7c94d24dFd11C8EeAeFd3003C85',
//         postState: 'OxmL/V0pByha8AnproSg7NY2dxENidfgMCUay4f2SH4=',
//         status: 0,
//         bloom: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGgVWkNnbgAAA==',
//         logsList: [{data: '0x000000000000000000000000000000000000000000000000000000006f0c7f50cd4b7e4466b726279b1506bc89d8e74ab9268a255eeb1c78f163d51a83c7380d54a8b597ee26351c15c83f922fd6b37334970d3f832e5e11e36acbecb460ffdb01',from: '0xd71400daD07d70C976D6AAFC241aF1EA183a7236',operator: '0xd71400daD07d70C976D6AAFC241aF1EA183a7236',operatorData: '0x',to: '0xb5747835141b46f7C472393B31F8F5A57F74A44f',value: '3',}],
//         gasUsed: 10000,
//         cumulativeGasUsed: 10000
//     }
//     errorsList: [],
//     metadata: { id: '4702bf52-6fb9-41d5-934b-cc234c1d2207', extraMap: [] } }
// },
    });
    
    consume.on('error', error => {
        console.error(error);
    });
    
    consume.on('offsetOutOfRange', error => {
        console.error(error);
    });
} catch(e) {
    console.error(e)
}
```

## High Level Architecture

In charge of interacting with core-stack this SDK will:
* marshal message in protobuf format and send it to a kafka queue
* listening a kafka queue of decoded transactions, and unmarshall messages 

## API

### Core-Stack client

```javascript
const CoreStack = new CoreStackSDK(host, [options])
```

* `host` : A string of kafka broker/host combination delimited by comma.
* `options` : see [kafka-node options](https://github.com/SOHU-Co/kafka-node#options)

### Producer

### Initilization

```javascript
const producer = await CoreStack.producer(topic, [options])
```

* `host` : A string of kafka topic to produce message.
* `options` : see [kafka-node producer options](https://github.com/SOHU-Co/kafka-node#producerkafkaclient-options-custompartitioner)

### Send message

```javascript
const tx = await producer.send(object)
```
#### The object payload could have the following fields:
* `chainId` : string/number or object:
    * `string/number`: the chain id to send the transaction
    * `object`:
        * `id`: string/number - the chain id to send the transaction - ex: '3'
        * `iseip155`: bool - Indicate if chain implements EIP155 - ex: true
* `to` : string - address to send the transaction - ex: '0x8f371DAA8A5325f53b754A7017Ac3803382bc847'
* `value` : string/number - value to transfer - ex: 10000
* `from` : string or object:
    * `string`: the public address that will sign the transaction - ex: '0xd71400daD07d70C976D6AAFC241aF1EA183a7236'
    * `object`:
        * `id`: string - identifier in the account registry of Core-stack - ex: 'myCompany'
        * `addr`: string - the public address that will sign the transaction - ex: '0xd71400daD07d70C976D6AAFC241aF1EA183a7236'
* `call` : object:
    * `contract`: string or object:
        * `string`: Name of the contract stored in the ABI registry - ex: 'ERC20'
        * `object`:
            * `name`: string - Name of the contract stored in the ABI registry - ex: 'ERC20'
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
        * `string`: Name of the method referenced in the ABI registry - ex: 'transfer(address,uint256)' or 'constructor()'
        * `object`:
            * `signature`: string - Signature of the method referenced in the ABI registry - ex: 'transfer(address,uint256)' or 'constructor()'
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
    * `args`: array[string] - list of arguments to call the method - ex: '['arg1', 'arg2', 'arg3']'
* `privateFrom` : string - when sending a private transaction, the sending party's base64-encoded public key to use. If not present and passing private_for, use the default key as configured in Quorum TransactionManager - ex: 'ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc='
* `privateFor` : array[string] - when sending a private transaction, an array of the recipients' base64-encoded public keys - ex: '['ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc']='
* `metadata` : string or object:
    * `string`: ID to attach in core-stack - ex: 'a78b0e65-2ae5-48c3-97d0-0c3a2bbe8110'
    * `object`:
        * `id`: string - ID to attach in core-stack - ex: 'a78b0e65-2ae5-48c3-97d0-0c3a2bbe8110'
        * `extra`: object - extra metadata to attach in the kafka message - ex: '{
                extra1: 'testExtra1',
                extra2: 'testExtra2'
            }'

#### Returns:
* `offset` : number: the offset of the message sent the topic
* `id` : string: the metadata id created by core-stack is not declared in the message
```javascript
{ offset: 9, id: '5b479d04-8dcc-498d-af51-c3e456a070f4' }
```

### Consumer

### Initilization

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

### Message consumed
The message consume core-stack `Trace` corresponding to one transaction with the following fields:

* `chainId`: object
* `sender`: object
* `receiver`: object
* `call`: object
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
    * `id`: string - ID to attach in core-stack - ex: 'a78b0e65-2ae5-48c3-97d0-0c3a2bbe8110'
    * `extra`: object - extra metadata to attach in the kafka message - ex: '{
            extra1: 'testExtra1',
            extra2: 'testExtra2'
        }'



## Technical Architecture

![alt core-stack-architecture](https://gitlab.com/ConsenSys/client/fr/core-stack/doc/blob/master/diagrams/Core_Stack_Architecture.png)
