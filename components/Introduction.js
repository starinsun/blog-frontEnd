/*
 * @Date: 2019-10-21 03:52:15
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-13 12:39:34
 * @content: 关于iconfont里面的样式，通常做直接修改
 */
import React, { memo } from "react";
import { Avatar, Divider } from "antd";
import { IconFont } from "../pages";

const Introduction = () => {
  return (
    <div className='intro'>
      <div className='avatar'>
        <Avatar
          size={100}
          src='https://raw.githubusercontent.com/starinsun/picgo/master/avatar.png'
        />
      </div>
      <div className='author'>
        <h2>ESWang</h2>
        <h4>一只试水前端开发的Tiny Bird</h4>
        <Divider>Follow me By</Divider>
      </div>
      <div className='iconfont'>
        <IconFont
          type='icon-github'
          style={{ fontSize: "2rem", margin: "0 .4rem" }}
          onClick={() => {
            window.location.href = "https://github.com/starinsun";
          }}
        ></IconFont>
        <IconFont
          type='icon-csdn'
          style={{ fontSize: "2rem", margin: "0 .4rem" }}
          onClick={() => {
            window.location.href = "https://blog.csdn.net/weixin_43870742";
          }}
        ></IconFont>
        <IconFont
          type='icon-jianshu'
          style={{ fontSize: "2rem", margin: "0 .4rem" }}
          onClick={() => {
            window.location.href = "https://www.jianshu.com/u/3d27a986167e";
          }}
        ></IconFont>
        <IconFont
          type='icon-juejin'
          style={{ fontSize: "2rem", margin: "0 .4rem .8rem .4rem" }}
          onClick={() => {
            window.location.href =
              "https://juejin.im/user/5d3654a16fb9a07ea33c550e";
          }}
        ></IconFont>
      </div>
      <style jsx>
        {`
          .avatar,
          .author {
            text-align: center;
            padding: 1rem;
            font-size: 1rem;
          }

          .iconfont {
            text-align: center;
          }

          .intro {
            background-color: #fff;
            margin-top: 1.2rem;
            padding: 0.3rem;
            border-radius: 0.3rem;
            border: 0.1rem solid #000;
          }
        `}
      </style>
    </div>
  );
};

export default memo(Introduction);
