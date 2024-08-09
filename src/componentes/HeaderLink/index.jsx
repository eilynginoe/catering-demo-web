import { Link } from "react-router-dom";
import "./headerLink.css";

function HeaderLink({ url, children, onClick }) {
    return (

        <Link to={url} className="link" onClick={onClick}>
            {children}
        </Link>

    )
}

export default HeaderLink;