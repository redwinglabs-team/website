import React from 'react';
import styled from 'styled-components';
import Footer from './footer/Footer';
import DesktopHeader from './header/DesktopHeader';

const LayoutContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const PageContent = styled.div`
  position: relative;
`;

const MainContent = styled.div`
  height: 100%;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <PageContent>
        <DesktopHeader />
        <MainContent>{children}</MainContent>
      </PageContent>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
