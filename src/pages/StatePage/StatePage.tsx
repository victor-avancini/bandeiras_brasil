import React from "react";
import { NavState } from "../../components/NavState/NavState";
import { EstadoPageProps } from "../../interfaces/estado.interface";
import { HeaderState } from "../../components/HeaderState/HeaderState";
import { Footer } from "../../components/Footer/Footer";

export const StatePage: React.FC<EstadoPageProps> = ({ estado }) => {
    return (
        <>
            <NavState />
            <HeaderState estado={estado} />
            <Footer />
        </>
    )
}