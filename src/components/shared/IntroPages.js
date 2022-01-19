import React from 'react';
import styled from 'styled-components';

const IntroContainer = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-flow:column;
    background: ${({theme:{colors}})=>colors.primaryColor};
    color: ${({theme:{colors}})=>colors.white};
    background-position: center;
    background-size: cover;

`;

const TitleLight = styled.span`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.light};
    font-size:32px;
    margin:0px;
    text-align:left;
    width: 100%;
`
const TitleBold = styled.span`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
    font-size:64px;
    margin:0px;
    text-align:left;
    width: 100%;
    `

const TitleContainer = styled.div`
    width:60%;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:64px;
    max-width: fit-content;
    margin: auto;
`
const IntroPages = ({bgImage,description}) => {
    return (
        <IntroContainer id="intro" style={{ backgroundImage: `url(${bgImage})` }}>
            <TitleContainer>
            {description[0] && <TitleLight>{description[0]}</TitleLight>}
            {description[1] && <TitleBold>{description[1]}</TitleBold>}
            {description[2] && <TitleLight>{description[2]}</TitleLight>}
            </TitleContainer>
        </IntroContainer>
    );
};

export default IntroPages;