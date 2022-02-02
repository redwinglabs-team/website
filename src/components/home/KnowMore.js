import React from 'react';
import styled from 'styled-components';
import { Container } from '../shared/Containers';
import { Label, TextLight, TitleBold } from '../shared/Texts';

const KnowMoreContainer = styled(Container)`
    background-color:${({theme:{colors}})=>colors.primaryColor};
    color:${({theme:{colors}})=>colors.white};
    width: -webkit-fill-available;
    height:fit-content;
    margin-top:32px;
    padding: 32px 170PX;
    &>span{
        text-align:center !important;
    }
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
      padding:24px;
  }
`

const KnowMore = () => {
    return (
        <KnowMoreContainer>
            <TextLight>
                WANT TO
            </TextLight>
            <TitleBold>
                KNOW MORE?
            </TitleBold>
            <Label>
                LEARN HOW YOUR BUSINESS CAN UNLOCK ROI BY EHHANCING THE GUEST EXPERIENCE,
                INCREASING REVENUES, AND LOWER OPERATING COSTS THROUGH AN INTUITIVE AND INTELLIGENTLY
                DESIGNE HOSPITALITY PRODUCT SUITE
            </Label>
        </KnowMoreContainer>
    );
};

export default KnowMore;