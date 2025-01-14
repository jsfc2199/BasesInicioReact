import { getSaludo } from "../../src/ArchivosParaPruebas/02-template-string";

describe("Pruebas en template string", () => {
    //configuracion de babel
    //npm install --save-dev babel-jest @babel/core @babel/preset-env
    test("getSaludo debe de retornar Hola Juan", () => {
      const name = 'Juan'
      const message = getSaludo(name)

      expect(message).toBe(`Hola ${name}`)
    });
  });
  