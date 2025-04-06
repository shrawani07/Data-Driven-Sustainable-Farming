import React, { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './i18n'; // must be imported before rendering App


root.render(
  <StrictMode>
  <ChakraProvider theme={theme}>
  <I18nextProvider i18n={i18n}>
  <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </I18nextProvider>
      </ChakraProvider>
  </StrictMode>
);
