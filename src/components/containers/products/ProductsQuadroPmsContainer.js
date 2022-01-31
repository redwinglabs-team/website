import React from 'react';
import { QuadroPmsTimeline } from '../../../assets';
import { QUADRO_DESCRIPTION_LIST } from '../../../constants/quadroDescriptionList';
import { ROUTE_LIST } from '../../../constants/routesList';
import Overview from '../../products/Overview';
import { Container, ImageContainer } from '../../shared/Containers';
import DescriptionQuadroList from '../../shared/DescriptionQuadroList';
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
            {/* BASE DESCRIPTION */}
            <DescriptionQuadroList
                baseDescriptions={QUADRO_DESCRIPTION_LIST.PMS.BASE_DESCRIPTIONS}
                image={QUADRO_DESCRIPTION_LIST.PMS.BASE_DESCRIPTIONS_IMAGE}
                />
            {/* DESKTOP IMAGE */}
            <ImageContainer>
                <QuadroPmsTimeline/>
            </ImageContainer>
            {/* OTHER DESCRIPTION */}
            <DescriptionQuadroList
                otherDescriptions={QUADRO_DESCRIPTION_LIST.PMS.OTHER_DESCRIPTIONS}
                image={QUADRO_DESCRIPTION_LIST.PMS.OTHER_DESCRIPTIONS_IMAGE}
                />
    </Container>
    );
};

export default ProductsQuadroPmsContainer;