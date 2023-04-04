import styled, { css } from 'styled-components';
import { SecondaryButton } from '~/core/components/Button';

const actionItemActiveStyles = css`
  ${({ active, theme }) =>
    active &&
    `
      background-color: ${theme.palette.bggray.main};
      border-radius: 29px;
      & > .actionItemChild {
        color: ${theme.palette.grayshade3.main};
      }
      &:hover > .actionItemChild {
        color: ${theme.palette.neutral.main};
      }
    `}
`;

const actionItemContainerStyles = css`
  display: flex;
  align-items: center;
  padding: 5px 8px;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.palette.neutral.main};
  justify-content: left;
  @media (max-width: 993px) {
    justify-content: center;
    padding: 14px 8px;
  }
  &:hover:not(:disabled) {
    border-radius: 29px;
    background-color: ${({ theme }) => theme.palette.bggray.main};
    color: ${({ theme }) => theme.palette.neutral.main};
  }
  &:disabled {
    color: ${({ theme }) => theme.palette.neutral.shade2};
    background-color: transparent;
  }
  ${actionItemActiveStyles}
`;

export const ButtonActionItem = styled(SecondaryButton)`
  ${actionItemContainerStyles};
  width: 100%;
`;

export const AnchorActionItem = styled.a`
  cursor: pointer;
  border-radius: 4px;
  ${actionItemContainerStyles}
  ${({ theme }) => theme.typography.bodyBold}
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  border-radius: 50%;
  ${({ active, theme }) =>
    active
      ? css`
          background: ${theme.palette.primary.main};
          // TODO: check color with design
          color: white;
        `
      : css`
          background: ${theme.palette.primary.main};
          color: inherit;
        `};
`;
