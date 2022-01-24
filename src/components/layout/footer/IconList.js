import React from 'react';
import styled from 'styled-components';
import { DiscordIcon, LinkedinIcon, MediumIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from '../../../assets';

const IconListContainer = styled.div`
display: flex;
width: 100%;
justify-content:flex-start;
align-items:center;
flex-direction:row;

& > *:not(:last-child) {
      margin-right: 10px;
    }

svg {
    cursor:pointer;
    width:40px;
    height:40px;
    path{
        fill: ${({isInverted,theme:{colors}})=>isInverted ? colors.white : colors.primaryColor};
    }
    circle{
        fill: ${({isInverted,theme:{colors}})=>isInverted ? colors.primaryColor : colors.white};
    }
}

`

const IconItem = styled.div`
  display: flex;
  align-items: center;
  /* &:hover {
    color: #ffffff;
    text-shadow: 0 0 5px #ffffff;
    & svg {
      margin-right: 10px;
      & path {
        fill: #ffffff;
      }
    }
  } */
`;

const IconList = ({isInverted}) => {
    /// ADD-LINKS
    const socialLinks = {
        TWITTER:{
            icon:<TwitterIcon />,
            link:""
        },
        TELEGRAM:{
            icon:<TelegramIcon/>,
            link:""
        },
        DISCORD:{
            icon:<DiscordIcon/>,
            link:""
        },
        MEDIUM:{
            icon:<MediumIcon/>,
            link:""
        },
        YOUTUBE:{
            icon:<YoutubeIcon/>,
            link:""
        },
        LINKEDIN:{
            icon:<LinkedinIcon/>,
            link:""
        }
    }

    return (
        <IconListContainer isInverted={isInverted}>
            {Object.values(socialLinks).map((social,index)=>(
                <IconItem
                    key={index}
                    onClick={()=>{window.open(social.link, '_blank', 'noopener,noreferrer')}}>
                    {social.icon}
                </IconItem>
            ))}
        </IconListContainer>
    );
};

export default IconList;