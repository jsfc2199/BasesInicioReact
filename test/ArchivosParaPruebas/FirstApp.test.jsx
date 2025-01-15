import { render } from "@testing-library/react"
import { FirstApp } from "../../src/FirstApp"


describe('Pruebas en first app', () => {
  test('Debe hacer match con el snapshot', () => {

    //render rendereiza el componente en memora
    render(<FirstApp />)
  })
  
})
