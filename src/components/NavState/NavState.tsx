import { Link } from "react-router-dom";
import styles from "./style.module.scss";


export const NavState = () => {
    return (
        <nav className={styles.nav_main}>
            <div>
                <Link to="/" className={styles.links}>Voltar</Link>
            </div>
            <div>
                <Link to="/sobre" className={styles.links}>Sobre</Link>
                <Link to="/glossario" className={styles.links}>Glossário</Link>
            </div>
        </nav>
    )
}