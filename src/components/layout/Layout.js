import React, { useState } from 'react';
import styled from 'styled-components';
import { TopUpIcon } from '../../assets';
import Footer from './footer/Footer';
import DesktopHeader from './header/DesktopHeader';

const LayoutContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`

const PageContent = styled.div`
  position: relative;
`


const MainContent = styled.div`
  height: 100%;
  width: 100%;
`;

const GoTopContainer = styled.div`
  display: ${({ topUpIconIsVisible }) =>
    topUpIconIsVisible ? 'block' : 'none'};
  position: fixed;
  bottom: 10px;
  right: 10px;
  line-height: 0;
  opacity: 0.8;

  transition: all 0.5s ease;
  animation: smoothOut 1s;

  @keyframes smoothOut {
    0% {
      transform: translateY(142px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  &:hover {
    opacity: 1;
    text-shadow: 0 0 5px #ffffff;
  }
`;

const ButtonIcon = styled("button")`
  border: none;
  padding: 0;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: transparent;
`;





const Layout = ({ children }) => {
    const [topUpIconIsVisible, setTopUpIconIsVisible] = useState(false);

    const goToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

    return (
        <LayoutContainer>
          <PageContent>
              <DesktopHeader />
              <MainContent>
                  {children}
              </MainContent>
            </PageContent>
            <Footer/>
            <GoTopContainer topUpIconIsVisible={topUpIconIsVisible}>
                <ButtonIcon onClick={goToTop}>
                    <TopUpIcon />
                </ButtonIcon>
            </GoTopContainer>
        </LayoutContainer>
    );
};

export default Layout;