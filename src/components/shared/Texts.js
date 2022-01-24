import styled from "styled-components"

export const TitleLight = styled.span`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.light};
    font-size:32px;
    margin:0px;
    text-align:left;
    width: 100%;
    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.desktopPixel + 1}px`}) {
        font-size:24px;
    }
`
export const TitleBold = styled.span`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
    font-size:58px;
    margin:0px;
    text-align:left;
    width: 100%;
    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.desktopPixel + 1}px`}) {
        font-size:40px;
    } `

export const TextLight = styled.span`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.light};
    font-size:${({fontSize})=>fontSize || '32px'};
    margin:0px;
    width: 100%;
    text-align:center;
    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.desktopPixel + 1}px`}) {
        font-size:16px;
    } `

export const Label = styled.span`
    font-family: ${({ bold,theme: { fontFamily } }) =>bold ? fontFamily.bold : fontFamily.light};
    font-size:${({fontSize})=>fontSize || '16'};
    margin:0px;
    width: 100%;
    text-align:left; `
    /* @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.desktopPixel + 1}px`}) {
        font-size:16px;
    } ` */