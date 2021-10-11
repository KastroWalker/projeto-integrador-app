import ImageNotFound from "../../assets/images/not_found.svg";
import { Container, Image, Title } from "./style";

const NotFound = () => {
  return (
    <Container>
      <Image src={ImageNotFound} alt="Page not found" />
      <Title>Ops! Essa página não existe.</Title>
    </Container>
  );
};

export default NotFound;
