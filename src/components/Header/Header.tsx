import { Link } from "react-router-dom";
import BRAflag from "../../assets/Flag_of_Brazil.svg";
import styles from "./style.module.scss";

export const Header = () => {
    return (
        <header>
            <div className={styles.name}>
                <h1>Brasil</h1>
                <div className={styles.flag}>
                    <Link to="/br"><img src={BRAflag} alt="Bandeira do Brasil" /></Link>
                </div>
            </div>
            <div className={styles.description}>
                <p>Um guia das bandeiras dos estados do Brasil</p>
            </div>
        </header>
    )
}