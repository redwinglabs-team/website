import React from 'react';
import styled from 'styled-components';
import { TitleBold, TitleLight } from './Texts';

const IntroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-flow: row;
  background: ${({ theme: { colors } }) => colors.primaryColor};
  color: ${({ theme: { colors } }) => colors.white};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 2500px;
`;

const TitleContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 170px;
  max-width: fit-content;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    width: 100%;
    padding: 24px;
  }
`;

const ImageProductContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  svg {
    position: relative;
    width: 100%;
    max-height: 600px;
    right: -190px;
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
      right: 0px;
    }
  }

  #bg-quadro-pop {
    right: -370px;
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
      right: 0px;
    }
  }
`;
const IntroPages = ({ bgImage, description, productImage }) => {
  return (
    <IntroContainer id="intro" style={{ backgroundImage: `url(${bgImage})` }}>
      <TitleContainer>
        {description[0] && <TitleLight>{description[0]}</TitleLight>}
        {description[1] && <TitleBold>{description[1]}</TitleBold>}
        {description[2] && <TitleLight>{description[2]}</TitleLight>}
      </TitleContainer>
      {productImage && <ImageProductContainer className="mobile-none">{productImage}</ImageProductContainer>}
    </IntroContainer>
  );
};

export default IntroPages;
