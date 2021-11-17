import Input from "../Input";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormAddress = () => {
  return (
    <Form>
      <Input
        label="Endereço"
        onChange={() => console.error("aqui")}
        helperText={"teste"}
        value="teste"
      />
      <Input
        label="Número"
        onChange={() => console.error("aqui")}
        helperText={"teste"}
        value="teste"
      />
      <Input
        label="Bairro"
        onChange={() => console.error("aqui")}
        helperText={"teste"}
        value="teste"
      />
      <Input
        label="Cidade"
        onChange={() => console.error("aqui")}
        helperText={"teste"}
        value="teste"
      />
      <Input
        label="CEP"
        onChange={() => console.error("aqui")}
        helperText={"teste"}
        value="teste"
      />
      <Input
        label="Complemento"
        onChange={() => console.error("aqui")}
        helperText={"teste"}
        value="teste"
      />
      <Input
        label="Coordenadas"
        onChange={() => console.error("aqui")}
        helperText={"teste"}
        value="teste"
      />
    </Form>
  );
};

export default FormAddress;
