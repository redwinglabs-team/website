import React from 'react';
import styled from 'styled-components';
import CustomButton from '../../shared/CustomButton';
import { Label } from '../../shared/Texts';

const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: -webkit-fill-available;
  width: -moz-available;
  padding: 32px;
  margin: 0px 72px;
  height: min-content;
`;

const LeftSlideContainer = styled.div`
  height: -webkit-fill-available;
  height: -moz-available;
  display: flex;
  align-items: flex-start;;
  /* justify-content: flex-start; */
  justify-content: space-between;
  flex-direction: column;
  max-width: min-content;
  max-height: 450px;
`;
const RightSlideContainer = styled.div`
  svg {
    width: 100%;
    height: 100%;
  }
  img {
    width:600px;
    height: 100%;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 260px;
  max-width: min-content;
`;

const Slide = ({ title, subtitle, description, image }) => {
  return (
    <SlideContainer className="swiper-slide">
      <LeftSlideContainer>
        <TitleContainer>
          <Label bold fontSize="32px">
            {title}
          </Label>
          <Label regular fontSize="24px" >
            {subtitle}
          </Label>
        </TitleContainer>
        <ContentContainer>
          <Label>{description}</Label>
          <CustomButton>Request a demo</CustomButton>
        </ContentContainer>
      </LeftSlideContainer>
      <RightSlideContainer>{image}</RightSlideContainer>
    </SlideContainer>
  );
};

export default Slide;
