import { TextField } from "@mui/material";
import styled from "styled-components";

const StyledInput = styled(TextField)`
  .MuiFormHelperText-root {
    color: red;
  }
`;

const Input = (props) => {
  const { label, value, onChange, helperText } = props;

  return (
    <StyledInput
      label={label}
      value={value}
      onChange={onChange}
      helperText={helperText}
      variant="filled"
      autoComplete="off"
    />
  );
};

export default Input;
