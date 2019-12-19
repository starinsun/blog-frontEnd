/*
 * @Date: 2019-10-21 23:25:19
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2019-12-19 19:39:28
 * @content: I
 */
import { Tag, Divider } from "antd";
import { IconFont } from "../pages";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import { PostContext } from "../pages/posts";
import React, { useContext } from "react";
import { judge_tag_color } from "../utils/tagColor";

const Post = () => {
  const markdown = useContext(PostContext);
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true, //样式和github一样
    pedantic: false, //false允许容错
    sanitize: false, //false不忽略html标签
    tables: true, //允许我们输出表格
    breaks: false, //不支持github换行符
    smartLists: true, // 列表样式
    smartypants: true,
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    }
  });
  let marked_content = marked(markdown.content);

  return (
    <>
      <div className="post-img">
        <img alt={markdown.title} src={markdown.img} />
      </div>
      <div className="post-titles">
        <div className="post-title">{markdown.title}</div>
        <div className="post-intro">{markdown.intro}</div>
        <div className="post-date">
          <span className="post-time">
            {markdown.time + "  |  " + markdown.readtime + "min可读完"}
          </span>
          <div className="post-tag">
            <IconFont type="icon-biaoqiansuoyin" className="icon" />:
            {markdown.tags.map(tag => (
              <Tag
                color={judge_tag_color(tag)}
                key={tag}
                style={{
                  fontSize: "1.5rem",
                  marginLeft: ".3rem",
                  height: "2rem"
                }}
              >
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      </div>
      <Divider></Divider>
      <div
        className="post-contents"
        dangerouslySetInnerHTML={{ __html: marked_content }}
      ></div>
      <style jsx>
        {`
          .post-titles {
            padding: 1rem;
          }

          .post-title {
            text-align: left;
            font-size: 2rem;
            font-weight: 600;
          }

          .post-intro {
            margin-top: 0.8rem;
            text-align: left;
            font-size: 1.2rem;
            font-weight: 500;
            font-style: italic;
          }

          .post-date {
            margin: 0.5rem 0 0 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .post-tag {
            font-size: 2rem;
          }

          .icon {
            font-size: 2rem;
          }

          .post-img img {
            width: 100%;
            margin-bottom: 0;
          }

          .post-contents {
            padding: 0 1rem;
          }

          .post-time {
            font-size: 1.1rem;
          }
        `}
      </style>
      <style jsx global>
        {`
          pre {
            display: block;
            background-color: #f3f3f3;
            padding: 0.5rem;
            overflow-y: auto;
            font-weight: 300;
            border-radius: 0.3rem;
          }
          code {
            display: inline-block;
            background-color: #f3f3f3;
            border-radius: 3px;
            font-size: 0.8rem;
            padding-left: 0.2rem;
            padding-right: 0.2rem;
            color: #4f4f4f;
            margin: 0 0.1rem;
          }
          p img {
            display: block;
            width: 40rem;
            margin: 1rem;
          }
          .post-contents h2 {
            font-size: 2rem;
            font-weight: 600;
          }
          .post-contents p {
            font-size: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default Post;
