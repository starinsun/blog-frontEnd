/*
 * @Date: 2019-10-21 21:48:29
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-12-17 13:57:41
 * @content: 为什么这个里面的iconfont就可以呢？把iconfont当作块级元素包裹起来就可以直接赋样式
 */
import React, { memo } from "react";
import { IconFont } from "../pages/index";

const PostTag = () => {
  return (
    <div className='main'>
      <div className='guzhang'>
        <IconFont type='icon-guzhang' />
      </div>
      点个赞~
      <div className='pinglun'>
        <IconFont type='icon-wo-' />
      </div>
      评个论~
      <div className='csdn'>
        <IconFont type='icon-csdn' />
      </div>
      有文章~
      <div className='github'>
        <IconFont type='icon-github' />
      </div>
      有源码~
      <div className='juejin'>
        <IconFont type='icon-juejin' />
      </div>
      这也有~
      <style jsx>
        {`
          .main {
            text-align: center;
            margin-top: 1.3rem;
          }

          .guzhang,
          .pinglun,
          .csdn,
          .github,
          .juejin {
            margin-top: 1rem;
            font-size: 2rem;
          }
        `}
      </style>
    </div>
  );
};

export default memo(PostTag);
