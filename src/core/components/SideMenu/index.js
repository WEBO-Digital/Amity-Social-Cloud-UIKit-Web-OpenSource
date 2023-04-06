import styled from 'styled-components';
import backgroundImage from '~/images/bg.png';

export default styled.div`
  width: 280px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.palette.bgblack.main};
  ${({ theme }) => theme.typography.title}
  border: 1px solid ${({ theme }) => theme.palette.bggray.main};
  @media (max-width: 993px) {
    border: none;
  }
  @media (min-width: 993px) {
    background-color: ${({ theme }) => theme.palette.system.background};
    border-radius: 15px;
    margin-top: 28px;
  }
`;
