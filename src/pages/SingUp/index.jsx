import { useState } from "react";
import ImageSingUp from "../../assets/images/sing_up.svg";
import FormSingUp from "../../components/FormSingUp";
import TypeAccount from "../TypeAccount";
import { Container, Image, Title, HasAccount, LinkLogin } from "./style";

const SingUp = () => {
  const [typeAccount, setTypeAccount] = useState("");

  return typeAccount ? (
    <Container>
      <Title>
        Criar conta de {typeAccount === "client" ? "cliente" : "comerciante"}
      </Title>
      <Image src={ImageSingUp} alt="SingUp" />
      <FormSingUp />
      <button
        style={{
          background: "#0000",
          border: "none",
          cursor: "pointer",
          color: "red",
        }}
        onClick={() => setTypeAccount("")}
      >
        Hello
      </button>
      <HasAccount>
        Já possui uma conta? <LinkLogin to="/">Entrar</LinkLogin>
      </HasAccount>
    </Container>
  ) : (
    <TypeAccount changeTypeAccount={setTypeAccount} />
  );
};

export default SingUp;
