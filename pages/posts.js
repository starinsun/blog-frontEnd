import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import { Row, Col, Affix } from 'antd'
import PostTag from '../components/PostTag'
import '../static/components/post.css'
import Post from '../components/Post'

const Posts = () => (
  <div>
    <Head>
      <title>POSTS</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Affix offsetTop={0} >
      <Header/>
    </Affix>
    <Row className='all-main' type='flex' justify='center'>
      <Col xs={0} sm={0} md={2} lg={2} xl={2}>
        <Affix offsetTop={60}>
          <PostTag />
        </Affix>
      </Col>

      <Col className='post-center' xs={24} sm={24} md={12} lg={13} xl={13} >
        <Post />
      </Col>
      
      <Col className='post--right' xs={0} sm={0} md={5} lg={4} xl={5}>右边</Col>
    </Row>
  </div>
)

export default Posts
