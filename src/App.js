import React from 'react';
import { ThemeProvider } from 'styled-components';
import { LanguageProvider } from './context/LanguageContext';
import { AppRouter } from './router/router';
import GlobalStyles from './styles/globalStyle';
import { theme } from './styles/theme';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
