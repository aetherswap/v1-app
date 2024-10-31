import React from 'react'
import { InfoCard } from 'components/InfoCard'


//TODO: Adopt this in case we need it in the future
export function NomadWarningBanner({ style }: { style?: any }) {
  return (
    <InfoCard
      style={style}
      title="Welcome to Aetherswap V1"
      description={
        <>
          <p>
            You are currently using the new version of Aetherswap.
          </p>
        </>
      }
    />
  )
}
