/*
 * @Date: 2019-10-21 05:44:15
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-20 10:36:57
 * @content: I
 */
import React, { memo } from "react";

const Footer = () => (
  <div className='footer'>
    <div>
      Power By ReactHooks, Antd, Next.js, MongoDb,{" "}
      <a href='https://api.asenwang.top/'>Nest.js</a>,{" "}
      <a href='https://admin.asenwang.top'>React-Router</a>
    </div>
    <span>ESWang</span>
    <span>阿里云</span>
    <style jsx>
      {`
        .footer {
          text-align: center;
          border-top: 0.1rem solid #000;
          background-color: #eee;
          padding-top: 0.5rem;
          margin-top: 0.5rem;
          font-style: italic;
        }
        span {
          margin-left: 20px;
        }
        a {
          text-decoration: none;
          color: rgba(0, 0, 0, 0.65);
          cursor: default;
        }
      `}
    </style>
  </div>
);

export default memo(Footer);
