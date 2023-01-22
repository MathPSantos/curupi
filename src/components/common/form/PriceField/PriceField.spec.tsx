import { render, screen } from "@testing-library/react";

import { PriceField } from ".";

describe("PriceField component", () => {
  it("should render", () => {
    render(<PriceField aria-label="label" />);

    expect(screen.getByLabelText("label")).toBeInTheDocument();
  });

  it("should render with defaultValue in BRL currency format", () => {
    render(<PriceField aria-label="label" defaultValue={100} />);

    expect(screen.getByDisplayValue("R$ 100,00")).toBeInTheDocument();
  });

  it("should render with aria-label prop", () => {
    render(<PriceField aria-label="label" />);

    expect(screen.getByLabelText("label")).toHaveAttribute(
      "aria-label",
      "label"
    );
  });

  it("should render with aria-labelledby prop", () => {
    render(
      <div>
        <span id="test-label">label</span>
        <PriceField aria-labelledby="test-label" />
      </div>
    );

    expect(screen.getByLabelText("label")).toHaveAttribute(
      "aria-labelledby",
      "test-label"
    );
  });

  it("should render with other currency format", () => {
    render(
      <PriceField
        aria-label="label"
        formatOptions={{ style: "currency", currency: "USD" }}
        defaultValue={100}
      />
    );

    expect(screen.getByDisplayValue("US$ 100,00")).toBeInTheDocument();
  });
});
