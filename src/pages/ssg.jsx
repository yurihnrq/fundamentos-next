import Layout from "../components/Layout";

// A função getStaticProps permite definir valores que serão gerados estaticamente.
// Esses valores podem ser acessados pelas props do componente implementado neste arquivo.
// Vale ressaltar que os efeitos dessa implementação só podem ser vistos em uma build (npm run build para gerar a build, npm start para executar a build gerada).
export const getStaticProps = _ => {
    return {
        // Aqui retorno as props que poderão ser acessadas pelo componente presente nesta página.
        props: {
            number: Math.random() * 10e16
        },
        // A proriedade revalidate permite definir em segundos qual o intervalo de tempo para as informações estáticas serem validadas.
        // Neste exemplo, requisições feitas num intervalo de 5 segundos apresentarão o mesmo valor na página. Após esse intervalor, um novo número será apresentado.
        revalidate: 5
    }
};

const Static = ({number}) => {
    return (
        <Layout title="Geração de conteúdo estático">
            <section>
                <p>
                    O Next.js permite a implementação de sites gerados estaticamente (Static Site Generation - SSG). Isso quer dizer que, quando definido,  conteúdo será gerado uma vez do no momento da build e então reaproveitado nas requisicões futuras.
                </p>
                <p>
                    É possível definir um tempo para validação das informações. Quando esse tempo &quot;vence&quot;, o conteúdo da página é gerado novamente do lado do servidor.
                </p>
                <p>Número gerado estaticamente: {number}</p>
            </section>
        </Layout>
    );
};

export default Static;
