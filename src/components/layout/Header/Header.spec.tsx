import { render, screen } from "@testing-library/react";

import { Header } from ".";

describe("Header component", () => {
  it("should render", () => {
    render(<Header />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByText("Calculadoras")).toBeInTheDocument();
    expect(screen.getByText("Ferramentas")).toBeInTheDocument();
    expect(screen.getByText("Motivação")).toBeInTheDocument();
    expect(screen.getByText("Github")).toBeInTheDocument();
  });
});
