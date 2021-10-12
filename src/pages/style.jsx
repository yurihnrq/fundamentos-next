import styles from '../styles/Style.module.css'
import Layout from '../components/Layout'

const Style = _ => {
    return (
        <Layout title="CSS Modules">
            <div className={styles.red}>
                <p>
                    Estilos CSS podem ser aplicados individualmente nos componentes.
                </p>
            </div>
        </Layout>
    )
}

export default Style;
