#!/usr/bin/env node

import { Command } from 'commander'

const program = new Command()

program
  .version('2.0.0')
  .description('Orchestrate CLI')
  .command('contracts', 'Contract Registry management', { executableFile: 'orchestrate-contracts' })
  .command('accounts', 'Accounts management', { executableFile: 'orchestrate-accounts' })
  .parse(process.argv)
