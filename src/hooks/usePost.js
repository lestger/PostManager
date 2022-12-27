import {useMemo} from "react";

export const useSortedPosts= (posts,sort) => {
    const sortedPosts=useMemo(()=>{
        if(sort){
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
      },[sort,posts])
return sortedPosts;
}

export const usePost = (posts,input,sort) => {
    const sortedPosts=useSortedPosts(posts,sort);
    return useMemo(() => {
          return sortedPosts.filter(p => p.title.toLowerCase().includes(input))
      }, [input, sortedPosts]);
}