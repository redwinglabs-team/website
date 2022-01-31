import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ProductEntertainment, ProductFnb, ProductPms, ProductPop } from '../../../assets';
import { ROUTE_LIST } from '../../../constants/routesList';
import { ROUTE_PRODUCTS_QUADRO_ENTERTAINMENT, ROUTE_PRODUCTS_QUADRO_FNB, ROUTE_PRODUCTS_QUADRO_PMS, ROUTE_PRODUCTS_QUADRO_POP } from '../../../router/routes';
import {theme} from '../../../styles/theme';
import { Container } from '../../shared/Containers';
import CustomButton from '../../shared/CustomButton';
import IntroPages from '../../shared/IntroPages';
import { Label } from '../../shared/Texts';
import TitleDescriptionPage from '../../shared/TitleDescriptionPage';

const MainContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

.margined-label{
    margin-left: auto;
    margin-right: auto;
    padding: 16px 120px;
    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
        padding: 24px;
    }
}
svg{
    cursor:pointer;
    width:100%;
           height:100%;
}
    max-width: inherit;
    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
        margin: 24px;
        padding:0px;
    }
`

const GridRow = styled.div`
display:flex;
justify-content:center;
align-items:center;
align-items: start;
`


const Content = styled.div`
display:flex;
justify-content:center;
align-items:center;
align-items: start;
margin: 32px 120px;
@media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
        margin: 24px;
        padding:0px;
    }
`

const GridColumn = styled.div`
display:flex;
justify-content:center;
`
const ButtonContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin: 16px 120px;
width: -webkit-fill-available;
@media (max-width: ${({ theme: { mediaQueries } }) =>
    `${mediaQueries.mobilePixel + 1}px`}) {
        flex-direction:column;
    margin: 24px;
    padding:0px;
}
`

const ProductsQuadroSuiteContainer = () => {
    const navigate = useNavigate();
    const [buttonClicked,setButtonClicked]=useState(0);

    const imageOpacified = (section)=>{
        if(section===buttonClicked) return '1'
        return '0.2'
    }

    const buttons = ['Accomodations','Eating & Drinking','Shopping']

    return (
        <Container>
        {/* INTRO */}
        <IntroPages
            bgImage={ROUTE_LIST.PRODUCTS.backgroundImage}
            description={ROUTE_LIST.PRODUCTS.description}
        />
        <MainContainer>
            <TitleDescriptionPage supTitle="HOW DOES YOUR BUSINESS" title="INTERACT WITH GUEST?" />
            <Label className='margined-label'>
                Select 1 or more interaction types below
            </Label>
            <ButtonContainer>
                {buttons.map((button,index)=>(
                        <CustomButton
                        inverted={buttonClicked!==index}
                        onClick={()=>setButtonClicked(index)}
                        boxShadow={`0px 5px 25px ${theme.colors.primaryColor}60`}
                        >
                        {button}
                    </CustomButton>
                    ))}
                </ButtonContainer>
                <Content>
                <GridColumn style={{flexDirection:'column',marginRight:16,justifyContent:"space-between"}}>
                    <GridRow style={{marginBottom:16}}>
                        <ProductPms style={{opacity:imageOpacified(0)}} onClick={() => navigate(ROUTE_PRODUCTS_QUADRO_PMS)}/>
                    </GridRow>
                    <GridRow >
                        <ProductEntertainment style={{opacity:imageOpacified(0)}} onClick={() => navigate(ROUTE_PRODUCTS_QUADRO_ENTERTAINMENT)}/>
                    </GridRow>
                </GridColumn>
                <GridRow>
                    <GridColumn style={{marginRight:16}}>
                        <ProductFnb style={{opacity:imageOpacified(1)}} onClick={() => navigate(ROUTE_PRODUCTS_QUADRO_FNB)}/>
                    </GridColumn>
                    <GridColumn>
                        <ProductPop style={{opacity:imageOpacified(2)}} onClick={() => navigate(ROUTE_PRODUCTS_QUADRO_POP)}/>
                    </GridColumn>
                </GridRow>
                </Content>

        </MainContainer>
    </Container>
    );
};

export default ProductsQuadroSuiteContainer;