import styled from 'styled-components';
import backgroundImage from '~/images/bg.png';

export default styled.div`
  /* background-color: white; */
  // background-image: url(${backgroundImage});
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  border: 1px solid #e6e6e6;
  width: 280px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.palette.bgblack.main};
  ${({ theme }) => theme.typography.title}
  @media(max-width: 993px) {
    border: none;
  }
`;
