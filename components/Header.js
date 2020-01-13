/*
 * @Date: 2019-10-18 21:41:11
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-12-17 12:23:57
 * @content: I
 */
import React, { useState, memo } from "react";
import { Row, Col, Menu, Icon } from "antd";
import { IconFont } from "../pages/index";
import Link from "next/link";
import Router from "next/router";

const Header = () => {
  const [ckey, setCkey] = useState("code");
  return (
    <div className='header'>
      <Row type='flex' justify='center'>
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <span className='headerLogo'>
            <Link href='/'>
              <a>BLOG</a>
            </Link>
          </span>
          <span className='headertxt'>ESWang</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode='horizontal' defaultSelectedKeys={["code"]}>
            <Menu.Item key='search'>
              <IconFont type='icon-search-1' style={{ fontSize: 24 }} />
              SEARCH
            </Menu.Item>

            <Menu.Item
              key='code'
              onClick={() => {
                Router.push("/");
              }}
            >
              <IconFont type='icon-github' style={{ fontSize: 24 }} />
              CODE
            </Menu.Item>

            <Menu.Item
              key='ins'
              onClick={() => {
                return Router.push("/life");
              }}
            >
              <IconFont type='icon-ins' style={{ fontSize: 24 }} />
              LIFE
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
      <style jsx>
        {`
          .header {
            background-color: #fff;
            padding: 0.4rem;
            overflow: hidden;
            height: 3.8rem;
            border-bottom: 1px solid #000;
          }

          .headerLogo {
            font-size: 2rem;
            font-weight: bolder;
            text-align: left;
            padding-right: 0.8rem;
            border-right: 0.1rem solid #333;
            color: #000;
            text-shadow: 0px 2px 3px #bbb;
          }

          .headertxt {
            font-size: 1.5rem;
            font-weight: 500;
            color: #000;
            display: inline-block;
            padding-left: 0.8rem;
          }
        `}
      </style>
    </div>
  );
};

export default memo(Header);
