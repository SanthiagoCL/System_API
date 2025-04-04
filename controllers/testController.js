
exports.teste =  async (req, res) => {
    try {
        const result =  " Teste com sucesso. ";
        return res.status(200).json({message: result});
    } catch (error) {
        const message ="A solicitação falhou: "
        res.status(424).send(message + error.message)

    }
};


exports.validar =  async (req, res) => {
    try {
        const result =  "   Ok... ";
        return res.status(200).json({message: result});
    } catch (error) {
        const message ="A solicitação falhou: "
        res.status(424).send(message + error.message)

    }
};


exports.verificar =  async (req, res) => {
    try {
        const result =  "   Blz... ";
        return res.status(200).json({message: result});
    } catch (error) {
        const message ="A solicitação falhou: "
        res.status(424).send(message + error.message)

    }
};


exports.atualizar =  async (req, res) => {
    try {
        const result =  "   Pdp... ";
        return res.status(200).json({message: result});
    } catch (error) {
        const message ="A solicitação falhou: "
        res.status(424).send(message + error.message)

    }
};