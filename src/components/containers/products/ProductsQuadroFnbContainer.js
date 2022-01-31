import React from 'react';
import { QuadroFnbSpaces } from '../../../assets';
import { QUADRO_DESCRIPTION_LIST } from '../../../constants/quadroDescriptionList';
import { ROUTE_LIST } from '../../../constants/routesList';
import Overview from '../../products/Overview';
import { Container, ImageContainer } from '../../shared/Containers';
import DescriptionQuadroList from '../../shared/DescriptionQuadroList';
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
        <Overview description="All-in-one intuitively-designed restaurant management system providing restaurateurs with
                 the capabilities to run front-of-house, kitchen, and back-office operations from a single
                cloud-based platform across any device."/>
        {/* DESKTOP IMAGE */}
        <ImageContainer>
             <QuadroFnbSpaces/>
        </ImageContainer>
        {/* BASE DESCRIPTION */}
        <DescriptionQuadroList
            baseDescriptions={QUADRO_DESCRIPTION_LIST.FNB.BASE_DESCRIPTIONS}
            otherDescriptions={QUADRO_DESCRIPTION_LIST.FNB.OTHER_DESCRIPTIONS}
            />

    </Container>
    );
};

export default ProductsQuadroFnbContainer;