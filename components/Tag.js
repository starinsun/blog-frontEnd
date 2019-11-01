import { Tag } from "antd";
import '../static/components/tag.css'
import { IconFont } from "../pages";
import { judge_tag_color } from '../utils/tagColor'
import Router from "next/router";

const MyTag = () => (
  <div className='block'>
    <IconFont type='icon-biaoqiansuoyin' className='daohang'/>
    <br/>
    <div className='react'>
      <Tag color={judge_tag_color('react')} onClick={() => {Router.push({pathname: '/', query:{tags: 'react'}})}} >React.js</Tag>
    </div>
    <div className='vue'>
      <Tag color={judge_tag_color('vue')} onClick={() => {Router.push({pathname: '/', query:{tags: 'vue'}})}} >Vue.js</Tag>
    </div>
    <div className='nest'>
      <Tag color={judge_tag_color('nest')} onClick={() => {Router.push({pathname: '/', query:{tags: 'nest'}})}} >Nest.js</Tag>
    </div>
    <div className='angular'>
      <Tag color={judge_tag_color('angular')} onClick={() => {Router.push({pathname: '/', query:{tags: 'angular'}})}} >Angular</Tag>
    </div>
    <div className='life'>
      <Tag color={judge_tag_color('life')} onClick={() => {Router.push({pathname: '/', query:{tags: 'life'}})}} >Life</Tag>
    </div>
    <div className='css'>
      <Tag color={judge_tag_color('css')} onClick={() => {Router.push({pathname: '/', query:{tags: 'css'}})}} >CSS</Tag>
    </div>
  </div>
)

export default MyTag