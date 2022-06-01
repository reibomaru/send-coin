import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders send coin", () => {
  render(<App />);
  const linkElement = screen.getByText(/Send Coin/i);
  expect(linkElement).toBeInTheDocument();
});
