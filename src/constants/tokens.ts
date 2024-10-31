import { Token } from '@uniswap/sdk-core'

import { WCANTO, Canto } from './native-token'

import { ChainId } from 'constants/chains'
import { MAINNET, TESTNET } from './periphery'

export { WCANTO, Canto }

export const CANTO = Canto.onChain(ChainId.TESTNET)

/**
 * CantoDEX Tokens
 */

export const NOTE = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0x4e71A2E537B7f9D9413D3991D37958c0b5e1e503', 18, 'NOTE', 'Note'),
  [ChainId.TESTNET]: new Token(ChainId.TESTNET, '0x03F734Bd9847575fDbE9bEaDDf9C166F880B5E5f', 18, 'NOTE', 'Note'),
}

export const ERN = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0x4e71A2E537B7f9D9413D3991D37958c0b5e1e501', 18, 'ERN', 'ERN'),
  [ChainId.TESTNET]: new Token(ChainId.TESTNET, '0x58a192900Db8b3d74e47C556258bf90bEE7424dc', 18, 'ERN', 'Test ERN'),
}

export const DAI = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0x4e71A2E537B7f9D9413D3991D37958c0b5e1e502', 18, 'DAI', 'DAI'),
  [ChainId.TESTNET]: new Token(ChainId.TESTNET, '0xd24291e8dC652E2a34f374bC3cE9bF93e9974a85', 18, 'DAI', 'Test DAI'),
}

export const USDC = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0x80b5a32E4F032B2a058b4F29EC95EEfEEB87aDcd', 6, 'USDC', 'USDC'),
  [ChainId.TESTNET]: new Token(ChainId.TESTNET, '0xA920ff82fb1a11481bB82467891DC00a8daE68A1', 6, 'USDC', 'Test USDC'),
}

export const USDT = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xd567B3d7B8FE3C79a1AD8dA978812cfC4Fa05e75', 6, 'USDT', 'USDT'),
  [ChainId.TESTNET]: new Token(ChainId.TESTNET, '0x0D390118524223076e90038F38F4EacdBBf72176', 6, 'USDT', 'Test USDT'),
}

export const ATOM = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xecEEEfCEE421D8062EF8d6b4D814efe4dc898265', 6, 'ATOM', 'Atom'),
  [ChainId.TESTNET]: new Token(ChainId.TESTNET, '0x40E41DC5845619E7Ba73957449b31DFbfB9678b2', 6, 'ATOM', 'Atom'),
}

export const ETH = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0x5FD55A1B9FC24967C4dB09C513C3BA0DFa7FF687', 18, 'ETH', 'Ether'),
  [ChainId.TESTNET]: new Token(ChainId.TESTNET, '0xCa03230E7FB13456326a234443aAd111AC96410A', 18, 'ETH', 'Ether'),
}

export const CINU = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0x7264610A66EcA758A8ce95CF11Ff5741E1fd0455', 18, 'cINU', 'CANTO INU'),
}

/**
 * aether
 */

export const DIFFUSION = makeToken('Aetherswap', 'AET', 18, {
  [ChainId.MAINNET]: MAINNET.diffusion,
  [ChainId.TESTNET]: TESTNET.diffusion || '0x4646D6BAB17a824AA9E961F2D69eAabF770cd4d0',
})

export const XDIFFUSION = makeToken('AetherSpace', 'xAET', 18, {
  [ChainId.MAINNET]: MAINNET.diffusionbar,
  [ChainId.TESTNET]: TESTNET.diffusionbar || '0x8eDb740FF250F8FB10bE8959CF20a7d2a741b32d',
})

function makeToken(name: string, symbol: string, decimals: number, addresses: Record<ChainId, string>) {
  return {
    [ChainId.MAINNET]: new Token(ChainId.MAINNET, addresses[ChainId.MAINNET], decimals, symbol, name),
    [ChainId.TESTNET]: new Token(ChainId.TESTNET, addresses[ChainId.TESTNET], decimals, `${symbol}`, `${name}`),
  }
}
