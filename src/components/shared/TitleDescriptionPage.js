import React from 'react';
import styled from 'styled-components';
import { GridPattern } from '../../assets';
import { Container } from './Containers';
import { TitleBold, TitleLight } from './Texts';


const MainContainer = styled.div`
width:100%;
display: flex;
margin:32px;
`

const TitleContainer = styled(Container)`
    flex: 1;
    width:100%;
    align-self: flex-start;
    margin: 0px 120px;
    padding:0px 48px 16px;
    max-width: inherit;
    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
        margin: 8px 24px;
        padding:0px;
    }
    border-bottom: 2px solid ${({theme:{colors}})=>colors.red};
`

const GridContainer = styled.div`
    position:absolute;
    right:0px;
    svg{
        width:200px;
        height:100px;
    }
`



const TitleDescriptionPage = ({supTitle,title,withGrid}) => {
    return (
        <MainContainer>
            <TitleContainer>
                <TitleLight>{supTitle}</TitleLight>
                <TitleBold>{title}</TitleBold>
                {withGrid &&
                    <GridContainer className='mobile-none'>
                        <GridPattern/>
                    </GridContainer>}
            </TitleContainer>
        </MainContainer>
    );
};

export default TitleDescriptionPage;