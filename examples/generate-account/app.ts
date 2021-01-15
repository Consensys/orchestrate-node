// tslint:disable: no-console

import * as util from 'util'

import { OrchestrateClient } from '../../src'

export const start = async () => {
  try {
    const client = new OrchestrateClient('http://localhost:8031')

    const accounts = await Promise.all([
      client.createAccount({ alias: 'account_1' }),
      client.createAccount(),
      client.createAccount(),
      client.createAccount()
    ])

    console.log(util.inspect(accounts, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
