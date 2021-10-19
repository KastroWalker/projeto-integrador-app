import { Alert } from "@mui/material";
import { useState } from "react";
import ImageSingUp from "../../assets/images/sing_up.svg";
import FormSingUp from "../../components/FormSingUp";
import TypeAccount from "../TypeAccount";
import { Container, Image, Title, HasAccount, LinkLogin } from "./style";

const SingUp = () => {
  const [typeAccount, setTypeAccount] = useState("");

  const [messageError, setMessageError] = useState("");

  return typeAccount ? (
    <Container>
      <Title>
        Criar conta de {typeAccount === "client" ? "cliente" : "comerciante"}
      </Title>
      {messageError && <Alert severity="error">{messageError}</Alert>}
      <Image src={ImageSingUp} alt="SingUp" />
      <FormSingUp setMessageError={setMessageError} typeAccount={typeAccount} />
      <HasAccount>
        Já possui uma conta? <LinkLogin to="/">Entrar</LinkLogin>
      </HasAccount>
    </Container>
  ) : (
    <TypeAccount changeTypeAccount={setTypeAccount} />
  );
};

export default SingUp;
