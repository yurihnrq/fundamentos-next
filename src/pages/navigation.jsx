import Layout from "../components/Layout";
import NavButton from "../components/NavButton";
import { useState } from "react";

const Navigation = _ => {

    const [value, setValue] = useState(0);

    return (
        <div className="Navigation">
            <Layout title="Navegação em Next.js">
                <section>
                    <p>
                        Existem dois tipos de navegação possíveis em Next.js:
                    </p>
                    <article>
                        <h2>Navegação simples</h2>
                        <p>
                            O tipo de navegação ja implementada entre as páginas desse site.
                        </p>
                        <h2>Navegação dinâmica</h2>
                        <p>
                            Podemos capturar valores pela url utilizando a navegação dinâmica. O arquivo/pasta que é dinamicamente acessado recebe um nome identificador e é nomeado entre [].
                        </p>
                        <section>
                            <p>
                                Preenchendo o input abaixo e clicando no botão, você acessará dinamicamente uma página. Para valores de 1 a 5 você verá diferentes informações.
                            </p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '10px'
                            }}>
                                <input type="number" value={value} min="0"  onChange={e => { setValue(e.target.value) }} />
                                <NavButton link={`/client/${value}`} text="Testar" />
                            </div>
                        </section>
                    </article>
                </section>
            </Layout>
        </div>
    )
};

export default Navigation;
