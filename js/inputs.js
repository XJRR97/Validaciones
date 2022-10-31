export function validar(input) {
  const dataTipo = input.dataset.tipo;
  const Errorinput = input.parentElement.parentElement.lastElementChild;
  const parentInput = input.parentElement;

  if (validaciones[dataTipo]) {
    validaciones[dataTipo](input);
  }
  if (input.validity.valid) {
    Errorinput.classList.remove("message-error-valid");
    parentInput.style.borderColor = "#000000";
    parentInput.firstElementChild.style.color = "#000000";
  } else {
    Errorinput.classList.add("message-error-valid");

    Errorinput.innerHTML = mensajeValidacion(dataTipo, input);
    parentInput.style.borderColor = "#b30808";
    parentInput.firstElementChild.style.color = "#b30808";
  }
}

const validaciones = {
  nacimiento: (input) => validarMayorEdad(input),
};

function validarMayorEdad(input) {
  let mensaje = "";
  if (!calculoMayordeEdad(input)) {
    mensaje = "Debes tener minimo 18 años";
  }
  input.setCustomValidity(mensaje);
}

function calculoMayordeEdad(fecha) {
  const fechaCliente = new Date(fecha.value);
  const fechaActual = new Date();
  let fechaComparar = new Date(
    fechaCliente.getUTCFullYear() + 18,
    fechaCliente.getUTCMonth(),
    fechaCliente.getUTCDate()
  );
  return fechaComparar <= fechaActual;
}

function mensajeValidacion(datatipo, input) {
  const tiposValidity = input.validity;
  let mensaje = "";
  tipodeError.forEach((element) => {
    if (tiposValidity[element]) {
      mensaje = mensajesDeError[datatipo][element];
    }
  });
  return mensaje;
}

const tipodeError = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
    patternMismatch:
      "El nombre no debe incluir números o caracteres especiales",
  },
  email: {
    valueMissing: "El campo email no puede estar vacío",
    typeMismatch: "El correo no es valido",
  },
  password: {
    valueMissing: "El campo contraseña no puede estar vacío",
    patternMismatch:
      "AL menos 6 caracteres, maximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales",
  },
  nacimiento: {
    valueMissing: "El campo de fehca de nacimiento no puede estar vacío",
    customError: "Debes tener al menos 18 años de edad",
  },
  numero: {
    valueMissing: "El campo telefono no puede estar vacío",
    patternMismatch: "El formato requerido es XXXXXXXXXX",
  },
  direccion: {
    valueMissing: "El campo dirección no puede estar vacío",
    patternMismatch: "La dirección debe contener entre 10 y 40 caracteres",
  },
  ciudad: {
    valueMissing: "El campo ciudad no puede estar vacío",
    patternMismatch: "La ciudad debe contener entre 10 y 40 caracteres",
  },
  estado: {
    valueMissing: "El campo estado no puede estar vacío",
    patternMismatch: "El estado debe contener entre 10 y 40 caracteres",
  },
};
