import React from 'react';
import styled from 'styled-components';
import { Container } from '../shared/Containers';
import borgoImage from '../../assets/images/home/Borgo Egnazia.png';
import ciminoImage from '../../assets/images/home/Masseria Cimino.png';
import carrubeImage from '../../assets/images/home/Masseria Le Carrube.png';
import sandomenicoImage from '../../assets/images/home/Masseria San Domenico.png';
import golfImage from '../../assets/images/home/San Domenico Golf.png';
import houseImage from '../../assets/images/home/San Domenico House.png';
import ourClientSVG from '../../assets/svg/home/our-clients.svg'
import {theme} from '../../styles/theme';

const ClientsContainer = styled(Container)`
    background-color: ${({theme:{colors}})=>colors.lightGreyBackground};
    padding: 48px 150px 24px;    
    z-index:1;
    height:min-content;
    width: -webkit-fill-available;
    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 32px 64px;
  }
/* 
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.desktopPixel + 1}px`}) {
     padding: 32px 64px;
  } */
`
const ClientsTextContainer = styled(Container)`
margin:32px;
height:min-content;
&>div:not(:last-child){
 margin-bottom:32px !important;
}
`

const ClientListContainer = styled(Container)`
margin:32px;
height: fit-content;
flex-direction: row;
justify-content:space-around;
/* border-top: 2px solid ${({theme:{colors}})=>colors.grey}; */
&>div:not(:last-child){
 margin-right:16px ;
}

@media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
            display: flex !important;
          flex-flow: column;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.desktopPixel + 1}px`}) {
              display: grid;
              grid-template-columns: min-content min-content;
  }
`

const TitleContainer = styled(Container)`
    min-height: 110px;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
    flex-direction:row;
    font-size:48px;
    margin:0px;
    flex-wrap: wrap;
    background-position: center;
    background-repeat: no-repeat;
    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
        background-size: cover;
  }
`

const LabeledTitleRegular = styled.span`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.regular};
    margin-right:8px;
`

const LabeledTitleBold = styled.span`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
    margin-right:8px;
`

const Divider = styled.hr``



const Clients = () => {
    return (
        <ClientsContainer>
            <ClientsTextContainer>
                <TitleContainer style={{ backgroundImage: `url(${ourClientSVG})` }}>
                    <LabeledTitleRegular>
                        OUR
                    </LabeledTitleRegular>
                    <LabeledTitleBold>
                        CLIENTS
                    </LabeledTitleBold>
                </TitleContainer>


            </ClientsTextContainer>
            <Divider
                style={{
                width:'80%',
                backgroundColor: theme.colors.grey,
                height: 0.5,
                }}
            />
            <ClientListContainer>
            <img src={borgoImage} alt="borgo-egnazia"/>
            <img src={ciminoImage} alt="masseria-cimino"/>
            <img src={carrubeImage} alt="masseria-le-carrube"/>
            <img src={sandomenicoImage} alt="masseria-san-domenico"/>
            <img src={golfImage} alt="san-domenico-golf"/>
            <img src={houseImage} alt="san-domenico-house"/>
            </ClientListContainer>
        </ClientsContainer>
    );
};

export default Clients;