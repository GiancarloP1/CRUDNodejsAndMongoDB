const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    descripcion: String,
    categoria: String
});

module.exports = mongoose.model('Producto', productoSchema);
