import styled from "@emotion/styled";

export const Card = styled.div`
  background: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
  max-width: 38rem;
  padding: 1.5rem;
  transition: box-shadow 0.3s ease;
  width: 100%;

  &:hover {
    box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
  }
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 1rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  span {
    color: #333;
    font-size: 0.875rem;

    &:last-of-type {
      color: #888;
      font-size: 0.75rem;
    }
  }
`;

export const Title = styled.h2`
  color: #222;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  word-break: break-word;
`;

export const Body = styled.p`
  color: #555;
  font-size: 0.875rem;
  line-height: 1.5;
  word-break: break-word;
`;

export const SkeletonLine = styled.div<{ width?: string; height?: string }>`
  background: #e0e0e0;
  border-radius: 0.25rem;
  height: ${({ height }) => height || "1rem"};
  margin-bottom: 0.5rem;
  width: ${({ width }) => width || "100%"};
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
  gap: 1rem;
`;

export const EditButton = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  color: #333;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #e6e6e6;
    color: #007bff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
  }
`;

export const DeleteButton = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  color: #333;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #e6e6e6;
    color: #dc3545;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.5);
  }
`;
