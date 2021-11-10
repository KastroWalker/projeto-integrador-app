import FormStore from "../../components/FormStore";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: auto;
`;

const CreateStore = () => {
  return (
    <Container>
      <FormStore />
    </Container>
  );
};

export default CreateStore;
