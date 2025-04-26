"use client";

import React, { ReactNode } from "react";
import { ContentWrapper, Content } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

const ContentLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ContentWrapper>
      <Content>{children}</Content>
    </ContentWrapper>
  );
};

export default ContentLayout;
