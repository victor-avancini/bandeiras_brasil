import { Link } from "react-router-dom";
import BRAflag from "../../assets/bandeiras/Flag_of_Brazil.svg";
import styles from "./style.module.scss";

export const Header = () => {
    return (
        <header>
            <div className={styles.name}>
                <h1>Bandeiras do Brasil</h1>
                <div className={styles.flag}>
                    <Link to="/br"><img src={BRAflag} alt="Bandeira do Brasil" /></Link>
                </div>
            </div>
            <div className={styles.description}>
                <p>Um guia simples das bandeiras dos estados brasileiros</p>
            </div>
        </header>
    )
}