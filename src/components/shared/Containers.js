/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container =styled.div`
width:100%;
height:100%;
display: flex;
justify-content:center;
align-items:center;
flex-flow:column;
`


export const ImageContainer = styled.div`
display: flex;
height: min-content;
svg{
    width:100%;
    height: 100%;
    padding: 32px;
}

@media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
            svg{
                margin:auto;
                width:100%;
                height:100%;
                padding:16px;
        }
    }
`