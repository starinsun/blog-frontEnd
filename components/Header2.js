/*
 * @Date: 2020-01-13 13:10:50
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-15 15:23:21
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
          <p>ESWang</p>
        </div>
      </div>
      <div className='header_Option'>
        <Link href='/'>
          <div className='header_blog'>
            <IconFont type='icon-shou' style={{ fontSize: 28 }} />
            POSTS
            <IconFont type='icon-daohang' style={{ fontSize: 24 }} />
          </div>
        </Link>

        <Link href='/life'>
          <div className='header_life'>
            <IconFont type='icon-shou' style={{ fontSize: 28 }} />
            LIVES
            <IconFont type='icon-ins' style={{ fontSize: 24 }} />
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
            display: inline-block;
            padding-left: 0.8rem;
          }
          .header_txt p {
            margin-top: 0.8rem;
            margin-bottom: 0.1rem;
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
              justify-content: space-between;
            }
            .header_Option {
              display: none;
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
        `}
      </style>
    </div>
  );
};

export default Header2;
