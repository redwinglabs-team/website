import React from 'react';
import styled from 'styled-components';
import mapImage from '../../assets/images/redwinglabs-map.png';

const MainContainerMap = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  padding: 48px 120px;
  width: -webkit-fill-available;

  max-width: inherit;
  img{
    width: -webkit-fill-available;

  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 32px;
  }
`;

const Map = () => {
    return (
        <MainContainerMap>
        <img src={mapImage} alt="map"/>
        </MainContainerMap>
    );
};

export default Map;