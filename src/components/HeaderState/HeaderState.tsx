import { StatePageProps } from "../../interfaces/state.interface";
import styles from "./styles.module.scss";

export const HeaderState: React.FC<StatePageProps> = ({ state }) => {

    return (
        <header className={styles.state}>
            <div className={styles.name_state}>
                <h1>{state.name}</h1>
                <div className={styles.flag_state}>
                    <img src={state.flag} alt="Bandeira" />
                </div>
            </div>
            <div className={styles.description_state}>
                <div className={styles.nickname_state}>
                    <p>{state.nickname}</p>
                </div>
                <div className={styles.admitted}>
                    <p>{state.admitted.day} de {state.admitted.month} de {state.admitted.year}</p>
                </div>
            </div>
        </header>
    )
}