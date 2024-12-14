const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Referencia al modelo de usuario
  title: { type: String, required: true }, // Título de la publicación
  content: { type: String, required: true }, // Contenido de la publicación
  imageUrl: { type: String }, // URL de la imagen asociada a la publicación
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Referencia al modelo de usuario
      comment: { type: String, required: true }, // Contenido del comentario
      createdAt: { type: Date, default: Date.now }, // Fecha de creación del comentario
    },
  ],
}, {
  timestamps: true, // Agrega campos createdAt y updatedAt automáticamente
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;