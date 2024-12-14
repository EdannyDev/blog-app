import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdDelete, MdUpdate, MdVisibility, MdVisibilityOff, MdClose } from 'react-icons/md';
import { Container, ProfileCard, CardHeader, ProfileInfo, ProfileInput, UpdateButton, DeleteButton, ButtonContainer, PasswordInputContainer, TogglePasswordIcon, ModalBackdrop, ModalContent, CancelButton } from '../frontend/styles/profile.styles';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    username: '',
    email: '',
    newPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/users/profile', {
          headers: {
            'x-auth-token': token,
          },
        });
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleChange = (e) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put('http://localhost:5000/api/users/profile', userProfile, {
        headers: {
          'x-auth-token': token,
        },
      });
      
      if (userProfile.newPassword) {
        localStorage.removeItem('token');
        console.log('Token eliminado correctamente');
        window.location.href = '/login';
      } else {
        alert('Perfil actualizado con éxito');
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete('http://localhost:5000/api/users/profile', {
        headers: {
          'x-auth-token': token,
        },
      });
      localStorage.removeItem('token');
      console.log('Token eliminado correctamente');
      setShowModal(false); // Oculta el modal después de eliminar la cuenta
      window.location.href = '/login';
    } catch (error) {
      console.error('Error deleting user account:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      {showModal && (
        <ModalBackdrop>
          <ModalContent>
            <p>¿Estás seguro de que deseas eliminar tu cuenta?</p>
            <ButtonContainer>
              <DeleteButton onClick={handleDeleteAccount}>
                <MdDelete /> Sí, eliminar cuenta
              </DeleteButton>
              <CancelButton onClick={closeModal} cancel>
                <MdClose /> Cancelar
              </CancelButton>
            </ButtonContainer>
          </ModalContent>
        </ModalBackdrop>
      )}
      <ProfileCard>
        <CardHeader>Datos del usuario</CardHeader>
        <ProfileInfo>
          <ProfileInput
            name="username"
            value={userProfile.username}
            onChange={handleChange}
            placeholder="Nombre de usuario"
          />
          <ProfileInput
            name="email"
            value={userProfile.email}
            onChange={handleChange}
            placeholder="Correo electrónico"
          />
          <PasswordInputContainer>
            <ProfileInput
              name="newPassword"
              type={showPassword ? 'text' : 'password'}
              value={userProfile.newPassword || ''}
              onChange={handleChange}
              placeholder="Nueva contraseña"
            />
            <TogglePasswordIcon onClick={togglePasswordVisibility}>
              {showPassword ? <MdVisibility color="#333" size={24} /> : <MdVisibilityOff color="#333" size={24} />}
            </TogglePasswordIcon>
          </PasswordInputContainer>
          <ButtonContainer>
            <UpdateButton onClick={handleUpdateProfile}>
              <MdUpdate /> Actualizar Perfil
            </UpdateButton>
            <DeleteButton onClick={openModal}>
              <MdDelete /> Eliminar cuenta
            </DeleteButton>
          </ButtonContainer>
        </ProfileInfo>
      </ProfileCard>
    </Container>
  );
};

export default Profile;