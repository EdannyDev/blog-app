const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'C:/Proyectos_Danny/blog-app/backend/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

const auth = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });
  try {
    const decoded = jwt.verify(token, 'secret');
    req.user = decoded.id;
    next();
  } catch (e) {
    res.status(400).json({ message: 'Token is not valid' });
  }
};

router.post('/upload', auth, upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    res.json({ imageUrl: req.file.filename });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', auth, upload.single('image'), async (req, res) => {
  const { title, content } = req.body;
  let imageUrl = '';

  if (req.file) {
    imageUrl = req.file.filename;
  }

  try {
    const post = new Post({ user: req.user, title, content, imageUrl });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('user', 'username');
    res.json(posts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('user', 'username');
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/:id', auth, async (req, res) => {
  const { title, content, imageUrl } = req.body;
  try {
    const post = await Post.findById(req.params.id);
    if (post.user.toString() !== req.user) throw new Error('Not authorized');
    post.title = title;
    post.content = content;
    post.imageUrl = imageUrl;
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Publicación no encontrada' });
    }
    if (post.user.toString() !== req.user) {
      return res.status(401).json({ message: 'No autorizado para eliminar esta publicación' });
    }
    await post.deleteOne(); // Utiliza el método deleteOne() para eliminar el documento de la base de datos
    res.json({ message: 'Publicación eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar la publicación:', error);
    res.status(500).json({ message: 'Error del servidor al eliminar la publicación' });
  }
});

router.post('/:id/comments', auth, async (req, res) => {
  const { comment } = req.body;
  try {
    const post = await Post.findById(req.params.id);
    post.comments.push({ user: req.user, comment });
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id/comments/count', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const count = post.comments.length;
    res.json({ count });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id/comments', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).select('comments').populate('comments.user', 'username');
    res.json(post.comments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;