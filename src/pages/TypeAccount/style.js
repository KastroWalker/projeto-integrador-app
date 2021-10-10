import styled from "styled-components";
import { Button } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 40px;
`;

export const ButtonTypeAccount = styled(Button)`
  width: 250px;
  height: 100px;
  margin-top: 100px !important;
`;
