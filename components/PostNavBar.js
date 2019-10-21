import NavBar from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import {markdown} from './Post'
import '../static/components/postnavbar.css'
import { IconFont } from '../pages'

const PostNavBar =() => {
  return (
    <div className='navbar-main'>
      <div className='navbar-tilte'>
        <IconFont type='icon-mulu' className='mulu' />
        <div>目录</div>
      </div>
      <NavBar 
        className='navbar'
        source={markdown}
        ordered={false}
      />
    </div>
  )
}

export default PostNavBar