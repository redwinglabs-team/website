import React from 'react';
import styled from 'styled-components';
import Form from '../shared/Form';
import Label from '../shared/Label';

const MainContainerPartnersForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  padding: 48px 170px;
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
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 32px;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: -webkit-fill-available;
  margin-bottom: 32px;
`;

const PartnersForm = () => {
  return (
    <MainContainerPartnersForm>
      <TitleContainer>
        <Label fontFamily="bold" fontSize={32}>
          interested-in
        </Label>
        <Label fontSize={32}>joining-forces</Label>
      </TitleContainer>
      <Content>
        <TextContainer>
          <Label>partners-description-1</Label>
          <Label>partners-description-2</Label>
          <Label>partners-description-3</Label>
          <Label>partners-description-4</Label>
        </TextContainer>
        <Form />
      </Content>
    </MainContainerPartnersForm>
  );
};

export default PartnersForm;
