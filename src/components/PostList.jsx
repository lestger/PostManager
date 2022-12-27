import React from 'react'
import Post from "./Post";
import {TransitionGroup, CSSTransition} from 'react-transition-group';
export default function PostList({posts,remove}) {

  
  return (

      posts.length!==0 ?
          <TransitionGroup>
              {
                  posts.map((post) =>

                      <CSSTransition
                          timeout={400}
                          classNames="post"
                          key={post.id}
                      >
                          <Post postData={post} remove={remove} id={post.id}  key={post.id}/>

                      </CSSTransition>
                  )}


          </TransitionGroup>
          : <h2 style={{textAlign:'center'}}>Посты не найдены!</h2>

         
        
      
    
  )
}
