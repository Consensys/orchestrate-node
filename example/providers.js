const INFURA_API_KEY = '' // Should be in your .env for example

const infuraProvider = network => {
  return `https://${network}.infura.io/v3/${INFURA_API_KEY}`
}

export const ganacheCli = 'http://localhost:8545'
export const ganacheUi = 'http://localhost:7545'
export const mainnetProvider = infuraProvider('mainnet')
export const ropstenProvider = infuraProvider('ropsten')
export const rinkedbyProvider = infuraProvider('rinkeby')