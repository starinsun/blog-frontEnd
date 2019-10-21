import { Tag } from "antd";
import '../static/components/tag.css'
import { IconFont } from "../pages";

const MyTag = () => (
  <div className='block'>
    <IconFont type='icon-biaoqiansuoyin' className='daohang'/>
    <br/>
    <div className='react'>
      <Tag color='cyan'>React</Tag>
    </div>
    <div className='vue'>
      <Tag color='green'>Vue</Tag>
    </div>
    <div className='nest'>
      <Tag color='volcano'>Nest</Tag>
    </div>
    <div className='angular'>
      <Tag color='magenta'>Angular</Tag>
    </div>
  </div>
)

export default MyTag