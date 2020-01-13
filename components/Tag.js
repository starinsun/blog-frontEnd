/*
 * @Date: 2019-10-21 06:33:01
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-13 09:49:57
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
          Router.push({ pathname: "/", query: { tags: "react" } });
        }}
      >
        <p>React.js</p>
      </Tag>
    </div>
    <div>
      <Tag
        color={judge_tag_color("vue")}
        onClick={() => {
          Router.push({ pathname: "/", query: { tags: "vue" } });
        }}
      >
        <p>Vue.js</p>
      </Tag>
    </div>
    <div>
      <Tag
        color={judge_tag_color("nest")}
        onClick={() => {
          Router.push({ pathname: "/", query: { tags: "nest" } });
        }}
      >
        <p>Nest.js</p>
      </Tag>
    </div>
    <div>
      <Tag
        color={judge_tag_color("angular")}
        onClick={() => {
          Router.push({ pathname: "/", query: { tags: "angular" } });
        }}
      >
        <p>Angular</p>
      </Tag>
    </div>
    <div>
      <Tag
        color={judge_tag_color("life")}
        onClick={() => {
          Router.push({ pathname: "/", query: { tags: "life" } });
        }}
      >
        <p>Life</p>
      </Tag>
    </div>
    <div>
      <Tag
        color={judge_tag_color("rn")}
        onClick={() => {
          Router.push({ pathname: "/", query: { tags: "rn" } });
        }}
      >
        <p>RN</p>
      </Tag>
    </div>
    <div>
      <Tag
        color={judge_tag_color("css")}
        onClick={() => {
          Router.push({ pathname: "/", query: { tags: "css" } });
        }}
      >
        <p>CSS</p>
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
          transition: all 0.5s;
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
        }
      `}
    </style>
  </div>
);

export default memo(MyTag);
