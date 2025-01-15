import { render } from "@testing-library/react";
import { FirstApp } from "../../src/FirstApp";

describe("Pruebas en first app", () => {
  test("Debe hacer match con el snapshot", () => {
    const title = "Hola";
    const subtitle = 123;

    const { container } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );

    expect(container).toMatchSnapshot(); //foto de lo que hay
  });

  
  test("Debe de mostrar el titulo en un h2", () => {
    const title = "Hola";
    const subtitle = 123;

    const { container, getByText } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );

    expect(getByText(title)).toBeTruthy()

    //no recomendado
    const h1 = container.querySelector('h2')
    expect(h1.innerHTML).toBe(title)

  });
});
