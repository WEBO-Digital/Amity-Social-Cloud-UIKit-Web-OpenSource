import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SideMenu from '~/core/components/SideMenu';
import SideSectionCommunity from '~/social/components/SideSectionCommunity';
import SideSectionMyCommunity from '~/social/components/SideSectionMyCommunity';
import UiKitSocialSearch from '~/social/components/SocialSearch';
import { FormattedMessage } from 'react-intl';

const SocialSearch = styled(UiKitSocialSearch)`
  background: ${({ theme }) => theme.palette.system.background};
  padding: 0.5rem;
  @media (max-width: 993px) {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    background: ${({ theme }) => theme.palette.grayshade1.main};
  }
`;
const TabGroup = styled.div`
  position: relative;
  @media (max-width: 993px) {
    h4 {
      text-align: center;
    }
  }
  @media (min-width: 993px) {
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
