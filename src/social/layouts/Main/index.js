import React from 'react';
import styled from 'styled-components';

import customizableComponent from '~/core/hocs/customization';

const Container = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-areas: 'side main' 'none main';
  grid-template-columns: min-content auto;
  grid-template-rows: 100%;
  grid-gap: 0 20px;
  width: 100%;
  height: 100%;
  padding: 0 0 0 26px;
  /* background: #f7f7f8; */
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  background-color: ${({ theme }) => theme.palette.bgblack.main};
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 0;
    height: unset;
  }
`;

const Main = styled.div`
  grid-area: main;
  overflow: auto;
  width: 100%;
  min-width: 20rem;
  max-width: 100%;
  margin: 0 auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Side = styled.div`
  grid-area: side;
  overflow: auto;
  @media (max-width: 960px) {
    overflow: unset;
  }
`;

const Layout = ({ aside, children }) => {
  return (
    <Container>
      <Main>{children}</Main>
      <Side>{aside}</Side>
    </Container>
  );
};

export default customizableComponent('Layout', Layout);
