const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

const app = express();

mongoose.connect('mongodb://localhost:27017/blogDB')
  .then(() => console.log('MongoDB corriendo'))
  .catch(err => console.error(err));

app.use(cors({
  origin: 'http://localhost:3000', // Permitir solicitudes solo desde http://localhost:3000
  credentials: true, // Permitir enviar cookies de autenticación (si las hay)
}));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Corriendo servidor en el puerto: ${PORT}`));