import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { AmericanFlagIcon, ItalianFlagIcon, GridPattern } from '../../assets';
import { IFrameSiderContext, SRC_CONTACT_US } from '../../context/IFrameSiderContext';
import CustomButton from '../shared/CustomButton';
import Label from '../shared/Label';

const GridContainer = styled.div`
  position: absolute;
  align-items: flex-start;
  left: 0px;
  top: 110px;
  svg {
    width: 200px;
    height: 162px;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
    left: 0px;
  }
`;

const MainContainerContactForm = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  padding: 48px 170px 24px;
  width: -webkit-fill-available;
  width: -moz-available;
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
  width: -moz-available;
  & > *:not(:last-child) {
    margin-right: 32px;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 32px;
      margin-right: 0px;
    }
  }
`;

const ContactsContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lightGreyBackground};
  width: -webkit-fill-available;
  width: -moz-available;
  padding: 60px 112px;
  display: flex;
  justify-content: space-between;
  align-items: start;

  text-align-last: center;
  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
    padding: 16px;
    flex-direction: column;
  }

  .has-margin {
    margin: 32px 0px 48px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  span:first-child {
    margin-bottom: 24px;
  }
  & > div:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 8px;
  }
`;
const ContactUsForm = () => {
  const { onOpen } = useContext(IFrameSiderContext);
  return (
    <MainContainerContactForm>
      <Content>
        <ContactsContainer>
          <Column>
            <Label size="big" fontFamily="bold">
              offices
            </Label>
            <Row>
              <ItalianFlagIcon /> <Label size="small">Fasano, Apulia.</Label>
            </Row>
            <Row>
              <AmericanFlagIcon />
              <Label size="small">Brooklyn, NY.</Label>
            </Row>
          </Column>
          <Column>
            <Label size="big" fontFamily="bold">
              phone
            </Label>
            <Row>
              {' '}
              <ItalianFlagIcon /> <Label size="small">+19132939433</Label>
            </Row>
            <Row>
              {' '}
              <AmericanFlagIcon />
              <Label size="small">+39 080 482 9200</Label>
            </Row>
          </Column>
          <Column>
            <Label size="big" fontFamily="bold">
              mail
            </Label>
            <Label translate={false} size="small">
              info@redwinglabs.com
            </Label>
          </Column>
        </ContactsContainer>
      </Content>

      <GridContainer className="mobile-none">
        <GridPattern />
      </GridContainer>
      <CustomButton
        fontSize={24}
        buttonStyle={{ marginTop: 88, marginBottom: 88, width: 300, justifyContent: 'center', display: 'flex' }}
        onClick={() => onOpen({ src: SRC_CONTACT_US })}
      >
        contact-us
      </CustomButton>
    </MainContainerContactForm>
  );
};

export default ContactUsForm;
