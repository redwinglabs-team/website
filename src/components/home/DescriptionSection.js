import React from 'react';
import styled from 'styled-components/macro';
import { GridPattern } from '../../assets';
import { Container } from '../shared/Containers';
import Label, { AlternateFontFamilyLabel } from '../shared/Label';

const DescriptionSectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 64px 170px;
  flex-direction: row;
  width: fit-content;
  max-height: 600px;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    flex-flow: column;
    padding: 32px 64px;
    max-height: none;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
    padding: 16px 64px;
    height: fit-content;
    margin-bottom: 64px;
  }
`;
const LeftContainer = styled(Container)`
  position: relative;
  height: -webkit-fill-available;
  width: -moz-available;
  background-color: ${({ theme: { colors } }) => colors.lightGreyBackground};
  margin-right: 64px;
  max-width: 300px;
  padding: 32px;
  & > span {
    height: 100%;
    display: flex;
    align-items: center;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    margin: 0px;
  }
`;
const RightContainer = styled(Container)`
  margin: 16px;
  justify-content: space-between;
  & > div:not(:last-child) {
    margin-bottom: 32px !important;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    justify-content: center;
    height: fit-content;
    margin: 16px 0px;
    & > *:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const GridContainer = styled.div`
  position: absolute;
  left: -102px;
  top: 90%;
  transform: rotate(90deg);
  svg {
    width: 200px;
    height: 100px;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
    left: 0px;
  }
`;

const DescriptionSection = () => {
  return (
    <DescriptionSectionContainer>
      <LeftContainer>
        <Label fontFamily="light" fontSize={24}>
          building-technology
        </Label>
        <GridContainer className="mobile-none">
          <GridPattern />
        </GridContainer>
      </LeftContainer>
      <RightContainer>
        <AlternateFontFamilyLabel>innovative-solution</AlternateFontFamilyLabel>
        <Label className="line-height">innovative-solution-description</Label>
        <AlternateFontFamilyLabel>cloud-based-and-interconnected</AlternateFontFamilyLabel>
        <Label className="line-height">cloud-based-and-interconnected-description</Label>
        <AlternateFontFamilyLabel>solid-foundation</AlternateFontFamilyLabel>
        <Label className="line-height">solid-foundation-description</Label>
      </RightContainer>
    </DescriptionSectionContainer>
  );
};

export default DescriptionSection;
