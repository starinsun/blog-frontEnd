/*
 * @Date: 2019-10-21 23:25:19
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-21 19:27:10
 * @content: I
 */
import { Tag, Divider } from "antd";
import { IconFont } from "../pages";
import marked from "marked";
import hljs from "highlight.js";
import { PostContext } from "../pages/blogs/[pid]";
import React, { useContext, memo } from "react";
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
      <div className='post-img'>
        <img alt={markdown.title} src={markdown.img} />
      </div>
      <div className='post-titles'>
        <div className='post-title'>{markdown.title}</div>
        <div className='post-intro'>{markdown.intro}</div>
        <div className='post-date'>
          <span className='post-time'>
            {markdown.time + "  |  " + markdown.readtime + "min可读完"}
          </span>
          <div className='post-tag'>
            <IconFont
              type='icon-biaoqiansuoyin'
              className='icon'
              style={{ fontSize: 40, position: "absolute", left: -12 }}
            />
            {markdown.tags.map(tag => (
              <Tag
                color={judge_tag_color(tag)}
                key={tag}
                style={{
                  fontSize: "1.6rem",
                  marginLeft: ".7rem",
                  height: "2rem",
                  lineHeight: 1
                }}>
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      </div>
      <Divider></Divider>
      <div
        className='post-contents'
        dangerouslySetInnerHTML={{ __html: marked_content }}></div>
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
            color: #636e72;
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
            position: relative;
          }

          .icon {
            font-size: 2rem;
          }

          .post-img img {
            width: 100%;
            margin-bottom: 0;
          }

          .post-contents {
            padding: 0 0.6rem;
          }

          .post-time {
            font-size: 1.2rem;
            color: #000;
          }
        `}
      </style>
      <style jsx global>
        {`
          pre {
            display: block;
            background-color: #c1c1c1;
            padding: 0.5rem;
            overflow-y: auto;
            font-weight: 300;
            border-radius: 0.5rem;
          }
          code {
            display: inline-block;
            background-color: #c1c1c1;
            font-size: 0.9rem;
            padding-left: 0.2rem;
            padding-right: 0.2rem;
            color: #000;
            margin: 0 0.1rem;
          }
          @media (max-width: 768px) {
            p img {
              display: block;
              width: 80vw;
              margin: 1rem;
            }
          }
          @media (min-width: 768px) {
            p img {
              display: block;
              width: 48vw;
              margin: 1rem;
            }
          }
          .post-contents > h2 {
            font-size: 1.8rem;
            font-weight: 600;
            padding-bottom: 8px;
            border-bottom: solid 1px #ddd;
          }
          .post-contents > h1 {
            font-size: 1.8rem;
            font-weight: 600;
            padding-bottom: 8px;
            border-bottom: solid 1px #ddd;
          }
          .post-contents p {
            font-size: 1rem;
          }
          .post-contents ol li {
            margin-top: 5px;
            line-height: 1.8;
          }
        `}
      </style>
    </>
  );
};

export default memo(Post);
