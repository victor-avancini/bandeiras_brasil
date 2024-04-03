import React from "react";
import { NavState } from "../../components/NavState/NavState";
import { EstadoPageProps } from "../../interfaces/estado.interface";

export const StatePage: React.FC<EstadoPageProps> = ({ estado }) => {
    return (
        <>
            <NavState />
            <div>
                <h2>{estado.nome}</h2>
                <p>Sigla: {estado.sigla}</p>
                <p>Capital: {estado.capital}</p>
            </div>
        </>

    )
}