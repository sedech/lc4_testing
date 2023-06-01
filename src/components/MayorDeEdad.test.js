import { mayorDeEdad } from "./MayorDeEdad";

describe("Funciones  dentro del componente MayorDeEdad", () => {
  test("Debe retornar true si la edad es mayor o igual a 18", () => {
    expect(mayorDeEdad(18)).toBe(true);
    expect(mayorDeEdad(71)).toBe(true);
  });

  test("Debe retornar false si la edad es menor a 18", () => {
    expect(mayorDeEdad(15)).toBe(false);
    expect(mayorDeEdad(7)).toBe(false);
  });

  test("Debe retornar null si la edad es negativa", () => {
    expect(mayorDeEdad(-10)).toBeNull();
    expect(mayorDeEdad(-4)).toBeNull();
  });
});
