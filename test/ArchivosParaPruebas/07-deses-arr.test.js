import { retornaArreglo } from "../../src/ArchivosParaPruebas/07-deses-arr";

describe("tests en desestructuracion de arreglos", () => {
  test("should return un string y numero", () => {
    const [letters, numbers] = retornaArreglo();

    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");
  });
});
