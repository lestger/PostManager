import MyButton from "../style/UI/button/MyButton";
import {useContext} from "react";
import {AuthContext} from "../components/AuthContext";

export const Login = () => {
    const setLogin=useContext(AuthContext)

    const signIn = ()=> {
        setLogin.setIsLogin(true);
    localStorage.setItem('auth','true');

    }

    return (
        <>
            <h1>Login page</h1>
            <MyButton onClick={()=>{signIn()}}>Login</MyButton>
        </>
    )
}