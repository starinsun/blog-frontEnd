/*
 * @Date: 2019-10-21 03:52:15
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-12-03 22:35:34
 * @content: I
 */
import { Avatar, Divider } from "antd";
import { IconFont } from "../pages";
import "../static/postCom/introduction.css";
import Router from "next/router";

const Introduction = () => {
  return (
    <div className="intro">
      <div className="avatar">
        <Avatar
          size={100}
          src="https://raw.githubusercontent.com/starinsun/picgo/master/avatar.png"
        />
      </div>
      <div className="author">
        <h2>ESWang</h2>
        <h4>一只试水前端的Frighten Bird</h4>
        <Divider>Follow me By</Divider>
      </div>
      <div className="iconfont">
        <IconFont
          type="icon-github"
          className="github-icon"
          onClick={() => {
            window.location.href = "https://github.com/starinsun";
          }}
        ></IconFont>
        <IconFont
          type="icon-csdn"
          className="csdn-icon"
          onClick={() => {
            window.location.href = "https://blog.csdn.net/weixin_43870742";
          }}
        ></IconFont>
        <IconFont type="icon-ziyuan" className="zhihu-icon"></IconFont>
        <IconFont type="icon-juejin" className="juejin-icon"></IconFont>
      </div>
    </div>
  );
};

export default Introduction;
