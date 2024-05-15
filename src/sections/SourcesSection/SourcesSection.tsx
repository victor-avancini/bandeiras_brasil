import { CiLink } from "react-icons/ci";
import { StatePageProps } from "../../interfaces/state.interface";
import styles from "./styles.module.scss";

export const SourcesSection: React.FC<StatePageProps> = ({ state }) => {
    return (
        <section className={styles.sources}>
            <h3>Referências</h3>
            <ul>
                {state.sources.map((source, index) => (
                    <li className={styles.source}>
                        <a key={index} href={source.link} target="_blank">{source.title}<CiLink /></a>
                    </li>
                ))}
            </ul>
        </section>
    )
}