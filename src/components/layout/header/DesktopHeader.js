import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import { QuadroLogo, RedwingsLogo } from '../../../assets';
import { ROUTE_CAREERS, ROUTE_CONTACT_US, ROUTE_INDEX, ROUTE_PRODUCTS_QUADRO_ENTERTAINMENT, ROUTE_PRODUCTS_QUADRO_FNB, ROUTE_PRODUCTS_QUADRO_PMS, ROUTE_PRODUCTS_QUADRO_POP, ROUTE_PRODUCTS_QUADRO_SUITE } from '../../../router/routes';
import { matchPathname } from '../../../utils/UtilStrings';
import RightHeaderItems from './RightHeaderItems';

const Container = styled.div`
  display: flex;
  position: absolute;
  background-color:transparent;
  width: -webkit-fill-available;
  flex-direction:column;
  min-height: ${({ theme: { header } }) => `${header.height}px`};
  z-index: 1000;

  .sticky {
    position:sticky;
    top: 0;
    transition: all 0.5s ease;
    animation: smoothScrollIn 1s forwards;
  }

  .out {
    top: -56px;
    transition: all 0.5s ease;
    animation: smoothScrollOut 1s forwards;
  }

  @keyframes smoothScrollIn {
    0% {
      transform: translateY(-142px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  @keyframes smoothScrollOut {
    0% {
      transform: translateY(0px);
    }

    100% {
      transform: translateY(-250px);
    }
  }
`;

const TopHeader = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding: 16px 170px;
  min-height: ${({ theme: { header } }) => `${header.height}px`};


  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
          flex-direction:column;
    padding: 1.5em;
  }
  @media (min-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) and (max-width:916px)  {
    padding: 2em 1.5em;
  }
`

const BottomHeader = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  background-color:white;
  padding: 8px 170px;

  z-index:-1;


@media (max-width: ${({ theme: { mediaQueries } }) =>
    `${mediaQueries.mobilePixel + 1}px`}) {
  padding: 1.5em;
}
@media (min-width: ${({ theme: { mediaQueries } }) =>
    `${mediaQueries.mobilePixel + 1}px`}) and (max-width:916px)  {
  padding: 2em 1.5em;
}
`

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  /* & > *:not(:last-child) {
    margin-right: 25px;
  } */
`;

const RightContainer = styled.div`
  display: flex;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel }px`}) {
        margin-top:16px;
    justify-content:center;
  }
`;

const DesktopHeader = ({ className, menuWithMarginBottom }) => {
  const navigate = useNavigate();
  const [quadroHeaderReveal, setQuadroHeaderReveal] = useState(false)

  const MAIN_LINK = {
    HOME:{
        title:"Home",
        link:ROUTE_INDEX,
        onClick:()=>{}
    },
    PRODUCTS:{
        title:"Products",
        link:ROUTE_PRODUCTS_QUADRO_SUITE,
        onClick:()=>setQuadroHeaderReveal(true)
    },
    CAREERS:{
        title:"Careers",
        link:ROUTE_CAREERS,
        onClick:()=>{}
    },
    CONTACT:{
        title:"Contact Us",
        link:ROUTE_CONTACT_US,
        onClick:()=>{}
    },
}

const QUADRO_LINK = {
  SUITE:{
      title:"Suite",
      link:ROUTE_PRODUCTS_QUADRO_SUITE,
      onClick:()=>{}
  },
  PMS:{
      title:"Pms",
      link:ROUTE_PRODUCTS_QUADRO_PMS,
      onClick:()=>{}
  },
  FNB:{
      title:"Fnb",
      link:ROUTE_PRODUCTS_QUADRO_FNB,
      onClick:()=>{}
  },
  POP:{
      title:"Pop",
      link:ROUTE_PRODUCTS_QUADRO_POP,
      onClick:()=>{}
  },
  ENTERTAINMENT:{
      title:"Entertainment",
      link:ROUTE_PRODUCTS_QUADRO_ENTERTAINMENT,
      onClick:()=>{}
  },
}

  return (
    <Container id='header' className={className}>
      <TopHeader>
      <LeftContainer>
        <RedwingsLogo
          style={{ cursor: 'pointer',height:20 }}
          onClick={() => navigate(ROUTE_INDEX)}
        />
      </LeftContainer>
      <RightContainer>
        <RightHeaderItems
        itemsLink={MAIN_LINK}
          menuWithMarginBottom={menuWithMarginBottom}
        />
      </RightContainer>
      </TopHeader>
      <BottomHeader
        style={{display: matchPathname('products') || quadroHeaderReveal ? 'flex' : 'none'}}
        className={matchPathname('products') || quadroHeaderReveal ? 'sticky' : 'out'}
        >
        <QuadroLogo className="mobile-none" style={{ cursor: 'pointer',height:32 }}
          onClick={() => navigate(ROUTE_PRODUCTS_QUADRO_SUITE)}/>
        <RightHeaderItems
          itemsLink={QUADRO_LINK}
          isQuadroMenu
          menuWithMarginBottom={menuWithMarginBottom}
        />
      </BottomHeader>
    </Container>
  );
};

export default DesktopHeader;
