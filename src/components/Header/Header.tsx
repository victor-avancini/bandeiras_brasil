import { Link } from "react-router-dom";
import BRAflag from "../../assets/Flag_of_Brazil.svg";

export const Header = () => {
    return (
        <header>
            <div className="name">
                <h1>Bandeiras do BR</h1>
                <div>
                    <Link to="/br"><img src={BRAflag} alt="Bandeira do Brasil" /></Link>
                </div>
            </div>
            <div className="description">
                <p></p>
            </div>
        </header>
    )
}