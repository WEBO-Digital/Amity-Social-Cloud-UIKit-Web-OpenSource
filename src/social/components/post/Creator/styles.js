import styled from 'styled-components';
import { PrimaryButton } from '~/core/components/Button';
import InputText from '~/core/components/InputText';
import UIAvatar from '~/core/components/Avatar';
import { Poll } from '~/icons';
import PlayCircle from '~/icons/PlayCircle';

export const Avatar = styled(UIAvatar)`
  margin-right: 8px;
`;

export const PostCreatorContainer = styled.div`
  padding: 16px 20px 12px 16px;
  display: flex;
  background: ${({ theme }) => theme.palette.system.background};
  max-width: 600px;
  margin: 0 auto;
  textarea {
    background-color: #d7d9dd !important;
    border-radius: 34px;
    color: ${({ theme }) => theme.palette.system.background};
  }
  @media (min-width: 961px) {
    border: 1px solid ${({ theme }) => theme.palette.grayshade1.main};
    border-radius: 15px;
  }
  @media (max-width: 960px) {
    border-top: 4px solid ${({ theme }) => theme.palette.grayshade1.main};
    border-bottom: 4px solid ${({ theme }) => theme.palette.grayshade1.main};
  }
  .post-textboxgroup {
    & > *:empty {
      display: none;
    }
    &:focus-within {
      border-color: ${({ theme }) => theme.palette.system.background};
    }
  }
`;

export const Footer = styled.div`
  padding-top: 12px;
  display: flex;
  align-items: center;

  & > :not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export const PostContainer = styled.div`
  flex-grow: 1;
  width: 85.5%;
`;

export const PostButton = styled(PrimaryButton)`
  margin-left: auto;
  border-radius: 50%;
  width: 33px;
  height: 33px;
  padding: 0;
`;

export const UploadsContainer = styled.div`
  margin-top: 20px;
`;

export const PostInputText = styled(InputText)`
  display: block;
  & > textarea {
    width: 100%;
  }
`;

export const VideoAttachmentIcon = styled(PlayCircle)`
  vertical-align: -0.125em;
`;

export const PollButton = styled.button`
  background: none;
  border: none;
  padding: 0;
`;

export const PollIcon = styled(Poll)`
  path {
    fill: #ffffff;
  }
`;
