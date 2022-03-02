import React from 'react';
import styled from 'styled-components/macro';
import { GridPattern } from '../../assets';
import { Container } from './Containers';
import CustomDivider from './CustomDivider';
import Label from './Label';

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 32px;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
    color: inherit;
    height: fit-content;
  }
`;

const TitleContainer = styled.div`
  flex: 1;
  width: -webkit-fill-available;
  align-self: flex-start;
  margin: 0px 120px;
  padding: 0px 0px 48px 16px;
  max-width: inherit;
  justify-content: space-between;
  display: flex;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    margin: 8px 24px;
    padding: 0px;
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const GridContainer = styled.div`
  position: absolute;
  right: 0px;
  svg {
    width: 200px;
    height: 100px;
  }
`;

const TitleDescriptionPage = ({ supTitle, title, withGrid, withoutBorderBottom, withButtons }) => {
  return (
    <MainContainer>
      <TitleContainer>
        <Container>
          <Row>
            <Label fontFamily="light" size="medium" className="uppercase w-100">
              {supTitle}
            </Label>
            {withButtons && (
              <Row style={{ columnGap: 30, justifyContent: 'flex-end' }}>
                <a href="#overview">
                  <Label size="normal" fontFamily="bold" className="cursor">
                    overview
                  </Label>
                </a>
                <a href="#pricing">
                  <Label size="normal" fontFamily="bold" className="cursor">
                    pricing
                  </Label>
                </a>
              </Row>
            )}
          </Row>
          <Label size="huge" fontFamily="bold" className="w-100 uppercase">
            {title}
          </Label>
          {withGrid && (
            <GridContainer className="mobile-none">
              <GridPattern />
            </GridContainer>
          )}
        </Container>
      </TitleContainer>
      {!withoutBorderBottom && <CustomDivider red />}
    </MainContainer>
  );
};

export default TitleDescriptionPage;
