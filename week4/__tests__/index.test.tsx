/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Entry from "../pages/fruits/[fruit].js";
import React from "react";

describe("fruit page", () => {
  it("dynamically renders a page with props", () => {
    const fruitdata = {
      fruit: "apple",
      color: "red",
      quantity: 3
    }
    render(<Entry itemData={fruitdata} />);

    const heading = screen.getByText(/apple/i)

    expect(heading).toBeInTheDocument;
  });
});
