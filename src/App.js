import {BrowserRouter} from "react-router-dom";
import {AppRoutes} from "./components/AppRoutes";
import {Navbar} from "./style/UI/Nav/Navbar";
import {useEffect, useState} from "react";
import {AuthContext} from "./components/AuthContext";


function App() {
const [isLogin,setIsLogin]=useState(false);
const[isLoading,setIsLoading]=useState(true);
useEffect(()=>{
    setIsLogin(JSON.parse(localStorage.getItem('auth')))
    setIsLoading(false);
},[])
    return (
<AuthContext.Provider value={{isLogin, setIsLogin,isLoading}}>
    <BrowserRouter>
        <Navbar/>
        <AppRoutes/>
    </BrowserRouter>
</AuthContext.Provider>

  );
}

export default App;
