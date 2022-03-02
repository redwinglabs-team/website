import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HeaderItem from '../../shared/HeaderItem';

const RightContainerHeader = styled.div`
  display: flex;
  align-items: center;
`;

const RightHeaderItems = ({ itemsLink, isQuadroMenu }) => {
  const navigate = useNavigate();
  return (
    <RightContainerHeader>
      {Object.values(itemsLink).map((item, index) => (
        <HeaderItem key={index} style={{ marginRight: 32 }} colorInverted={isQuadroMenu} onClick={() => navigate(item.link)}>
          {item}
        </HeaderItem>
      ))}
    </RightContainerHeader>
  );
};

export default RightHeaderItems;
