import styled from '@emotion/styled';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  @media (max-width: 48rem) {
    align-items: center;
    display: flex;
  }
`;

export const Avatar = styled.div`
  align-items: center;
  background-color: #333;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  height: 2.5rem;
  justify-content: center;
  user-select: none;
  width: 2.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444;
  }

  @media (max-width: 48rem) {
    font-size: 0.875rem;
    height: 2rem;
    width: 2rem;
  }
`;

export const DropdownMenu = styled.div`
  animation: fadeIn 0.2s ease-out;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
  min-width: 10rem;
  overflow: hidden;
  padding: 0.5rem 0;
  position: absolute;
  right: 0;
  top: 3rem;
  z-index: 999;

  @media (max-width: 768px) {
    min-width: 8rem;
    top: 2.5rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-0.25rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const MenuItem = styled.div`
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0.75rem 1.25rem;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }

  @media (max-width: 48rem) {
    font-size: 0.8rem;
    padding: 0.625rem 1rem;
  }
`;
