import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`

`

const Layout = ({ children }) => {
    return (
        <LayoutContainer>
            {children}
        </LayoutContainer>
    );
};

export default Layout;