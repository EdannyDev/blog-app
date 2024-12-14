import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5deb3;
  font-family: 'Montserrat', sans-serif;
`;

export const ProfileCard = styled.div`
  background-color: #f0e6d2;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 600px; /* Aumenta el tamaño del card */
`;

export const CardHeader = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
  color: #000;
`;

export const ProfileInfo = styled.div`
  margin-bottom: 20px;
`;

export const ProfileInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #bda692;
  border-radius: 5px;
  background-color: #e0d6bf;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  &:focus {
    outline: none;
    border-color: #c1a27b;
  }
`;

export const PasswordInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const TogglePasswordIcon = styled.div`
  position: absolute;
  top: calc(50% - 2.5px); /* Ajuste para centrarlo ligeramente hacia arriba */
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #333; /* Color del ícono */
`;

export const UpdateButton = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  width: fit-content;

  &:hover {
    background-color: #218838;
  }

  svg {
    margin-right: 5px;
  }
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  width: fit-content;

  &:hover {
    background-color: #c82333;
  }

  svg {
    margin-right: 5px;
  }
`;

export const CancelButton = styled.button`
  background-color: #007bff; /* Azul representativo */
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  width: fit-content;

  &:hover {
    background-color: #0056b3; /* Tonos más oscuros al pasar el cursor */
  }

  svg {
    margin-right: 5px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 20px; /* Añade espacio entre los botones */
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo oscuro semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Asegura que el modal esté por encima de otros elementos */
`;

export const ModalContent = styled.div`
  background-color: #f5f5dc;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  animation: slideIn 0.3s ease; /* Animación de entrada */
  
  @keyframes slideIn {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;