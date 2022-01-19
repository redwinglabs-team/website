import React from 'react';
import { ROUTE_LIST } from '../../constants/routesList';
import { Container } from '../shared/Containers';
import IntroPages from '../shared/IntroPages';

const CareersContainer = () => {
    return (
        <Container>
        {/* INTRO */}
        <IntroPages
            bgImage={ROUTE_LIST.CAREERS.backgroundImage}
            description={ROUTE_LIST.CAREERS.description}
        />
    </Container>
    );
};

export default CareersContainer;