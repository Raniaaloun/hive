"use client";

import Keycloak from 'keycloak-js';

const keycloakClient = new Keycloak({
    clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID || 'web',
    realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM || 'hiveRealm',
    url: process.env.NEXT_PUBLIC_KEYCLOAK_URL || 'http://localhost:4000',
  });

export default keycloakClient;
