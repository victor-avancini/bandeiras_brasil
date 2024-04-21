import { EstadoPageProps } from "../../interfaces/estado.interface";
import styles from "./styles.module.scss";

export const HeaderState: React.FC<EstadoPageProps> = ({ estado }) => {

    return (
        <header className={styles.state}>
            <div className={styles.name_state}>
                <h1>{estado.name}</h1>
                <div className={styles.flag_state}>
                    <img src={estado.flag} alt="Bandeira" />
                </div>
            </div>
            <div className={styles.description_state}>
                <div className={styles.nickname_state}>
                    <p>{estado.nickname}</p>
                </div>
                <div className={styles.admitted}>
                    <p>{estado.admitted.day} de {estado.admitted.month} de {estado.admitted.year}</p>
                </div>
            </div>
        </header>
    )
}