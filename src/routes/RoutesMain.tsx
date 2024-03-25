import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { AboutPage } from "../pages/AboutPage/AboutPage";
import { GlossaryPage } from "../pages/Glossary/GlossaryPage";
import { BrPage } from "../pages/BrPage/BrPage";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/sobre" element={<AboutPage />}></Route>
            <Route path="/glossario" element={<GlossaryPage />}></Route>
            <Route path="/br" element={<BrPage />}></Route>
        </Routes >
    )
}