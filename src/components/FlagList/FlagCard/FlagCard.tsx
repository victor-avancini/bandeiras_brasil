import React from "react";
import { Link } from "react-router-dom";
import { FlagCardProps } from "../../../data/FlagsData";

export const FlagCard: React.FC<FlagCardProps> = ({ estado }) => {
    return (
        <li className="flag_item">
            <Link to={`/${estado.sigla}`}>
            <div className="flag state">
                <img src={estado.bandeira} alt={`Bandeira do ${estado.nome}`} />
            </div>
            <div className="name">
                <p>{estado.nome}</p>
            </div>
            </Link>
        </li>
    )
}