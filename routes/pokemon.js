const express = require('express');
const pokemon = express.Router();
const bd = require('../config/database');



pokemon.post("/", (req, res, next)=>{
    return res.status(200).send(req.body);

});
// Ruta para obtener todos los Pokémon
pokemon.get("/", async (req, res) => {
    const pkmn = await db.query("SELECT * FROM pokemon");
    res.status(200).json({code: 1,  message: pkmn});
});

// Ruta para obtener un Pokémon por ID
pokemon.get("/:id", (req, res) => {
    const id = parseInt(req.params.id); // convertir a número
    if (id >= 1 && id <= 722) {
        return res.status(200).json({code:1, message:pkmn});
    } else {
        return res.status(404).send({ code:404, message: "Pokémon no encontrado" });
    }
});

// Ruta para obtener un Pokémon por nombre
pokemon.get("/:name", (req, res) => {
    
    //OPERADOR TERNARIO: condición ? valor si es verdadero :  valor si es falso
    const name = req.params.name.toUpperCase();

    const pkmn = pk.filter(p => p.name.toUpperCase() === name);

    if(pkmn.length > 0) { // corregido de 'lenght' a 'length'
        return res.status(200).json({code:1, message: pkmn});
    } else {
        return res.status(404).send({code:1, message:  "Pokémon no encontrado"});
    }
});

module.exports = pokemon;