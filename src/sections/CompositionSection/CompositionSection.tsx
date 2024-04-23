import { StatePageProps } from "../../interfaces/state.interface";
import styles from "./styles.module.scss";

export const CompositionSection: React.FC<StatePageProps> = ({ state }) => {
    return (
        <section className={styles.composition}>
            <div className={styles.composition_content}>
                <h2>Composição</h2>
                {state.composition.map((comp, index) => (
                    <p key={index}>{comp}</p>
                ))}
            </div>
            <div className={styles.composition_flag}>
                <img src={state.flag} alt={`Bandeira ${state.name}`} />
            </div>
        </section>
    )
}