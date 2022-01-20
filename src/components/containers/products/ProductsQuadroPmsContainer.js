import React from 'react';
import { ROUTE_LIST } from '../../../constants/routesList';
import { Container } from '../../shared/Containers';
import IntroPages from '../../shared/IntroPages';

const ProductsQuadroPmsContainer = () => {
    return (
        <Container>
        {/* INTRO */}
        <IntroPages
                bgImage={ROUTE_LIST.PRODUCTS.backgroundImage}
                description={ROUTE_LIST.PMS.description}
                productImage={ROUTE_LIST.PMS.productImage}
        />
    </Container>
    );
};

export default ProductsQuadroPmsContainer;