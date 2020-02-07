/*
 * @Date: 2019-10-20 07:17:57
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-20 11:13:58
 * @content: I
 */
import { List, Avatar } from "antd";
import React, { useContext, memo } from "react";
import { PostsContext } from "../pages/index";
import { IconFont } from "../pages/index";
import Router from "next/router";

const PostList = () => {
  const data = useContext(PostsContext);

  const IconText = ({ type, text }) => (
    <span>
      <IconFont
        type={type}
        style={{ margin: "0 .7rem 0 .7rem", fontSize: "1.3rem" }}
      />
      {text}
    </span>
  );

  function goDetail(id) {
    Router.push({ pathname: "/posts", query: { id: id } });
    window.scrollTo({ top: 0 });
  }

  return (
    <>
      <List
        itemLayout='vertical'
        size='large'
        pagination={{
          onChange: () => {
            window.scrollTo({ top: 0 });
          },
          pageSize: 10
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                type='icon-xingxing'
                text={item.tags[0]}
                key={`list-vertical-tag${item._id}`}
              />,
              <IconText
                type='icon-guzhang'
                text={item.zan}
                key={`list-vertical-zan${item._id}`}
              />,
              <IconText type='icon-wo-' key={`list-vertical-wo${item._id}`} />
            ]}
            extra={
              <img
                alt='无所谓'
                src={item.img}
                style={{
                  width: "17rem"
                }}
              />
            }
          >
            <List.Item.Meta
              avatar={
                <Avatar src={item.author} style={{ marginTop: "0.2rem" }} />
              }
              title={
                <p
                  style={{ fontSize: "1.3rem", fontWeight: 600 }}
                  onClick={() => {
                    goDetail(item._id);
                  }}
                >
                  {item.title}
                </p>
              }
              description={`${item.time} | ${item.readtime}min 可以读完`}
            />
            <div
              className='post-content'
              onClick={() => {
                goDetail(item._id);
              }}
            >
              {item.intro}
            </div>
          </List.Item>
        )}
      />

      <style jsx>
        {`
          .post-content {
            margin: 0 0.7rem 0 0.7rem;
            font-weight: 500;
          }
          .post-content :hover {
            cursor: pointer;
            color: #aaa;
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

export default memo(PostList);
