import { CiLink } from "react-icons/ci";
import { EstadoPageProps } from "../../interfaces/estado.interface";
import styles from "./styles.module.scss";

export const SourcesSection: React.FC<EstadoPageProps> = ({ estado }) => {
    return (
        <section className={styles.sources}>
            <h3>Sources</h3>
            {estado.sources.map((source, index) => (
                <p key={index}><a href={source.link}>{source.title}</a><CiLink /></p>
            ))}
        </section>
    )
}