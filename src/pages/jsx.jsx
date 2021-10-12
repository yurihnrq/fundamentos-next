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
            <div>
                {subtitle()}
            </div>
        </Layout>
    )
}

export default JSX;
