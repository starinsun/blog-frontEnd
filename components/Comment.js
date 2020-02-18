/*
 * @Date: 2020-01-13 20:35:02
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-20 10:50:37
 * @content: I
 */
import React, { useEffect } from "react";
import Gitalk from "gitalk";

const Comment = props => {
  useEffect(() => {
    const gitalk = new Gitalk({
      clientID: "dcc1c64ca1bbb5ccd90c",
      clientSecret: "cc24f29c7a8b404401b1e2e60b7427334c5fb900",
      repo: "blog_comment",
      owner: "starinsun",
      admin: ["starinsun"],
      id: props.data._id,
      distractionFreeMode: false
    });
    gitalk.render("gitalk-container");
  }, [props.data._id]);
  return <div id='gitalk-container'></div>;
};

export default Comment;
