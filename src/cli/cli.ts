import { Command } from 'commander'

import {
  generateAccountsHandler,
  getCatalogHandler,
  getContractHandler,
  getTagsHandler,
  registerContractHandler
} from './handlers'

const program = new Command()

export const cli = (argv: string[]) => {
  program.parse(argv)
}

program.version('1.0.0')

program
  .command('register-contract')
  .description('Registers a new contract in the remote registry')
  .requiredOption('-n, --name <str>', 'Name of the contract')
  .requiredOption('-f, --filepath <filepath>', 'Location of the artifact.json file of the contract')
  .requiredOption('-e, --endpoint <host:port>', 'Contract registry endpoint in the form host:port')
  .option('-t, --tag <str>', 'Tag to be attached to the contract')
  .action(registerContractHandler)

program
  .command('get-catalog')
  .description('Returns all the registered contract names')
  .requiredOption('-e, --endpoint <host:port>', 'Contract registry endpoint in the form host:port')
  .action(getCatalogHandler)

program
  .command('get-contract')
  .description('Returns the registered contract by name and tag')
  .requiredOption('-n, --name <str>', 'Name of the contract')
  .requiredOption('-e, --endpoint <host:port>', 'Contract registry endpoint in the form host:port')
  .option('-t, --tag <str>', '(optional) Tag of the contract')
  .action(getContractHandler)

program
  .command('get-tags')
  .description('Returns all the registered tags of a given contract')
  .requiredOption('-n, --name <str>', 'Name of the contract')
  .requiredOption('-e, --endpoint <host:port>', 'Contract registry endpoint in the form host:port')
  .action(getTagsHandler)

program
  .command('generate-accounts')
  .description('Generate a given number of Ethereum accounts that can be automatically credited')
  .requiredOption('-e, --endpoint <host:port>', 'Kafka URL host:port')
  .option('-a, --amount <number>', 'Amount of Ethereum accounts to create, 1 by default', parseInt)
  .option('-c, --chain <str>', '(optional) Chain on which to credit new accounts')
  .option('-v, --value <str>', '(optional) Value in wei to credit to new accounts')
  .action(generateAccountsHandler)
