const express = require('express');
const app = express();
 // tu JSON de Pokémon
const bodyParser= require('body-parser');
const morgan = require('morgan');
const pokemon = require('./routes/pokemon');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

console.log("Servidor iniciado...");

app.get("/", (req, res) => {
    res.status(200).send("Bienvenido al Pokedex");
});

app.use("/pokemon", pokemon);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
