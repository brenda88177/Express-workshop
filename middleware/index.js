module.exports = "/", (req, res) => {
    res.status(200).json({code: 1, message: "BIENVENIDO AL POKEDEX" });
}