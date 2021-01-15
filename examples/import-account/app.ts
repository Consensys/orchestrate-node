// tslint:disable: no-console

import * as util from 'util'

import { OrchestrateClient } from '../../src'

export const start = async () => {
  try {
    const client = new OrchestrateClient('http://localhost:8031')

    const privateKey = 'f368b15ea01bafd199d4d39daee2b1d281bf78193c590ef79c233016b3b43f81'
    const response = await client.importAccount({ privateKey })

    // Just to showcase the get request
    const account = await client.get(response.address)

    console.log(util.inspect(account, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
