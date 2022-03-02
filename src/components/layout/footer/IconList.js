import React from 'react';
import styled from 'styled-components';
import { LinkedinIcon, GithubIcon, TwitterIcon, YoutubeIcon, FacebookIcon, InstagramIcon } from '../../../assets';

const IconListContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  & > *:not(:last-child) {
    margin-right: 10px;
  }

  svg {
    cursor: pointer;
    width: 40px;
    height: 40px;
    path {
      fill: ${({ isInverted, theme: { colors } }) => (!isInverted ? colors.white : colors.primaryColor)};
    }
  }
`;

const IconItem = styled.div`
  display: flex;
  align-items: center;
`;

const IconList = ({ isInverted }) => {
  /// ADD-LINKS
  const socialLinks = {
    TWITTER: {
      icon: <TwitterIcon />,
      link: ''
    },
    FACEBOOK: {
      icon: <FacebookIcon />,
      link: 'https://www.facebook.com/redwinglabs/'
    },
    INSTAGRAM: {
      icon: <InstagramIcon />,
      link: ''
    },
    GITHUB: {
      icon: <GithubIcon />,
      link: 'https://github.com/redwinglabs-team'
    },
    YOUTUBE: {
      icon: <YoutubeIcon />,
      link: 'https://www.youtube.com/channel/UCvyijjNa0s_y7tvpCy7fZCA'
    },
    LINKEDIN: {
      icon: <LinkedinIcon />,
      link: 'https://www.linkedin.com/company/redwing-labs/'
    }
  };

  return (
    <IconListContainer isInverted={isInverted}>
      {Object.values(socialLinks).map((social, index) => (
        <IconItem
          key={index}
          onClick={() => {
            window.open(social.link, '_blank', 'noopener,noreferrer');
          }}
        >
          {social.icon}
        </IconItem>
      ))}
    </IconListContainer>
  );
};

export default IconList;
