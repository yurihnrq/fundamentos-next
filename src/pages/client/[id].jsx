import Layout from '../../components/Layout';
import { useRouter } from "next/router";
import styles from '../../styles/Style.module.css';


const Client = _ => {

    const router = useRouter();
    let message;

    if (router.query.id == 1)
        message = "ID do usuário é 1. 😊";
    if (router.query.id == 2)
        message = "ID do usuário é 2. 😂";
    if (router.query.id == 3)
        message = "ID do usuário é 3. ❤️";
    if (router.query.id == 4)
        message = "ID do usuário é 4. 😒";
    if (router.query.id == 5)
        message = "ID do usuário é 5. 😁";


    return (
        <Layout title="Pagina acessada dinamicamente">
            <p>
                {message ? message : "ID não está listado."}
            </p>
            <button onClick={_ => { router.back() }} className={styles.navbutton} >
                ← Voltar
            </button>
        </Layout>
    )
};

export default Client;
