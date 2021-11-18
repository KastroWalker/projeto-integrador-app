import {
  Card,
  Description,
  Image,
  ImageContainer,
  InfoConainer,
  Name,
  Price,
} from "./style";

const mock_product =
  "https://mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg";

const ProductCard = () => {
  return (
    <Card>
      <InfoConainer>
        <Name gutterBottom variant="h5" component="div">
          Lizard
        </Name>
        <Description variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Description>
        <Price variant="h6" color="text.secondary">
          R$ 70,00
        </Price>
      </InfoConainer>
      <ImageContainer>
        <Image src={mock_product} alt="Produto" />
      </ImageContainer>
    </Card>
  );
};

export default ProductCard;
