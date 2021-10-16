import ImageLogin from "../../assets/images/login.svg";
import FormLogin from "../../components/FormLogin";
import { Container, Image, Title, NewAccount, LinkSingUp } from "./style";

const Login = () => {
  return (
    <Container>
      <Title>Boas-vindas</Title>
      <Image src={ImageLogin} alt="Login" />
      <FormLogin />
      <NewAccount>
        Não possui uma conta? <LinkSingUp to="/cadastro">Criar</LinkSingUp>
      </NewAccount>
    </Container>
  );
};

export default Login;
