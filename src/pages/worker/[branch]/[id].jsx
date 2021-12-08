import Layout from '../../../components/Layout';
import { useRouter } from "next/router";
import styles from '../../../styles/NavButton.module.css';


const Client = _ => {

    const router = useRouter();

    return (
        <Layout title="Pagina acessada dinamicamente">
            <p>
                {`O ID do funcionário é ${router.query.id} 👌`} A filial é {router.query.branch}.
            </p>
            <button onClick={_ => { router.back() }} className={styles.navbutton} >
                ← Voltar
            </button>
        </Layout>
    )
};

export default Client;
