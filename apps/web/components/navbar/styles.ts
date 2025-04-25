import styled from '@emotion/styled';

export const NavbarContainer = styled.nav`
  background-color: #222;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: relative;

  @media (max-width: 48rem) {
    padding: 1rem 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  user-select: none;

  @media (max-width: 48rem) {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  background-color: #333;
  border-radius: 0.25rem;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: #444;
  }

  @media (max-width: 48rem) {
    font-size: 0.875rem;
    padding: 0.375rem 0.75rem;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 48rem) {
    display: block;
    position: absolute;
    top: 4rem;
    background-color: white;
    width: 100%;
    padding: 1rem;
    box-shadow: 0 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
  }
`;

export const MobileMenuItem = styled.div`
  cursor: pointer;
  font-size: 1rem;
  padding: 1rem;

  &:hover {
    background-color: #f3f3f3;
  }
`;
