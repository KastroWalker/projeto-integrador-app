import { Container, ContainerCards, Store } from "./style";
import StoreCard from "../../components/StoreCard";

const Home = () => {
  const mock_image =
    "https://png.pngtree.com/png-vector/20190322/ourlarge/pngtree-shop-logo-vector-template-design-illustration-png-image_860078.jpg";

  return (
    <Container>
      <Store>Lojas</Store>

      <ContainerCards>
        <StoreCard name="Nome da loja 1" image={mock_image} />
        <StoreCard name="Nome da loja 2" image={mock_image} />
        <StoreCard name="Nome da loja 3" image={mock_image} />
        <StoreCard name="Nome da loja 4" image={mock_image} />
      </ContainerCards>
    </Container>
  );
};

export default Home;
