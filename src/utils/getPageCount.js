import {useMemo} from "react";


export const getPageCount=(totalCount, limit)=>{
    return Math.ceil(totalCount/limit);
}

export const usePagination = (pages)=>{
    return useMemo(() => {
        let result = []
        for (let i = 0; i < pages; i++) {
            result.push(i + 1);
        }
        return result;

    }, [pages]);
}
