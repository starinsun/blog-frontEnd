/*
 * @Date: 2019-10-22 05:21:43
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-12-03 19:53:20
 * @content: I
 */
import NavBar from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";
import { IconFont } from "../pages";
import React, { useContext } from "react";
import { PostContext } from "../pages/posts";

const PostNavBar = () => {
  const markdown = useContext(PostContext);
  return (
    <div className="navbar-main">
      <div className="navbar-tilte">
        <IconFont type="icon-mulu" className="mulu" />
        <div>目录</div>
      </div>
      <NavBar
        className="navbar"
        source={markdown.content}
        ordered={false}
        headingTopOffset={80}
      />
    </div>
  );
};

export default PostNavBar;
