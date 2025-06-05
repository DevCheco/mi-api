const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');

// Crear producto
router.post('/', async (req, res) => {
    const producto = new Producto(req.body);
    try {
        const savedProducto = await producto.save();
        res.status(201).json(savedProducto);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Consultar productos
router.get('/', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Actualizar producto
router.put('/:id', async (req, res) => {
    try {
        const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(producto);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Eliminar producto
router.delete('/:id', async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
