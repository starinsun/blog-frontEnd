import { Row, Col, Affix, List, Icon, Avatar } from 'antd'
import React, {useState} from 'react'
import '../static/components/postList.css'
import {IconFont} from '../pages/index'

const PostList = () => {
  const [blogList, setBlogList] = useState(
    [
      {title:'LeetCode JS系列',context:'LeetCode在如今IT圈找工作愈发困难的大前提下可谓是一发神器了，前端当然也不例外，JS刷题来的要比Py等语言要难一些，所以不需要犹豫，搞起来就完事了。' ,avatar: 'http://pz76pyfij.bkt.clouddn.com/3.png',src:"http://pz76pyfij.bkt.clouddn.com/3.png"},
      {title:'2019年Node.js势头最猛框架Nest.js',context:'我选择Nest.js和Nuxt的初衷有些相似，最重要的一点是我看中了nest里面封装了swagger ,以很方便的生成接口文档，并且是动态文档，非常好用！',avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',src:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"},
      {title:'一文带你了解Next.js的强大',context:'官方推出了一系列插件来弥补这个问题，包括@zeit/next-css和@zeit/next-sass等，目的就是让我们可以直接引用CSS或者SCSS等文件。',avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',src:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"},
      {title:'React Hooks学习日记',context:'Reacthooks作为一个比较新的React特性，一定程度上是对React做了一次较大程度的更新，在很多方向都给React的写法提供了新的思路,写起来确实思路很明确，这种结构个人感觉比Vue舒服。',avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',src:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"}
    ]
  )

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
      dataSource={blogList}
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[
            <IconText type="icon-guzhang" text="156" key="list-vertical-bixin" />,
            <IconText type="icon-wo-" text="2" key="list-vertical-wo-" />
          ]}
          extra={
            <img alt='无所谓' src={item.src} />
          }
        >

          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={item.title}
            description='2019-10-20    10min 可读完' />
          <div className='post-content'>{item.context}</div>

        </List.Item>
      )}
    />
  )
}

export default PostList