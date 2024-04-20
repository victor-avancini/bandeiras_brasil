import { FlagList } from "../../components/FlagList/FlagList";
import styles from "./styles.module.scss"

export const FlagsSection = () => {
    return (
        <div className={styles.flag_section}>
            {/* <div className="sort"></div> */}
            <FlagList />
        </div>

    )
}