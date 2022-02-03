import React from 'react';
import { QuadroEntertainmentMockup } from '../../../assets';
import { QUADRO_DESCRIPTION_LIST } from '../../../constants/quadroDescriptionList';
import { ROUTE_LIST } from '../../../constants/routesList';
import Overview from '../../products/Overview';
import { Container, ImageContainer } from '../../shared/Containers';
import DescriptionQuadroList from '../../shared/DescriptionQuadroList';
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
            haveDemoButton
        />
        {/* TITLE */}
        <TitleDescriptionPage supTitle="QUADRO" title="ENTERTAINMENT" />
        <Overview
            description="Quadro Entertainment delivers on functionality, intuitive design, and aesthetic intelligence."
            subDescription="The first in-room entertainment solution to efficiently incorporate, TV and on-demand channels, native apps, streaming and casting services, voice control, hotel amenity access, and business-to-guest communications."
            />
        {/* BASE DESCRIPTION */}
        <DescriptionQuadroList
            baseDescriptions={QUADRO_DESCRIPTION_LIST.ENTERTAINMENT.BASE_DESCRIPTIONS}
            image={QUADRO_DESCRIPTION_LIST.ENTERTAINMENT.BASE_DESCRIPTIONS_IMAGE}
        />
        {/* DESKTOP IMAGE */}
        <ImageContainer>
            <QuadroEntertainmentMockup/>
        </ImageContainer>
        {/* OTHER DESCRIPTION */}
        <DescriptionQuadroList
            otherDescriptions={QUADRO_DESCRIPTION_LIST.ENTERTAINMENT.OTHER_DESCRIPTIONS}
            image={QUADRO_DESCRIPTION_LIST.ENTERTAINMENT.OTHER_DESCRIPTIONS_IMAGE}
        />

    </Container>
    );
};

export default ProductsQuadroEntertainmentContainer;