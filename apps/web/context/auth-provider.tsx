'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import keycloakClient from '@/lib/keycloak';
import type Keycloak from 'keycloak-js';


interface AuthContextType {
  isAuthenticated: boolean;
  keycloak: Keycloak
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  keycloak: keycloakClient,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    keycloakClient.init({ onLoad: 'check-sso', silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html' }).then((auth) => {
      setIsAuthenticated(auth);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, keycloak: keycloakClient }}>
      {children}
    </AuthContext.Provider>
  );
};
