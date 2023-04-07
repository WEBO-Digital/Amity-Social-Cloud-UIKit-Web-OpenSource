import styled from 'styled-components';

import Button from '~/core/components/Button';
import { ChevronDown } from '~/icons';

export const LoadMoreButton = styled(Button)`
  width: 100%;
  &.text-center {
    justify-content: center;
  }
  color: ${({ theme }) => theme.palette.base.shade2};
  border: 1px solid ${({ theme }) => theme.palette.base.shade4};
  border-radius: 0;

  &.no-border {
    border: none;
  }

  &.comments-button {
    justify-content: flex-start;
    color: black;
    border: none;
    margin-top: 16px;
    padding: 0 0 16px 0;
    border-bottom: 1px solid #e3e4e8;
  }

  &.reply-button {
    width: fit-content;
    // background-color: ${({ theme }) => theme.palette.system.borders};
    // color: ${({ theme }) => theme.palette.base.shade1};
    margin: 12px 0px 16px 3rem;
    padding: 5px 12px;
    border-radius: 0 11px 11px 11px;
    ${({ theme }) => theme.typography.captionBold}
    border: none;
    background-color: #797979;
    color: #141414;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: -10px;
      width: 0;
      height: 0;
      border-bottom: 10px solid transparent;
      border-right: 14px solid #797979;
      transform: rotate(180deg);
    }
  }
`;

export const ShevronDownIcon = styled(ChevronDown).attrs({ height: 14, width: 14 })`
  vertical-align: middle;
  margin-left: 5px;
`;
