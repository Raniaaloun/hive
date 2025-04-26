"use client";

import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.main`
  flex: 1;
  padding: 2rem;

  @media (max-width: 48rem) {
    padding: 1rem;
  }
`;
