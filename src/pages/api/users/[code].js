
const handler = (req, res) => {

    if (req.method !== "GET")
        res.status(405).send();
    else 
        getUser(req, res);

};

const getUser = (req, res) => {

    const code = parseInt(req.query.code);
    
    if (code === 0) {
        res.status(200).json({
            id: code,
            name: "Yuri Henrique",
            age: 21,
            state: "MG",
            email: "yuri@email.com"
        });
    } else if (code === 1) {
        res.status(200).json({
            id: code,
            name: "Kamilla da Silva",
            age: 20,
            state: "MG",
            email: "kamilla@email.com"
        });
    } else if (code === 2) {
        res.status(200).json({
            id: code,
            name: "Heitor Freitas",
            age: 21,
            state: "MG",
            email: "heitor@email.com"
        });
    } else if (code === 3) {
        res.status(200).json({
            id: code,
            name: "Guilherme Augusto",
            age: 20,
            state: "MG",
            email: "tijolo@email.com"
        });
    } else {
        res.status(404).send();
    }
};


export default handler;