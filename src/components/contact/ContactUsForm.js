import React from 'react';
import styled from 'styled-components';
import Form from '../shared/Form';
import { Label } from '../shared/Texts';

const MainContainerContactForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  padding: 48px 120px;
  width: -webkit-fill-available;

  max-width: inherit;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 16px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  width: -webkit-fill-available;
  & > *:not(:last-child) {
    margin-right: 32px;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
    flex-direction: column;
    padding: 16px;
    & > *:not(:last-child) {
      margin-bottom: 32px;
      margin-right: 0px;
    }
  }
`;

const ContactsContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lightGreyBackground};
  width: -webkit-fill-available;
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  text-align-last: center;
  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
    padding: 16px;
  }

  .has-margin{
      margin:32px 0px 48px;
  }
`;


const ContactUsForm = () => {
  return (
    <MainContainerContactForm>
      <Content>
        <ContactsContainer>
          <Label>Offices:</Label>
          <Label>(IT) Fasano, Apulia.</Label>
          <Label>(USA) Brooklyn, NY.</Label>
          <Label className='has-margin'>info@redwinglabs.com</Label>
          <Label>+19132939433</Label>
          <Label>+39 080 482 9200</Label>
        </ContactsContainer>

        <Form />

      </Content>
    </MainContainerContactForm>
  );
};

export default ContactUsForm;
