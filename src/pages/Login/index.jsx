import ImageLogin from "../../assets/images/login.svg";
import FormLogin from "../../components/FormLogin";
import { StyleLogin, StyleImage } from "./style";

const Login = () => {
  return (
    <StyleLogin>
      <h1>Boas-vindas</h1>
      <StyleImage src={ImageLogin} alt="Login" />
      <FormLogin />
      <p>
        Não possui uma conta? <a href="http://google.com">Criar</a>
      </p>
    </StyleLogin>
  );
};

export default Login;
