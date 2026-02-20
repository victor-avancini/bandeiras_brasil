import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, AboutPage, BrPage, StatePage } from "../pages";
import { states } from "../data/FlagsData";
import { slugifyStateName } from "../utils/slug";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            {/* <Route path="/glossario" element={<GlossaryPage />} /> */}
            <Route path="/br" element={<BrPage />} />
            {states.map((state) => {
                const stateSlug = slugifyStateName(state.name);
                const rawStatePath = `/${state.name}`;

                return (
                    <Fragment key={state.id}>
                        <Route path={`/${stateSlug}`} element={<StatePage state={state} />} />
                        <Route path={rawStatePath} element={<Navigate to={`/${stateSlug}`} replace />} />
                    </Fragment>
                );
            })}
        </Routes >
    )
}
