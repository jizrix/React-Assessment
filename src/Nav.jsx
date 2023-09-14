import { Link } from "react-router-dom"

const Nav = () => {
    return(
        <div className="navbar">
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/owner'}>Owner</Link></li>
            </ul>
        </div>
    )
}
export default Nav