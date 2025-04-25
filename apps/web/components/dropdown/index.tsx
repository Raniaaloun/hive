'use client';

import { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/context/auth-provider';
import {
  Avatar,
  DropdownContainer,
  DropdownMenu,
  MenuItem
} from './styles';

export default function Dropdown() {
  const { keycloak } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const username = keycloak.tokenParsed?.preferred_username ?? 'User';
  const avatarChar = username.charAt(0).toUpperCase();

  const toggle = () => setOpen(!open);
  const logout = () => keycloak.logout();

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <DropdownContainer ref={ref}>
      <Avatar onClick={toggle}>{avatarChar}</Avatar>
      {open && (
        <DropdownMenu>
          <MenuItem>Hi, {username}</MenuItem>
          <MenuItem onClick={() => window.location.href = '/profile'}>Profile</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
}
