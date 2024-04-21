import { EstadoPageProps } from "../../interfaces/estado.interface";
import styles from "./styles.module.scss";

export const DescriptionSection: React.FC<EstadoPageProps> = ({ estado }) => {
    return (
        <section className={styles.intro}>
            {estado.description.map((desc, index) => (
                <p key={index}>{desc}</p>
            ))}
        </section>
    )
}