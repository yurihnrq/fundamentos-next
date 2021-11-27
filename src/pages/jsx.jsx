import Layout from '../components/Layout'

const JSX = _ => {
    const title = "JSX"

    const subtitle = _ => {
        return <p>
            JSX é um tipo de arquivo onde podemos mesclar HTML e JavaScript!
        </p>
    }
    
    return (
        <Layout title={title}>
            <section>
                {subtitle()}
            </section>
        </Layout>
    )
}

export default JSX;
