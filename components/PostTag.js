import {IconFont} from '../pages/index'
import '../static/components/postTag.css'

const PostTag = () => {
  return (
    <div className='main'>
      <div className='guzhang' >
        <IconFont type='icon-guzhang' />
      </div>
      点个赞~
      <div className='pinglun'>
        <IconFont type='icon-wo-' />
      </div>
      评个论~
      <div className='csdn'>
        <IconFont type='icon-csdn' />
      </div>
      有文章~
      <div className='github'>
        <IconFont type='icon-github' />
      </div>
      有源码~
      <div className='juejin'>
        <IconFont type='icon-juejin' />
      </div>
      这也有~
    </div>
  )
}

export default PostTag