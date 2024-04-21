import React from "react";
import { Link } from "react-router-dom";
import { FlagCardProps } from "../../../interfaces/state.interface";
import styles from "./style.module.scss"
import { MdArrowRightAlt } from "react-icons/md";

export const FlagCard: React.FC<FlagCardProps> = ({ state }) => {
    return (
        <li className={styles.flag_item}>
            <Link to={`/${state.name}`} className={styles.flag_link}>
                <div className={styles.flag_state}>
                    <img src={state.flag} alt={`Bandeira ${state.name}`} />
                </div>
                <div className={styles.flag_name}>
                    <p>{state.name} <MdArrowRightAlt className={styles.arrow_color} /></p>
                </div>
            </Link>
        </li>
    )
}