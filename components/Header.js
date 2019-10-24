import React from 'react'
import '../static/components/header.css'
import { Row, Col, Menu, Icon } from 'antd'
import {IconFont} from '../pages/index'
import Link from 'next/link'

const {SubMenu} = Menu

const Header = () => {
  return (
    <div className='header'>
      <Row type='flex' justify='center'>
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <span className='headerLogo'>
            <Link href='/'>
              <a>
                BLOG
              </a>
            </Link>
          </span>
          <span className='headertxt'>ESWang</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode='horizontal'>
            <Menu.Item key='search'>
              <IconFont type="icon-search-1"/>
              SEARCH
            </Menu.Item>

            <Menu.Item key='code'>
              <IconFont type="icon-github"/>
              CODE
            </Menu.Item>

            <Menu.Item key='ins'>
              <IconFont type="icon-ins"/>
              LIFE
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header


