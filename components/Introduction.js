import { Avatar, Divider } from "antd"
import { IconFont } from "../pages"
import '../static/components/introduction.css'

const Introduction = () => {
  return (
    <div className='intro'>
      <div className='avatar'><Avatar size={100} src="http://pz76pyfij.bkt.clouddn.com/0209353017-6.jpg" /></div>
      <div className='author'>
        <h2>ESWang</h2>
        <h4>一只试水前端的Frighten Bird</h4>
        <Divider>Follow me By</Divider>
      </div>
      <div className='iconfont'>
        <IconFont type='icon-github' className='github-icon'></IconFont>
        <IconFont type='icon-csdn' className='csdn-icon'></IconFont>
        <IconFont type='icon-ziyuan' className='zhihu-icon'></IconFont>
        <IconFont type='icon-juejin' className='juejin-icon'></IconFont>
      </div>
    </div>
  )
}

export default Introduction