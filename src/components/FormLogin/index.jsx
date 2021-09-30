import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { StyleForm } from "./style";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    "& .MuiFilledInput-root": {
      background: "#FFF6F5",
    },
    "& .MuiFilledInput-root:hover": {
      background: "#FFF6F5",
    },
    "& .MuiFilledInput-root.Mui-focused": {
      background: "#FFF6F5",
    },
    "& .MuiFormHelperText-root": {
      color: "#F71B33",
    },
  },
});

const FormLogin = () => {
  const classes = useStyles();
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
    validateForm();
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
