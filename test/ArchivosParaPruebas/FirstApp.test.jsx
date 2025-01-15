import { render } from "@testing-library/react";
import { FirstApp } from "../../src/FirstApp";

describe("Pruebas en first app", () => {
  //generalmente no se recomienda la prueba del snapshot entonces la comentamos
  // test("Debe hacer match con el snapshot", () => {
  //   const title = "Hola";
  //   const subtitle = 123;

  //   const { container } = render(
  //     <FirstApp title={title} subtitle={subtitle} />
  //   );

  //   expect(container).toMatchSnapshot(); //foto de lo que hay
  // });

  test("Debe de mostrar el titulo en un h2", () => {
    const title = "Hola";
    const subtitle = 123;

    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );

    expect(getByText(title)).toBeTruthy();

    //no recomendado
    // const h1 = container.querySelector('h2')
    // expect(h1.innerHTML).toBe(title)

    expect(getByTestId("test-title").innerHTML).toBe(title);
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test('Debe de mostrar el subtitulo enviado por props', () => {

    //render renderiza el componente en memora
    const title = 'Hola'
    const subtitle = 123
    const {getByText, getAllByText} = render(<FirstApp title={title} subtitle={subtitle}/>) //retorna un objeto con ciertas propiedades como el container

    expect(getByText(subtitle)).toBeTruthy()
    expect(getAllByText(subtitle).length).toBe(1)
    
  })

});
