import { ColorCard } from "../../components/ColorCard/ColorCard";
import { StatePageProps } from "../../interfaces/state.interface";
import styles from "./styles.module.scss"

export const ColorsSection: React.FC<StatePageProps> = ({ state }) => {
    const colorsList = state.colors.map((color, index) => (
        <span key={index}>
            {color.name}
            {index !== state.colors.length - 1 ? (index !== state.colors.length - 2 ? ', ' : ' e ') : ''}
        </span>
    ));

    return (
        <section className={styles.colors}>
            <div className={styles.colors_content}>
                <h2>Cores</h2>
                <p>A bandeira do {state.name} possui as cores {colorsList}</p>
            </div>
            <div className={styles.colors_visuals}>
                {state.colors.map((color, index) => (
                    <ColorCard key={index} color={color} />
                ))}
            </div>
        </section>
    )
}