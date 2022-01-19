import React from 'react';
import { ROUTE_LIST } from '../../../constants/routesList';
import { Container } from '../../shared/Containers';
import IntroPages from '../../shared/IntroPages';

const ProductsQuadroSuiteContainer = () => {
    return (
        <Container>
        {/* INTRO */}
        <IntroPages
            bgImage={ROUTE_LIST.PRODUCTS.backgroundImage}
            description={ROUTE_LIST.PRODUCTS.description}
        />
    </Container>
    );
};

export default ProductsQuadroSuiteContainer;