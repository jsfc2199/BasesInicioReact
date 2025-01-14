import {
  getHeroById,
  getHeroesByOwner,
} from "../../src/ArchivosParaPruebas/08-imp-exp";

describe("Prueba de archivo 8", () => {
  test("debe traer un herore por un id", () => {
    const id = 1;

    const hero = getHeroById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("debe traer nundefined si no hay herore", () => {
    const id = 100;

    const hero = getHeroById(id);

    expect(hero).toBeFalsy(); //null, undefined, o false
  });

  test("debe retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";

    const hero = getHeroesByOwner(owner);

    expect(hero.length).toBe(3);
    expect(hero).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
  });

  test("debe retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";

    const hero = getHeroesByOwner(owner);

    expect(hero.length).toBe(2);
  });
});
