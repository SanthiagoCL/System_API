
const express = require('express'); // importando o express
const sequelize = require('./config/config'); // importando o sequelize
const app = express(); // startando o express na variável app
const testRoute = require('./routes/testRoute');
const userRoute  = require('./routes/userRoute'); // importando a rota de usuário

app.use(express.json());

app.use('/api', testRoute);

app.use('/api', userRoute);

sequelize.sync().then(
    () => {console.log("database connected and synced")}
).catch(
    (error) => {console.log("error database", error)}
);

module.exports = app; // exportando app para quem precisar usar

