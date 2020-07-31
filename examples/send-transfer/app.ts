// tslint:disable: no-console

import * as cutil from 'util'

import { TransactionClient } from '../../src'

export const start = async () => {
  try {
    const txClient = new TransactionClient('http://localhost:8031')

    const res = await txClient.transfer(
      {
        chain: 'besu',
        params: {
          from: '0x7e654d251da770a068413677967f6d3ea2fea9e4', // Default Orchestrate account in development mode
          to: '0x6009608a02a7a15fd6689d6dad560c44e9ab61ff',
          value: '100000000'
        }
      },
      'ExampleTransfer',
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiaHR0cHM6Ly9hdXRoMC5jb20vYXBpL3YyLyJdLCJleHAiOjE1OTYxMjQ2ODgsImh0dHA6Ly9vcmNoZXN0cmF0ZS5pbmZvIjp7InRlbmFudF9pZCI6ImdhYnJpZWwifSwiaWF0IjoxNTk2MTIxMDg4LCJpc3MiOiJPcmNoZXN0cmF0ZSIsImp0aSI6IjZiOGY2ODI5LTQyYWMtNDNmYS1hZmQ2LTgxYzljNDEzNzEyNSIsIm5iZiI6MTU5NjEyMTA4OCwic2NwIjpbInJlYWQ6dXNlcnMiLCJ1cGRhdGU6dXNlcnMiLCJjcmVhdGU6dXNlcnMiXSwic3ViIjoiZTJlLXRlc3QifQ.kLzVp8xAXVSNFSX4tfMeQ3VRhqvwvm0s1QhGyfVnauRuUlXEJne-hChRk5kdN-buh1gzE6uGw19xCC3A9zQZBxzi97MhW6qU5M5s8yfJ3xjI9qrQhpPbkeSQu8ZdGUB3ACdfyNPzuD3ltU2Dc0OGV_PpnHiuj6-MwgM0UiQs5s25Rfu83GB2mZTuEd2AvMnIzi19gH2dkL473n1iflpSINdxdvCsR7kKp6OLMfKL6yp5PIawYxrZOqToGxkjb9YsOq4pdJ2C9idQ4QFKxScBHvYuCEq37JS_-4NMIP5OfTY-WU4oD7-1jBtYmstcD1gbnunLqVIMbrIs4Kmz9j8tlg'
    )

    console.log(cutil.inspect(res, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
