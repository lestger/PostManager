import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes/routes";
import {useContext} from "react";
import {AuthContext} from "./AuthContext";
import Loader from "../style/UI/Loader/Loader";

export const AppRoutes = () => {
const auth=useContext(AuthContext);
    if(auth.isLoading  ){return(<Loader/>)}

    return (
        <Routes>
            {auth.isLogin
                ?
                privateRoutes.map((route,index)=> <Route path={route.path} exact={route.exact} element={route.component} key={index}/>)
                :
                publicRoutes.map((route,index)=> <Route path={route.path} exact={route.exact} element={route.component} key={index}/>)
            }
            <Route path={"*"} element={<Navigate to={`/${auth.isLogin?'posts':'login'}`}/>}/>
        </Routes>
    )
}