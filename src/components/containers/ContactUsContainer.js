import React from 'react';
import { ROUTE_LIST } from '../../constants/routesList';
import { Container } from '../shared/Containers';
import IntroPages from '../shared/IntroPages';

const ContactUsContainer = () => {
    return (
        <Container>
        {/* INTRO */}
        <IntroPages
            bgImage={ROUTE_LIST.CONTACT.backgroundImage}
            description={ROUTE_LIST.CONTACT.description}
        />
    </Container>
    );
};

export default ContactUsContainer;