//dependencies
const express = require('express');
const app = express();
const morgan = require('morgan');
//routers
const pokemon = require('./routes/pokemon');
const user = require('./routes/user');
//middleware
const auth = require('./middleware/auth');
const notFound = require('./middleware/notFound');
const index = require('./middleware/index');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


console.log("Servidor iniciado...");

app.get(index);

app.use("/user",user);

app.use(auth);

app.use("/pokemon", pokemon);

app.use(notFound);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
