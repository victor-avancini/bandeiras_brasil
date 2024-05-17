import { Link } from "react-router-dom";
import BRAflag from "../../assets/bandeiras/Flag_of_Brazil.svg";
import styles from "./style.module.scss";

export const HeaderBrazil = () => {
    return (
        <header>
            <div className={styles.name}>
                <h1>Brasil</h1>
                <div className={styles.flag}>
                    <Link to="/br"><img src={BRAflag} alt="Bandeira do Brasil" /></Link>
                </div>
            </div>
            <div className={styles.description}>
                <p>Invadido pelos portugueses em 22 de Abril  de 1500</p>
                <p>Elevado ao status de Reino Unido de Portugal, Brasil e Argarves em 16 de Dezembro de 1815</p>
                <p>Declaração de independência de Portugal e criação do Imperio do Brasil em 7 de Setembro de 1822</p>
                <p>Proclamação da república em 15 de Novembro de 1889</p>
            </div>
        </header>
    )
}