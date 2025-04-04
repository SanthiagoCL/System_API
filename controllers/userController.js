exports.listUsersGet =  async (req, res) => {
    try {
        const result =  " Teste com sucesso.";
        return res.status(200).json({message: result});
    } catch (error) {
        const message ="A solicitação falhou: "
        res.status(500).send(message + error.message)

    }
};


exports.listUserGet =  async (req, res) => {
    try {
        const{ id } = req.params;
        const result = `Usuário ID ${id}`;
        return res.status(200).json({message: result});
    } catch (error) {
        const message ="A solicitação falhou: "
        res.status(424).send(message + error.message)

    }
};

exports.listUsersPost =  async (req, res) => {
    try {
        const result =  " Teste com sucesso.";
        return res.status(200).json({message: result});
    } catch (error) {
        const message ="A solicitação falhou: "
        res.status(500).send(message + error.message)

    }
};


exports.listUserPost=  async (req, res) => {
    try {
        const{ id } = req.params;
        const result = `Usuário ID ${id}`;
        return res.status(200).json({message: result});
    } catch (error) {
        const message ="A solicitação falhou: "
        res.status(424).send(message + error.message)

    }
};

exports.listUsersPut =  async (req, res) => {
    try {
        const result =  " Teste com sucesso.";
        return res.status(200).json({message: result});
    } catch (error) {
        const message ="A solicitação falhou: "
        res.status(500).send(message + error.message)

    }
};


exports.listUserPut =  async (req, res) => {
    try {
        const{ id } = req.params;
        const result = `Usuário ID ${id}`;
        return res.status(200).json({message: result});
    } catch (error) {
        const message ="A solicitação falhou: "
        res.status(424).send(message + error.message)

    }
};