import { NextPage } from 'next'
import Head from 'next/head'

import { Button } from '@src/components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>next-tailwind-typescript-jest</title>
      </Head>
      <Button label="Home" />
    </>
  )
}

export default Home
