/*
 * @Date: 2019-10-21 06:33:01
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-12-03 22:10:38
 * @content: I
 */
import { Tag } from "antd";
import "../static/postCom/tag.css";
import { IconFont } from "../pages";
import { judge_tag_color } from "../utils/tagColor";
import Router from "next/router";

const MyTag = () => (
  <div className="block">
    <IconFont type="icon-biaoqiansuoyin" className="daohang" />
    <br />
    <div className="react">
      <Tag
        color={judge_tag_color("react")}
        onClick={() => {
          Router.push({ pathname: "/", query: { tags: "react" } });
        }}
      >
        <p>React.js</p>
      </Tag>
    </div>
    <div className="vue">
      <Tag
        color={judge_tag_color("vue")}
        onClick={() => {
          Router.push({ pathname: "/", query: { tags: "vue" } });
        }}
      >
        <p>Vue.js</p>
      </Tag>
    </div>
    <div className="nest">
      <Tag
        color={judge_tag_color("nest")}
        onClick={() => {
          Router.push({ pathname: "/", query: { tags: "nest" } });
        }}
      >
        <p>Nest.js</p>
      </Tag>
    </div>
    <div className="angular">
      <Tag
        color={judge_tag_color("angular")}
        onClick={() => {
          Router.push({ pathname: "/", query: { tags: "angular" } });
        }}
      >
        <p>Angular</p>
      </Tag>
    </div>
    <div className="life">
      <Tag
        color={judge_tag_color("life")}
        onClick={() => {
          Router.push({ pathname: "/", query: { tags: "life" } });
        }}
      >
        <p>Life</p>
      </Tag>
    </div>
    <div className="rn">
      <Tag
        color={judge_tag_color("rn")}
        onClick={() => {
          Router.push({ pathname: "/", query: { tags: "rn" } });
        }}
      >
        <p>RN</p>
      </Tag>
    </div>
    <div className="css">
      <Tag
        color={judge_tag_color("css")}
        onClick={() => {
          Router.push({ pathname: "/", query: { tags: "css" } });
        }}
      >
        <p>CSS</p>
      </Tag>
    </div>
  </div>
);

export default MyTag;
