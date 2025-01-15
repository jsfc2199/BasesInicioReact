import { fireEvent, render, screen } from "@testing-library/react";
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

  //Simulaciones de evento click
  test("Debe de incrementar con el boton +1", () => {
    render(<CounterApp value={value} />);
    //fire event de react testing library
    fireEvent.click(screen.getByText("+1")); //+1 porque el componente tiene un +1 en el boton
    expect(screen.getByText("124")).toBeTruthy();
  });

  test("Debe de decrementar con el boton -1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));
    screen.debug();
    expect(screen.getByText("122")).toBeTruthy();
  });

  test('Debe de resetear el contador', () => {
    render(<CounterApp value={value}/>)   
    fireEvent.click(screen.getByText('-1'))
    fireEvent.click(screen.getByText('-1'))
    fireEvent.click(screen.getByText('-1'))
    fireEvent.click(screen.getByText('-1'))
    fireEvent.click(screen.getByText('reset'))
    screen.debug()
    expect(screen.getByText(123)).toBeTruthy()
  })

  //otra forma para seleccionar los elementos
  test('Debe de resetear el contador', () => {
    render(<CounterApp value={value}/>)   
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))

    fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
    expect(screen.getByText(value)).toBeTruthy()

  })

});
