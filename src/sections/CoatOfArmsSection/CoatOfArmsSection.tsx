import { StatePageProps } from "../../interfaces/state.interface";
import styles from "./styles.module.scss";

export const CoatOfArmsSection: React.FC<StatePageProps> = ({ state }) => {
    return (
        <section className={styles.coat_of_arms}>
            <div className={styles.composition_content}>
                <h2>Brasão</h2>
                {/* {state.composition.map((comp, index) => (
                    <p key={index}>{comp}</p>
                ))} */}
            </div>
            <div className={styles.composition_flag}>
                <img src={state.coatOfAmrs} alt={`Bandeira ${state.name}`} />
            </div>
        </section>
    )
}