import React from 'react'
import '../static/components/header.css'
import { Row, Col, Menu, Icon } from 'antd'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1362423_v3y7ufqzfi.js'
});

const {SubMenu} = Menu

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
            <Menu.Item key='search'>
              <IconFont type="icon-search-1"/>
              SEARCH
            </Menu.Item>

            <SubMenu 
              title={
                <span className="submenu-code">
                  <IconFont type="icon-github"/>
                  CODE
                </span>
              }
            >
              <Menu.ItemGroup title="前端">
                <Menu.Item key="setting:1">React</Menu.Item>
                <Menu.Item key="setting:2">Vue</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="后端">
                <Menu.Item key="setting:3">Nest.js</Menu.Item>
                <Menu.Item key="setting:4">Flask</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>

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


