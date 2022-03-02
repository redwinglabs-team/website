import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { IFrameSiderContext, SRC_BOOK_A_DEMO } from '../../context/IFrameSiderContext';
import CustomButton from '../shared/CustomButton';
import CustomDivider from '../shared/CustomDivider';
import Label from '../shared/Label';

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
  const { onOpen } = useContext(IFrameSiderContext);
  return (
    <PricingCategory className={className}>
      <Content style={{ height: '100%', justifyContent: 'space-between' }}>
        <Content>
          <Label className="text-center" fontSize={32} fontFamily={principal && 'bold'} style={{ marginBottom: 24 }}>
            {title}
          </Label>
          <CustomDivider red />
          <Label className="text-center line-height" style={{ marginBottom: 24, maxWidth: 160 }}>
            {description}
          </Label>
        </Content>
        <CustomButton inverted={!principal} boxShadow="0px 3px 20px 0px #00000022" widthBorderRadius onClick={() => onOpen({ src: SRC_BOOK_A_DEMO })}>
          <Label className="uppercase" fontFamily="bold">
            request-quote
          </Label>
        </CustomButton>
      </Content>
    </PricingCategory>
  );
};

export default TableHeadCategoryPricingList;
