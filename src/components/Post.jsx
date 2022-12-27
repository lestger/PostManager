import React from 'react'
import MyButton from '../style/UI/button/MyButton'
import {useNavigate} from "react-router-dom";

export default function Post({postData, id, remove}) {
const navigate=useNavigate();

  return (
<div className='post'>
      <div className='post_content' onClick={()=>(navigate(`/posts/${id}`))}>

        <b>{postData.id}. {postData.title}</b>
        <div>Description:{postData.body}</div>
      </div>
      <MyButton onClick={()=>{remove(id)}}>Delete</MyButton>
    </div>
  )
}
