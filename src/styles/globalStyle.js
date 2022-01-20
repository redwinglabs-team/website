import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export default createGlobalStyle`

    * {
      scrollbar-color: #cdcdcd transparent;
      scrollbar-width: thin;
    }

    *::-webkit-scrollbar-track {
      display: none;
    }

    html {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      scroll-behavior: smooth;
    };

    body {
      width: 100%;
      height: 100%;
      line-height: inherit;
      overflow: auto;
      min-width: 0;
      font-family:  ${({ theme: { fontFamily } }) => fontFamily.regular};
      margin: 0px;
      background-color: ${({ theme: { colors } }) => colors.layoutBackgroundColor};
      color:${({ theme: { colors } }) => colors.primaryColor};
    };

    #root {
      height: 100%;

      & > div:first-child {
        display: flex;
        flex-flow: column;
        height: 100%;
      }
    }

    .main-content-container {
      flex: 1;
      margin-top: ${theme.headerHeight}px;
    }

    .desktop-none {
      @media (min-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
        display: none !important;
      }
    }

    .mobile-only {
      display: block;
      @media (min-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel - 1}px`}) {
        display: none !important;
      }
    }

    .smartphone-none {
      @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel - 1}px`}) {
        display: none !important;
      }
    }

    .mobile-none {
      @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) {
        display: none !important;
      }
    }

    .ui.selection.active.dropdown .menu {
      border-color: ${({ theme: { colors } }) => colors.borderColor} !important
    }

    .ui.fluid.input > input {
      border-color: ${({ theme: { colors } }) => colors.borderColor} !important
    }

    .ui.input>input {
      font-family: ${({ theme: { fontFamily } }) => fontFamily.regular};
      color: ${({ theme: { colors } }) => colors.primaryColor};
    }

    /* BUTTON */
    .ui.button {
      font-family:${({ theme: { fontFamily } }) => fontFamily.bold};
      font-weight: unset;
    }

    .ui.multiple.dropdown .menu {
      width: 100%;
      color: ${({ theme: { colors } }) => colors.primaryColor};
    }
    .ui.fluid.dropdown {
      border-color: ${({ theme: { colors } }) => colors.borderColor} !important;
    }

    #main-content .dimmer {
      background: #00000029;
      margin-top: ${({ theme: { header } }) => header.height}px;
      z-index: 14;
    }

    .ui.checkbox input:focus~label:before{
      border: ${({ theme: { colors } }) => `1px solid ${colors.borderColor}`} !important;
    }


    .ui.label > .icon {
      padding-top: 1px;
      opacity: 1 !important;
    }

    .ui.button {
      margin: 0px;
      font-size: 16px;
    }

    .ui.dropdown .menu {
      width: 100%;
    }
`;
