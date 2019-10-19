import React from 'react'
import '../static/components/header.css'
import { Row, Col, Menu, Icon } from 'antd'

const Header = () => {
  return (
    <div className='header'>
      <Row type='flex' justify='center'>
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <span className='headerLogo'>BLOG</span>
          <span className='headertxt'>ESWang</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode='horizontal'>
            <Menu.Item key='home'>
              <Icon type="home"/>
              Home
            </Menu.Item>

            <Menu.Item key='smile'>
              <Icon type="smile"/>
              Login
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header