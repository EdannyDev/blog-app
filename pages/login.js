import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import {
  LoginContainer,
  FormStyle,
  ButtonStyle,
  InputContainer,
  InputField,
  ErrorMessage,
  CardHeader,
  RegisterLink,
  TogglePasswordButton
} from '../frontend/styles/login.styles';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/users/login', formData);
      localStorage.setItem('token', data.token);
      console.log('Token de acceso:', data.token); 
      router.push('/home');
    } catch (error) {
      setError('Correo electrónico o contraseña incorrectos');
    }    
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LoginContainer>
      <FormStyle onSubmit={handleSubmit}>
        <CardHeader tabIndex={-1}>Iniciar Sesión</CardHeader>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <InputContainer>
          <MdEmail color="#333" size={24} />
          <InputField
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo Electrónico"
            required
          />
        </InputContainer>
        <InputContainer>
          <MdLock color="#333" size={24} />
          <InputField
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Contraseña"
            required
          />
          <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
            {showPassword ? <MdVisibility color="#333" size={24} /> : <MdVisibilityOff color="#333" size={24} />}
          </TogglePasswordButton>
        </InputContainer>
        <ButtonStyle type="submit">Iniciar Sesión</ButtonStyle>
        <RegisterLink style={{ marginTop: '12px' }}>¿No tienes cuenta? <Link href="/register">Regístrate</Link></RegisterLink>
      </FormStyle>
    </LoginContainer>
  );
};

export default Login;