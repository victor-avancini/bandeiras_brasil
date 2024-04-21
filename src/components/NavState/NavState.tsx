import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { IoIosArrowBack } from "react-icons/io";


export const NavState = () => {
    return (
        <nav className={styles.nav_main}>
            <div className={styles.back_button}>
                <Link to="/" className={styles.links}><IoIosArrowBack />Voltar</Link>
            </div>
            <div className={styles.about_and_glossary}>
                <Link to="/sobre" className={styles.links}>Sobre</Link>
                <Link to="/glossario" className={styles.links}>Glossário</Link>
            </div>
        </nav>
    )
}