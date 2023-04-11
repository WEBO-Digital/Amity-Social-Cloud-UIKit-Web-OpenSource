import styled from 'styled-components';

export default styled.div`
  width: 280px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.palette.bgblack.main};
  ${({ theme }) => theme.typography.title}
  border: 1px solid ${({ theme }) => theme.palette.bggray.main};
  @media (max-width: 960px) {
    border: none;
  }
  @media (min-width: 961px) {
    background-color: ${({ theme }) => theme.palette.system.background};
  }
`;
