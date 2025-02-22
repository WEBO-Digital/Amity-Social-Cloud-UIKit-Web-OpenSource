import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Skeleton from '~/core/components/Skeleton';

import customizableComponent from '~/core/hocs/customization';

import Avatar from '~/core/components/Avatar';
import CommunityName from '~/social/components/community/Name';
import { backgroundImage as CommunityImage } from '~/icons/Community';

const CommunityHeaderContainer = styled.a.attrs((props) => props)`
  display: grid;
  grid-template-areas: 'avatar title' 'avatar children';
  grid-template-columns: min-content auto;
  grid-template-rows: min-content min-content;
  grid-gap: 0 0.75em;
  padding: 10px 8px 8px;
  border-radius: 4px;
  align-items: center;
  color: ${({ theme }) => theme.palette.base.main};
  @media (max-width: 960px) {
    display: block;
    color: ${({ theme }) => theme.palette.grayshade4.main};
    & > div {
      text-align: center;
      &:first-of-type {
        margin: 0 auto;
      }
      &:last-of-type {
        div {
          padding-right: 0;
          height: 21px;
          overflow-y: hidden;
        }
        svg {
          margin-left: 0;
        }
      }
    }
  }
  @media (min-width: 961px) {
    border-radius: 0;
  }

  ${({ $loading }) =>
    !$loading &&
    `&:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.base.shade4};
  }`}

  ${({ isActive, theme }) =>
    isActive &&
    css`
      color: ${theme.palette.primary.main};
      background-color: ${theme.palette.primary.shade3};
    `};

  ${({ hasChildren }) =>
    !hasChildren &&
    css`
      grid-template-areas: 'avatar title';
      align-items: center;
    `}
`;

const CommunityHeaderAvatar = styled(Avatar)`
  grid-area: avatar;
`;

const Rest = styled.div`
  grid-area: children;
`;

const UICommunityHeader = ({
  communityId,
  isActive,
  avatarFileUrl,
  onClick,
  isOfficial,
  isPublic,
  isSearchResult,
  name,
  searchInput,
  children,
  loading,
}) => (
  <CommunityHeaderContainer
    data-qa-anchor="community-header"
    isActive={isActive}
    hasChildren={!!children}
    $loading={loading}
    onClick={() => onClick(communityId)}
  >
    <CommunityHeaderAvatar
      avatar={avatarFileUrl}
      backgroundImage={CommunityImage}
      loading={loading}
    />
    {loading && children ? (
      <Skeleton style={{ fontSize: 8, maxWidth: 120 }} />
    ) : (
      <CommunityName
        data-qa-anchor="community-header"
        isActive={isActive}
        isOfficial={isOfficial}
        isPublic={isPublic}
        isSearchResult={isSearchResult}
        name={name}
        searchInput={searchInput}
        loading={loading}
      />
    )}
    {children && <Rest>{children}</Rest>}
  </CommunityHeaderContainer>
);

UICommunityHeader.propTypes = {
  communityId: PropTypes.string,
  isActive: PropTypes.bool,
  avatarFileUrl: PropTypes.string,
  isOfficial: PropTypes.bool,
  isPublic: PropTypes.bool,
  isSearchResult: PropTypes.bool,
  name: PropTypes.string,
  searchInput: PropTypes.string,
  children: PropTypes.node,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

UICommunityHeader.defaultProps = {
  onClick: () => {},
};

export default customizableComponent('UICommunityHeader', UICommunityHeader);
