import { useCallback, useEffect, useState } from "react";
import Layout from "../components/Layout";
import navbutton from "../styles/NavButton.module.css";
import table from "../styles/Style.module.css"




const APIs = _ => {

    const [user, setUser] = useState(null);
    const [ID, setID] = useState(0);

    const getUser = _ => {
        fetch(`../api/users/${ID}`)
            .then(res => res.json())
            .then(data => setUser(data));
    };

    return (

        <Layout title="Integração com API">
            <section>
                <p>
                    Next.js nos permite implementar APIs locais, excluindo a necessidade de trabalhar com CORS.
                </p>
                <p>
                    Ainda é possível utilizar o conceito de navegação dinamica em conjunto com a utilização de APIs. Isso permite passarmos parâmetros na requisição.
                </p>
                <p>
                    No exemplo abaixo pode-se obter usuários diferentes informando IDs de 0 a 3.
                </p>
                <div style={{
                    display: 'flex',
                    flexWrap: "wrap",
                    alignItems: 'center',
                    padding: '10px'
                }}>
                    <input placeholder="Insira o ID" type="number" value={ID} min="0" onChange={e => { setID(e.target.value) }} />
                    <button className={navbutton.navbutton} onClick={getUser}>
                        Buscar usuário
                    </button>
                </div>
                {user != null ? (
                    <div style={{
                        overflow: "auto"
                    }}>
                        <p>
                            Usuário retornado:
                        </p>

                        <table className={table.table}>
                            <tr>
                                <td>
                                    ID
                                </td>
                                <td>
                                    Nome
                                </td>
                                <td>
                                    Idade
                                </td>
                                <td>
                                    Estado
                                </td>
                                <td>
                                    Email
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {user.id}
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.age}
                                </td>
                                <td>
                                    {user.state}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                            </tr>
                        </table>
                    </div>
                ) : (
                    <div>
                        <p>Realize uma requisição inserindo um valor e clicando no botão acima.</p>
                    </div>
                )}
            </section>
        </Layout>
    );
};


export default APIs;
