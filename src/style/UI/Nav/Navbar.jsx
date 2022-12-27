import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <><nav>
            <Link to={'/about'} className={'link'}>About</Link>
            <Link to={'/posts'} className={'link'}>Posts</Link>
            <hr/>
        </nav></>
    )
}