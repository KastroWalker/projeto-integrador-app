import styled from "styled-components";
import Card from "@mui/material/Card";

export const NameStore = styled.h5`
  font-size: 16px;
`;

export const StyleCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 150px;
  padding-top: 10px;

  img.MuiCardMedia-root {
    border-radius: 13px;
    width: 145px;
    padding: 0px;
    margin: 0px;
  }

  div.MuiCardContent-root {
    margin: 0;
    padding: 0;
  }
`;
