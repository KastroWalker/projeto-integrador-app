import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import useStylesInput from "../../helpers/styles";
import { StyleForm } from "./style";
import { createClient } from "../../clients/client";
import { createMerchant } from "../../clients/merchant";
import { useUserContext } from "../../contexts/userContext/UserContext";
import { useHistory } from "react-router";

const FormSingUp = ({ setMessageError, typeAccount }) => {
  const { userContextActions } = useUserContext();
  const history = useHistory();
  const inputStyle = useStylesInput();
  const [values, setValues] = useState({
    name: "",
    username: "",
    password: "",
  });
  const [messagesError, setMessagesError] = useState({
    name: "",
    username: "",
    password: "",
  });

  const validateForm = () => {
    setMessagesError({
      name: !values.name ? "Insira um nome" : "",
      username: !values.username ? "Insira um usuário" : "",
      password: !values.password ? "Insira uma senha" : "",
    });
  };

  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
    if (
      messagesError.name ||
      messagesError.username ||
      messagesError.password
    ) {
      validateForm();
    }
    validateForm();
  };

  const onSubmitForm = async () => {
    validateForm();

    try {
      setMessageError("");
      let newUser;

      if (typeAccount == "client") {
        newUser = await createClient(values);
      } else {
        newUser = await createMerchant(values);
      }

      if (newUser) {
        userContextActions.setId(newUser.name);
        userContextActions.setName(newUser.name);
        userContextActions.setUsername(newUser.username);
        userContextActions.setType(typeAccount);
        history.push("/conta");
      } else {
        setMessageError("Erro ao criar usuário. Tente novamente!");
      }
    } catch (error) {
      setMessageError("Erro ao criar usuário. Tente novamente!");
      console.error(error);
    }
  };

  return (
    <StyleForm>
      <TextField
        label="Nome"
        variant="filled"
        value={values.name}
        className={inputStyle.root}
        onChange={handleChange("name")}
        helperText={messagesError.name}
        autoComplete="off"
      />
      <TextField
        label="Usuário"
        variant="filled"
        value={values.username}
        className={inputStyle.root}
        onChange={handleChange("username")}
        helperText={messagesError.username}
        autoComplete="off"
      />
      <TextField
        label="Senha"
        value={values.password}
        className={inputStyle.root}
        onChange={handleChange("password")}
        helperText={messagesError.password}
        variant="filled"
        type="password"
        autoComplete="off"
      />
      <Button variant="contained" onClick={() => onSubmitForm()}>
        Cadastrar
      </Button>
    </StyleForm>
  );
};

export default FormSingUp;
