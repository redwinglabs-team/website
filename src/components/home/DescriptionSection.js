import React from 'react';
import styled from 'styled-components';
import { GridPattern } from '../../assets';
import { Container } from '../shared/Containers';
import LabeledDescription from '../shared/LabeledDescription';
import { TextLight } from '../shared/Texts';

const DescriptionSectionContainer = styled(Container)`
    padding:64px 150px;
    flex-direction:row;
    width: fit-content;
    max-height:600px;

    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    flex-flow: column;
    padding: 32px 64px;
    max-height:none;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.desktopPixel + 1}px`}) {
     padding: 16px 64px;
     height: fit-content;
     margin-bottom:64px;
  }

`
const LeftContainer = styled(Container)`
background-color: ${({theme:{colors}})=>colors.lightGreyBackground};
margin-right:64px;
max-width: 400px;
max-height:550px;
padding: 24px;
@media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    margin:0px;
    max-height:200px;
  }
`
const RightContainer = styled(Container)`
margin:16px;
height:100%;
justify-content:space-between;
&>div:not(:last-child){
 margin-bottom:32px !important;
}
@media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    justify-content:center;
    height: fit-content;
  }
`

const GridContainer = styled.div`
    position:relative;
    left:-224px;
    bottom:-200px;
    transform: rotate(90deg);
    svg{
        width:200px;
        height:100px;
    }

    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.desktopPixel + 1}px`}) {
        left:0px;

  }
`

const DescriptionSection = () => {
    return (
        <DescriptionSectionContainer >
            <LeftContainer>
                <TextLight>
                “Building technology that increases revenue, lowers operating costs, and enhances
                    the customer experience.”
                </TextLight>
                <GridContainer className='mobile-none'>
                        <GridPattern/>
                    </GridContainer>
            </LeftContainer>
            <RightContainer>
                <LabeledDescription
                title="Innovative Solution"
                description="We build technologies that help companies keep up
                 with the pace of technological, societal, and cultural change,
                  all while meeting the ever-evolving demands and expectations of their guests."
                  />
                <LabeledDescription
                title="Cloud Based & Interconnected"
                description="Our cloud-based solutions allow businesses to interact with our
                products from any device.Unlike legacy systems, native cloud solutions mean every process is easier,
                faster, and more connected."
                  />
                <LabeledDescription
                title="Solid Foundation"
                description="Our products are built from the ground up so that they are flexible,
                 extensible and scalable, ensuring that our digital solutions suite stays fast, stable,
                  and secure over the long run."
                  />
            </RightContainer>
        </DescriptionSectionContainer>
    );
};

export default DescriptionSection;