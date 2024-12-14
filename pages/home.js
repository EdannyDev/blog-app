import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdCloudUpload, MdSend, MdComment, MdVisibility, MdDelete, MdWarning } from 'react-icons/md';
import {
  Container,
  Card,
  PostCard,
  Input,
  TextArea,
  Hr,
  SubmitButton,
  UploadButton,
  ImagePreview,
  CommentInfoContainer,
  CommentCount,
  CommentText,
  DeletePostButton,
  ModalOverlay,
  ModalContent,
  CloseButton,
  AddCommentButton,
  ViewCommentsButton,
  ModalSubmitButton,
  DeleteConfirmationIcon,
  CancelButton,
} from '../frontend/styles/home.styles';

const ViewDeleteConfirmationModal = ({ show, onClose, onConfirm }) => {
  return (
    show && (
      <ModalOverlay>
        <ModalContent>
          <CloseButton onClick={onClose}>X</CloseButton>
          <DeleteConfirmationIcon>
            <MdWarning />
          </DeleteConfirmationIcon>
          <h2>Eliminar Publicación</h2>
          <p>¿Estás seguro de que deseas eliminar esta publicación?</p>
          <div>
            <ModalSubmitButton style={{ marginRight: '15px' }} onClick={onConfirm}>Confirmar</ModalSubmitButton>
            <CancelButton onClick={onClose}>Cancelar</CancelButton>
          </div>
        </ModalContent>
      </ModalOverlay>
    )
  );
};

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [token, setToken] = useState('');
  const [showAddCommentModal, setShowAddCommentModal] = useState(false);
  const [showViewCommentsModal, setShowViewCommentsModal] = useState(false);
  const [comment, setComment] = useState('');
  const [currentPostId, setCurrentPostId] = useState(null);
  const [currentPostComments, setCurrentPostComments] = useState([]);
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);

  useEffect(() => {
    fetchPosts();
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/posts', {
        headers: {
          'x-auth-token': token,
        },
      });
      setPosts(res.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      if (selectedImage) {
        formData.append('image', selectedImage);
      }

      const res = await axios.post('http://localhost:5000/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-auth-token': token,
        },
      });

      const newPost = res.data;
      setPosts([...posts, newPost]);
      setSelectedImage(null);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const triggerImageUpload = () => {
    document.getElementById('image-upload').click();
  };

  const handleComment = (postId) => {
    setShowAddCommentModal(true);
    setCurrentPostId(postId);
  };

  const handleCloseAddCommentModal = () => {
    setShowAddCommentModal(false);
    setCurrentPostId(null);
  };

  const handleAddComment = async () => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/posts/${currentPostId}/comments`,
        { comment },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
          }
        }
      );
      console.log('Comment added:', res.data);
      setShowAddCommentModal(false);
      setComment('');
      fetchPosts();
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleViewPostComments = async (postId) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/posts/${postId}/comments`);
      setCurrentPostComments(res.data);
      setShowViewCommentsModal(true);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleCloseViewCommentsModal = () => {
    setShowViewCommentsModal(false);
    setCurrentPostComments([]);
  };

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${postId}`, {
        headers: {
          'x-auth-token': token,
        },
      });
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleShowDeleteConfirmationModal = (postId) => {
    setPostIdToDelete(postId);
    setShowDeleteConfirmationModal(true);
  };

  const handleCloseDeleteConfirmationModal = () => {
    setShowDeleteConfirmationModal(false);
    setPostIdToDelete(null);
  };

  return (
    <Container>
      <h1 style={{ marginBottom: '20px', color: '#000' }}>SocialNet</h1>
      <Card>
        <h2>Sube una nueva publicación</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título"
            required
          />
          <TextArea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Contenido"
            required
          />
          {selectedImage && <ImagePreview src={URL.createObjectURL(selectedImage)} alt="Preview" />}
          <UploadButton type="button" onClick={triggerImageUpload}>
            <MdCloudUpload />
          </UploadButton>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <SubmitButton type="submit">
            <MdSend />
          </SubmitButton>
        </form>
      </Card>
      <Hr />
      <h2 style={{ color: '#000' }}>Publicaciones</h2>
      {posts.map((post) => (
        <PostCard key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          {post.imageUrl && (
            <img
              src={`http://localhost:5000/uploads/${post.imageUrl}`}
              alt={post.title}
              style={{ maxWidth: '100%', height: 'auto', maxHeight: '200px' }}
            />
          )}
          <div>
            <AddCommentButton type="button" onClick={() => handleComment(post._id)}>
              <MdComment />
            </AddCommentButton>
            <ViewCommentsButton type="button" onClick={() => handleViewPostComments(post._id)}>
              <MdVisibility />
            </ViewCommentsButton>
            <DeletePostButton type="button" onClick={() => handleShowDeleteConfirmationModal(post._id)}>
              <MdDelete />
            </DeletePostButton>
            <CommentInfoContainer>
              <CommentCount>{post.comments.length}</CommentCount>
              <CommentText>comentarios</CommentText>
            </CommentInfoContainer>
          </div>
        </PostCard>
      ))}
      {showAddCommentModal && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={handleCloseAddCommentModal}>X</CloseButton>
            <h2>Escribe un nuevo comentario</h2>
            <TextArea
              placeholder="Escribe tu comentario aquí"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
            <ModalSubmitButton onClick={handleAddComment}>
              Publicar Comentario
            </ModalSubmitButton>
          </ModalContent>
        </ModalOverlay>
      )}
      {showViewCommentsModal && (
        <ModalOverlay>
          <ModalContent style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', overflowY: 'auto', maxHeight: '90vh' }}>
            <CloseButton onClick={handleCloseViewCommentsModal}>X</CloseButton>
            <h2>Comentarios</h2>
            <div>
            {currentPostComments.map(comment => (
              <div key={comment._id} style={{ marginBottom: '10px' }}>
                <p><strong>{comment.user ? comment.user.username : 'Usuario desconocido'}:</strong> {comment.comment}</p>
              </div>
             ))}
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
      <ViewDeleteConfirmationModal
        show={showDeleteConfirmationModal}
        onClose={handleCloseDeleteConfirmationModal}
        onConfirm={() => {
          handleDeletePost(postIdToDelete);
          handleCloseDeleteConfirmationModal();
        }}
      />
    </Container>
  );
};

export default HomePage;