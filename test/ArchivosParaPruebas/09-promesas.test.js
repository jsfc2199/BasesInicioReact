import { getHeroByIdAsync } from "./../../src/ArchivosParaPruebas/09-promesas";

//debemos hacer que el codigo sea asincrono tambien, una forma es usando una funcion como callback usualmente llamada done
//el done debe de llamarse dentro del then, porque si se llama fuera del then, salta directamente a este como si ya hubiese terminado todo,
//el done nos sirve para que jest ejecute la prueba de manera asincrona ya que por defecto es sincrono, por ende el done nos permite volver justo la seccion que queremos que se vuelva asincrona

describe("pruebas en promesas", () => {
  test("should return a hero", (done) => {
    const id = 1;
    getHeroByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });

      done(); //esto es para decirle a jest que ya terminó
    });
  });

  test("should return an error if error does not exists", (done) => {
    const id = 100;
    //evaluamos directamente el catch ya que sabemos que no hay hero con id 100
    getHeroByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe");

      done(); //esto es para decirle a jest que ya terminó
    });
  });
});
