import React from 'react';
import styled from 'styled-components/macro';
import Label, { AlternateFontFamilyLabel } from './Label';

const DescriptionsMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-right: auto;
  margin-left: auto;
  padding: 64px 170px;
  width: -webkit-fill-available;
  & > *:not(:last-child) {
    margin-right: 32px;
  }
  svg {
    max-width: 600px;
    max-height: 600px;
  }
  max-width: inherit;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
    flex-direction: column;
    padding: 32px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

const DescriptionList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 32px;
  }
`;
const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${({ end }) => (end ? 'end' : 'start')};
  flex-direction: column;
  width: 100%;
  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescriptionQuadroList = ({ baseDescriptions, otherDescriptions, image }) => {
  return (
    <DescriptionsMainContainer>
      {baseDescriptions && (
        <DescriptionList>
          {Object.values(baseDescriptions).map((desc, index) => (
            <Description key={index}>
              <AlternateFontFamilyLabel>{desc.title}</AlternateFontFamilyLabel>
              <Label className="line-height">{desc.description}</Label>
            </Description>
          ))}
        </DescriptionList>
      )}
      {image && <ImageContainer>{image}</ImageContainer>}
      {otherDescriptions && (
        <DescriptionList>
          {Object.values(otherDescriptions).map((desc, index) => (
            <Description key={index}>
              <AlternateFontFamilyLabel>{desc.title}</AlternateFontFamilyLabel>
              <Label className="line-height">{desc.description}</Label>
            </Description>
          ))}
        </DescriptionList>
      )}
    </DescriptionsMainContainer>
  );
};

export default DescriptionQuadroList;
