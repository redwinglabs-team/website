import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import { RedwingsLogo } from '../../../assets';
import { ROUTE_INDEX } from '../../../router/routes';
import RightHeaderItems from './RightHeaderItems';

const Container = styled.div`
  display: flex;
  position: absolute;
  flex-flow: row;
  justify-content: space-between;
  background-color:transparent;
  width:100%;
  min-height: ${({ theme: { header } }) => `${header.height}px`};
  padding: 16px 0px;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 0 1.5em;
  }

  @media (min-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) and (max-width:916px)  {
    padding: 2em 1.5em;
  }


  z-index: 1000;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  margin:0px 25px;
  /* & > *:not(:last-child) {
    margin-right: 25px;
  } */
`;

const RightContainer = styled.div`
  display: flex;
`;

const DesktopHeader = ({ className, menuWithMarginBottom }) => {
  const navigate = useNavigate();

  return (
    <Container id='header' className={className}>
      <LeftContainer>
        <RedwingsLogo
          style={{ cursor: 'pointer' }}
          onClick={() => navigate(ROUTE_INDEX)}
        />
      </LeftContainer>
      <RightContainer>
        <RightHeaderItems
          pact={[]}
          menuWithMarginBottom={menuWithMarginBottom}
        />
      </RightContainer>
    </Container>
  );
};

export default DesktopHeader;
