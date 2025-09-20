//git add .
//git commit -m "Tu mensaje descriptivo"
//git push origin main


const express = require ('express');
const app = express();
const {pokemon} = require ('./pokedex.json');

console.log("HOLA MUNDO");

app.get("/", (req,res,next) =>{
    res.status(200);
    res.send("bienvenido al pokedex");
});


app.get('/pokemon/:id',(req,res,next)=>{
   const id=req.params.id-1;
    if(id >= 0 && id<151){
         res.status(200);
    res.send(pokemon[req.params.id-1]);
    }
    else{
        res.status(404);
        res.send("POKEMON NO ENCONTRADO");
    }
    });

app.get("/:pokemon", (req,res,next)=>{
    
    res.status(200);
    res.send(pokemon);

});

app.get('/:pokemon/:name',(req,res,next) => {
    const name= req.params.name;
    for(i=0; i<pokemon.length; i++){
        if(pokemon[i].name == name){
            res.status(200).send(pokemon[i]);
        }
        
    }
    
        res.status(404);
        res.send("POKEMON NO ENCONTRADO");
    
} );

app.listen(process.env.PORT || 3000, () => {
    console.log("server is running...");
});