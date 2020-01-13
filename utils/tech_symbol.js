/*
 * @Date: 2019-11-01 08:19:21
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-13 23:10:32
 * @content: I
 */
export const techSymbol = ctx => {
  switch (ctx) {
    case "react":
      return "http://eswang.gitee.io/blog_pic/image/react.png";
    case "vue":
      return "http://eswang.gitee.io/blog_pic/image/vue.png";
    case "css":
      return "http://eswang.gitee.io/blog_pic/image/css.png";
    case "angular":
      return "http://eswang.gitee.io/blog_pic/image/angular.png";
    case "nest":
      return "http://eswang.gitee.io/blog_pic/image/nest.svg";
    case "life":
      return "http://eswang.gitee.io/blog_pic/image/life.png";
    case "rn":
      return "http://eswang.gitee.io/blog_pic/image/react.png";
    default:
      return "http://eswang.gitee.io/blog_pic/image/js.png";
  }
};
