import { ColorCardProps } from "../../interfaces/state.interface";
import styles from "./styles.module.scss";

export const ColorCard: React.FC<ColorCardProps> = ({ color }) => {
    return (
            <div className={styles.color}>
                <div className={styles.color_box} style={{ backgroundColor: color.hex }}></div>
                <div className={styles.color_name}>{color.name}</div>
                <div className={styles.color_hex}>{color.hex}</div>
            </div>
    )
}