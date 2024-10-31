import { ChainId } from 'constants/chains'

export enum Feature {
  AMM = 'AMM',
  FARMS = 'Farms',
  STAKING = 'Staking',
  MY_ASSETS = 'My Assets',
  ANALYTICS = 'Analytics',
}

const features = {
  [ChainId.MAINNET]: [
    Feature.AMM,
    // Feature.FARMS,
    // Feature.STAKING,
    Feature.MY_ASSETS,
    // Feature.ANALYTICS,
  ],
  [ChainId.TESTNET]: [
    Feature.AMM,
    // Feature.FARMS,
    // Feature.STAKING,
    Feature.MY_ASSETS,
    // Feature.ANALYTICS,
  ],
}

export function featureEnabled(feature: Feature, chainId: ChainId): boolean {
  return features?.[chainId]?.includes(feature)
}

// export function chainsWithFeature(feature: Feature): ChainId[] {
//   return Object.keys(features)
//     .filter((chain) => features[chain as ChainId].includes(feature))
//     .map((chain) => ChainId[chain])
// }
