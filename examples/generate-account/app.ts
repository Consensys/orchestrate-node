// tslint:disable: no-console

import { AccountGenerator } from '../../src'

export const start = async () => {
  try {
    const accountGenerator = new AccountGenerator(['localhost:9092'])

    await accountGenerator.connect()
    const address = await accountGenerator.generateAccount()
    await accountGenerator.disconnect()

    console.log(address)
  } catch (error) {
    console.error(error)
  }
}
