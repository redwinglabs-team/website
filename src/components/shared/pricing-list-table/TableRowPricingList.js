import React from 'react';
import SlideDown from 'react-slidedown';
import styled from 'styled-components';
import { CheckIcon, PlusIcon } from '../../../assets';
import { Label } from '../Texts';

const TabelRow = styled.tr`
  background-color: ${({ bgColored, theme: { colors } }) => (bgColored ? colors.tableColor : colors.white)};
  svg {
    width: 36px;
  }
`;
const ContentTd = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const TableRowPricingList = ({ title, description, essentials, pro, enterprise, openedAccordion, setOpenedAccordion, index, bgColored }) => {
  return (
    <TabelRow bgColored={bgColored}>
      <td>
        <ContentTd>
          <PlusIcon onClick={() => setOpenedAccordion(index)} style={{marginRight:8}}/>
          <Label>{title}</Label>
        </ContentTd>
        <SlideDown className="my-dropdown-slidedown">
          {openedAccordion === index ? (
            <div style={{ padding: 20 }}>
              <Label fontSize="12px">{description}</Label>
            </div>
          ) : null}
        </SlideDown>
      </td>
      <td className="left-shadow">
        <ContentTd>{typeof essentials === 'boolean' ? [essentials ? <CheckIcon /> : null] : <Label style={{textAlign:"center"}} >{essentials}</Label>}</ContentTd>
      </td>
      <td style={{ position: 'relative' }} className="x-shadow">
        <ContentTd>{typeof pro === 'boolean' ? [pro ? <CheckIcon /> : null] : <Label style={{textAlign:"center"}}>{pro}</Label>}</ContentTd>
      </td>
      <td className="right-shadow" style={{}}>
        <ContentTd>{typeof enterprise === 'boolean' ? [enterprise ? <CheckIcon /> : null] : <Label style={{textAlign:"center"}}>{enterprise}</Label>}</ContentTd>
      </td>
    </TabelRow>
  );
};

export default TableRowPricingList;
