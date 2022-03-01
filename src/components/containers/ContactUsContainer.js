import React from 'react';
import styled from 'styled-components';
import { ROUTE_LIST } from '../../constants/routesList';
import ContactUsForm from '../contact/ContactUsForm';
import { Container } from '../shared/Containers';
import IntroPages from '../shared/IntroPages';
import TitleDescriptionPage from '../shared/TitleDescriptionPage';
import Map from '../contact/Map';
import { GridPattern } from '../../assets';

const GridContainer = styled.div`
  position: absolute;
  align-items: flex-start;
  left: 0px;
  top: 67%;
  svg {
    width: 200px;
    height: 100px;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
    left: 0px;
  }
`;

const ContactUsContainer = () => {
  return (
    <Container>
      {/* INTRO */}
      <IntroPages bgImage={ROUTE_LIST.CONTACT.backgroundImage} description={ROUTE_LIST.CONTACT.description} />
      {/* TITLE */}
      <TitleDescriptionPage title="contact-us" />
      {/* FORM CONTAINER */}
      <ContactUsForm />

      {/* MAP */}
      <Map />
      <GridContainer className="mobile-none">
        <GridPattern />
      </GridContainer>
    </Container>
  );
};

export default ContactUsContainer;
