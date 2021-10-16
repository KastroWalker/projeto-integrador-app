import { Container, Title, ButtonTypeAccount } from "./style";

const TypeAccount = (props) => {
  const { changeTypeAccount } = props;

  return (
    <Container>
      <Title>Escolhe o tipo de conta</Title>
      <ButtonTypeAccount
        variant="contained"
        onClick={() => changeTypeAccount("client")}
      >
        Cliente
      </ButtonTypeAccount>
      <ButtonTypeAccount
        variant="contained"
        onClick={() => changeTypeAccount("merchant")}
      >
        Comerciante
      </ButtonTypeAccount>
    </Container>
  );
};

export default TypeAccount;
