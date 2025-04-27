"use client";

import Link from "next/link";
import { Button, NavbarContainer, Title } from "./styles";
import { useAuth } from "@/context/auth-provider";
import Dropdown from "@/components/dropdown";

const Navbar: React.FC = () => {
  const { isAuthenticated, keycloak } = useAuth();

  const handleLogin = () => {
    keycloak.login();
  };

  return (
    <NavbarContainer>
      <Link href="/" passHref>
        <Title>The Hive</Title>
      </Link>

      {isAuthenticated ? (
        <Dropdown />
      ) : (
        <Button onClick={handleLogin}>Sign In</Button>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
