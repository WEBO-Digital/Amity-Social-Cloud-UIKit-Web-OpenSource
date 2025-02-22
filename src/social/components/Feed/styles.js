import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Lock } from '~/icons';

export const FeedScrollContainer = styled(InfiniteScroll)`
  > :not(:first-child) {
    margin-top: 20px;
  }

  & .post:not(:first-child) {
    margin-top: 20px;
  }

  & .load-more {
    max-width: 600px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 601px) {
      border-radius: 8px;
    }
  }
`;

export const PrivateFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin-top: 10px;
  }

  color: ${({ theme }) => theme.palette.base.shade3};
  padding: 5rem 0.5rem;
  background: ${({ theme }) => theme.palette.system.background};
  color: ${({ theme }) => theme.palette.base.shade3};
  ${({ theme }) => theme.typography.body};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LockIcon = styled(Lock).attrs({ width: 40, height: 40 })`
  fill: ${({ theme }) => theme.palette.base.shade2};
`;

export const PrivateFeedTitle = styled.div`
  font-weight: 600;
  font-size: 17px;
  color: ${({ theme }) => theme.palette.base.main};
`;

export const PrivateFeedBody = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.base.shade1};
`;
