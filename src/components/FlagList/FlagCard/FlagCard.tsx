import React from "react";
import { Link } from "react-router-dom";
import { FlagCardProps } from "../../../interfaces/estado.interface";
import styles from "./style.module.scss"

export const FlagCard: React.FC<FlagCardProps> = ({ estado }) => {
    return (
        <li className={styles.flag_item}>
            <Link to={`/${estado.sigla}`} className={styles.flag_link}>
                <div className={styles.flag_state}>
                    <img src={estado.bandeira} alt={`Bandeira ${estado.nome}`} />
                </div>
                <div className={styles.flag_name}>
                    <p>{estado.nome}</p>
                </div>
            </Link>
        </li>
    )
}