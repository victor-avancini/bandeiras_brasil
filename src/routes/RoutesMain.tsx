import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { AboutPage } from "../pages/AboutPage/AboutPage";
import { GlossaryPage } from "../pages/GlossaryPage/GlossaryPage";
import { BrPage } from "../pages/BrPage/BrPage";
import { StatePage } from "../pages/StatePage/StatePage";
import { states } from "../data/FlagsData";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/glossario" element={<GlossaryPage />} />
            <Route path="/br" element={<BrPage />} />
            {states.map((state) => (
                <Route key={state.name} path={`/${state.name}`} element={<StatePage state={state} />} />
            ))}
        </Routes >
    )
}