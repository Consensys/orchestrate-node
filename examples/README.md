# Orchestrate Node SDK examples

Orchestrate Node SDK provides the following TypeScript examples:

## Requirements

**Pegasys Orchestrate SDK requires Orchestrate to be installed.**

Orchestrate is only available for PegaSys Orchestrate customers and partners.

[Contact PegaSys](https://pegasys.tech/contact/) if you want to purchase [Orchestrate](https://pegasys.tech/orchestrate/)
or are interested in our partner program.

If you are already a partner or customer but we did not provide the credentials to install Orchestrate,
request access on [Pegasys Zendesk support site](http://pegasys.zendesk.com/).

To access [Pegasys Zendesk support site](http://pegasys.zendesk.com/), create an account with your
company email or login using an existing Pegasys Zendesk account.

Alternatively, send an email from your company email to
[support@pegasys.tech](mailto:support@pegasys.tech?subject=Orchestrate+Node+SDK).

**You cannot continue without the registry credentials.**

In order to try the examples, you need:

- [Node.js version >=10 and NPM](https://nodejs.org/en/) installed.
- Orchestrate installed and running.
- Hyperledger Besu installed and running for Besu examples.
- J.P. Morgan Quorum installed and running for Quorum examples.

## Get example code

Get the examples by cloning the [SDK repository](https://github.com/PegaSysEng/orchestrate-node)

```bash
git clone https://github.com/PegaSysEng/orchestrate-node.git
```

## Install dependencies

Open a terminal and run `npm install` from the SDK repository root directory.

## Run examples

Run the following examples in the order displayed in this page:

1. Prepare Orchestrate environment
2. Consume transactions
3. Deploy new smart contract
4. Send raw transactions
5. Send contract transactions (to the deployed smart contract)
6. Send one time key transactions
7. Send private transactions (deploy a new private contract)
8. Transfer value (ETH transfer)
9. Search for sent transactions and get their status

### Prepare environment

- **generate-account**: generate four new Ethereum accounts in Orchestrate.

  Run `npm run example:generate-account`.

- **register-contract**: register the simple ERC20 token smart contract in Orchestrate contract registry.

  Run `npm run example:register-contract`.

- **register-chain**: register new chain "MyChain" with RPC endpoint located at 'http://geth:8545'.

  Run `npm run example:register-chain`.

- **register-faucet**: register new faucet account setting creditor account, limits and other rules.

  Run `npm run example:register-faucet`.

### Consume transactions

- **consume**: Start listener for Orchestrate kafka channels to pull transaction events and display the transaction receipt.

  Run `npm run example:consume`.

  Keep it running to visualise the following transaction examples receipts.

### Send transactions

- **deploy-contract**: send a deploy contract transaction to deploy the pre-registered ERC20 smart contract

  Run `npm run example:deploy-contract`.

- **send-raw-tx**: send raw transaction to transfer 1 ETH from an account to another.

  Run `npm run example:send-raw-tx`.

- **send-tx**: send a transaction to publish a simple ERC20 token smart contract.

  Run `npm run example:send-tx`.

- **send-onetimekey-tx**: use a disposable anonymous account to publish a simple ERC20 token smart contract.

  Run `npm run example:send-onetimekey-tx`.

- **send-private-tx**: send an Orion private transaction to publish a simple ERC20 token smart contract.

  Run `npm run example:send-private-tx`.

* **send-transfer**: transfer ETH to other accounts

  Run `npm run example:send-transfer`.

### Search transactions

- **search**: fetch your completed or pending transactions using their ids or idempotency_keys

  Run `npm run example:search`.
