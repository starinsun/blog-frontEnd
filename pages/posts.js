/*
 * @Date: 2019-10-20 00:06:46
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-13 22:38:58
 * @content: I
 */
import React, { createContext, memo } from "react";
import Head from "next/head";
import Header2 from "../components/Header2";
import { Row, Col, Affix } from "antd";
import PostTag from "../components/PostTag";
import Post from "../components/Post";
import Introduction from "../components/Introduction";
import PostNavBar from "../components/PostNavBar";
import Comment from "../components/Comment";
import Footer from "../components/Footer";
import axios from "axios";

import { api_url } from "../utils/config";

export const PostContext = createContext();

const Posts = res => (
  <div>
    <Head>
      <title>POSTS</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Affix offsetTop={0}>
      <Header2 />
    </Affix>
    <Row className='all-main' type='flex' justify='center'>
      <Col xs={0} sm={0} md={2} lg={2} xl={2}>
        <Affix offsetTop={60}>
          <PostTag data={res} />
        </Affix>
      </Col>

      <Col className='post-center' xs={24} sm={24} md={12} lg={13} xl={13}>
        <PostContext.Provider value={res}>
          <Post />
        </PostContext.Provider>
        <Comment data={res} />
      </Col>

      <Col className='post-right' xs={0} sm={0} md={5} lg={4} xl={5}>
        <Introduction />
        <Affix offsetTop={60}>
          <PostContext.Provider value={res}>
            <PostNavBar />
          </PostContext.Provider>
        </Affix>
      </Col>
    </Row>
    <Footer />
    <style jsx global>
      {`
        .post-center {
          background-color: #fff;
          margin: 1.2rem 1.8rem;
          padding: 0.8rem;
          border-radius: 0.3rem;
          border: 0.1rem solid #eee;
        }
        .all-main {
          margin-top: 0.5rem;
        }
      `}
    </style>
  </div>
);

Posts.getInitialProps = async ctx => {
  const res = await axios.get(api_url + `/post/${ctx.query.id}`);
  return res.data;
};

export default Posts;
