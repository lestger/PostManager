import React from 'react'
import { useState } from "react";
import MyButton from '../style/UI/button/MyButton';

export default function PostForm({ create }) {

  let [data, setData] = useState({
    title: '',
    body: '',
    id:Date.now()
  });

  const { title, body} = data;
  const handleChange = (e) => { setData({ ...data, [e.target.name]: e.target.value }) }
  const addPost = (data) => {
    create(data);
    setData({
      title: '',
      body: '',
      id:''
    })
  }
  return (
    <div>
      <div><input type='text' onChange={handleChange} value={title} name='title' placeholder="Name..." /></div>
      <div>
        <input type='text' onChange={handleChange} value={body} name='body' placeholder="Description..." />
      </div>
      <MyButton onClick={() => {addPost(data) }}>Add</MyButton>
    </div>
  )
}
