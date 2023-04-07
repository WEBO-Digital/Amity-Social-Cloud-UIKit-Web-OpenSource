import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// TODO - confirm colour with design
const SectionContainer = styled.div`
  padding: 0 8px;
  @media (max-width: 993px) {
    &.group-list {
      width: 100%;
      background-color: ${({ theme }) => theme.palette.bggray.main};
      margin-top: 15px;
      padding: 0 15px;
      .no-scroll {
        width: 100%;
      }
    }
    &.active + div {
      display: block;
    }
  }
  @media (min-width: 993px) {
    &.group-list {
      padding: 0;
    }
    .no-scroll {
      width: 100%;
    }
  }
  @media (min-width: 993px) {
    .splide__slide {
      border-bottom: 1px solid ${({ theme }) => theme.palette.bggray.main};
      padding: 4px;
      &:first-of-type {
        border-top: 1px solid ${({ theme }) => theme.palette.bggray.main};
      }
    }
  }
`;

const ListHeading = styled.h4`
  ${({ theme }) => theme.typography.title};
  color: ${({ theme }) => theme.palette.primary.base};
  padding: 0 8px;
  margin: 1em 0;
`;

const SideMenuSection = ({ heading, children, className }) => (
  <SectionContainer className={className}>
    {heading && <ListHeading>{heading}</ListHeading>}
    {children}
  </SectionContainer>
);

SideMenuSection.propTypes = {
  heading: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default SideMenuSection;
