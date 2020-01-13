/*
 * @Date: 2020-01-13 13:10:50
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-13 15:03:35
 * @content: I
 */
import React from "react";
import Router from "next/router";
import Link from "next/link";
import { Button } from "antd";
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
        <Button
          size='large'
          style={{ marginTop: ".3rem", marginLeft: ".5rem" }}
          onClick={() => {
            Router.push("/");
          }}
        >
          <IconFont type='icon-shou' style={{ fontSize: 28 }} />
          CODE
          <IconFont type='icon-daohang' style={{ fontSize: 24 }} />
        </Button>
        <Button
          size='large'
          style={{ marginTop: ".3rem", marginLeft: ".5rem" }}
          onClick={() => {
            Router.push("/life");
          }}
        >
          <IconFont type='icon-shou' style={{ fontSize: 28 }} />
          LIFE
          <IconFont type='icon-ins' style={{ fontSize: 24 }} />
        </Button>
        <Button
          size='large'
          style={{ marginTop: ".3rem", marginLeft: ".5rem" }}
        >
          <IconFont type='icon-shou' style={{ fontSize: 28 }} />
          Other
        </Button>
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
