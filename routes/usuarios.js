const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

// Crear usuario
router.post('/', async (req, res) => {
    const usuario = new Usuario(req.body);
    try {
        const savedUsuario = await usuario.save();
        res.status(201).json(savedUsuario);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Consultar usuarios
router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Actualizar usuario
router.put('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(usuario);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Eliminar usuario
router.delete('/:id', async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
