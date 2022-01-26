import React from 'react';
import { ROUTE_LIST } from '../../../constants/routesList';
import Overview from '../../products/Overview';
import { Container } from '../../shared/Containers';
import IntroPages from '../../shared/IntroPages';
import TitleDescriptionPage from '../../shared/TitleDescriptionPage';

const ProductsQuadroEntertainmentContainer = () => {
    return (
        <Container>
        {/* INTRO */}
        <IntroPages
            bgImage={ROUTE_LIST.PRODUCTS.backgroundImage}
            description={ROUTE_LIST.ENTERTAINMENT.description}
            productImage={ROUTE_LIST.ENTERTAINMENT.productImage}
        />
        {/* TITLE */}
        <TitleDescriptionPage supTitle="QUADRO" title="ENTERTAINMENT" />
        <Overview
            description="Quadro Entertainment delivers on functionality, intuitive design, and aesthetic intelligence."
            subDescription="The first in-room entertainment solution to efficiently incorporate, TV and on-demand channels, native apps, streaming and casting services, voice control, hotel amenity access, and business-to-guest communications."
            />
    </Container>
    );
};

export default ProductsQuadroEntertainmentContainer;