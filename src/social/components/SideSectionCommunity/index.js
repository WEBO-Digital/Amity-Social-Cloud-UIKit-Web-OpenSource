import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { Newspaper, Search } from '~/icons';
import { PageTypes } from '~/social/constants';
import SideMenuSection from '~/core/components/SideMenuSection';
import { useNavigation } from '~/social/providers/NavigationProvider';
import SideMenuActionItem from '~/core/components/SideMenuActionItem';

export const NewsIcon = styled(Newspaper).attrs({ width: 20, height: 20 })``;

export const SearchIcon = styled(Search).attrs({ width: 20, height: 20 })``;
const SideMenuItemList = styled.div`
  .icon-wrapper {
    display: none;
  }
  @media (max-width: 993px) {
    display: flex;
    flex-wrap: wrap;
    max-width: 890px;
    border: 1px solid ${({ theme }) => theme.palette.bordergray.main};
    border-radius: 34px;
    margin: 0 auto;
    padding: 2px;
    & > div:not(:last-of-type) {
      width: calc(50% - 30px);
      & > a {
        margin-bottom: 0;
      }
    }
    & > div:last-of-type {
      width: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.palette.bggray.main};
      border-radius: 29px;
    }
    h4 {
      width: 100%;
      text-align: center;
    }
  }
`;
const Searchbar = styled.div`
  @media (min-width: 993px) {
    display: none;
  }
  cursor: pointer;
`;

const SideSectionCommunity = ({ shouldHideExplore, children }) => {
  const [visible, setVisible] = React.useState(false);
  const { onChangePage, page } = useNavigation();
  const handleToggle = () => {
    setVisible((current) => !current);
  };

  return (
    <SideMenuSection
      className={visible ? 'active' : ''}
      heading={<FormattedMessage id="sidesectioncommunity.community" />}
    >
      <SideMenuItemList>
        <div>
          <SideMenuActionItem
            data-qa-anchor="side-section-community-side-menu-action-item-news-feed-button"
            icon={<NewsIcon />}
            active={page.type === PageTypes.NewsFeed}
            onClick={() => onChangePage(PageTypes.NewsFeed)}
          >
            <FormattedMessage id="sidesectioncommunity.newfeed" />
          </SideMenuActionItem>
        </div>

        {!shouldHideExplore && (
          <div>
            <SideMenuActionItem
              data-qa-anchor="side-section-community-side-menu-action-item-explore-button"
              icon={<SearchIcon />}
              active={page.type === PageTypes.Explore}
              onClick={() => onChangePage(PageTypes.Explore)}
            >
              <FormattedMessage id="sidesectioncommunity.explore" />
            </SideMenuActionItem>
          </div>
        )}
        <Searchbar onClick={handleToggle}>
          <SearchIcon />
        </Searchbar>
      </SideMenuItemList>
      {children}
    </SideMenuSection>
  );
};

SideSectionCommunity.propTypes = {
  shouldHideExplore: PropTypes.bool,
  children: PropTypes.node,
};

export default SideSectionCommunity;
