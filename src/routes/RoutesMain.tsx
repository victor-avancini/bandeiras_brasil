import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { AboutPage } from "../pages/AboutPage/AboutPage";
import { GlossaryPage } from "../pages/Glossary/GlossaryPage";
import { BrPage } from "../pages/BrPage/BrPage";
import { StatePage } from "../pages/StatePage/StatePage";
import { estados } from "../data/FlagsData";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/glossario" element={<GlossaryPage />} />
            <Route path="/br" element={<BrPage />} />
            {estados.map((estado) => (
                <Route key={estado.name} path={`/${estado.name}`} element={<StatePage estado={estado} />} />
            ))}
        </Routes >
    )
}