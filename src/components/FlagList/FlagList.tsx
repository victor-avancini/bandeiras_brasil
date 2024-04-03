import { estados } from "../../data/FlagsData";
import { Estado } from "../../interfaces/estado.interface";
import { FlagCard } from "./FlagCard/FlagCard";
import styles from "./style.module.scss";

export const FlagList = () => {
    return (
        <ul className={styles.flag_list}>
            {estados.map((estado: Estado, index: number) => (
                <FlagCard key={index} estado={estado} />
            ))}
        </ul>
    )
}