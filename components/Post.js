import { Tag, Divider } from "antd"
import { IconFont } from "../pages"
import Markdown from 'react-markdown'

export const markdown='# P01:课程介绍和环境搭建\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
    '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~这是加删除线的文字~~ \n\n'+
    '\`console.log(111)\` \n\n'+
    '# p02:来个Hello World 初始Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n'+
    '***\n\n\n' +
    '# p03:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p04:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '#5 p05:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p06:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p07:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '``` var a=11; ```'

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
        <Markdown 
          source = {markdown}
          escapeHtml = {false}
        />
      </div>
    </>
  )
}

export default Post