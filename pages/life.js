import Header from '../components/Header'
import Head from 'next/head'

const Life = () => {
  return (
    <>
      <Head>
        <title>Life</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <h1>Life</h1>
    </>
  )
}

export default Life