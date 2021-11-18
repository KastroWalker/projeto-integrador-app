import { Button } from "@mui/material";
import styled from "styled-components";
import ProductCard from "../../components/ProductCard";
import Icon from "@mui/material/Icon";

const mock_image =
  "https://png.pngtree.com/png-vector/20190322/ourlarge/pngtree-shop-logo-vector-template-design-illustration-png-image_860078.jpg";

const Container = styled.section`
  margin: auto;
  max-width: 800px;
  width: 90%;
`;

const Logo = styled.img`
  width: 175px;
  border-radius: 50%;
  border: solid black 1.5px;
`;

const StoreName = styled.h1`
  margin-bottom: 5px;
`;

const OpeningHours = styled.p``;

const Description = styled.p``;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContactButton = styled(Button)``;

const ProductsContainer = styled.section`
  margin-top: 10px;
  border-top: solid 1px black;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`;

const StarIcon = styled(Icon)`
  color: orange;
`;

const Ratting = styled.p`
  display: flex;
  align-items: center;
`;

const Avarage = styled.span``;

const Store = () => {
  return (
    <Container>
      <Header>
        <Logo src={mock_image} alt="Logo da loja" />
        <StoreName>Shop Tagline Here</StoreName>
        <Ratting>
          <StarIcon>star</StarIcon>
          <Avarage>4.4</Avarage>
        </Ratting>
        <OpeningHours>05:00 - 18:00</OpeningHours>
      </Header>
      <Content>
        <Description>
          Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros
          commodo tempor.
        </Description>
        <ContactButton variant="contained">Entrar em contato</ContactButton>
        <ProductsContainer>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductsContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default Store;
