import React from "react";
import { NavState } from "../../components/NavState/NavState";
import { EstadoPageProps } from "../../interfaces/estado.interface";
import { HeaderState } from "../../components/HeaderState/HeaderState";
import { Footer } from "../../components/Footer/Footer";
import { DescriptionSection } from "../../sections/DescriptionSection/DescriptionSection";
import { SourcesSection } from "../../sections/SourcesSection/SourcesSection";

export const StatePage: React.FC<EstadoPageProps> = ({ estado }) => {
    return (
        <>
            <NavState />
            <HeaderState estado={estado} />
            <DescriptionSection estado={estado} />
            <SourcesSection estado={estado} />
            <Footer />
        </>
    )
}