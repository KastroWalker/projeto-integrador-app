import ImageSingUp from "../../assets/images/sing_up.svg";
import FormSingUp from "../../components/FormSingUp";
import { Container, Image, Title, HasAccount, LinkLogin } from "./style";

const SingUp = () => {
  return (
    <Container>
      <Title>Criar conta</Title>
      <Image src={ImageSingUp} alt="SingUp" />
      <FormSingUp />
      <HasAccount>
        Já possui uma conta? <LinkLogin to="/">Entrar</LinkLogin>
      </HasAccount>
    </Container>
  );
};

export default SingUp;
