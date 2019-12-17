/*
 * @Date: 2019-10-21 23:25:19
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-12-17 16:32:28
 * @content: I
 */
import { Tag, Divider } from "antd";
import { IconFont } from "../pages";
import Markdown from "react-markdown";
import { PostContext } from "../pages/posts";
import React, { useContext } from "react";
import { judge_tag_color } from "../utils/tagColor";

const Post = () => {
  const markdown = useContext(PostContext);

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
      <div className="post-contents">
        <Markdown source={markdown.content} escapeHtml={false} />
      </div>
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
    </>
  );
};

export default Post;
