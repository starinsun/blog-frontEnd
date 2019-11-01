export const techSymbol = (ctx) => {
  switch(ctx) {
    case 'react':
      return 'https://res.cloudinary.com/practicaldev/image/fetch/c_scale,fl_progressive,q_auto,w_180/f_auto/https://thepracticaldev.s3.amazonaws.com/uploads/badge/badge_image/26/react-sticker.png' 
    case 'vue':
      return 'https://res.cloudinary.com/practicaldev/image/fetch/c_scale,fl_progressive,q_auto,w_180/f_auto/https://thepracticaldev.s3.amazonaws.com/uploads/badge/badge_image/27/vue-sticker.png'
    case 'css':
      return 'https://res.cloudinary.com/practicaldev/image/fetch/c_scale,fl_progressive,q_auto,w_180/f_auto/https://thepracticaldev.s3.amazonaws.com/uploads/badge/badge_image/18/57795357-be29b880-7713-11e9-9748-b08c782b58d7.png'
    case 'angular':
      return 'https://res.cloudinary.com/practicaldev/image/fetch/c_scale,fl_progressive,q_auto,w_180/f_auto/https://thepracticaldev.s3.amazonaws.com/uploads/badge/badge_image/28/angular-sticker.png'
    case 'nest':
      return 'https://docs.nestjs.com/assets/logo-small.svg'
    case 'life':
      return 'https://res.cloudinary.com/practicaldev/image/fetch/c_scale,fl_progressive,q_auto,w_180/f_auto/https://thepracticaldev.s3.amazonaws.com/uploads/badge/badge_image/29/graphql-sticker.png'
    default:
      return 'https://res.cloudinary.com/practicaldev/image/fetch/c_scale,fl_progressive,q_auto,w_180/f_auto/https://thepracticaldev.s3.amazonaws.com/uploads/badge/badge_image/23/node-sticker.png'
  }
}