const statusCodes: { [key: number]: string } = {
  404: "No se encontró el recurso",
  500: "Error del servidor",
  400: "Error de cliente",
  409: "Ya existe el registro",
};

const status = (code: number) => {
  return statusCodes[code] || "Error desconocido";
};

export default status;
