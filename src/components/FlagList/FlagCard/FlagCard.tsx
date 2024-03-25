import { Link } from "react-router-dom"

export const FlagCard = () => {
    return (
        <li className="flag_item">
            <Link to="/estado">
            <div className="flag state">
                <img src="" alt="" />
            </div>
            <div className="name">
                <p>nome estado</p>
            </div>
            </Link>
        </li>
    )
}