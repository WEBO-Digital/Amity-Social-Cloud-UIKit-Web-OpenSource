import styled from 'styled-components';
import backgroundImage from '~/images/bg.png';

export default styled.div`
  /* background-color: white; */
  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid #e6e6e6;
  width: 280px;
  overflow: auto;
  flex-shrink: 0;
  ${({ theme }) => theme.typography.title}
`;
