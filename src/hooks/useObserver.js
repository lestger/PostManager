import {useEffect, useRef} from "react";

export const useObserver=(observeElement, isLoading,condition,callback)=>{
    let observer=useRef();
    useEffect(()=>{
        if(isLoading){return};
        if(observer.current) {observer.current.disconnect()};
        const func1 = (entries)=>{
            if(entries[0].isIntersecting && condition){
                callback();
            }
        };

        observer.current = new IntersectionObserver(func1);
        observer.current.observe(observeElement.current);
    },[isLoading])
}