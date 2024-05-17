import { Helmet } from "react-helmet-async";
import { NavState, HeaderAbout, Footer } from "../../components";
import Flag_Brasil from "../../assets/bandeiras/Flag_of_Brazil.svg";
import { AboutSection } from "../../sections";

export const AboutPage = () => {
    return (
        <main>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href={Flag_Brasil} />
                <title>Sobre - Brasil</title>
            </Helmet>
            <NavState />
            <HeaderAbout />
            <AboutSection />
            <Footer />
        </main>
    )
}