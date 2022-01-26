import React from 'react';
import { ROUTE_LIST } from '../../../constants/routesList';
import Overview from '../../products/Overview';
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
        <Overview description="User-friendly Point of Purchase system that is compatible with any device.
         POP features a Fast and intuitive setup.
          From hotels and resorts to restaurants and retail establishments,
           Quadro POP is fully customizable and scalable to match your business needs."/>
    </Container>
    );
};

export default ProductsQuadroPopContainer;