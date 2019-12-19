/*
 * @Date: 2019-10-20 07:17:57
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-12-17 21:29:14
 * @content: I
 */
import { Row, Col, Affix, List, Icon, Avatar } from "antd";
import React, { useState, useContext } from "react";
import { PostsContext } from "../pages/index";
import { IconFont } from "../pages/index";
import Router from "next/router";

const PostList = () => {
  const data = useContext(PostsContext);

  const IconText = ({ type, text }) => (
    <span>
      <IconFont
        type={type}
        style={{ margin: "0 .5rem 0 3rem", fontSize: "1.2rem" }}
      />
      {text}
    </span>
  );

  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 5
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                type="icon-liulanzuji"
                text={item.views}
                key="list-vertical-liulanzuji"
              />,
              <IconText
                type="icon-guzhang"
                text={item.zan}
                key="list-vertical-bixin"
              />,
              <IconText
                type="icon-wo-"
                text={item.comment}
                key="list-vertical-wo-"
              />
            ]}
            extra={
              <img
                alt="无所谓"
                src={item.img}
                style={{
                  width: "16rem"
                }}
              />
            }
            onClick={() => {
              Router.push({ pathname: "/posts", query: { id: item._id } });
            }}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.author} />}
              title={
                <p style={{ fontSize: "1.3rem", fontWeight: 600 }}>
                  {item.title}
                </p>
              }
              description={`${item.time} | ${item.readtime}min 可以读完`}
            />
            {/* 这里在MongoDB后台使用了new Date().toLocaleDateString()生成年月日，这里应该还可以加上标签，待定 */}
            <div className="post-content">{item.intro}</div>
          </List.Item>
        )}
      />

      <style jsx>
        {`
          .post-content {
            color: #555;
            margin: 0 1rem 0 3rem;
            font-weight: 500;
          }
          .post-content :hover {
            cursor: pointer;
          }
          p :hover {
            color: #abc;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default PostList;
