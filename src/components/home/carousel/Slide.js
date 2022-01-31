import React from 'react';
import styled from 'styled-components';
import { Container } from '../../shared/Containers';
import CustomButton from '../../shared/CustomButton';
import { Label } from '../../shared/Texts';

const SlideContainer = styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:row;
        width:100%;
        height:100%;
`;

const LeftSlideContainer = styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
`
const RightSlideContainer = styled.div`
svg{
    width:600px;
    height: 600px;
}
`
const TitleContainer = styled.div`
    display: flex;
    margin-bottom: 64px;
    flex-direction:column;
    justify-content:space-between;

`

const Slide = ({title,subtitle,description,image}) => {
    return (
        <SlideContainer className="swiper-slide">
            <LeftSlideContainer>
                <TitleContainer>
                    <Label bold fontSize="32px">
                        {title}
                    </Label>
                    <Label regular fontSize="24px">
                        {subtitle}
                    </Label>
                </TitleContainer>
            <Label >
                {description}
            </Label>
            <CustomButton>Request a demo</CustomButton>
            </LeftSlideContainer>
            {/* <RightSlideContainer>
                {image}
            </RightSlideContainer> */}
        </SlideContainer>
    );
};

export default Slide;