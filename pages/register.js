import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdEmail, MdLock, MdPerson, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import {
  RegisterContainer,
  FormStyle,
  ButtonStyle,
  InputContainer,
  InputField,
  ErrorMessage,
  CardHeader,
  LoginLink,
  TogglePasswordButton
} from '../frontend/styles/register.styles';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/users/register', formData);
      localStorage.setItem('token', data.token);
      console.log('Token de acceso:', data.token);
      router.push('/login');
    } catch (error) {
      setError('Error al registrar el usuario. Intente nuevamente.');
    }
  };  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <RegisterContainer>
      <FormStyle onSubmit={handleSubmit}>
        <CardHeader tabIndex={-1}>Registrarse</CardHeader>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <InputContainer>
          <MdPerson color="#333" size={24} />
          <InputField
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Nombre de usuario"
            required
          />
        </InputContainer>
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
        <ButtonStyle type="submit">Registrarse</ButtonStyle>
        <LoginLink style={{ marginTop: '12px' }}>¿Ya tienes cuenta? <Link href="/login">Inicia sesión</Link></LoginLink>
      </FormStyle>
    </RegisterContainer>
  );
};

export default RegisterPage;