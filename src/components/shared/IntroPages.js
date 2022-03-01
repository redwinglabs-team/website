import React, { useContext } from 'react';
import styled from 'styled-components';
import { IFrameSiderContext, SRC_BOOK_A_DEMO } from '../../context/IFrameSiderContext';
import Label from './Label';

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

  .nowrap {
    white-space: nowrap;
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
      white-space: normal;
    }
  }
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

const DemoButtonContainer = styled.div`
  position: fixed;
  z-index: 2;
  background: ${({ theme: { colors } }) => colors.lightGreen};
  color: ${({ theme: { colors } }) => colors.white};
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  border-radius: 10px 10px 0px 0px;
  left: -180px;
  font-size: 24px;
  height: 84px;
  padding-top: 10px;
  transform: rotate(90deg);
  width: 365px;
  display: flex;
  justify-content: center;
  align-self: center;
  cursor: pointer;
  -webkit-box-shadow: 0px 5px 40px 0px #60986d80;
  -moz-box-shadow: 0px 5px 40px 0px #60986d80;
  -o-box-shadow: 0px 5px 40px 0px #60986d80;
  box-shadow: 0px 5px 40px 0px #60986d80;
  span {
    margin-left: 6px;
    text-decoration: underline;
  }
`;
const IntroPages = ({ bgImage, description, productImage, haveDemoButton }) => {
  const { onOpen } = useContext(IFrameSiderContext);
  return (
    <IntroContainer id="intro" style={{ backgroundImage: `url(${bgImage})` }}>
      {haveDemoButton && (
        <DemoButtonContainer className="mobile-none" onClick={() => onOpen({ src: SRC_BOOK_A_DEMO })}>
          <Label fontFamily="bold">book-a-demo</Label>
        </DemoButtonContainer>
      )}
      <TitleContainer>
        {description[0] && (
          <Label fontFamily="light" size="medium" className="w-100 uppercase">
            {description[0]}
          </Label>
        )}
        {description[1] && (
          <Label fontFamily="bold" size="huge" className="w-100 uppercase">
            {description[1]}
          </Label>
        )}
        {description[2] && (
          <Label fontFamily="light" size="medium" className="w-100 nowrap uppercase">
            {description[2]}
          </Label>
        )}
      </TitleContainer>
      {productImage && <ImageProductContainer className="mobile-none ">{productImage}</ImageProductContainer>}
    </IntroContainer>
  );
};

export default IntroPages;
