import React from 'react';
import { ROUTE_LIST } from '../../../constants/routesList';
import { Container } from '../../shared/Containers';
import IntroPages from '../../shared/IntroPages';
import TitleDescriptionPage from '../../shared/TitleDescriptionPage';

const ProductsQuadroPopContainer = () => {
    return (
        <Container>
        {/* INTRO */}
        <IntroPages
            bgImage={ROUTE_LIST.PRODUCTS.backgroundImage}
            description={ROUTE_LIST.POP.description}
            productImage={ROUTE_LIST.POP.productImage}
        />
        {/* TITLE */}
        <TitleDescriptionPage supTitle="QUADRO" title="POP" />
    </Container>
    );
};

export default ProductsQuadroPopContainer;