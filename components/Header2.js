/*
 * @Date: 2020-01-13 13:10:50
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-21 19:23:17
 * @content: I
 */
import React from "react";
import Link from "next/link";
import { IconFont } from "../pages/index";

const Header2 = () => {
  return (
    <div className='header'>
      <div className='header_left'>
        <div className='header_Logo'>
          <Link href='/'>
            <a>BLOG</a>
          </Link>
        </div>
        <div className='header_txt'>
          <p>e</p>
          <p>s</p>
          <p>w</p>
          <p>a</p>
          <p>ng</p>
        </div>
      </div>
      <div className='header_Option'>
        <Link href='/'>
          <div className='header_blog'>
            <IconFont
              type='icon-tubiaozhizuomoban-'
              style={{ fontSize: 28, marginRight: 5 }}
            />
            Article
          </div>
        </Link>

        <Link href='/life'>
          <div className='header_life'>
            <IconFont
              type='icon-ins'
              style={{ fontSize: 28, marginRight: 5 }}
            />
            Photos
          </div>
        </Link>

        <div className='header_other'>
          <IconFont type='icon-shou' style={{ fontSize: 28 }} />~
        </div>
      </div>
      <style jsx>
        {`
          .header {
            display: flex;
            background-color: #fff;
            padding: 0.4rem;
            overflow: hidden;
            height: 4rem;
            border-bottom: 1px solid #000;
          }
          .header_left {
            display: flex;
          }
          .header_Logo {
            font-size: 2.3rem;
            font-weight: bolder;
            text-align: left;
            padding-right: 0.8rem;
            border-right: 0.1rem solid #333;
            color: #000;
            text-shadow: 0px 2px 3px #bbb;
          }
          .header_txt {
            font-size: 1.8rem;
            font-weight: 500;
            color: #000;
            margin-bottom:5px;
            display: flex;
            align-items:flex-end;
          }
          .header_txt::before {
            content:'';
            width:0.5rem;
            background-color:#fff
          }
          .header_txt p {
            display:inline;
            line-height:0.8;
            text-align:center;
            margin-bottom:0;
            background-color:#fff;
            border-radius:50%;
            transition:1s;
          }
          .header_txt p:nth-of-type(1) {
            width:35px;
            height:35px;
            font-size:36px;
            background-color:#7bed9f;
          }
          .header_txt p:nth-of-type(3) {
            width:28px;
            height:28px;
            line-height: 1;
            font-size:26px;
            background-color:#ffa502;
          }
          .header_txt:hover>p:nth-of-type(1){
            animation: eswang 1s infinite linear
          }
          .header_txt:hover>p:nth-of-type(3){
            animation: esang 1s infinite linear
          }
          @keyframes eswang {
            to{
              transform: rotate(360deg);
            }
          }
          @keyframes esang {
            to{
              transform: rotate(-360deg);
            }
          }
          .header_Option {
            display: flex;
          }

          .header_blog,
          .header_life {
            margin-top: 0.5rem;
            padding: 0 1.2rem 0 1.2rem;
            transition: transform 200ms;
          }
          .header_other {
            margin-top: 0.5rem;
            padding-left: 1.2rem;
          }

          .header_blog :hover {
            transform: scale(1.1);
            cursor: pointer;
          }
          .header_life :hover {
            transform: scale(1.1);
            cursor: pointer;
          }
          .header_other :hover {
            cursor: not-allowed;
          }

          @media (max-width: 768px) {
            .header {
              display: flex;
              justify-content: space-between;
            }
            .header_txt,
            .header_other {
              display: none;
            }
            .header_Option {
              transform: scale(0.8);
            }
          }
          @media (min-width: 768px) {
            .header {
              justify-content: space-around;
            }
            .header_Logo {
              margin-left: 4rem;
            }
          }
          header_txt
        `}
      </style>
    </div>
  );
};

export default Header2;
