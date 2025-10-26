const express = require('express');
const app = express();
const morgan = require('morgan');
const pokemon = require('./routes/pokemon');
const user = require('./routes/user');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


console.log("Servidor iniciado...");

app.get("/", (req, res) => {
    res.status(200).json({code: 1, message: "BIENVENIDO AL POKEDEX" });
});

app.use("/pokemon", pokemon);

app.use("/user",user);

app.use((req, res ,ext) => {
    return res.status(404).json({code: 404,message: "URL NO ENCONTRADA :)" });
});
// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
