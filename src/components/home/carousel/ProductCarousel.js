/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { Lazy } from 'swiper/js/swiper.esm';

import { Container } from '../../shared/Containers';
import { BackIcon, CarouselEntertainment, CarouselFnb, CarouselPms, CarouselPop, ForwardIcon } from '../../../assets';
import carouselPms from '../../../assets/images/fnb.png';
import { Label, TitleBold, TitleLight } from '../../shared/Texts';
import { theme } from '../../../styles/theme';
import Slide from './Slide';

const ProductCarouselContainer = styled.div`
  margin: 32px;
  width: -webkit-fill-available;
  width: -moz-available;
`;

const TitleContainer = styled(Container)`
  width: -webkit-fill-available;
  width: -moz-available;
  height: min-content;
  flex-direction: row;
  padding: 32px;
`;
const MainTitleContainer = styled(Container)`
  flex-direction: column;
`;

const CarouselContainer = styled(Container)`
  background-color: ${({ theme: { colors } }) => colors.lightGreyBackground};
  .swiper-container {
    width: -webkit-fill-available;
    width: -moz-available;
    height: 100%;
    overflow: hidden;
    margin: 32px;
  }
  .swiper-slide {
    width: -webkit-fill-available !important;
    width: -moz-available !important;
    height: auto;
  }
`;

const Divider = styled.hr``;


const ProductCarousel = () => {
  const params = {
    modules: [Lazy],
    lazy: true,
    initialSlide: 0,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    loop: true,
    autoplay: false,
    renderPrevButton: () => <BackIcon className="swiper-button-prev" />,
    renderNextButton: () => <ForwardIcon className="swiper-button-next" />
  };

  return (
    <ProductCarouselContainer>
      <CarouselContainer>
        <TitleContainer>
          <MainTitleContainer>
            <TitleLight>OUR</TitleLight>
            <TitleBold>PRODUCTS</TitleBold>
          </MainTitleContainer>
          <Label style={{ textAlign: 'right' }}>
            Redwing Labs is actively developing tools that lead to greater decision making capabilities for our clients, and more tailored guest
            experiences for their patrons.
          </Label>
        </TitleContainer>
        <Divider
          style={{
            width: '80%',
            backgroundColor: theme.colors.grey,
            height: 0.5
          }}
        />
        <Swiper {...params}>
          <Slide
            title="QUADRO"
            subtitle="PROPERTY MANAGEMENT SYSTEM"
            description="Designed for modern hoteliers to automate and simplify their properties operations,
                     while at the same time enhancing the guest experience. "
            image={ <img src={carouselPms} alt="pms" />}
          />
          <Slide
            title="QUADRO"
            subtitle="Restaurant Manager"
            description="All-in-one restaurant management system
                     that provides restaurateurs with the ability to run front-of-house,
                     kitchen, and back-office operations from a single cloud-based platform. "
            image={<CarouselFnb />}
          />
          <Slide
            title="QUADRO"
            subtitle="Point of Purchase"
            description="Easy-to-navigate and highly intuitive point of purchase system for retail stores, restaurants & bars. "
            image={<CarouselPop />}
          />
          <Slide
            title="QUADRO"
            subtitle="Entertainment"
            description="The latest in hotel​ In-room Entertainment and business-to-guest communication technology."
            image={<CarouselEntertainment />}
          />
        </Swiper>
      </CarouselContainer>
    </ProductCarouselContainer>
  );
};

export default ProductCarousel;
