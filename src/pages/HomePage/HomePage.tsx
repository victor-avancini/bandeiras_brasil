import { NavMain, Header, Footer } from "../../components";
import { FlagsSection } from "../../sections";
import styles from "./styles.module.scss";
import { Helmet } from "react-helmet-async";
import Flag_Brasil from "../../assets/bandeiras/Flag_of_Brazil.svg";

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