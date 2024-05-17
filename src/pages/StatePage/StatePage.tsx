import React from "react";
import { Helmet } from "react-helmet-async";
import { StatePageProps } from "../../interfaces/state.interface";
import { NavState, HeaderState, Pagination, Footer } from "../../components";
import { DescriptionSection, CompositionSection, ColorsSection, SourcesSection } from "../../sections";

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
            <CompositionSection state={state} />
            <ColorsSection state={state}></ColorsSection>
            {/* <CoatOfArmsSection state={state} /> */}
            <Pagination state={state} />
            <SourcesSection state={state} />
            <Footer />
        </main>
    )
}