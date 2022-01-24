import React from 'react';
import styled from 'styled-components';
import { RedwingsLogo } from '../../../assets';
import {theme} from '../../../styles/theme';
import { Container } from '../../shared/Containers';
import IconList from './IconList';
import { WEBSITE_LINK_LIST } from './WebsiteLink';


const FooterMainContainer = styled(Container)`
`

const FooterContainer = styled.div`
  display: flex;
  flex-flow: column;
  color: ${({isInverted,theme:{colors}})=>isInverted ? colors.primaryColor : colors.white};
  background-color:${({isInverted,theme:{colors}})=>isInverted ? colors.white : colors.primaryColor};
  align-items: center;
  justify-content: center;
  width: -webkit-fill-available; 
  padding: 32px 170px 0px;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding:24px;
    flex-flow: column;
  }
`;

const FooterContent = styled(Container)`
    justify-content:space-between;
    flex-direction:row;
    svg{
        width:200px;
        height:28px;
        path{
            fill:${({isInverted,theme:{colors}})=>isInverted ? colors.primaryColor : colors.white};
        }
    }
    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    &>*:not(:last-child){
        margin-bottom:32px;
    }
    flex-flow: column;
  }

  .link_list{
      align-items:flex-end;
      @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
            align-items:flex-start;
        }
    }
`

const FooterColumn = styled(Container)`
    justify-content:flex-start;
    align-items: flex-start;

`

const Text = styled.p`
  font-family: ${({theme:{fontFamily}})=>fontFamily.light};
  text-align:left;
  font-size:16px;
  margin: 0;
  &>span {
    font-family: ${({theme:{fontFamily}})=>fontFamily.regular};
  }
`;

const BoldText = styled(Text)`
  font-size:24px;
  font-family: ${({theme:{fontFamily}})=>fontFamily.bold};
`

const FooterBottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 0;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:24px;

  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    flex-flow: column;
    &>*:not(:last-child){
        margin-bottom:8px;
        }
    }
`;

const PrivacyElement = styled.p`
  font-family: ${({theme:{fontFamily}})=>fontFamily.regular};
  align-self: center;
  text-align:center;
  white-space:nowrap;
  font-size:12px;
  margin: 0;
`;

const Divider = styled.hr``

const FooterLinksGrid = styled.div`
  display:flex;
  flex-direction:column;
  & > *:not(:last-child){
        margin-bottom:8px;
    }
`


const Footer = () => {
    const isIndex = ()=> (window.location.pathname === '/')

    return (
        <FooterMainContainer>
            {/* BOTTOM */}
            <FooterContainer isInverted={isIndex()}>
                <FooterContent isInverted={isIndex()}>
                    <FooterColumn >
                        <RedwingsLogo style={{marginBottom:24}}/>
                        <Text>
                        Creators of next generation hospitality management system
                        </Text>
                    </FooterColumn>
                    <FooterColumn>
                        <BoldText style={{marginBottom:24}}>
                            Contacts
                        </BoldText>
                        <Text style={{marginBottom:16}}>
                            <span>Address:</span> C.da Pettolecchia SNC Savelletri di Fasano, 72015
                        </Text>
                        <Text style={{marginBottom:16}}>
                        <span>Phone:</span> +39 080 482 9200
                        </Text>
                        <Text>
                        <span>Email:</span> info@redwinglabs.com
                        </Text>
                    </FooterColumn>
                    <FooterColumn className="link_list">
                        <FooterLinksGrid>
                        {
                            Object.values(WEBSITE_LINK_LIST).map((link,index)=>(
                                <BoldText key={index} style={{cursor:'pointer'}}>
                                    {link.title}
                                </BoldText>
                            ))
                        }
                        </FooterLinksGrid>
                    </FooterColumn>
                </FooterContent>
            <FooterBottomContainer>
                    <Divider
                        style={{
                        margin: ' 24px 0',
                        backgroundColor: isIndex ? theme.colors.lightGrey : theme.colors.white,
                        height: 0.5,
                        }}
                    />
                <BottomContainer>
                <IconList isInverted={isIndex()}/>
                <PrivacyElement>© 2021 Redwing Labs. All rights reserved.</PrivacyElement>
            </BottomContainer>
        </FooterBottomContainer>
            </FooterContainer>
        </FooterMainContainer>
    );
};

export default Footer;