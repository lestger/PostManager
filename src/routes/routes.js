import {About} from "../Pages/About";
import {Error} from "../Pages/Error";
import {PostPage} from "../Pages/PostPage";
import {PostsList} from "../Pages/PostsList";
import {Login} from "../Pages/Login";

export  const privateRoutes=[
    {path:'/posts',component:<PostsList/>,exact:true},
    {path:'/about',component:<About/>, exact:true},
    {path:'/posts/:id',component:<PostPage/>, exact:true},
    {path:'/error',component:<Error/>, exact:true}
]
export  const publicRoutes=[
    {path:'/posts',component:<Login/>,exact:true},
    {path:'/error',component:<Error/>, exact:true}
]