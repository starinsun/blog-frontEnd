/*
 * @Date: 2019-10-18 15:41:11
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-15 16:02:24
 * @content: I
 */
import React, { createContext } from "react";
import Head from "next/head";
import { Row, Col, Affix, Icon } from "antd";
import axios from "axios";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import PostList from "../components/PostList";
import Introduction from "../components/Introduction";
import HeadTag from "../components/HeadTag";
import MyTag from "../components/Tag";

import { inconf_url, api_url } from "../utils/config";

import "markdown-navbar/dist/navbar.css";

export const IconFont = Icon.createFromIconfontCN({
  scriptUrl: inconf_url
});
export const PostsContext = createContext({});
export const TagContext = createContext("");

const Home = ({ data, ctx }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Affix>
        <Header2 />
      </Affix>
      {ctx ? (
        <TagContext.Provider value={ctx}>
          <HeadTag />
        </TagContext.Provider>
      ) : (
        <></>
      )}

      <Row className='all-main' type='flex' justify='center'>
        <Col className='left' xs={0} sm={0} md={2} lg={2.5} xl={2.5}>
          <Affix offsetTop={60}>
            <MyTag />
          </Affix>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={13}
          xl={13}
          style={{
            backgroundColor: "#fff",
            margin: "1.3rem",
            padding: "0.8rem",
            borderRadius: "0.3rem",
            border: "0.1rem solid #000"
          }}>
          <PostsContext.Provider value={data}>
            <PostList />
          </PostsContext.Provider>
        </Col>
        <Col xs={0} sm={0} md={5} lg={4} xl={5} className='right'>
          <Affix offsetTop={60}>
            <Introduction />
          </Affix>
        </Col>
      </Row>
      <Footer />
      <style jsx global>
        {`
          body {
            background-color: #f6f6f6;
            line-height: 1.6;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, segoe ui,
              Roboto, Helvetica, Arial, sans-serif, apple color emoji,
              segoe ui emoji, segoe ui symbol;
          }
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </div>
  );
};

Home.getInitialProps = async ctx => {
  const res = ctx.query.tags
    ? await axios.get(api_url + `/posts/list/${ctx.query.tags}`)
    : await axios.get(`${api_url}/posts`);

  return { data: res.data, ctx: ctx.query.tags };
};

export default Home;
