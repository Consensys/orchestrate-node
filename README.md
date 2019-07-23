# CoreStack NodeJs & Typescript SDK

<!-- TOC -->

- [CoreStack NodeJs & Typescript SDK](#corestack-nodejs--typescript-sdk)
    - [Goal](#goal)
    - [Quick-Start](#quick-start)
    - [Generate wallets stored in a vault](#generate-wallets-stored-in-a-vault)
    - [High Level Architecture](#high-level-architecture)
    - [API](#api)
        - [CoreStack client](#corestack-client)
        - [Broker](#broker)
            - [Producer](#producer)
                - [Initilization](#initilization)
                - [Send a CoreStack request](#send-a-corestack-request)
                - [Returns](#returns)
            - [Consumer](#consumer)
                - [Initilization](#initilization-1)
                - [Consume CoreStack responses](#consume-corestack-responses)
                - [Message consumed](#message-consumed)
            - [Payloads](#payloads)
                - [Producer payload](#producer-payload)
                - [Consumer payload](#consumer-payload)
                - [Call subfield (CoreStack request)](#call-subfield-corestack-request)
                - [Contract subfield (CoreStack request)](#contract-subfield-corestack-request)
                - [CoreStack response subfield](#corestack-response-subfield)
                - [Receipt subfield (CoreStack response)](#receipt-subfield-corestack-response)
                - [Log subfield (CoreStack response)](#log-subfield-corestack-response)
                - [Args subfield (CoreStack response)](#args-subfield-corestack-response)
                - [Call subfield (CoreStack response)](#call-subfield-corestack-response)
                - [Private subfield (CoreStack response)](#private-subfield-corestack-response)
                - [Tx subfield (CoreStack response)](#tx-subfield-corestack-response)
                - [TxData subfield (CoreStack response)](#txdata-subfield-corestack-response)
                - [Protocol subfield (Common)](#protocol-subfield-common)
                - [Method subfield (Common)](#method-subfield-common)
                - [Metadata subfield (Common)](#metadata-subfield-common)
    - [Technical Architecture](#technical-architecture)

<!-- /TOC -->

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

2. Import and initialize the broker

```js
import CoreStackSDK from 'core-stack-sdk'
const CoreStack = new CoreStackSDK()
// Initialize a "broker" with a kafka endpoint
const broker = CoreStack.broker('localhost:9092')
```

2.1 Init producer and send a CoreStack transaction request

```js
try {
    // Create a producer that will send a transaction to CoreStack (by default, the message is sent to the topic "topic-tx-crafter", see section Broker.Producer below for further options).
    const producer = await broker.producer()
    // Send a CoreStack transaction request, see section Producer payload below for more details.
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

2.2. Init consumer to a specific topic

```js
try {
    // Create a consumer to listen CoreStack topics (by default, the broker is consumming "topic-tx-decoded", see section Broker.Consumer below for more details).
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
        const walletGenerator = await broker.walletGenerator()

        // Generate multiple wallets asynchronously and get addresses
        const wallets = await Promise.all([
            walletGenerator.generate(),
            walletGenerator.generate(),
            walletGenerator.generate(),
            walletGenerator.generate(),
            walletGenerator.generate(),
            walletGenerator.generate(),
            walletGenerator.generate()
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
* `options` (optional): see [kafka-node options](https://github.com/SOHU-Co/kafka-node#options)

#### Producer

##### Initilization

```js
const producer = await broker.producer(topic, [options])
```

* `topic` string (optional - default=topic-tx-crafter): kafka topic where to produce message.
* `options` pbject (optional): see [kafka-node producer options](https://github.com/SOHU-Co/kafka-node#producerkafkaclient-options-custompartitioner)

##### Send a CoreStack request
```js
const producerPayload = {
	chainId: '888',
	to: '0xc7b043d83553ffaa8a3a09e67e8d8d8333a66880',
	call: {
		method: 'transfer(address,uint256)',
		args: ['0xdbb881a51cd4023e4400cef3ef73046743f08da3', '100000']
	},
	gas: 2000000,
	from: '0x7e654d251da770a068413677967f6d3ea2fea9e4'
}
const tx = await producer.send(producerPayload)
```
See [producer payload](#producer-payload) for more details.

##### Returns
* `offset` : number: offset of the message sent
* `id` : string: the metadata id created by CoreStack is not declared in the message
```javascript
{ offset: 9, id: '5b479d04-8dcc-498d-af51-c3e456a070f4' }
```

#### Consumer

##### Initilization

```javascript
const consumer = await broker.consumer(topics, [options])
```

* `topics` : array[string] (optional - default=[topic-tx-decoded]) - list of topics name to consume message.
* `options` : object - see [kafka-node consumer options](https://github.com/SOHU-Co/kafka-node#consumer)

##### Consume CoreStack responses
```js
const consume = consumer.consume()

consume.on('message', message => {
    console.log('Message consumed: ', message)
})
```

##### Message consumed
The message consumes CoreStack `Envelope` corresponding to one transaction with [consumer payload](#consumer-payload) fields.

#### Payloads

##### Producer payload

<table width="100%">
	<tr>
		<th width="10%">Field</th>
		<th width="10%">Type</th>
		<th width="50%">Description</th>
		<th width="30%">Example</th>
 	</tr>
 	<tr>
  		<td>chainId</td>
   		<td>string(number)</td>
		<td>the chain id to send the transaction</td>
		<td>'3', '42'</td>
 	</tr>
 	<tr>
  		<td>to</td>
   		<td>string(hex)</td>
		<td>address of the recipient of the transaction</td>
		<td>'0x8f371DAA8A5325f53b754A7017Ac3803382bc847'</td>
 	</tr>
 	<tr>
  		<td>value</td>
   		<td>string(number)|hex</td>
		<td>value to transfer</td>
		<td>'10000'</td>
 	</tr>
 	<tr>
  		<td>from</td>
   		<td>string(hex)</td>
		<td>public address that will sign the transaction</td>
		<td>'0xd71400daD07d70C976D6AAFC241aF1EA183a7236'</td>
 	</tr>
 	<tr>
  		<td>protocol</td>
   		<td><a href="#protocol-subfield-common">protocol object</a></td>
		<td>add details on the transaction protocol</td>
		<td>{ name: 'quorum', tag: 'v2.2.2' }</td>
 	</tr>
 	<tr>
  		<td>privateFrom</td>
   		<td>string(base64)</td>
		<td>when sending a private transaction, the sending party's base64-encoded public key to use. If not present and passing private_for, use the default key as configured in Quorum TransactionManager</td>
		<td>'ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc='</td>
 	</tr>
 	<tr>
  		<td>privateFor</td>
   		<td>array[string]</td>
		<td>when sending a private transaction, an array of the recipients' base64-encoded public keys </td>
		<td>'['ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc=']'</td>
 	</tr>
    <tr>
        <td>call</td>
        <td><a href="#call-subfield-corestack-response">call object</a></td>
		<td>field to detail the transaction method to call</td>
		<td>{contract: 'SimpleToken', method: 'transfer(address,uint256), args: ['0xd71400daD07d70C976D6AAFC241aF1EA183a7236', 100000]}</td>
    </tr>
    <tr>
        <td>metadata</td>
        <td>string | <a href="#metadata-subfield-common">metadata object</a></td>
		<td>name of the contract to deploy (only used for constructor(...) method)</td>
		<td>'d4fc5002-5ba2-43e3-8591-5f46fcb4412f', {id: 'd4fc5002-5ba2-43e3-8591-5f46fcb4412f', extra: {test: 'testId'}}</td>
 	</tr>
</table>


##### Consumer payload

<table width="100%">
	<tr>
		<th width="10%">Field</th>
		<th width="10%">Type</th>
		<th width="50%">Description</th>
		<th width="30%">Example</th>
 	</tr>
 	<tr>
  		<td>topic</td>
   		<td>string</td>
		<td>Name of the topic of the message consumed</td>
		<td>'topic-tx-decoded'</td>
 	</tr>
 	<tr>
  		<td>value</td>
   		<td><a href="#corestack-response-subfield">corestack response object</a></td>
		<td>response of the CoreStack request</td>
		<td>{ chain: { id: '888' },
     protocol: undefined,
     from: '0x7e654d251da770a068413677967f6d3ea2fea9e4',
     tx:
      { txData: [Object],
        raw:
         '0xf90c6609843b9 ... 26a70348d8af78c',
        hash:
         '0x7d2964f091440e202c67ff7853bbf2e1c73de7886698caa6b1b965348d34f055' },
     receipt:
      { txHash:
         '0x7d2964f091440e202c67ff7853bbf2e1c73de7886698caa6b1b965348d34f055',
        blockHash:
         '0x9cd956c7209a0f768dcb902671273fa5f43cf4233316ee4d673acbbcb7546e92',
        blockNumber: 7223,
        txIndex: 0,
        contractAddress: '0x07b847b7cf6f76176cac224a1d1ddc417ef3888b',
        postState: '',
        status: 1,
        bloom:
         '0x000000000 ... 00000000000',
        logsList: [Array],
        gasUsed: 815261,
        cumulativeGasUsed: 815261 },
     errorsList: [],
     args: { call: [Object], pb_private: undefined },
     metadata: { id: '8c668fc5-7984-4439-816f-f396cd377bb9', extraMap: {} } }</td>
 	</tr>
 	<tr>
  		<td>offset</td>
   		<td>number</td>
		<td>Message offset in the topic</td>
		<td>10</td>
 	</tr>
 	<tr>
  		<td>partition</td>
   		<td>number</td>
		<td>Partition of the message</td>
		<td>0</td>
 	</tr>
 	<tr>
  		<td>key</td>
   		<td>buffer</td>
		<td>partition key of the message</td>
		<td></td>
 	</tr>
</table>

##### Call subfield (CoreStack request)

<table width="100%">
	<tr>
		<th width="10%">Field</th>
		<th width="10%">Type</th>
		<th width="50%">Description</th>
		<th width="30%">Example</th>
 	</tr>
 	<tr>
  		<td>contract</td>
   		<td>string | <a href="#contract-subfield-corestack-request">contract object</a></td>
		<td>name of the contract to deploy (only used for constructor(...) method)</td>
		<td>'SimpleToken', {name: 'SimpleToken', tag:'v0.2.0'}</td>
 	</tr>
    <tr>
        <td>method</td>
        <td>string | <a href="#method-subfield-common">method object</a></td>
		<td>name of the contract to deploy (only used for constructor(...) method)</td>
		<td>'transfer(address,uint256)' <br/> {signature:'constructor()'}</td>
    </tr>
 	<tr>
  		<td>args</td>
   		<td>(string|number|bool|array)[]</td>
		<td>list of arguments to call the method <br/> <b>Possible args:</b> <br/> bool: true|false <br/> uint/int: string(number|hex)|number <br/> address: string(hex) <br/> bytes: string(hex) <br/> string: string <br/> array: array[bool|uint/int|address|bytes] </td>
		<td>['arg1', true, 200]</td>
 	</tr>
</table>

##### Contract subfield (CoreStack request)

<table width="100%">
	<tr>
		<th width="10%">Field</th>
		<th width="10%">Type</th>
		<th width="50%">Description</th>
		<th width="30%">Example</th>
 	</tr>
 	<tr>
  		<td>name</td>
   		<td>string</td>
		<td>Name of the contract stored in the ABI registry</td>
		<td>'SimpleToken'</td>
 	</tr>
 	<tr>
  		<td>tag</td>
   		<td>string</td>
		<td>Tag version to query in the contract registry</td>
		<td>'v0.2.0'</td>
 	</tr>
 	<tr>
  		<td>abi</td>
   		<td>object/json</td>
		<td>ABI in json format to call</td>
		<td>'[{
            constant:false,
            inputs:[{name:'recipient',type:'address'},{name:'amount',type:'uint256'}],
            name:'transfer',
            outputs:[ {name:'',type:'bool'} ]
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function'
        }]'</td>
 	</tr>
 	<tr>
  		<td>bytecode</td>
   		<td>string(hex)</td>
		<td>Contract bytecode</td>
		<td>'0x608060405234 .... e578063995fac'</td>
 	</tr>
</table>

##### CoreStack response subfield 

<table width="100%">
	<tr>
		<th width="10%">Field</th>
		<th width="10%">Type</th>
		<th width="50%">Description</th>
		<th width="30%">Example</th>
 	</tr>
 	<tr>
  		<td>chain</td>
   		<td>object</td>
		<td>ChainId of the CoreStack request</td>
		<td>{ id: '888' }</td>
 	</tr>
 	<tr>
  		<td>protocol</td>
   		<td><a href="#protocol-subfield-common">protocol object</a></td>
		<td>Protocol to be used in the CoreStack request</td>
		<td>{ name: 'quorum', tag: 'v2.2.2', extraMap: {} }</td>
 	</tr>
 	<tr>
  		<td>from</td>
   		<td>string</td>
		<td>Address supposed to sign the CoreStack request</td>
		<td>'0x7e654d251da770a068413677967f6d3ea2fea9e4'</td>
 	</tr>
 	<tr>
  		<td>tx</td>
   		<td><a href="#tx-subfield-corestack-response">tx object</a></td>
		<td>Transaction detail to be executed</td>
		<td>{ txData: [Object],
        raw:
         '0xf90c6609843b9 ... 26a70348d8af78c',
        hash:
         '0x7d2964f091440e202c67ff7853bbf2e1c73de7886698caa6b1b965348d34f055' }</td>
 	</tr>
 	<tr>
  		<td>receipt</td>
   		<td><a href="#receipt-subfield-corestack-response">receipt object</a></td>
		<td>Receipt of the transaction</td>
		<td>{ txHash:
         '0xf37291705cd42b6d2a49579a4b6f639eded6964f1c2c41fad920170c22c49534',
        blockHash:
         '0x2311426739570437d12b0d266ac6efc06e231f4bbda2f7b635e3b4918ff16be6',
        blockNumber: 12220907,
        txIndex: 0,
        contractAddress: '0x0000000000000000000000000000000000000000',
        postState: '',
        status: 1,
        bloom:
         '0x00000 ... 000000',
        logsList: [],
        gasUsed: 114252,
        cumulativeGasUsed: 114252 }</td>
 	</tr>
 	<tr>
  		<td>errorsList</td>
   		<td>array</td>
		<td>list of errors from CoreStack when processing this CoreStack request</td>
		<td>[ { message:
     'rpc error: code = Internal desc = Could not load by TxHash pg: no rows in result set chain_id:"42" tx_hash:"0xf37291705cd42b6d2a49579a4b6f639eded6964f1c2c41fad920170c22c49534" ',
    code: 0,
    extraMap: [] } ]</td>
 	</tr>
 	<tr>
  		<td>args</td>
   		<td><a href="#args-subfield-corestack-response">args object</a></td>
		<td>arguments of the transaction (including private args if needed)</td>
		<td>{ call: {contract: [Object], method: [Object], args: []}, pb_private: undefined }</td>
 	</tr>
 	<tr>
  		<td>metadata</td>
   		<td><a href="#metadata-subfield-common">metadata object</a></td>
		<td>Metadata included in the CoreStack request</td>
		<td>{ id: '8c668fc5-7984-4439-816f-f396cd377bb9', extraMap: {} }</td>
 	</tr>
</table>

##### Receipt subfield (CoreStack response)

<table width="100%">
	<tr>
		<th width="10%">Field</th>
		<th width="10%">Type</th>
		<th width="50%">Description</th>
		<th width="30%">Example</th>
 	</tr>
 	<tr>
  		<td>txHash</td>
   		<td>string</td>
		<td>hash this transaction</td>
		<td>'0xa6e9939bf85a119e38bba74a43b86fb2a6a00482c064954c6c4d6991399579c1'</td>
 	</tr>
 	<tr>
  		<td>blockHash</td>
   		<td>string</td>
		<td>hash of the block where this transaction was in</td>
		<td>'0x7bf0bd196dc53693c7d74c862e22179477c163d8f56da37313f5b3aae3aa8f59'</td>
 	</tr>
 	<tr>
  		<td>blockNumber</td>
   		<td>number</td>
		<td>block number where this transaction was in</td>
		<td>683</td>
 	</tr>
 	<tr>
  		<td>txIndex</td>
   		<td>number</td>
		<td>index of this transaction inside the block</td>
		<td>0</td>
 	</tr>
 	<tr>
  		<td>contractAddress</td>
   		<td>string(hex)</td>
		<td>the contract address created, if the transaction was a contract creation, otherwise null</td>
		<td>'0xe5ce65038f9d1c841a33cc816ee674f8a0e31e74'</td>
 	</tr>
 	<tr>
  		<td>bloom</td>
   		<td>string(hex)</td>
		<td>the bloom filter for the logs of the block</td>
		<td>'0x000200000 ... 0000000000'</td>
 	</tr>
 	<tr>
  		<td>status</td>
   		<td>number</td>
		<td>0 indicates transaction failure , 1 indicates transaction succeeded</td>
		<td>1 or 0</td>
 	</tr>
 	<tr>
  		<td>postState</td>
   		<td>string</td>
		<td>NA</td>
		<td>NA</td>
 	</tr>
 	<tr>
  		<td>logsList</td>
   		<td><a href="#log-subfield-corestack-response">array[object]</a></td>
		<td>list of logs (aka. events) of the transaction</td>
		<td>[ { address: '0xe5ce65038f9d1c841a33cc816ee674f8a0e31e74',
       topicsList: [Array],
       data:
        '0x000000000 ... e0c9bab2400000',
       event: 'Approval(address,address,uint256)',
       decodedDataMap: [Object],
       blockNumber: 483,
       txHash:
        '0xa6e9939bf85a1 ... 6c4d6991399579c1',
       txIndex: 0,
       blockHash:
        '0x30d88cdd7511 ... 3f09cde23d681a6',
       index: 0,
       removed: false } ]</td>
 	</tr>
 	<tr>
  		<td>gasUsed</td>
   		<td>number</td>
		<td>the amount of gas used by this specific transaction alone</td>
		<td>815261</td>
 	</tr>
 	<tr>
  		<td>cumulativeGasUsed</td>
   		<td>number</td>
		<td>the total amount of gas used when this transaction was executed in the block</td>
		<td>815261</td>
 	</tr>
</table>

##### Log subfield (CoreStack response)

<table width="100%">
	<tr>
		<th width="10%">Field</th>
		<th width="10%">Type</th>
		<th width="50%">Description</th>
		<th width="30%">Example</th>
 	</tr>
 	<tr>
  		<td>address</td>
   		<td>string</td>
		<td>contract address</td>
		<td>'0xa6e9939bf85a119e38bba74a43b86fb2a6a00482c064954c6c4d6991399579c1'</td>
 	</tr>
 	<tr>
  		<td>topicsList</td>
   		<td>array[string(hex)]</td>
		<td>list of the event signature and hashes of event's indexed arguments</td>
		<td>'[ '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
       '0x0000000000000000000000000000000000000000000000000000000000000000',
       '0x0000000000000000000000007e654d251da770a068413677967f6d3ea2fea9e4' ]'</td>
 	</tr>
 	<tr>
  		<td>data</td>
   		<td>string</td>
		<td>data of the non-indexed arguments of the event</td>
		<td>'0x00000000000000000000000000000000000000000000021e19e0c9bab2400000'</td>
 	</tr>
 	<tr>
  		<td>event</td>
   		<td>string</td>
		<td>event signature</td>
		<td>'Approval(address,address,uint256)'</td>
 	</tr>
 	<tr>
  		<td>decodedDataMap</td>
   		<td>object</td>
		<td>decoded event with value as string format. Arrays should be parsed as JSON</td>
		<td>{ owner: '0x0000000000000000000000000000000000000000',
       spender: '0x7E654d251Da770A068413677967F6d3Ea2FeA9E4',
       value: '10000000000000000000000' }</td>
 	</tr>
 	<tr>
  		<td>blockNumber</td>
   		<td>number</td>
		<td>block number that includes this event</td>
		<td>50</td>
 	</tr>
 	<tr>
  		<td>txHash</td>
   		<td>number</td>
		<td>transaction hash that includes this event</td>
		<td>'0xa6e9939bf85a119e38bba74a43b86fb2a6a00482c064954c6c4d6991399579c1'</td>
 	</tr>
 	<tr>
  		<td>txIndex</td>
   		<td>number</td>
		<td>transaction index that includes this event</td>
		<td>0</td>
 	</tr>
 	<tr>
  		<td>blockHash</td>
   		<td>string(hex)</td>
		<td>block hash that includes this event</td>
		<td>'0xc448362abbebe286efdd6c64b4fbe2e289748159b9edfdb973f592fc4e6787ec'</td>
 	</tr>
 	<tr>
  		<td>index</td>
   		<td>number</td>
		<td>index of the event</td>
		<td>0</td>
 	</tr>
 	<tr>
  		<td>removed</td>
   		<td>bool</td>
		<td>true when the log was removed, due to a chain reorganization. false if its a valid log.</td>
		<td>true or false</td>
 	</tr>
</table>

##### Args subfield (CoreStack response)

<table width="100%">
	<tr>
		<th width="10%">Field</th>
		<th width="10%">Type</th>
		<th width="50%">Description</th>
		<th width="30%">Example</th>
 	</tr>
 	<tr>
  		<td>call</td>
   		<td>call object</td>
		<td>fields related to the transaction call (contract, method, arguments)</td>
		<td>{ contract:
   { id: { registry: '', name: 'SimpleToken', tag: '' },
     abi: '',
     bytecode: '',
     methodsList: [],
     eventsList: [],
     deployedbytecode: '' },
  method: { signature: 'constructor()', abi: '' },
  argsList: [] }</td>
 	</tr>
 	<tr>
  		<td>pb_private</td>
   		<td><a href="#private-subfield-corestack-response">private object</a></td>
		<td>fields related to privacy protocol</td>
		<td></td>
 	</tr>
</table>

##### Call subfield (CoreStack response)

<table width="100%">
	<tr>
		<th width="10%">Field</th>
		<th width="10%">Type</th>
		<th width="50%">Description</th>
		<th width="30%">Example</th>
 	</tr>
 	<tr>
  		<td>contract</td>
   		<td>object</td>
		<td>fields related to the contract for the CoreStack Request</td>
		<td>{ id: { registry: '', name: 'SimpleToken', tag: '' },
  abi: '',
  bytecode: '',
  methodsList: [],
  eventsList: [],
  deployedbytecode: '' }</td>
 	</tr>
 	<tr>
  		<td>method</td>
   		<td><a href="#method-subfield-common">method object</a></td>
		<td>fields related to the method called for the CoreStack Request</td>
		<td>{ signature: 'transfer(address,uint256)', abi: '' }</td>
 	</tr>
 	<tr>
  		<td>argsList</td>
   		<td>array</td>
		<td>inputs of method call</td>
		<td>[ '0xdbb881a51cd4023e4400cef3ef73046743f08da3', '0x186a0' ]</td>
 	</tr>
</table>

##### Private subfield (CoreStack response)

<table width="100%">
	<tr>
		<th width="10%">Field</th>
		<th width="10%">Type</th>
		<th width="50%">Description</th>
		<th width="30%">Example</th>
 	</tr>
 	<tr>
  		<td>privateFrom</td>
   		<td>string</td>
		<td>When sending a private transaction, the sending party's base64-encoded public key to use</td>
		<td>'ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc='</td>
 	</tr>
    <tr>
        <td>privateFor</td>
        <td>array[string]</td>
		<td>When sending a private transaction, an array of the recipients' base64-encoded public keys</td>
		<td>['ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc=']</td>
    </tr>
 	<tr>
  		<td>privateTxType</td>
   		<td>string</td>
		<td>For Quorum >=2.2.1 support</td>
		<td>NA</td>
 	</tr>
</table>

##### Tx subfield (CoreStack response)

<table width="100%">
	<tr>
		<th width="10%">Field</th>
		<th width="10%">Type</th>
		<th width="50%">Description</th>
		<th width="30%">Example</th>
 	</tr>
 	<tr>
  		<td>txData</td>
   		<td><a href="#txdata-subfield-corestack-response">txData object</a></td>
		<td>fields used to sign the transaction</td>
		<td>{ nonce: 4,
  to: '0xc7b043d83553ffaa8a3a09e67e8d8d8333a66880',
  value: undefined,
  gas: 2000000,
  gasPrice: '1000000000',
  data:
   '0xa9059cbb00000000 ... 0000000186a0' }</td>
 	</tr>
 	<tr>
  		<td>raw</td>
   		<td>string</td>
		<td>signed transaction</td>
		<td>'0xf8ab04843b9aca ... 6e7f832b3c96d49f8e2'</td>
 	</tr>
 	<tr>
  		<td>hash</td>
   		<td>array</td>
		<td>transaction hash stored in the CoreStack request</td>
		<td>'0x0a0cafa26ca3f411e6629e9e02c53f23713b0033d7a72e534136104b5447a210'</td>
 	</tr>
</table>

##### TxData subfield (CoreStack response)

<table width="100%">
	<tr>
		<th width="10%">Field</th>
		<th width="10%">Type</th>
		<th width="50%">Description</th>
		<th width="30%">Example</th>
 	</tr>
 	<tr>
  		<td>nonce</td>
   		<td>number</td>
		<td>nonce used for the transaction</td>
		<td>4</td>
 	</tr>
 	<tr>
  		<td>to</td>
   		<td>string(hex)</td>
		<td>account or smart contract address</td>
		<td>'0xc7b043d83553ffaa8a3a09e67e8d8d8333a66880'</td>
 	</tr>
 	<tr>
  		<td>value</td>
   		<td>string(number)</td>
		<td>value to transfer</td>
		<td>'20000'</td>
 	</tr>
	<tr>
  		<td>gas</td>
   		<td>number</td>
		<td>gas limit to be consumed for this transaction</td>
		<td>2000000</td>
 	</tr>
	<tr>
  		<td>gasPrice</td>
   		<td>string(number)</td>
		<td>gas price used or this transaction</td>
		<td>'2000000'</td>
 	</tr>
	<tr>
  		<td>data</td>
   		<td>string(hex)</td>
		<td>Hash of the method signature (4 bytes) followed by encoded parameters</td>
		<td>'0xa9059cbb00000000000 ... 0002386f26fc10000'</td>
 	</tr>
</table>

##### Protocol subfield (Common)

<table width="100%">
	<tr>
		<th width="10%">Field</th>
		<th width="10%">Type</th>
		<th width="50%">Description</th>
		<th width="30%">Example</th>
 	</tr>
 	<tr>
  		<td>name</td>
   		<td>string</td>
		<td>name of the protocol</td>
		<td>`pantheon`, `quorum`</td>
 	</tr>
    <tr>
        <td>tag</td>
        <td>string</td>
		<td>version tag of the protocol</td>
		<td>'v2.2.4'</td>
    </tr>
 	<tr>
  		<td>extra</td>
   		<td>object</td>
		<td>extra information</td>
		<td>{test: 'test'}</td>
 	</tr>
</table>

##### Method subfield (Common)

<table width="100%">
	<tr>
		<th width="10%">Field</th>
		<th width="10%">Type</th>
		<th width="50%">Description</th>
		<th width="30%">Example</th>
 	</tr>
 	<tr>
  		<td>signature</td>
   		<td>string</td>
		<td>Signature of the method referenced in the ABI registry</td>
		<td>'transfer(address,uint256)' <br/> 'constructor()'</td>
 	</tr>
 	<tr>
  		<td>abi</td>
   		<td>object/json</td>
		<td>Method ABI in json format to craft and call</td>
		<td>'{
            constant:false,
            inputs:[{name:'recipient',type:'address'},{name:'amount',type:'uint256'}],
            name:'transfer',
            outputs:[ {name:'',type:'bool'} ]
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function'
        }'</td>
 	</tr>
</table>

##### Metadata subfield (Common)

<table width="100%">
	<tr>
		<th width="10%">Field</th>
		<th width="10%">Type</th>
		<th width="50%">Description</th>
		<th width="30%">Example</th>
 	</tr>
 	<tr>
  		<td>id</td>
   		<td>string</td>
		<td>ID to attach in the CoreStack request</td>
		<td>'a78b0e65-2ae5-48c3-97d0-0c3a2bbe8110'</td>
 	</tr>
 	<tr>
  		<td>extra</td>
   		<td>object</td>
		<td>extra metadata to attach in the CoreStack request</td>
		<td>{extra1: 'testExtra1', extra2: 'testExtra2'}</td>
 	</tr>
</table>

## Technical Architecture

![alt CoreStack-architecture](https://gitlab.com/ConsenSys/client/fr/core-stack/doc/blob/master/diagrams/Core_Stack_Architecture.png)
