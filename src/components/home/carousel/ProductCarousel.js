/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { Lazy } from 'swiper/js/swiper.esm';


import { Container } from '../../shared/Containers';
import { BackIcon, CarouselFnb, CarouselPms, ForwardIcon } from '../../../assets';
import { Label, TitleBold, TitleLight } from '../../shared/Texts';
import {theme} from '../../../styles/theme';
import Slide from './Slide';
import LoopModeInfinityLoop from './TestCarousel';


const ProductCarouselContainer = styled.div`
    margin: 32px 0px;
`;

const TitleContainer = styled(Container)`
    width: fit-content;
    height: min-content;
    flex-direction: row;
    justify-content:space-between;
    padding:32px;
`
const MainTitleContainer = styled(Container)`
    flex-direction: column;

`

const CarouselContainer = styled(Container)`
    background-color: ${({theme:{colors}})=>colors.lightGreyBackground};
    .swiper-container{
        width:100%;
        height:100%;
        overflow:hidden;
    }
`;


const Divider = styled.hr``

const SlideItem = styled.div`
    background-color:${({color})=>color};
    width: 100%;
    height: 100%;
`;



const initialParams = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 300,
    autoHeight: false,
    roundLengths: false,
    nested: false,
    uniqueNavElements: true,
    effect: 'slide',
    spaceBetween: 50,
    slidesPerView: 'auto',
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    touchEventsTarget: 'wrapper',
    touchRatio: 1,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    followFinger: true,
    allowTouchMove: true,
    resistance: true,
    resistanceRatio: 0.85,
    preventInteractionOnTransition: false,
    allowSlidePrev: true,
    allowSlideNext: true,
    noSwiping: false,
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: true,
    loop: true,
    loopAdditionalSlides: 3,
    loopedSlides: 3,
    autoplay: true,
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    reverseDirection: false,
    waitForTransition: true
  };


const ProductCarousel = () => {
    const params = {
        modules: [Lazy],
    lazy: true,
    initialSlide: 0,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    loop: true,
    autoplay: false,
        renderPrevButton: ()=> <BackIcon className="swiper-button-prev"/>,
        renderNextButton:()=> <ForwardIcon className="swiper-button-next"/>
      }


      const renderItem = useCallback(
        (item,i) => (
            <SlideItem color={item}  key={`slide_${i}`}>
                <img
                className="swiper-lazy"
                data-src={`https://picsum.photos/100/100?random=${i}`}
                alt=""
                />
            </SlideItem>
            ),
        []
      );

      const items = [
        "#4A9EDA",
        "#6872E0",
        "#9966E0",
        "#D665E0",
        "#E066AD",
        "#E16973",
        "#D7C938",
        "#DA864A",
        "#96D73B",
        "#54DA48",
        "#46DA84",
        "#44D9CD"
      ];

    return (
        <ProductCarouselContainer>
            <CarouselContainer>
            <TitleContainer>
                <MainTitleContainer >
                    <TitleLight>OUR</TitleLight>
                    <TitleBold>PRODUCTS</TitleBold>
                </MainTitleContainer>
                <Label style={{textAlign:'right'}}>
                    Redwing Labs is actively developing tools that lead to greater decision making
                     capabilities for our clients,
                      and  more tailored guest experiences for their patrons.
                </Label>
            </TitleContainer>
            <Divider
                style={{
                width:'80%',
                backgroundColor: theme.colors.grey,
                height: 0.5,
                }}
            />
            {/* <Swiper {...params}> */}
                {/* {[...Array(5)].map(() => (
          <SlideTest >
            <img
              className="swiper-lazy"
              data-src={`https://picsum.photos/100/100?random=${1}`}
              alt=""
            />
          </SlideTest>
        ),)} */}
                {/* <Slide
                    title="QUADRO"
                    subtitle="PROPERTY MANAGEMENT SYSTEM"
                    description="Designed for modern hoteliers to automate and simplify their properties operations,
                     while at the same time enhancing the guest experience. "
                     image={<CarouselPms/>}
                    />
                <Slide
                    title="QUADRO"
                    subtitle="Restaurant Manager"
                    description="All-in-one restaurant management system
                     that provides restaurateurs with the ability to run front-of-house,
                     kitchen, and back-office operations from a single cloud-based platform. "
                     image={<CarouselFnb/>}
                    />
                <Slide
                    title="QUADRO"
                    subtitle="Restaurant Manager"
                    description="All-in-one restaurant management system
                     that provides restaurateurs with the ability to run front-of-house,
                     kitchen, and back-office operations from a single cloud-based platform. "
                     image={<CarouselFnb/>}
                    />
                <Slide
                    title="QUADRO"
                    subtitle="Restaurant Manager"
                    description="All-in-one restaurant management system
                     that provides restaurateurs with the ability to run front-of-house,
                     kitchen, and back-office operations from a single cloud-based platform. "
                     image={<CarouselFnb/>}
                    />
                <Slide
                    title="QUADRO"
                    subtitle="Restaurant Manager"
                    description="All-in-one restaurant management system
                     that provides restaurateurs with the ability to run front-of-house,
                     kitchen, and back-office operations from a single cloud-based platform. "
                     image={<CarouselFnb/>}
                    />
            </Swiper> */}
            <Swiper {...params}>
                {items.map(renderItem)}
    </Swiper>
            {/* <LoopModeInfinityLoop /> */}
        </CarouselContainer>
      </ProductCarouselContainer>
    );
};

export default ProductCarousel;