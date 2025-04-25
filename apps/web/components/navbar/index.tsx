'use client';

import { Button, NavbarContainer, Title } from './styles';
import { useAuth } from '@/context/auth-provider';
import Dropdown from '@/components/dropdown';

export default function Navbar() {
  const { isAuthenticated, keycloak } = useAuth();

  const handleLogin = () => {
    keycloak.login();
  };


  return (
    <NavbarContainer>
      <Title>The Hive</Title>

      {isAuthenticated ? (
        <Dropdown />
      ) : (
        <Button onClick={handleLogin}>Sign In</Button>
      )}
    </NavbarContainer>
  );
}
