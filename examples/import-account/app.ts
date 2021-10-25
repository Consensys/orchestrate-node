// tslint:disable: no-console

import * as util from 'util'

import { OrchestrateClient } from '../../src'

export const start = async () => {
  try {
    const client = new OrchestrateClient('http://localhost:8031')

    const privateKey = '0x86b021ccb810f26a30445b85f71e4c1596a11a97ddf9b9e348ac93d1da6735bc'
    const response = await client.importAccount({ privateKey })

    // Just to showcase the get request
    const account = await client.getAccount(response.address)

    console.log(util.inspect(account, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
