import React from 'react';
import styled from 'styled-components';

import customizableComponent from '~/core/hocs/customization';

const Container = styled.div`
  overflow: unset;
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
  @media (min-width: 961px) {
    padding-right: 26px;
  }
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
  border-radius: 15px;
  margin: 26px 0;
  @media (max-width: 960px) {
    overflow: unset;
    margin-bottom: 0;
  }
  @media (min-width: 961px) {
    height: calc(100vh - 154px);
    position: sticky;
    top: 26px;
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
