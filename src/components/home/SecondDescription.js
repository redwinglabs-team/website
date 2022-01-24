import React from 'react';
import styled from 'styled-components';
import { DigitPattern, QuadroRedLogo } from '../../assets';
import { Container } from '../shared/Containers';
import { Label } from '../shared/Texts';

const SecondDescriptionContainer = styled(Container)`
    background:linear-gradient(90deg,#BE3144 62%, #232323 62%);
    padding: 48px 0px;    
    z-index:1;
    height:min-content;
    width: -webkit-fill-available;
    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 32px 0px;
  }
`

const Grid = styled(Container)`
    color:${({theme:{colors}})=>colors.white};
`
const GridRow = styled(Container)`
flex-direction:row;
height:fit-content;
justify-content:flex-start;
margin-bottom:32px;
@media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
        flex-direction:column;
  }
`;

const GridColumn = styled(Container)`
height:fit-content;
width:33%;
margin-left: ${({withMoreMarginLeft})=>withMoreMarginLeft ? '240px' : '48px'};
@media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
        margin:32px;
        width:fit-content;
  }
`
const LogoContainer = styled(Container)`
height:fit-content;
max-width:600px;
background-color:${({theme:{colors}})=>colors.white};
padding:16px;
svg{
    width:150px;
    height:180px;
}
@media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
        padding:0px;
  }
`

const SvgContainer = styled.div`
    position:relative;
    left:0px;
    bottom:0px;
    transform: rotate(90deg);
    svg{
        width:200px;
        height:100px;
    }

    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.desktopPixel + 1}px`}) {
        left:0px;
        padding:0px;

  }
`

const SecondDescription = () => {
    return (
        <SecondDescriptionContainer>
            <Grid>
                <GridRow >
                    <GridColumn withMoreMarginLeft>
                        <Label fontSize="24px" bold>
                        Redwing Labs was founded  under the belief that hospitality providers should be driven by actionable customer
                         data with tools that augment human decision-making capabilities, not replace them. Today,
                          Redwing Labs is actively developing technologies that deliver to hospitality businesses,
                           the tools necessary to provide guests with experiences they have come to expect in their modern lives.
                        </Label>
                    </GridColumn>
                </GridRow>
                <GridRow >
                    <LogoContainer>
                        <QuadroRedLogo />
                    </LogoContainer>
                    <GridColumn >
                    <Label fontSize="24px" bold>
                        We understands the level of detail that is
                         expected from hospitality operators, and
                         provide solutions geared towards providing
                         the necessary tools to operators that facilitate
                         actionable decision making and an elevated
                         customer experience for the end-user.
                    </Label>
                    </GridColumn>
                    {/* <SvgContainer>
                        <DigitPattern />
                    </SvgContainer> */}
                </GridRow>
            </Grid>
        </SecondDescriptionContainer>
    );
};

export default SecondDescription;