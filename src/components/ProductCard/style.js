import styled from "styled-components";
import Typography from "@mui/material/Typography";

export const Card = styled.div`
  display: flex;
  height: 125px;
  border-bottom: solid 1px #b1b1b1;
  margin: 10px;
`;

export const Image = styled.img`
  width: 125px;
  height: 125px;
`;

export const ImageContainer = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
`;

export const InfoConainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Description = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Name = styled(Typography)``;

export const Price = styled(Typography)`
  padding-top: 5px !important;
  font-size: 13px !important;
`;
