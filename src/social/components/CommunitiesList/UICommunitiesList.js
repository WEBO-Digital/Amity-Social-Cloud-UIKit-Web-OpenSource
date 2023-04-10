import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import CommunityHeader from '~/social/components/community/Header';
import LoadMore from '~/social/components/LoadMore';
import { CommunityScrollContainer } from './styles';

const NoResultsMessage = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.palette.base.shade3};
`;

const UICommunityList = ({
  className,
  communityIds,
  loadMore,
  hasMore,
  activeCommunity,
  onClickCommunity,
  isSearchList,
  searchInput,
  loading,
  loadingMore,
}) => {
  const noCommunitiesFound = isSearchList && !communityIds.length;
  const classNames = [communityIds.length < 4 && 'no-scroll', className].filter(Boolean).join(' ');

  function renderLoadingSkeleton() {
    return new Array(1).fill(1).map((x, index) => <CommunityHeader key={index} loading />);
  }

  return (
    <CommunityScrollContainer
      className={classNames}
      dataLength={communityIds.length}
      next={loadMore}
      hasMore={hasMore}
      // TODO - when infinite scroll is fixed: bring back loading component
      // and remove use of LoadMore button.
      loader={<div />}
    >
      <LoadMore hasMore={hasMore} loadMore={loadMore} className="no-border">
        {noCommunitiesFound && (
          <NoResultsMessage>
            <FormattedMessage id="communities.nocommunityfound" />
          </NoResultsMessage>
        )}

        {loading && renderLoadingSkeleton()}
        <Splide
          options={{
            rewind: true,
            gap: '1rem',
            autoHeight: true,
            arrows: false,
            pagination: false,
            destroy: true,
            breakpoints: {
              575: {
                perPage: 2,
              },
              768: {
                perPage: 4,
              },
              960: {
                destroy: false,
                perPage: 5,
              },
            },
          }}
        >
          {!loading &&
            communityIds.map((communityId) => (
              <SplideSlide>
                <CommunityHeader
                  key={communityId}
                  communityId={communityId}
                  isActive={communityId === activeCommunity}
                  isSearchResult={isSearchList}
                  searchInput={searchInput}
                  onClick={onClickCommunity}
                />
              </SplideSlide>
            ))}
        </Splide>
        {loadingMore && renderLoadingSkeleton()}
      </LoadMore>
    </CommunityScrollContainer>
  );
};

UICommunityList.propTypes = {
  className: PropTypes.string,
  communityIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  loadMore: PropTypes.func,
  hasMore: PropTypes.bool,
  activeCommunity: PropTypes.string,
  isSearchList: PropTypes.bool,
  searchInput: PropTypes.string,
  loading: PropTypes.bool,
  loadingMore: PropTypes.bool,
  onClickCommunity: PropTypes.func,
};

UICommunityList.defaultProps = {
  className: null,
  loadMore: () => {},
  hasMore: false,
  activeCommunity: '',
  onClickCommunity: () => {},
  isSearchList: false,
  searchInput: '',
  loading: false,
  loadingMore: false,
};

export default UICommunityList;
