// import FormStore from "../../components/FormStore";
import styled from "styled-components";
import FormAddress from "../../components/FormAddress";

const Container = styled.div`
  width: 80%;
  margin: auto;
`;

const CreateStore = () => {
  return (
    <Container>
      {/* <FormStore /> */}
      <FormAddress />
    </Container>
  );
};

export default CreateStore;
