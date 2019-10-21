import React from 'react'
import Head from 'next/head'
import { Row, Col, Affix, Icon } from 'antd'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PostList from '../components/PostList'
import Introduction from '../components/Introduction'
import MyTag from '../components/Tag'

import '../static/pages/all.css'

export const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1362423_nfl2szn6yqa.js'
});

const Home = () => {
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
          <PostList />
        </Col>
        <Col xs={0} sm={0} md={5} lg={4} xl={5} className='right'>
          <Affix offsetTop={60}><Introduction /></Affix>
        </Col>
      </Row>
      <Footer />
    </div>
)}

export default Home
