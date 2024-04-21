import { StatePageProps } from "../../interfaces/state.interface";
import styles from "./styles.module.scss";

export const DescriptionSection: React.FC<StatePageProps> = ({ state }) => {
    return (
        <section className={styles.intro}>
            {state.description.map((desc, index) => (
                <p key={index}>{desc}</p>
            ))}
        </section>
    )
}