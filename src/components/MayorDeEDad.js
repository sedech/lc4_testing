export const mayorDeEdad = (edad) => {
  if (edad < 0) {
    return null;
  } else {
    return edad >= 18;
  }
};

export const MayorDeEdad = ({ edad }) => {
  return <p>{mayorDeEdad(edad) ? "Sí" : "No"}</p>;
};
