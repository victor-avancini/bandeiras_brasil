import { Helmet } from "react-helmet-async";
import { Footer } from "../../components/Footer/Footer";
import { NavState } from "../../components/NavState/NavState";
import Flag_Brasil from "../../assets/Flag_of_Brazil.svg"

export const GlossaryPage = () => {
    return (
        <main>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href={Flag_Brasil} />
                <title>Glossário - Brasil</title>
            </Helmet>
            <NavState />
            <Footer />
        </main>
    )
}