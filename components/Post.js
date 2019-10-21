import { Tag, Divider } from "antd"
import { IconFont } from "../pages"

const Post = () => {
  return (
    <>
      <div className='post-img'>
          <img alt='123' src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png' />
        </div>
      <div className="post-titles">
        <div className='post-title'>我和我的祖国，一刻也不能分割</div>
        <div className='post-intro'>晚风吹过，海的赤字，奔向海的欢乐</div>
        <div className='post-date' >
          <span>2019-10-1   10min可读完</span>
          <span className='post-tag'>
            <IconFont type='icon-biaoqiansuoyin' className='icon' />:
            <Tag color='green'>Vue</Tag>
            <Tag color='volcano'>Nest</Tag>
          </span>
        </div>
      </div>
      <Divider></Divider>
      <div className='post-contents'>
        敬请期待
      </div>
    </>
  )
}

export default Post