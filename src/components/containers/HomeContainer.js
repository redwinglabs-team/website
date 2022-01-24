import React from 'react';
import { ROUTE_LIST } from '../../constants/routesList';
import DescriptionSection from '../home/DescriptionSection';
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
        </Container>
    );
};

export default HomeContainer;