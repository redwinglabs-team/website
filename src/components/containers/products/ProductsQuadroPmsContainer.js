import React from 'react';
import { ROUTE_LIST } from '../../../constants/routesList';
import Overview from '../../products/Overview';
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
            <Overview description="An intuitive solution for hoteliers,
            designed to increase efficiency through actionable data and automation,
            while providing an elevated experience to their guests."/>
    </Container>
    );
};

export default ProductsQuadroPmsContainer;