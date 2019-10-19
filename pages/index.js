import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <div>
      <Header/>
    </div>
  </div>
)

export default Home
