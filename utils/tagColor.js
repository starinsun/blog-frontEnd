/*
 * @Date: 2019-11-01 02:35:56
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-20 14:41:05
 * @content: I
 */
export const judge_tag_color = text => {
  switch (text) {
    case "react":
      return "#3eeeee";
    case "vue":
      return "green";
    case "ecmascript":
      return "#eccc68";
    case "css":
      return "red";
    case "basic":
      return "#57606f";
    case "nest":
      return "volcano";
    case "angular":
      return "#ff4757";
    case "native":
      return "cyan";
    case "life":
      return "#70a1ff";
    default:
      return "silver";
  }
};
