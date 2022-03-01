import React from 'react';
import { ThemeProvider } from 'styled-components';
import IFrameSider from './components/shared/IFrameSider';
import { IFrameSiderConsumer, IFrameSiderProvider } from './context/IFrameSiderContext';
import { LanguageProvider } from './context/LanguageContext';
import { AppRouter } from './router/router';
import GlobalStyles from './styles/globalStyle';
import { theme } from './styles/theme';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <IFrameSiderProvider>
          <GlobalStyles />
          <AppRouter />
          <IFrameSiderConsumer>
            {(value) => {
              console.log('value', value);
              return <IFrameSider open={value.open} onClose={value.onClose} src={value.src} />;
            }}
          </IFrameSiderConsumer>
        </IFrameSiderProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
