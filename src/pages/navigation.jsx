import Layout from "../components/Layout";
import NavButton from "../components/NavButton";
import { useState } from "react";

const Navigation = _ => {

    const [ID, setID] = useState(0);
    const [branch, setBranch] = useState("MG");

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
                                flexWrap: "wrap",
                                alignItems: 'center',
                                padding: '10px'
                            }}>
                                <input type="number" value={ID} min="0" onChange={e => { setID(e.target.value) }} />
                                <NavButton link={`/client/${ID}`} text="Teste 1" />
                            </div>
                        </section>
                        <section>
                            <p>
                                Podemos "aninhar" arquivos e pastas afim de obter mais de uma informação através da URL.
                            </p>
                            <p>
                                No exemplo abaixo, você pode acessar uma página dinamicamente passando dois valores na URL.
                            </p>
                            <div style={{
                                display: 'flex',
                                flexWrap: "wrap",
                                alignItems: 'center',
                                padding: '10px'
                            }}>
                                <input type="number" value={ID} min="0" onChange={e => { setID(e.target.value) }} />
                                <select value={branch} onChange={e => { setBranch(e.target.value) }}>
                                    <option value="MG">MG</option>
                                    <option value="SP">SP</option>
                                    <option value="RJ">RJ</option>
                                </select>
                                <NavButton link={`/worker/${branch}/${ID}`} text="Teste 2" />
                            </div>
                        </section>
                    </article>
                </section>
            </Layout>
        </div>
    )
};

export default Navigation;
