import NavBar from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import { IconFont } from '../pages';
import React, { useContext } from 'react';
import { PostContext } from '../pages/posts';

const PostNavBar = () => {
  const markdown = useContext(PostContext);
  return (
    <div className='navbar-main'>
      <div className='navbar-tilte'>
        <IconFont type='icon-mulu' className='mulu' />
        <div>目录</div>
      </div>
      <NavBar className='navbar' source={markdown.content} ordered={false} />
    </div>
  );
};

export default PostNavBar;
