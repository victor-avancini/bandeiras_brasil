import { Helmet } from "react-helmet-async";
import { Footer } from "../../components/Footer/Footer";
import { NavState } from "../../components/NavState/NavState";
import Flag_Brasil from "../../assets/Flag_of_Brazil.svg";
import styles from "./styles.module.scss"

export const AboutPage = () => {
    return (
        <main>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href={Flag_Brasil} />
                <title>Sobre - Brasil</title>
            </Helmet>
            <NavState />
            <header className={styles.header_about}>
                <div className={styles.about}>
                    <h1>Sobre</h1>
                </div>
                <div className={styles.description_about}>
                    <div className={styles.nickname_about}>
                        <p>Criado por <a href="https://victoravancini.vercel.app/" target="_blank">Victor Avancini</a></p>
                    </div>
                    <div className={styles.admitted}>
                        <p>Desenvolvido em abril em 2024</p>
                    </div>
                </div>
            </header>
            <Footer />
        </main>
    )
}