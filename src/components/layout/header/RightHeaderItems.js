import React from "react";
import styled from "styled-components";
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

const RightHeaderItems = ({itemsLink,isQuadroMenu}) => {
  return (
    <RightContainerHeader>
      {Object.values(itemsLink).map((item,index)=>(
              <HeaderItem
              key={index}
              style={{ marginRight: 32 }}
              colorInverted={isQuadroMenu}
              // className="mobile-none"
              textRegular={item.link !== window.location.pathname}
              href={item.link}
              onClick={item.onClick}
            >
              {item.title}
            </HeaderItem>
      ))}
    </RightContainerHeader>
  );
};

export default RightHeaderItems;
