import { NavMain } from "../../components/NavMain/NavMain";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { FlagsSection } from "../../sections/FlagsSection/FlagsSection";
import styles from "./styles.module.scss"

export const HomePage = () => {
    return (
        <main className={styles.teste}>
            <NavMain />
            <Header />
            <FlagsSection />
            <Footer />
        </main>
    )
}