import { NavMain } from "../../components/NavMain/NavMain";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { FlagsSection } from "../../sections/FlagsSection/FlagsSection";


export const HomePage = () => {
    return (
        <>
            <NavMain />
            <Header />
            <FlagsSection />
            <Footer />
        </>
    )
}