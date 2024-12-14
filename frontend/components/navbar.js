import React, { useState } from 'react';
import { FaBlog, FaUser, FaSignOutAlt, FaNetworkWired } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { NavbarContainer, LogoContainer, NavItemsContainer, NavbarItem, LogoutContainer, Notification } from '../styles/navbar.styles';

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [showNotification, setShowNotification] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    console.log('Token de acceso eliminado.');
    router.push('/login');
  };

  const handleMouseEnter = () => {
    setShowNotification(true);
  };

  const handleMouseLeave = () => {
    setShowNotification(false);
  };

  return (
    <NavbarContainer>
      <LogoContainer>
        <FaNetworkWired />
        <span>| SocialNet</span>
      </LogoContainer>
      <NavItemsContainer>
        <NavbarItem href="/home" active={currentPath === '/home'}>
          <FaBlog />
        </NavbarItem>
        <NavbarItem href="/profile" active={currentPath === '/profile'}>
          <FaUser />
        </NavbarItem>
      </NavItemsContainer>
      <LogoutContainer onClick={handleLogout} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <FaSignOutAlt />
        {showNotification && <Notification>Cerrar Sesión</Notification>}
      </LogoutContainer>
    </NavbarContainer>
  );
};

export default Navbar;