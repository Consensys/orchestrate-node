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
} catch(e) {
    console.error(e)
}
```

3.1. Init consumer to a specific topic

```js
try {
    const consumer = await CoreStack.consumer('topic-tx-nonce')
    console.log('... consumer ready')

    const consume = consumer.consume()

    consume.on('message', message => {
        console.log('Message consumed: ', message);
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

## Technical Architecture

![alt core-stack-architecture](https://gitlab.com/ConsenSys/client/fr/core-stack/doc/blob/master/diagrams/Core_Stack_Architecture.png)
