import React from 'react';
import '../static/postCom/header.css';
import { Row, Col, Menu, Icon } from 'antd';
import { IconFont } from '../pages/index';
import Link from 'next/link';
import Router from 'next/router';

const { SubMenu } = Menu;

const Header = () => {
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
          <Menu mode='horizontal'>
            <Menu.Item key='search'>
              <IconFont type='icon-search-1' style={{ fontSize: 24 }} />
              SEARCH
            </Menu.Item>

            <Menu.Item key='code' onClick={() => Router.push('/')}>
              <IconFont type='icon-github' style={{ fontSize: 24 }} />
              CODE
            </Menu.Item>

            <Menu.Item key='ins' onClick={() => Router.push('/life')}>
              <IconFont type='icon-ins' style={{ fontSize: 24 }} />
              LIFE
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
