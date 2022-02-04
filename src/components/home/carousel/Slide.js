import React from 'react';
import styled from 'styled-components';
import CustomButton from '../../shared/CustomButton';
import { Label } from '../../shared/Texts';

const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: -webkit-fill-available;
  width: -moz-available;
  padding: 0px 32px;
  margin: 0px 72px;
  height: min-content;
`;

const LeftSlideContainer = styled.div`
position:relative;
  height: -webkit-fill-available;
  height: -moz-available;
  display: flex;
  align-items: flex-start;;
  /* justify-content: flex-start; */
  justify-content: space-between;
  flex-direction: column;
  max-width: -webkit-fill-available;
  max-width: -moz-available;
  max-height: 450px;
  min-height:350px;
`;
const RightSlideContainer = styled.div`
  svg {
    width: 100%;
    height: 100%;
  }
  img {
    width:700px;
    height:500px;
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
  min-height: 220px;
  max-width: fit-content;
  button {
    max-width:200px;
  }
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
