'use client';

import { useAuth } from "@/context/auth-provider";
import styles from "./page.module.css";

export default function Home() {
  const { isAuthenticated, keycloak } = useAuth();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <div>
      {isAuthenticated ? (
        <>
          <h1>Welcome, {keycloak.tokenParsed?.preferred_username}</h1>
          <button onClick={() => keycloak.logout()}>Logout</button>
        </>
      ) : (
        <button onClick={() => keycloak.login()}>Login</button>
      )}
    </div>
      </main>
    </div>
  );
}
