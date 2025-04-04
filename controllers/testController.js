
exports.testeGet=  async (req, res) => {
    try {
        const result =  " Teste com sucesso. ";
        return res.status(200).json({message: result});
    } catch (error) {
        const message ="A solicitação falhou: "
        res.status(424).send(message + error.message)

    }
};


exports.validarGet =  async (req, res) => {
    try {
        const result =  "   Ok... ";
        return res.status(200).json({message: result});
    } catch (error) {
        const message ="A solicitação falhou: "
        res.status(424).send(message + error.message)

    }
};


exports.testePost=  async (req, res) => {
    try {
        const result =  "   Blz... ";
        return res.status(200).json({message: result});
    } catch (error) {
        const message ="A solicitação falhou: "
        res.status(424).send(message + error.message)

    }
};


exports.validarPost=  async (req, res) => {
    try {
        const result =  "   Pdp... ";
        return res.status(200).json({message: result});
    } catch (error) {
        const message ="A solicitação falhou: "
        res.status(424).send(message + error.message)

    }
};

exports.TestePut =  async (req, res) => {
    try {
        const result =  "  Ok! ";
        return res.status(200).json({message: result});
    } catch (error) {
        const message ="A solicitação falhou: "
        res.status(424).send(message + error.message)

    }
};

exports.validarPut=  async (req, res) => {
    try {
        const result =  "  Ok! ";
        return res.status(200).json({message: result});
    } catch (error) {
        const message ="A solicitação falhou: "
        res.status(424).send(message + error.message)

    }
};