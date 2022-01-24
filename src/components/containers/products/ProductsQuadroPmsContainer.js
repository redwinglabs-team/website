import React from 'react';
import { ROUTE_LIST } from '../../../constants/routesList';
import { Container } from '../../shared/Containers';
import IntroPages from '../../shared/IntroPages';
import TitleDescriptionPage from '../../shared/TitleDescriptionPage';

const ProductsQuadroPmsContainer = () => {
    return (
        <Container>
        {/* INTRO */}
        <IntroPages
                bgImage={ROUTE_LIST.PRODUCTS.backgroundImage}
                description={ROUTE_LIST.PMS.description}
                productImage={ROUTE_LIST.PMS.productImage}
        />
        {/* TITLE */}
        <TitleDescriptionPage supTitle="QUADRO" title="PMS" />
    </Container>
    );
};

export default ProductsQuadroPmsContainer;