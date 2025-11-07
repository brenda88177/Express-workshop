
module.exports = (req, res ,ext) => {
    return res.status(404).json({code: 404,message: "URL NO ENCONTRADA :)" });
};