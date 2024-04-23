import { NavMain } from "../../components/NavMain/NavMain";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { FlagsSection } from "../../sections/FlagsSection/FlagsSection";
import styles from "./styles.module.scss";
import { Helmet } from "react-helmet-async";
import Flag_Brasil from "../../assets/Flag_of_Brazil.svg";

export const HomePage = () => {
    return (
        <main className={styles.main}>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href={Flag_Brasil} />
                <title>Brasil</title>
            </Helmet>
            <NavMain />
            <Header />
            <FlagsSection />
            <Footer />
        </main>
    )
}