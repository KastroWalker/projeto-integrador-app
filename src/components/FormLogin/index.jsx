import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import useStylesInput from "../../helpers/styles";
import { StyleForm } from "./style";

const FormLogin = () => {
  const classes = useStylesInput();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [messagesError, setMessagesError] = useState({
    username: "",
    password: "",
  });

  const onSubmitForm = () => {
    validateForm();
  };

  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
    if (messagesError.username || messagesError.password) {
      validateForm();
    }
  };

  const validateForm = () => {
    setMessagesError({
      username: !values.username ? "Insira um usuário" : "",
      password: !values.password ? "Insira uma senha" : "",
    });
  };

  return (
    <StyleForm>
      <TextField
        label="Usuário"
        variant="filled"
        value={values.username}
        className={classes.root}
        onChange={handleChange("username")}
        helperText={messagesError.username}
        autoComplete="off"
      />
      <TextField
        label="Senha"
        value={values.password}
        className={classes.root}
        onChange={handleChange("password")}
        helperText={messagesError.password}
        variant="filled"
        type="password"
        autoComplete="off"
      />
      <Button variant="contained" onClick={() => onSubmitForm()}>
        Entrar
      </Button>
    </StyleForm>
  );
};

export default FormLogin;
