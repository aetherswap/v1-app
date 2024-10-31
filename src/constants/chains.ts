export enum ChainId {
  MAINNET = 183,
  TESTNET = 233,
}

export const NETWORK_URLS: {
  [chainId in ChainId]: string
} = {
  // [ChainId.MAINNET]: `https://canto.evm.chandrastation.com`,
  [ChainId.MAINNET]: `https://mainnet.ethernitychain.io`,
  [ChainId.TESTNET]: `https://testnet.ethernitychain.io`,
}
