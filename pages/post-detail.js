import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import { Row, Col } from 'antd'

const PostDetail = () => (
  <div>
    <Head>
      <title>POST</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Header/>
    <Row className='all-main' type='flex' justify='center'>
      <Col className='all-left' xs={0} sm={0} md={2} lg={2} xl={2}>左边</Col>
      <Col className='all-center' xs={24} sm={24} md={12} lg={13} xl={13} >中部</Col>
      <Col className='all-right' xs={0} sm={0} md={5} lg={4} xl={5}>右边</Col>
    </Row>
  </div>
)

export default PostDetail
