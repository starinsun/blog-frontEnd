/*
 * @Date: 2019-10-22 05:21:43
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-12-17 16:35:07
 * @content: I
 */
import NavBar from "markdown-navbar";
import { IconFont } from "../pages";
import React, { useContext } from "react";
import { PostContext } from "../pages/posts";

const PostNavBar = () => {
  const markdown = useContext(PostContext);
  return (
    <div className="navbar-main">
      <div className="navbar-tilte">
        <IconFont
          type="icon-mulu"
          className="mulu"
          style={{ fontSize: "1.8rem", marginRight: ".5rem" }}
        />
        <div className="mulu">目录</div>
      </div>
      <NavBar
        className="navbar"
        source={markdown.content}
        ordered={false}
        headingTopOffset={50}
      />
      <style jsx>
        {`
          .navbar-main {
            background-color: #fff;
            margin-top: 1.5rem;
            padding: 0.3rem;
            border-radius: 0.3rem;
            border: 0.1rem solid #000;
          }

          .navbar-main .navbar {
            font-size: 0.8rem;
          }

          .navbar-tilte {
            text-align: left;
            font-size: 1rem;
            margin-bottom: 0.3rem;
            padding: 0.8rem 0.3rem 0.3rem 0.8rem;
            display: flex;
            align-items: center;
          }
          .mulu {
            font-size: 1.3rem;
            font-weight: 600;
          }
        `}
      </style>
    </div>
  );
};

export default PostNavBar;
