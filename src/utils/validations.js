import * as validate from "./regex";

const createResultValidation = (isValid, message = "") => {
  return {
    isValid: isValid,
    message: message,
  };
};

export const validateNameStore = (name) => {
  if (validate.isEmpty.test(name)) {
    return createResultValidation(false, "Insira um nome");
  }

  return createResultValidation(true);
};

export const validateDescriptionStore = (description) => {
  if (validate.isEmpty.test(description)) {
    return createResultValidation(false, "Insira uma descrição");
  }

  return createResultValidation(true);
};
