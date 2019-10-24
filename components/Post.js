import { Tag, Divider } from "antd"
import { IconFont } from "../pages"
import Markdown from 'react-markdown'
import { PostContext } from '../pages/posts'
import React, {useContext} from 'react';

const Post = () => {
  const markdown= useContext(PostContext)
  console.log(markdown);

  return (
    <>
      <div className='post-img'>
        <img alt={markdown.title} src={markdown.img} />
      </div>
      <div className="post-titles">
        <div className='post-title'>{markdown.title}</div>
        <div className='post-intro'>{markdown.intro}</div>
        <div className='post-date' >
          <span className='post-time'>{ markdown.time+'  |  '+markdown.readtime+'min可读完' }</span>
          <span className='post-tag'>
            <IconFont type='icon-biaoqiansuoyin' className='icon' />:
            <Tag color='green'>{markdown.tags[0]}</Tag>
            <Tag color='volcano'>{markdown.tags[1]}</Tag>
          </span>
        </div>
      </div>
      <Divider></Divider>
      <div className='post-contents'>
        <Markdown
          source = {markdown.content}
          escapeHtml = {false}
        />
      </div>
    </>
  )
}

export default Post
