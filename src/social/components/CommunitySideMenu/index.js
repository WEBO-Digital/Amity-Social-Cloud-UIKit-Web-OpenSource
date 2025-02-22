import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SideMenu from '~/core/components/SideMenu';
import SideSectionCommunity from '~/social/components/SideSectionCommunity';
import SideSectionMyCommunity from '~/social/components/SideSectionMyCommunity';
import UiKitSocialSearch from '~/social/components/SocialSearch';

const SocialSearch = styled(UiKitSocialSearch)`
  background: ${({ theme }) => theme.palette.system.background};
  padding: 0.5rem;
  @media (max-width: 960px) {
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.26s ease;
    height: 0;
    padding: 0;
    background: ${({ theme }) => theme.palette.grayshade1.main};
  }
`;
const TabGroup = styled.div`
  position: relative;
  @media (max-width: 960px) {
    h4 {
      text-align: center;
    }
  }
  @media (min-width: 961px) {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    & > div {
      width: 100%;
      &:first-of-type {
        order: 2;
      }
      &:last-of-type {
        order: 1;
        border-radius: 15px;
        & > div > div {
          background-color: ${({ theme }) => theme.palette.bgblack.main};
          padding: 2px;
        }
      }
    }
  }
`;

const CommunitySideMenu = ({ className, activeCommunity }) => (
  <SideMenu data-qa-anchor="community-side-menu" className={className}>
    <TabGroup>
      <SideSectionCommunity />
      <SocialSearch sticky />
    </TabGroup>

    <SideSectionMyCommunity activeCommunity={activeCommunity} showCreateButton />
  </SideMenu>
);

CommunitySideMenu.propTypes = {
  className: PropTypes.string,
  activeCommunity: PropTypes.string,
};

export default CommunitySideMenu;
