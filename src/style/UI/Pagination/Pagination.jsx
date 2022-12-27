import MyButton from "../button/MyButton";
import {usePagination} from "../../../utils/getPageCount";

export const Pagination = ({totalPages,page, changePage}) => {
    const pagesArray= usePagination(totalPages);
    return (
        <><div style={{display:'flex',justifyContent:'center'}}>
            {pagesArray.map((p,index)=>(
                <MyButton
                    style={p===page?{margin:'5px', fontWeight:'bold'}:{margin: '5px'}}
                    key={index}
                    onClick={()=>changePage(p)}>{p}</MyButton>
            ))
            }

        </div></>
    )
}