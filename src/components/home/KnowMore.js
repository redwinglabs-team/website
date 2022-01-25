import React from 'react';
import styled from 'styled-components';
import { Container } from '../shared/Containers';
import { Label, TextLight, TitleBold } from '../shared/Texts';

const KnowMoreContainer = styled(Container)`
    background-color:${({theme:{colors}})=>colors.primaryColor};
    color:${({theme:{colors}})=>colors.white};
    width:100%;
    height:fit-content;
    margin-top:32px;
    padding: 32px 0px;
    &>span{
        text-align:center !important;
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
            LEARN HOW PRODUCTS CAN HELP YOU BECOME A LEADER IN HOSPITALITY <br/>TECHNOLOGY
            </Label>
        </KnowMoreContainer>
    );
};

export default KnowMore;