import styles from "./styles.module.scss"

export const HeaderAbout = () => {
    return (
        <header className={styles.header_about}>
            <div className={styles.about}>
                <h1>Sobre</h1>
            </div>
            <div className={styles.description_about}>
                <div className={styles.nickname_about}>
                    <p>Criado por <a href="https://victoravancini.vercel.app/" target="_blank" rel="noopener noreferrer">Victor Avancini</a></p>
                </div>
                <div className={styles.admitted}>
                    <p>Desenvolvido em abril em 2024</p>
                </div>
            </div>
        </header>
    )
}
