import React from "react";
import { NavState } from "../../components/NavState/NavState";
import { StatePageProps } from "../../interfaces/state.interface";
import { HeaderState } from "../../components/HeaderState/HeaderState";
import { Footer } from "../../components/Footer/Footer";
import { DescriptionSection } from "../../sections/DescriptionSection/DescriptionSection";
import { SourcesSection } from "../../sections/SourcesSection/SourcesSection";
import { Helmet } from "react-helmet-async";
import { Pagination } from "../../components/Pagination/Pagination";
import { CompositionSection } from "../../sections/CompositionSection/CompositionSection";
import { ColorsSection } from "../../sections/ColorsSection/ColorsSection";

export const StatePage: React.FC<StatePageProps> = ({ state }) => {
    return (
        <main>
            <Helmet>
                <title>{state.name} - Brasil</title>
                <link rel="icon" type="image/jpg" href={state.flag} />
            </Helmet>
            <NavState />
            <HeaderState state={state} />
            <DescriptionSection state={state} />
            <CompositionSection state={state}/>
            <ColorsSection state={state}></ColorsSection>
            <Pagination state={state} />
            <SourcesSection state={state} />
            <Footer />
        </main>
    )
}