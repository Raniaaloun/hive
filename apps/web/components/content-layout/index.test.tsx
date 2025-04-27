import React from "react";
import { render, screen } from "@testing-library/react";
import ContentLayout from "./";

describe("ContentLayout", () => {
  it("should render children content", () => {
    render(
      <ContentLayout>
        <div>Test Content</div>
      </ContentLayout>
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("should render the children inside ContentWrapper and Content", () => {
    render(
      <ContentLayout>
        <span>Test Child Element</span>
      </ContentLayout>
    );

    const contentWrapper = screen.getByTestId("content-wrapper");
    const content = screen.getByTestId("content");

    expect(contentWrapper).toContainElement(content);
    expect(content).toContainElement(screen.getByText("Test Child Element"));
  });
});
