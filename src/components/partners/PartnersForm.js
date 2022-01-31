import React from 'react';
import styled from 'styled-components';
import Form from '../shared/Form';
import { Label } from '../shared/Texts';

const MainContainerPartnersForm = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;
margin-right: auto;
margin-left: auto;
padding:48px 120px;
width: -webkit-fill-available;

max-width: inherit;
@media (max-width: ${({ theme: { mediaQueries } }) =>
    `${mediaQueries.mobilePixel + 1}px`}) {
        padding:16px;
}
`

const Content = styled.div`
display:flex;
justify-content:center;
align-items:start;
flex-direction:row;
&>*:not(:last-child){
 margin-right:32px;
}
@media (max-width: ${({ theme: { mediaQueries } }) =>
    `${mediaQueries.desktopPixel + 1}px`}) {
        flex-direction:column;
        padding:16px;
        &>*:not(:last-child){
            margin-bottom:32px;
            margin-right:0px;
        }
}
`
const TextContainer = styled.div`
display:flex;
justify-content:center;
align-items:start;
flex-direction:column;
&>*:not(:last-child){
 margin-bottom:32px;
}
`
const TitleContainer = styled.div`
display:flex;
justify-content:center;
align-items:start;
flex-direction:column;
width: -webkit-fill-available;
margin-bottom:32px;

`

const PartnersForm = () => {
    return (
        <MainContainerPartnersForm>
            <TitleContainer>
                    <Label bold fontSize="32px">Interested in</Label>
                    <Label fontSize="32px">joining forces?</Label>
            </TitleContainer>
            <Content>
                <TextContainer>
                    <Label>
                                The Redwing Labs Solutions Partner Program is designed for service providers seeking a unique opportunity to grow and scale their business.
                    </Label>
                    <Label>
                                Join us in moving the world of hospitality forward, by providing operators with the best tools and services to enhance their business and guest experience.
                        </Label>
                        <Label>
                                Thanks to a wide range of management solutions and comprehensive training courses, our Partners are prepared and well-positioned to engage on multiple touchpoints across the value chain of their customers.
                        </Label>
                        <Label>
                                If you want to accelerate your growth, we want to help.
                        </Label>
                </TextContainer>
                <Form />
           </Content>
        </MainContainerPartnersForm>
    );
};

export default PartnersForm;