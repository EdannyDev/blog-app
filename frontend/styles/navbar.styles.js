import styled from '@emotion/styled';

export const NavbarContainer = styled.nav`
  background-color: #e2d8bf; /* Beige un poco más oscuro */
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Sombra en la parte inferior */
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000; /* Asegura que esté por encima de otros elementos al hacer scroll */
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #333; /* Color más oscuro para el texto del logo */
  font-family: 'Montserrat', sans-serif; /* Aplica la fuente Montserrat */
  
  svg {
    margin-right: 0.1rem;
    fill: #333; /* Color más oscuro para los íconos */
  }

  & > span {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const NavItemsContainer = styled.div`
  display: flex;
  align-items: center; /* Centra verticalmente */
  margin-left: -9rem; /* Mueve las pestañas un poco hacia la izquierda */
`;

export const NavbarItem = styled.a`
  color: ${props => (props.active ? '#4d3a27' : '#8c7c6c')}; /* Beige más oscuro si está activo, beige menos oscuro para inactivo */
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  transition: color 0.3s;

  &:hover {
    color: ${props => (props.active ? '#6b5c4b' : '#4d3a27')}; /* Tono más oscuro al pasar el cursor */
  }
`;

export const LogoutContainer = styled.div`
  font-size: 1.5rem;
  color: #333; /* Color de las letras de la empresa */
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.3s;
  position: relative; /* Asegura que la notificación esté posicionada relativa a este contenedor */
  font-family: 'Montserrat', sans-serif; /* Aplica la fuente Montserrat */

  &:hover {
    color: #6b5c4b; /* Tono más oscuro al pasar el cursor */
  }

  &:active {
    color: #6b5c4b; /* Cambia al color de pestañas activa al hacer clic */
  }
`;

export const Notification = styled.div`
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  top: calc(100% + 5px); /* Posición justo debajo del botón de cerrar sesión */
  left: calc(50% - 40px); /* Alinear un poco más a la izquierda */
  transform: translateX(-50%);
  z-index: 1000;
  font-size: 14px; /* Tamaño de fuente */
  white-space: nowrap; /* Evita que el texto se divida en múltiples líneas */
`;