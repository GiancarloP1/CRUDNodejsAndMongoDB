const express = require('express');
const mongoose = require('mongoose');
const Producto = require('./models/Producto');

const app = express();
app.use(express.json());



mongoose.connect('mongodb://localhost:27017/miDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.log(err));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});





// Crear un nuevo producto
app.post('/productos', async (req, res) => {
    try {
        const producto = new Producto(req.body);
        await producto.save();
        res.status(201).send(producto);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Leer todos los productos
app.get('/productos', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).send(productos);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Leer un producto por ID
app.get('/productos/:id', async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).send();
        }
        res.status(200).send(producto);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Actualizar un producto por ID
app.patch('/productos/:id', async (req, res) => {
    try {
        const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!producto) {
            return res.status(404).send();
        }
        res.status(200).send(producto);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Eliminar un producto por ID
app.delete('/productos/:id', async (req, res) => {
    try {
        const producto = await Producto.findByIdAndDelete(req.params.id);
        if (!producto) {
            return res.status(404).send();
        }
        res.status(200).send(producto);
    } catch (error) {
        res.status(500).send(error);
    }
});