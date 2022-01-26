import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ProductEntertainment, ProductFnb, ProductPms, ProductPop } from '../../../assets';
import { ROUTE_LIST } from '../../../constants/routesList';
import { ROUTE_PRODUCTS_QUADRO_ENTERTAINMENT, ROUTE_PRODUCTS_QUADRO_FNB, ROUTE_PRODUCTS_QUADRO_PMS, ROUTE_PRODUCTS_QUADRO_POP } from '../../../router/routes';
import { Container } from '../../shared/Containers';
import IntroPages from '../../shared/IntroPages';

const MainContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin: 32px 120px;
&>*:not(:last-child){
    margin-bottom:16px;
}
svg{
    cursor:pointer;
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
@media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
        svg{
            width:100%;
           height:100%;
        }
    }
`
const GridColumn = styled.div`
display:flex;
justify-content:center;

@media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
            svg{
            width:100%;
           height:100%;
        }
    }
`

const ProductsQuadroSuiteContainer = () => {
    const navigate = useNavigate();

    return (
        <Container>
        {/* INTRO */}
        <IntroPages
            bgImage={ROUTE_LIST.PRODUCTS.backgroundImage}
            description={ROUTE_LIST.PRODUCTS.description}
        />
        <MainContainer>
            <GridRow>
                <ProductPms onClick={() => navigate(ROUTE_PRODUCTS_QUADRO_PMS)}/>
            </GridRow>
            <GridRow>
                <GridColumn style={{marginRight:16}}>
                    <ProductFnb onClick={() => navigate(ROUTE_PRODUCTS_QUADRO_FNB)}/>
                </GridColumn>
                <GridColumn>
                    <ProductPop onClick={() => navigate(ROUTE_PRODUCTS_QUADRO_POP)}/>
                </GridColumn>
            </GridRow>
            <GridRow >
                <ProductEntertainment onClick={() => navigate(ROUTE_PRODUCTS_QUADRO_ENTERTAINMENT)}/>
            </GridRow>
        </MainContainer>
    </Container>
    );
};

export default ProductsQuadroSuiteContainer;