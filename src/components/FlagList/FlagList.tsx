import { states } from "../../data/FlagsData";
import { State } from "../../interfaces/state.interface";
import { FlagCard } from "./FlagCard/FlagCard";
import styles from "./style.module.scss";

export const FlagList = () => {
    return (
        <ul className={styles.flag_list}>
            {states.map((state: State) => (
                <FlagCard key={state.id} state={state} />
            ))}
        </ul>
    )
}
