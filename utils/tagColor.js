export const judge_tag_color = (text) =>{
  switch(text) {
    case 'vue' :
      return 'green'
    case 'react' :
      return 'cyan'
    case 'nest':
      return 'volcano'
    case 'angular':
      return 'magenta'
    case 'life':
      return 'silver'
    default:
      return 'silver'
  }
}
