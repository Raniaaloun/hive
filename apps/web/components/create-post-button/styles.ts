import styled from "@emotion/styled";

export const Button = styled.button`
  background-color: #333;
  border: none;
  border-radius: 0.5rem;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 2rem 0;
  padding: 0.75rem 1.5rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
  user-select: none;

  &:hover {
    background-color: #444;
    transform: translateY(-0.05rem);
  }

  &:active {
    background-color: #555;
    transform: translateY(0);
  }

  @media (max-width: 48rem) {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
`;
