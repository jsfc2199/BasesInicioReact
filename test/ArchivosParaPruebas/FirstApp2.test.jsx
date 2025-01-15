import { render, screen } from "@testing-library/react";
import { FirstApp } from "../../src/FirstApp";

describe("Pruebas en first app", () => {
  const title = "Hola";
  const subtitle = 123;
  test("Debe de mostrar el titulo en un h2", () => {
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );

    expect(getByText(title)).toBeTruthy();

    expect(getByTestId("test-title").innerHTML).toBe(title);
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("Debe de mostrar el mensaje 'Hola'", () => {
    //usando screen para pruebas, para ver el objeto usamos screen.debug
    render(<FirstApp title={title} subtitle={subtitle} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
