import MyButton from "../style/UI/button/MyButton";
import Modal from "../style/UI/modal/Modal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../style/UI/Loader/Loader";
import PostList from "../components/PostList";
import {useEffect, useRef, useState} from "react";
import {usePost} from "../hooks/usePost";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/getPageCount";
import {useObserver} from "../hooks/useObserver";

export const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const createPost = (data) => { setPosts([...posts, data]); setActive(false)}
    const removePost = (id) => { console.log(id);setPosts(posts.filter(p => p.id !== (id))) }
    const [filter, setFilter]=useState({input:'',sort:''})
    const searchedAndSortedPosts=usePost(posts,filter.input,filter.sort);
    const [totalPages,setTotalPages]=useState(1);
    const limit=10;

    const [page,setPage]=useState(1);


    const [fetchPosts,isLoading,postError]=useFetching(async ()=>{
        const response=await PostService.getAll(limit,page);
        const totalCount=(response.headers['x-total-count']);
        setTotalPages(getPageCount(totalCount,limit));
        setPosts([...posts, ...response.data])

    })

    const lastElement=useRef();
    useObserver(lastElement,isLoading,page<totalPages,() => { setPage(page+1)})


    useEffect(()=>{fetchPosts()},[page]);

    const [active,setActive]=useState(false);

    return (
        <>
                <MyButton onClick={()=>{setActive(true)}}>Create Post</MyButton>


            <Modal active={active} setActive={setActive}>
                <PostForm create={createPost} />
            </Modal>
            <hr style={{ margin: 10 }} />
            <h1 style={{ textAlign: 'center' }}>Posts</h1>
            <PostFilter filter={filter} setFilter={setFilter} setPosts={setPosts}/>
            {postError && <h1>Ошибка! {postError}</h1>}

                <PostList remove={removePost} posts={searchedAndSortedPosts} />
            {isLoading&&<Loader/>}
            <div style={{height:10}} ref={lastElement}/>
            </>
    )
}