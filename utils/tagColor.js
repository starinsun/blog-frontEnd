/*
 * @Date: 2019-11-01 02:35:56
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-20 14:41:05
 * @content: I
 */
export const judge_tag_color = text => {
  switch (text) {
    case "vue":
      return "green";
    case "react":
      return "cyan";
    case "nest":
      return "volcano";
    case "angular":
      return "magenta";
    case "life":
      return "#F3DB35";
    case "rn":
      return "#3eeeee";
    case "css":
      return "red";
    default:
      return "silver";
  }
};
