import React from "react";
import styled from "styled-components";
import { ROUTE_CAREERS, ROUTE_CONTACT_US, ROUTE_INDEX, ROUTE_PRODUCTS } from "../../../router/routes";
import HeaderItem from "../../shared/HeaderItem";

const RightContainerHeader = styled.div`
  display: flex;
  align-items: center;
  /* @media (min-width: ${({ theme: { mediaQueries } }) =>
    mediaQueries.mobileBreakpoint}) {
    & > *:not(:first-child):not(:last-child) {
      margin-right: 18px;
    }
  } */
`;

const RightHeaderItems = () => {
  return (
    <RightContainerHeader>
      <HeaderItem
        style={{ marginRight: 24 }}
        className="mobile-none"
        href={ROUTE_INDEX}
      >
        Home
      </HeaderItem>
      <HeaderItem
        style={{ marginRight: 24 }}
        className="mobile-none"
        href={ROUTE_PRODUCTS}
      >
        Products
      </HeaderItem>
      <HeaderItem
        className="mobile-none"
        href={ROUTE_CAREERS}
        style={{ marginRight: 24 }}
      >
        Careers
      </HeaderItem>
      <HeaderItem
        className="mobile-none"
        href={ROUTE_CONTACT_US}
        style={{ marginRight: 24 }}
      >
        Contact Us
      </HeaderItem>
    </RightContainerHeader>
  );
};

export default RightHeaderItems;
