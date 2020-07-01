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

1. Prepare for transactions examples
1. Await for transactions examples
1. Create and send smart contract transactions examples
1. Create and send value transaction example

### Prepare environment

- **generate-account**: generate four new Ethereum accounts in Orchestrate.

  Run `npm run example:generate-account`.

- **register-contract**: register the simple ERC20 token smart contract in Orchestrate contract registry.

  Run `npm run example:register-contract`.

- **register-chain**: register new chain "MyChain" with RPC endpoint located at 'http://geth:8545'.

  Run `npm run example:register-chain`.

- **register-faucet**: register new faucet account setting creditor account, limits and other rules.

  Run `npm run example:register-faucet`.

### Consume transaction responses

- **consume**: Start listener for Orchestrate kafka channels to pull transaction events and display the transaction receipt.

  Run `npm run example:consume`.

  Keep it running to visualise the following transaction examples receipts.

### Besu transactions examples

- **send-raw-tx**: send raw transaction to transfer 1 ETH from an account to another.

  Run `npm run example:send-raw-tx`.

- **send-tx**: send a transaction to publish a simple ERC20 token smart contract.

  Run `npm run example:send-tx`.

- **send-onetimekey-tx**: use a disposable anonymous account to publish a simple ERC20 token smart contract.

  Run `npm run example:send-onetimekey-tx`.

### Quorum private transactions examples

- **send-private-tx**: send a Quorum private transaction to publish a simple ERC20 token smart contract.

  Run `npm run example:send-private-tx`.
