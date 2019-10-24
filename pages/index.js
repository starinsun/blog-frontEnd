import React, {useState, useEffect, createContext} from 'react'
import Head from 'next/head'
import { Row, Col, Affix, Icon } from 'antd'
import axios from 'axios'

import Header from '../components/Header'
import Footer from '../components/Footer'
import PostList from '../components/PostList'
import Introduction from '../components/Introduction'
import MyTag from '../components/Tag'

import '../static/pages/all.css'

export const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1362423_31zuccekimc.js'
});

export const PostsContext = createContext()

const Home = ({data}) => {
  
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Affix>
        <Header/>
      </Affix>
      <Row className='all-main' type='flex' justify='center'>
        <Col className='left' xs={0} sm={0} md={2} lg={2.5} xl={2.5}>
          <Affix offsetTop={60}><MyTag /></Affix>
        </Col>
        <Col className='all-center' xs={24} sm={24} md={12} lg={13} xl={13} >
          <PostsContext.Provider value={data}>
            <PostList />
          </PostsContext.Provider>
        </Col>
        <Col xs={0} sm={0} md={5} lg={4} xl={5} className='right'>
          <Affix offsetTop={60}><Introduction /></Affix>
        </Col>
      </Row>
      <Footer />
    </div>
)}

Home.getInitialProps = async() => {
  const res = await axios.get('http://localhost:4000/posts')
  return { data: res.data }
}

export default Home
