import React from 'react';
import { ROUTE_LIST } from '../../constants/routesList';
import { Container } from '../shared/Containers';
import IntroPages from '../shared/IntroPages';



const HomeContainer = () => {
    return (
        <Container>
            {/* INTRO */}
            <IntroPages
                bgImage={ROUTE_LIST.HOME.backgroundImage}
                description={ROUTE_LIST.HOME.description}
            />
        </Container>
    );
};

export default HomeContainer;