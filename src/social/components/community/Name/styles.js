import styled, { css } from 'styled-components';
import { Lock, Verified } from '~/icons';

export const PrivateIcon = styled(Lock).attrs({ width: 16, height: 16 })`
  margin-right: 8px;
`;

export const VerifiedIcon = styled(Verified).attrs({ width: 16, height: 16 })`
  margin-left: 8px;
  fill: #1253de;
`;

// the padding-right is to avoid cutting too short when the name ends with an emoji (due to the flex + text-overflow combination)
export const Name = styled.div`
  padding-right: 1ch;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  @media (max-width: 960px) {
    display: block;
  }
  ${({ theme, isActive, isTitle }) => css`
    ${theme.typography.bodyBold}
    ${isActive &&
    css`
      color: ${theme.palette.primary.main};
    `}
    ${isTitle && theme.typography.title}
  `}

  & > ${PrivateIcon},
  & > ${VerifiedIcon} {
    ${({ isTitle }) =>
      isTitle &&
      css`
        font-size: 18px;
      `}
  }
`;
