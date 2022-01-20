import React from 'react';
import styled from 'styled-components';

const IntroContainer = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    align-items:center;
    flex-flow:row;
    background: ${({theme:{colors}})=>colors.primaryColor};
    color: ${({theme:{colors}})=>colors.white};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 2500px;

`;

const TitleLight = styled.span`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.light};
    font-size:32px;
    margin:0px;
    text-align:left;
    width: 100%;
    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.desktopPixel + 1}px`}) {
        font-size:24px;
    }
`
const TitleBold = styled.span`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
    font-size:64px;
    margin:0px;
    text-align:left;
    width: 100%;
    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.desktopPixel + 1}px`}) {
        font-size:48px;
    }
    `

const TitleContainer = styled.div`
    width:50%;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding-left: 170px;
    max-width: fit-content;
`

const ImageProductContainer = styled.div`
    display: flex;
    justify-content:flex-end;
    align-self: flex-end;
    svg{
        position: absolute;
        max-height:600px;
        bottom:0px;
        right:-110px;
    }
`
const IntroPages = ({bgImage,description,productImage}) => {
    return (
        <IntroContainer id="intro" style={{ backgroundImage: `url(${bgImage})` }}>
            <TitleContainer>
            {description[0] && <TitleLight>{description[0]}</TitleLight>}
            {description[1] && <TitleBold>{description[1]}</TitleBold>}
            {description[2] && <TitleLight>{description[2]}</TitleLight>}
            </TitleContainer>
            {productImage &&
                <ImageProductContainer>
                    {productImage}
                </ImageProductContainer>
            }
        </IntroContainer>
    );
};

export default IntroPages;