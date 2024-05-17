import { Route, Routes } from "react-router-dom";
import { HomePage, AboutPage, BrPage, StatePage } from "../pages";
import { states } from "../data/FlagsData";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            {/* <Route path="/glossario" element={<GlossaryPage />} /> */}
            <Route path="/br" element={<BrPage />} />
            {states.map((state) => (
                <Route key={state.name} path={`/${state.name}`} element={<StatePage state={state} />} />
            ))}
        </Routes >
    )
}