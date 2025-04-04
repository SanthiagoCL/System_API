require('dotenv').config(); // importando o dotenv sem constante
 
const app = require('./app'); // importando app.js
const PORT = process.env.PORT || 3000; // pegando a porta do arquivo .env ou 3000 por padrão

app.listen(
    PORT, () => {
        console.log(process.env.ISRUN);
        console.log(`On port ${PORT}`);
        console.log(`URL : http://localhost:${PORT}`);
    }
);