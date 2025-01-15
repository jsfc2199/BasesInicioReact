import { render, screen } from "@testing-library/react";
import { CounterApp } from "./../../src/CounterApp";

describe("Pruebas en el counter app", () => {
  const value = 123;
  test("should match with snapshot", () => {
    const { container } = render(<CounterApp value={value} />);

    expect(container).toMatchSnapshot();
  });

  test("should match with props value if it is 100", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
  });
});
