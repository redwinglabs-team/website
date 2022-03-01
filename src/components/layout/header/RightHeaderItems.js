import React from 'react';
import styled from 'styled-components';
import HeaderItem from '../../shared/HeaderItem';
import Label from '../../shared/Label';
import LanguageSwitcher from './LanguageSwitcher';

const RightContainerHeader = styled.div`
  display: flex;
  align-items: center;
`;

const RightHeaderItems = ({ itemsLink, isQuadroMenu }) => {
  return (
    <RightContainerHeader>
      {Object.values(itemsLink).map((item, index) => (
        <HeaderItem
          key={index}
          style={{ marginRight: 32 }}
          colorInverted={isQuadroMenu}
          // className="mobile-none"
          textRegular={item.link !== window.location.pathname}
          href={item.link}
          onClick={item.onClick}
        >
          <Label className="nowrap">{item.title}</Label>
        </HeaderItem>
      ))}
      <LanguageSwitcher className="mobile-none" />
    </RightContainerHeader>
  );
};

export default RightHeaderItems;
