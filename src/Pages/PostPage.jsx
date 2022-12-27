import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import {useEffect, useState} from "react";
import Loader from "../style/UI/Loader/Loader";

export const PostPage = () => {
    const params=useParams();
    const [post,setPost]=useState({})
    const [fetchPostById,isLoading,error]=useFetching(async (id)=>{
        const response= await PostService.getByID(id);
        setPost(response.data);
    })
    useEffect(()=>{fetchPostById(params.id)},[])
    return (
        <><h1>POST PAGE</h1>
            {error?<h3>Post not found</h3>:isLoading?<Loader/>:<><h4>ID:{post.id}</h4>
                    <h4>title:{post.title}</h4>
                    <h4>body:{post.body}</h4></>}

        </>

    )
}