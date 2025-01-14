import {
  getUser,
  getUsuarioActivo,
} from "../../src/ArchivosParaPruebas/05-funciones";

describe("Pruebas en funciones", () => {
  test("should return an object", () => {
    const testUser = {
      uid: "ABC123",
      username: "User1502",
    };

    const user = getUser();

    expect(user).toEqual(testUser);
  });

  test("should return an active user", () => {
    const nombre = "juan";
    const testUser = {
      uid: "ABC567",
      username: nombre,
    };

    const user = getUsuarioActivo(nombre);

    expect(user).toStrictEqual(testUser);
  });
});
