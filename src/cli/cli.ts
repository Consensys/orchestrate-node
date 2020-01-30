import { Command } from 'commander'

import { getCatalogHandler, getContractHandler, getTagsHandler, registerContractHandler } from './handlers'

const program = new Command()

export const cli = (argv: string[]) => {
  program.parse(argv)
}

program
  .command('register-contract')
  .description('Registers a new contract in the remote registry')
  .option('-n, --name <str>', 'Name of the contract')
  .option('-t, --tag <str>', 'Tag to be attached to the contract')
  .option('-f, --filepath <filepath>', 'Location of the artifact.json file of the contract')
  .option('-e, --endpoint <host:port>', 'Contract registry endpoint in the form host:port')
  .action(registerContractHandler)

program
  .command('get-catalog')
  .description('Returns all the registered contract names')
  .option('-e, --endpoint <host:port>', 'Contract registry endpoint in the form host:port')
  .action(getCatalogHandler)

program
  .command('get-contract')
  .description('Returns the registered contract by name and tag')
  .option('-n, --name <str>', 'Name of the contract')
  .option('-t, --tag <str>', 'Tag of the contract')
  .option('-e, --endpoint <host:port>', 'Contract registry endpoint in the form host:port')
  .action(getContractHandler)

program
  .command('get-tags')
  .description('Returns all the registered tags of a given contract')
  .option('-n, --name <str>', 'Name of the contract')
  .option('-e, --endpoint <host:port>', 'Contract registry endpoint in the form host:port')
  .action(getTagsHandler)
