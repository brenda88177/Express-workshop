const express = require('express');
const app = express();
const { pokemon } = require('./pokedex.json'); // tu JSON de Pokémon
const bodyParser= require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

console.log("Servidor iniciado...");

// Ruta de bienvenida
app.get("/", (req, res) => {
    res.status(200).send("Bienvenido al Pokedex");
});

app.post("/pokemon", (req, res, next)=>{
    return res.status(200).send(req.body);

});
// Ruta para obtener todos los Pokémon
app.get("/pokemon", (req, res) => {
    res.status(200).send(pokemon);
});

// Ruta para obtener un Pokémon por ID
app.get("/pokemon/:id", (req, res) => {
    const id = parseInt(req.params.id); // convertir a número
    if (id >= 1 && id <= 151) {
        return res.status(200).send(pokemon[id - 1]);
    } else {
        return res.status(404).send({ error: "Pokémon no encontrado" });
    }
});

// Ruta para obtener un Pokémon por nombre
app.get("/pokemon/name/:name", (req, res) => {
    
    //OPERADOR TERNARIO: condición ? valor si es verdadero :  valor si es falso
    const name = req.params.name.toUpperCase();

    const pk = pokemon.filter(p => p.name.toUpperCase() === name);

    if(pk.length > 0) { // corregido de 'lenght' a 'length'
        return res.status(200).send(pk);
    } else {
        return res.status(404).send({error: "Pokémon no encontrado"});
    }
});


// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
