import React from 'react';
import { ROUTE_LIST } from '../../constants/routesList';
import Clients from '../home/Clients';
import DescriptionSection from '../home/DescriptionSection';
import SecondDescription from '../home/SecondDescription';
import { Container } from '../shared/Containers';
import IntroPages from '../shared/IntroPages';
import TitleDescriptionPage from '../shared/TitleDescriptionPage';


const HomeContainer = () => {
    return (
        <Container>
            {/* INTRO */}
            <IntroPages
                bgImage={ROUTE_LIST.HOME.backgroundImage}
                description={ROUTE_LIST.HOME.description}
            />
            {/* TITLE */}
            <TitleDescriptionPage supTitle="WE ARE" title="REDWING LABS" />
            <DescriptionSection />
            <Clients/>
            {/* PRODUCT CAROUSEL */}
            {/* ABOUT US TITLE */}
            <TitleDescriptionPage supTitle="ABOUT" title="US" withGrid />
            {/* SECOND DESCRIPTION */}
            <SecondDescription/>
        </Container>
    );
};

export default HomeContainer;