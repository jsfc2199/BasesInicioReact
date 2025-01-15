import { getImagen } from "../../src/ArchivosParaPruebas/11-async-await";

describe("pruebas async await", () => {
  test("should return an url", async () => {
    const url = await getImagen();

    expect(typeof url).toBe("string");
  });
});
