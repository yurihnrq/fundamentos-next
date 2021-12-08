const handler = (req, res) => {

    if (req.method === "GET")
        getUser(res);
    else
        res.status(405).send();
};  

const getUser = (res) => {
    res.status(400).json({
        text: "Invalid syntax"
    });
};


export default handler;
