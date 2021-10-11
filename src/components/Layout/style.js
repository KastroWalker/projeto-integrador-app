import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  display: grid;
  grid-template-rows: 5em auto 3em;
`;

export const Title = styled.h6`
  display: flex;
`;

export const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const UserName = styled.p`
  padding-left: 5px;
  flex: 1;
`;

export const Content = styled.div`
  grid-row: 2;
  overflow-y: auto;
`;


