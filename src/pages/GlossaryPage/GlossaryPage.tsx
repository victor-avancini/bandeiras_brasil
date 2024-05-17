import { Helmet } from "react-helmet-async";
import { Footer, NavState } from "../../components";
import Flag_Brasil from "../../assets/bandeiras/Flag_of_Brazil.svg"

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