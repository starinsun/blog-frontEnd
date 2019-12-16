/*
 * @Date: 2019-10-18 15:41:11
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-12-13 19:25:35
 * @content: I
 */
import React, { useState, useEffect, createContext } from "react";
import Head from "next/head";
import { Row, Col, Affix, Icon } from "antd";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";
import Introduction from "../components/Introduction";
import HeadTag from "../components/HeadTag";
import MyTag from "../components/Tag";

import { inconf_url, api_url } from "../utils/config";

import "../static/postCom/index.css";
import "../static/postCom/postTag.css";
import "../static/postCom/post.css";
import "../static/postCom/postnavbar.css";
import "markdown-navbar/dist/navbar.css";
import "../static/postCom/postList.css";

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Affix>
        <Header />
      </Affix>
      {ctx ? (
        <TagContext.Provider value={ctx}>
          <HeadTag />
        </TagContext.Provider>
      ) : (
        <div></div>
      )}

      <Row className="all-main" type="flex" justify="center">
        <Col className="left" xs={0} sm={0} md={2} lg={2.5} xl={2.5}>
          <Affix offsetTop={60}>
            <MyTag />
          </Affix>
        </Col>
        <Col className="all-center" xs={24} sm={24} md={12} lg={13} xl={13}>
          <PostsContext.Provider value={data}>
            <PostList />
          </PostsContext.Provider>
        </Col>
        <Col xs={0} sm={0} md={5} lg={4} xl={5} className="right">
          <Affix offsetTop={60}>
            <Introduction />
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

Home.getInitialProps = async ctx => {
  const res = ctx.query.tags
    ? await axios.get(api_url + `/list/${ctx.query.tags}`)
    : await axios.get(api_url);
  console.log({ data: res.data, ctx: ctx.query.tags });

  return { data: res.data, ctx: ctx.query.tags };
};

export default Home;
