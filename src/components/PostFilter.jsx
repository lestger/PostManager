import React from 'react'
import MyButton from '../style/UI/button/MyButton';

export default function PostFilter({filter,setFilter,setPosts}) {
  return (
    <div>
        <select onChange={(event) => { setFilter({...filter, sort:event.target.value}) }} >
          <option value = {''} >Сортировка</option>
          <option value = {'title'}>по названию</option>
          <option value = {'body'}>по описанию</option>
        </select>
        <input type='text' style={{ marginLeft: '15%', width: '50%' }} onChange={(event) => { setFilter({...filter, input:event.target.value}) }}  placeholder="Search..." />
        <MyButton style={{ marginLeft: 10}} onClick={()=>{setPosts([]); setFilter({...filter, input:''})}}>Clean</MyButton>
      </div>
  )
}
