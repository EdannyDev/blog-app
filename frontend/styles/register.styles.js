import styled from '@emotion/styled';

export const RegisterContainer = styled.div`
  background-color: #f0e6d2; /* beige más oscuro */
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 -4px 8px rgba(0, 0, 0, 0.1); /* sombra */
  width: 400px; /* Ancho fijo */
  height: fit-content; /* Altura ajustada al contenido */
  margin: 175px auto 40px; /* Centrar horizontalmente y agregar margen superior e inferior */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centrar verticalmente */
  align-items: center; /* Centrar horizontalmente */
  font-family: 'Montserrat', sans-serif; /* Fuente Montserrat */
`;

export const FormStyle = styled.form`
  width: 100%; /* Ancho completo */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrar horizontalmente */
  font-family: 'Montserrat', sans-serif; /* Fuente Montserrat */
`;

export const ButtonStyle = styled.button`
  background-color: #703f07; /* beige más oscuro */
  color: #fff; /* texto blanco para contraste */
  border: 1px solid #703f07; /* mismo color que el fondo para el borde */
  border-radius: 4px;
  padding: 12px 24px; /* Aumentamos el padding */
  cursor: pointer;
  width: fit-content; /* Ancho ajustado al contenido */
  margin-top: 2px; /* Espacio arriba del botón */
  font-family: 'Montserrat', sans-serif; /* Fuente Montserrat */
`;

export const InputContainer = styled.div`
  background-color: #e0d6bf; /* beige más claro */
  border-radius: 4px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  width: calc(100% - 16px); /* Ancho completo con margen para padding */
  padding: 0 8px; /* Ajuste del padding para evitar interferencias */
`;

export const InputField = styled.input`
  border: none;
  outline: none;
  background-color: inherit;
  flex: 1;
  padding: 12px 0; /* Ajuste del padding para evitar interferencias */
  color: #333; /* Color del texto */
  caret-color: #333; /* Color del cursor */
  margin-left: 8px;
  font-family: 'Montserrat', sans-serif; /* Fuente Montserrat */
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 16px;
  font-family: 'Montserrat', sans-serif; /* Fuente Montserrat */
`;

export const CardHeader = styled.h2`
  margin-bottom: 16px;
  color: #333; /* Texto oscuro para contraste */
  outline: none; /* Asegura que no pueda recibir el foco */
  font-family: 'Montserrat', sans-serif; /* Fuente Montserrat */
`;

export const LoginLink = styled.p`
  color: #333; /* Texto oscuro para contraste */
  margin-top: auto; /* Baja hasta el centro del registro */
  font-family: 'Montserrat', sans-serif; /* Fuente Montserrat */
`;

export const TogglePasswordButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 8px;
  display: flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif; /* Fuente Montserrat */
`;