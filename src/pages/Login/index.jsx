import ImageLogin from "../../assets/images/login.svg";
import FormLogin from "../../components/FormLogin";
import { StyleLogin, StyleImage, Title, NewAccount, LinkSingUp } from "./style";

const Login = () => {
  return (
    <StyleLogin>
      <Title>Boas-vindas</Title>
      <StyleImage src={ImageLogin} alt="Login" />
      <FormLogin />
      <NewAccount>
        Não possui uma conta?{" "}
        <LinkSingUp href="http://google.com">Criar</LinkSingUp>
      </NewAccount>
    </StyleLogin>
  );
};

export default Login;
