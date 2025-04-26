import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #ffffff;
  border-radius: 0.5rem;
  padding: 2rem;
  width: 90%;
  max-width: 32rem;
  position: relative;

  @media (max-width: 48rem) {
    padding: 1.5rem;
  }
`;

export const ModalHeader = styled.h2`
  color: #222;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 48rem) {
    font-size: 1.25rem;
  }
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  width: 100%;

  @media (max-width: 48rem) {
    font-size: 0.875rem;
    padding: 0.6rem 0.8rem;
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  min-height: 8rem;
  padding: 0.75rem 1rem;
  resize: vertical;
  width: 100%;

  @media (max-width: 48rem) {
    font-size: 0.875rem;
    padding: 0.6rem 0.8rem;
  }
`;

export const SubmitButton = styled.button`
  background-color: #333;
  border: none;
  border-radius: 0.5rem;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #444;
  }

  &:disabled {
    background-color: #666;
    cursor: not-allowed;
  }

  @media (max-width: 48rem) {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 1.5rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  transition: color 0.2s ease;

  &:hover {
    color: #666;
  }

  @media (max-width: 48rem) {
    right: 0.8rem;
    top: 0.8rem;
  }
`;
