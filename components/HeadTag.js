import React, { useContext } from 'react';
import { TagContext } from '../pages/index'
import '../static/components/headTag.css'
import {techSymbol} from '../utils/tech_symbol'

const HeadTag = () => {
  const ctx = useContext(TagContext)
  return (
    <div className='headTag'>
      <img src={techSymbol(ctx)} alt={ctx} className='headTag_img'/>
      <p className='headTag_font'>{ctx.toUpperCase()}</p>
    </div>
  )
}

export default HeadTag