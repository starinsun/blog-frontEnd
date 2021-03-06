/*
 * @Date: 2019-10-21 06:33:01
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-20 11:42:37
 * @content: I
 */
import React, { memo } from "react";
import { Tag } from "antd";
import { IconFont } from "../pages";
import { judge_tag_color } from "../utils/tagColor";
import Router from "next/router";

const MyTag = () => (
  <div className='block'>
    <IconFont type='icon-biaoqiansuoyin' style={{ fontSize: "3rem" }} />
    <br />
    <div>
      <Tag
        color={judge_tag_color("react")}
        onClick={() => {
          window.scrollTo({ top: 0 });
          Router.push({ pathname: "/", query: { tags: "react" } });
        }}>
        <p>React.js</p>
      </Tag>
    </div>
    <div>
      <Tag
        color={judge_tag_color("vue")}
        onClick={() => {
          window.scrollTo({ top: 0 });
          Router.push({ pathname: "/", query: { tags: "vue" } });
        }}>
        <p>Vue.js</p>
      </Tag>
    </div>
    <div>
      <Tag
        color={judge_tag_color("ecmascript")}
        onClick={() => {
          window.scrollTo({ top: 0 });
          Router.push({ pathname: "/", query: { tags: "ecmascript" } });
        }}>
        <p>ECMAScript</p>
      </Tag>
    </div>
    <div>
      <Tag
        color={judge_tag_color("css")}
        onClick={() => {
          window.scrollTo({ top: 0 });
          Router.push({ pathname: "/", query: { tags: "css" } });
        }}>
        <p>CSS</p>
      </Tag>
    </div>
    <div>
      <Tag
        color={judge_tag_color("basic")}
        onClick={() => {
          window.scrollTo({ top: 0 });
          Router.push({ pathname: "/", query: { tags: "basic" } });
        }}>
        <p>Basic</p>
      </Tag>
    </div>
    <div>
      <Tag
        color={judge_tag_color("native")}
        onClick={() => {
          window.scrollTo({ top: 0 });
          Router.push({ pathname: "/", query: { tags: "native" } });
        }}>
        <p>Native</p>
      </Tag>
    </div>
    <div>
      <Tag
        color={judge_tag_color("angular")}
        onClick={() => {
          window.scrollTo({ top: 0 });
          Router.push({ pathname: "/", query: { tags: "angular" } });
        }}>
        <p>Augular</p>
      </Tag>
    </div>
    <div>
      <Tag
        color={judge_tag_color("nest")}
        onClick={() => {
          window.scrollTo({ top: 0 });
          Router.push({ pathname: "/", query: { tags: "nest" } });
        }}>
        <p>Nest.js</p>
      </Tag>
    </div>
    <div>
      <Tag
        color={judge_tag_color("life")}
        onClick={() => {
          window.scrollTo({ top: 0 });
          Router.push({ pathname: "/", query: { tags: "life" } });
        }}>
        <p>Life</p>
      </Tag>
    </div>
    <style jsx>
      {`
        .block {
          text-align: center;
          margin-top: 1.4rem;
        }

        .block div {
          padding-top: 1rem;
        }

        .block div p :hover {
          cursor: pointer;
          transform: scale(1.1);
        }

        .block div p {
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 2rem;
          margin: 0 0.3rem;
          transition: all 200ms;
        }
      `}
    </style>
  </div>
);

export default memo(MyTag);
