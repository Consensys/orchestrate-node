// tslint:disable: no-console

import { AccountGenerator, Producer } from '../../src'

export const start = async () => {
  try {
    const producer = new Producer(['localhost:9092'])
    const accountGenerator = new AccountGenerator(producer)

    const addresses = await accountGenerator.generateAccounts(5)

    await accountGenerator.disconnect()

    console.log(addresses)
  } catch (error) {
    console.error(error)
  }
}
