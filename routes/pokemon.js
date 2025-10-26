const express = require('express');
const pokemon = express.Router();
const db = require('../config/database');



pokemon.post("/", async (req, res, next)=>{
    const {pok_name, pok_height, pok_weight, pok_base_experience } = req.body;
    
    if(pok_name&&pok_height&&pok_weight&& pok_base_experience ) {
        let query="INSERT INTO pokemon (pok_name, pok_height, pok_weight, pok_base_experience)";
        query += ` VALUES('${pok_name}´,${pok_height}, ${pok_weight}, ${pok_base_experience} )`;
        
        const rows = await db.query(query);
        if(rows.affectedRows ==1){
            return res.status(201).json({code:201,message: "pokemon insertado correctamente"});
        }
    return res.status(500).json({code:500, message: "ERROR"});

    }
    return res.status(500).json({code: 500, message:"CAMPOS INCOMPLETOS"});

    
});
// Ruta para obtener todos los Pokémon

pokemon.delete("/:id([0-9]{1,3})", async (req,res,next) => {
    const query = `DELETE FROM pokemon WHERE pok_id=${req.params.id}`;
    const rows = await db.query(query);

    if(rows.affectedRows==1){
        return res.status(200).json({code:200, message: "POKEMON BORRADO"});

    }
    return res.status(404).json({code:400, message:"POKEMON NO ENCONTRADO"});
});


pokemon.put("/:id([0-9]{1,3})", async (req,res,next) => {
    const {pok_name, pok_height, pok_weight, pok_base_experience } = req.body;

    if(pok_name&&pok_height&&pok_weight&& pok_base_experience ) {
        let query = `UPDATE pokemon SET ,pok_name='${pok_name}',pok_heigh=${pok_heigh},`;
    query += `pok_weight=$[pok_weight],pok_base_experience=${pok_base_experience} WHERE pok_id=${req.params.id};`;

        const rows = await db.query(query);
        if(rows.affectedRows ==1){
            return res.status(200).json({code:201,message: "pokemon actualizado correctamente"});
        }
    return res.status(500).json({code:500, message: "ERROR"});

    }
    return res.status(500).json({code: 500, message:"CAMPOS INCOMPLETOS"});

});

pokemon.patch("/:id([0-9]{1,3})", async (req,res,next) => {
    if(req.body.pok_name){
        let query = `UPDATE pokemon SET ,pok_name='${req.bodypok_name}' WHERE pok_id=${req.params.id}`;
    
            const rows = await db.query(query);
            if(rows.affectedRows ==1){
                return res.status(200).json({code:201,message: "pokemon actualizado correctamente"});
            }
            return res.status(500).json({code:500, message:"POKEMON ACTUALIZADO"});
            return res.status(500).json({code:500, message:"OCURRIO UN ERROR"});;
        }
        return res.status(500).json({code:500, message:"CAMPOS INCOMPLETOS"});;
});


pokemon.get("/", async (req, res) => {
    const pkmn = await db.query("SELECT * FROM pokemon");
    res.status(200).json({code: 200,  message: pkmn});
});

// Ruta para obtener un Pokémon por ID
pokemon.get("/:id", (req, res) => {
    const id = parseInt(req.params.id); // convertir a número
    if (id >= 1 && id <= 722) {
        return res.status(200).json({code:200, message:pkmn});
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