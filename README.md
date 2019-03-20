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
            method: 'setDocument',
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
//     chain: { id: '0x3', iseip155: false }, 
//     sender: { id: '', addr: '0xd71400daD07d70C976D6AAFC241aF1EA183a7236' }, 
//     receiver: undefined,  
//     call:   { 
//         contract: { name: 'ERC1400', tag: '', abi: '', bytecode: '' },
//         method: {  name: 'setDocument', abi: '' }, 
//         argsList: ['0xabcd', '0xabcd', '0xabcd'] 
//     }, 
//     tx: {
//         txData: { 
//             nonce: 0,
//             to: '0x8f371DAA8A5325f53b754A7017Ac3803382bc847',
//             value: '',
//             gas: 66201,
//             gasPrice: '0x3b9aca00',
//             data: '0x010648ca000000000000000000000000000000000000000000000000000000000000abcd0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000abcd00000000000000000000000000000000000000000000000000000000000000063078616263640000000000000000000000000000000000000000000000000000' 
//         }, 
//         raw: '', 
//         hash: '' 
//     }, 
//     receipt: { 
//         txHash: '0xbf0b3048242aff8287d1dd9de0d2d100cee25d4ea45b8afa28bdfc1e2a775afd',
//         blockHash: '0x',
//         blockNumber: 0,
//         txIndex: 0,
//         contractAddress: '0x75d2917bD1E6C7c94d24dFd11C8EeAeFd3003C85',
//         postState: 'OxmL/V0pByha8AnproSg7NY2dxENidfgMCUay4f2SH4=',
//         status: 0,
//         bloom: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGgVWkNnbgAAA==',
//         logsList: [[Object]],
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

TODO

## API

TODO

## Technical Architecture

![alt core-stack-architecture](https://gitlab.com/ConsenSys/client/fr/core-stack/doc/blob/master/diagrams/Core_Stack_Architecture.png)
