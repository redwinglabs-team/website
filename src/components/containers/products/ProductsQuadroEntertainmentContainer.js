import React from 'react';
import { ROUTE_LIST } from '../../../constants/routesList';
import { Container } from '../../shared/Containers';
import IntroPages from '../../shared/IntroPages';

const ProductsQuadroEntertainmentContainer = () => {
    return (
        <Container>
        {/* INTRO */}
        <IntroPages
            bgImage={ROUTE_LIST.PRODUCTS.backgroundImage}
            description={ROUTE_LIST.ENTERTAINMENT.description}
            productImage={ROUTE_LIST.ENTERTAINMENT.productImage}

        />
    </Container>
    );
};

export default ProductsQuadroEntertainmentContainer;