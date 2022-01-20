import React from 'react';
import { ROUTE_LIST } from '../../../constants/routesList';
import { Container } from '../../shared/Containers';
import IntroPages from '../../shared/IntroPages';

const ProductsQuadroFnbContainer = () => {
    return (
        <Container>
        {/* INTRO */}
        <IntroPages
            bgImage={ROUTE_LIST.PRODUCTS.backgroundImage}
            description={ROUTE_LIST.FNB.description}
            productImage={ROUTE_LIST.FNB.productImage}

        />
    </Container>
    );
};

export default ProductsQuadroFnbContainer;