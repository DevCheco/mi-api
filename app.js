const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const usuariosRoutes = require('./routes/usuarios');
const productosRoutes = require('./routes/productos');

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a MongoDB
mongoose.connect('mongodb+srv://thomspachecop:Ingeniero2025@cluster0.25jhjnh.mongodb.net/miAplicacion?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('No se pudo conectar a MongoDB', err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/productos', productosRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
