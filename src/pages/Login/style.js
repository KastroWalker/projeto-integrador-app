import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 40px;
`;

export const NewAccount = styled.p`
  font-size: 17px;
`;

export const LinkSingUp = styled(Link)`
  color: #f71b33;
  text-decoration: none;
  font-weight: bold;
`;

export const Image = styled.img`
  width: 200px;
`;
