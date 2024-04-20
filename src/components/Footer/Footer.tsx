import styles from "./style.module.scss";

export const Footer = () => {
    return (
        <footer>
            <div className={styles.created}>
                <p>Criado por <a href="https://victoravancini.vercel.app/" target="_blank">Victor Avancini</a></p>
            </div>
            <div className={styles.message}>
                <p>Gostou desse projeto? <a href="mailto:victor.avancini@hotmail.com">Me mande uma mensagem</a></p>
            </div>
        </footer>
    )
}