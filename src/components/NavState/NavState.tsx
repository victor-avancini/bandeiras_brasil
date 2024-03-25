import { Link } from "react-router-dom";
import styles from "./style.module.scss";


export const NavState = () => {
    return (
        <nav className={styles.nav_main}>
            <div>
                <Link to="/">Voltar</Link>
            </div>
            <div>
                <Link to="/sobre">Sobre</Link>
                <Link to="/glossario">Glossário</Link>
            </div>
        </nav>
    )
}