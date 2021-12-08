import styles from '../styles/Style.module.css'
import Layout from '../components/Layout'

const Style = _ => {
    return (
        <Layout title="CSS Modules">
            <section className={styles.coral}>
                <p>
                    Estilos CSS podem ser aplicados insectionidualmente nos componentes.
                </p>
            </section>
        </Layout>
    )
}

export default Style;
