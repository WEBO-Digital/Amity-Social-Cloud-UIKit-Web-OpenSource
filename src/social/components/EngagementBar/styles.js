import styled from 'styled-components';
import { Comment } from '~/icons';

export const EngagementBarContainer = styled.div`
  color: ${({ theme }) => theme.palette.neutral.shade1};
  ${({ theme }) => theme.typography.body}
`;

export const Counters = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px;
  &:empty {
    display: none;
  }
`;

export const CommentBar = styled.div`
  background: ${({ theme }) => theme.palette.bgblack.main};
  padding: 0 16px;
  border-radius: 0 0 15px 15px;
`;

export const InteractionBar = styled.div`
  display: flex;
  padding: 16px;
  gap: 1rem;
  & > button {
    background-color: transparent;
    width: calc(50% - 0.5rem);
    border-radius: 29px;
    background-color: ${({ theme }) => theme.palette.grayshade1.main};
  }
`;

export const CommentIcon = styled(Comment).attrs({ width: 16, height: 16 })`
  position: relative;
  margin-right: 5px;
`;

export const NoInteractionMessage = styled.div`
  color: ${({ theme }) => theme.palette.base.shade2};
  margin-top: 8px;
  padding: 16px;
`;
