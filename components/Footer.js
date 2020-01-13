/*
 * @Date: 2019-10-21 05:44:15
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-12-16 23:30:41
 * @content: I
 */
import React, { memo } from "react";

const Footer = () => (
  <div className='footer'>
    <div>Power By ReactHooks, Antd, Next.js, MongoDb, Nest.js</div>
    <span>ESWang</span>
    <span>阿里云 山东</span>
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
      `}
    </style>
  </div>
);

export default memo(Footer);
