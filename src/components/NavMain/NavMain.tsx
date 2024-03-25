import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export const NavMain = () => {
    return (
        <nav className={styles.nav_main}>
            <Link to="/sobre" className={styles.links}>Sobre</Link>
            <Link to="/glossario" className={styles.links}>Glossário</Link>
        </nav>
    )
}