import { Row, Col, Affix, List, Icon, Avatar } from 'antd'
import React, {useState, useContext} from 'react'
import { PostsContext } from '../pages/index'
import '../static/components/postList.css'
import {IconFont} from '../pages/index'
import Router from 'next/router'

const PostList = () => {
  const data = useContext(PostsContext)

  const IconText = ({ type, text }) => (
    <span>
      <IconFont type={type} style={{ marginRight: 10 }} />
      {text}
    </span>
  )

  return (
    <List 
      itemLayout='vertical'
      size='large'
      pagination={{onChange: page=>{console.log(page)},pageSize: 3}}
      dataSource={data}
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[
            <IconText type="icon-liulanzuji" text={item.views} key="list-vertical-liulanzuji" />,
            <IconText type="icon-guzhang" text={item.zan} key="list-vertical-bixin" />,
            <IconText type="icon-wo-" text={item.comment} key="list-vertical-wo-" />
          ]}
          extra={
            <img alt='无所谓' src={item.img} />
          }
          onClick={() => {Router.push({pathname: '/posts',query:{id: item._id} })}} 
        >

          <List.Item.Meta
            avatar={<Avatar src={item.author} />}
            title={item.title}
            description={item.time.concat('   |   ').concat(item.readtime).concat('min 可以读完')}/>
            {/* 这里在MongoDB后台使用了new Date().toLocaleDateString()生成年月日，这里应该还可以加上标签，待定 */}
            
          <div className='post-content'>{item.intro}</div>

        </List.Item>
      )}
    />
  )
}


export default PostList