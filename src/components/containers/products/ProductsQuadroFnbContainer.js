import React from 'react';
import { ROUTE_LIST } from '../../../constants/routesList';
import { Container } from '../../shared/Containers';
import IntroPages from '../../shared/IntroPages';
import TitleDescriptionPage from '../../shared/TitleDescriptionPage';

const ProductsQuadroFnbContainer = () => {
    return (
        <Container>
        {/* INTRO */}
        <IntroPages
            bgImage={ROUTE_LIST.PRODUCTS.backgroundImage}
            description={ROUTE_LIST.FNB.description}
            productImage={ROUTE_LIST.FNB.productImage}
        />
        {/* TITLE */}
        <TitleDescriptionPage supTitle="QUADRO" title="FNB" />
    </Container>
    );
};

export default ProductsQuadroFnbContainer;