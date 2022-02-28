import React from 'react';
import styled from 'styled-components';
import CustomButton from '../shared/CustomButton';
import CustomDivider from '../shared/CustomDivider';
import { Label } from '../shared/Texts';

const PricingCategory = styled.th`
  max-width: 240px;
  min-width: 240px;
  position: relative;
  height: inherit;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;

const TableHeadCategoryPricingList = ({ title, description, className, principal }) => {
  return (
    <PricingCategory className={className}>
      <Content style={{ height: '100%', justifyContent: 'space-between' }}>
        <Content>
          <Label style={{ textAlign: 'center', marginBottom: 24 }} fontSize="32px" bold={principal}>
            {title}
          </Label>
          <CustomDivider red />
          <Label style={{ textAlign: 'center', marginBottom: 24, maxWidth: 160 }}>{description}</Label>
        </Content>
        <CustomButton inverted={!principal} boxShadow="0px 3px 20px 0px #00000022" widthBorderRadius>
          REQUEST QUOTE
        </CustomButton>
      </Content>
    </PricingCategory>
  );
};

export default TableHeadCategoryPricingList;