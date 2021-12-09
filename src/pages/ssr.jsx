import Layout from "../components/Layout";

// A função getServerSideProps é chamada a cada requisição.
// O conteúdo retornado é renderizado no componente do lado do servidor e então entregue ao cliente.
export const getServerSideProps = async _ => {

    const ID = Math.floor(Math.random() * 3);

    // Requisição na API para obter dados de um usuário.
    const user = await fetch(`http://localhost:3000/api/users/${ID}`).then(res => res.json());

    return {
        // Aqui retorno as props que poderão ser acessadas pelo componente presente nesta página.
        props: { name: user.name }
    }
}

const ServerSide = ({ name }) => {

    return (
        <Layout title="Geração de conteúdo no servidor">
            <section>
                <p>
                    Com Next.js é possível fazer que um site seja gerado do lado do servidor a cada requisição (Server Side Rendering - SSR), de modo que o cliente receba a página completa.
                </p>
                <p>
                    Diferente de uma implemtação em SSG, com SSR, todo o conteúdo do site é pré-renderizado do lado do servidor a cada requisição e então a página é entregue ao cliente.
                </p>
                <p>
                    Nome do usuário obtido e renderizado do lado do servidor com SSR: {name}.
                </p>
            </section>
        </Layout>
    );
};

export default ServerSide;
