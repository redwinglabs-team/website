import React from 'react';
import styled from 'styled-components';
import { Container } from '../shared/Containers';
import Label from '../shared/Label';

const KnowMoreContainer = styled(Container)`
  background-color: ${({ theme: { colors } }) => colors.primaryColor};
  color: ${({ theme: { colors } }) => colors.white};
  width: -webkit-fill-available;
  height: fit-content;
  margin-top: 32px;
  padding: 32px 170px;
  & > span {
    text-align: center !important;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 24px;
  }
`;

const KnowMore = () => {
  return (
    <KnowMoreContainer>
      <Label size="medium" className="uppercase w-unset">
        want-to
      </Label>
      <Label size="big" fontFamily="bold" className="uppercase w-unset">
        know-more
      </Label>
      <Label className="uppercase line-height">want-to-know-more-description</Label>
    </KnowMoreContainer>
  );
};

export default KnowMore;
