/*
 * @Date: 2019-11-01 07:05:02
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-12-17 12:38:37
 * @content: 这个好像无关紧要啊
 */
import React, { useContext } from "react";
import { TagContext } from "../pages/index";
import { techSymbol } from "../utils/tech_symbol";

const HeadTag = () => {
  const ctx = useContext(TagContext);
  return (
    <div className="headTag">
      <img src={techSymbol(ctx)} alt={ctx} className="headTag_img" />
      <p className="headTag_font">{ctx.toUpperCase()}</p>
      <style jsx>
        {`
          .headTag {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 2rem 5rem 0 5rem;
            border: 0.4rem #000000 solid;
            border-radius: 0.5rem;
            box-shadow: 0.3rem 0.3rem 0 0;
          }

          .headTag_font {
            font-size: 5rem;
            margin-bottom: 0;
            font-style: italic;
          }

          .headTag_img {
            padding-top: 0.4rem;
            width: 10rem;
            height: 10rem;
          }
        `}
      </style>
    </div>
  );
};

export default HeadTag;
