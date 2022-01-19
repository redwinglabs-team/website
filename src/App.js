import React from 'react';
import { ThemeProvider } from 'styled-components';
import  {AppRouter}  from './router/router';
import GlobalStyles from './styles/globalStyle';
import {theme} from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
