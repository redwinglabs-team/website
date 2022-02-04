import React from 'react';
import styled from 'styled-components';
import CustomButton from '../CustomButton';
import CustomDivider from '../CustomDivider';
import { Label } from '../Texts';

const PricingCategory = styled.th`
  max-width: 200px;
  position:relative;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;

const TableHeadCategoryPricingList = ({ title, description, className,principal }) => {
  return (
    <PricingCategory  className={className}>
     {principal && <div style={{ position: 'absolute', background: 'white', top: -12, left: 0, width: '100%', height: 20 }} className="header-shadow" />}
      <Content>
        <Label style={{textAlign:'center',marginBottom:24}} fontSize="32px" bold={principal}>{title}</Label>
        <CustomDivider red/>
        <Label style={{textAlign:'center',marginBottom:24}}>{description}</Label>
        <CustomButton inverted={!principal}  boxShadow='0px 3px 20px 0px #00000022' widthBorderRadius>
            REQUEST QUOTE
        </CustomButton>
      </Content>
    </PricingCategory>
  );
};

export default TableHeadCategoryPricingList;
