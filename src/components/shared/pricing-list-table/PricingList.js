import React, { useState } from 'react';
import styled from 'styled-components';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import { Label } from '../Texts';
import { theme } from '../../../styles/theme';
import TableHeadCategoryPricingList from './TableHeadCategoryPricingList';
import TableRowPricingList from './TableRowPricingList';

const PackagesMadeContainer = styled.th`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding:24px 170px;
`;

const PricingTable = styled.table`
  border: none;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.light};
  td {
    text-align: center;
  }
  th,td{
    max-width:200px;
  }

  & > * {
    background-color: ${({ theme: { colors } }) => colors.white};
  }
  .header-shadow {
    box-shadow: ${({ theme: { colors } }) =>
      `5px 0 5px -5px ${colors.primaryColor}22,  -5px 0 5px -5px ${colors.primaryColor}22, 0 -5px 5px 0px ${colors.primaryColor}22 `};
  }

  .x-shadow {
    box-shadow: ${({ theme: { colors } }) => `5px 0 5px -5px ${colors.primaryColor}22,  -5px 0 5px -5px ${colors.primaryColor}22`};
  }
  .top-right-shadow {
    box-shadow: ${({ theme: { colors } }) => `5px 0 5px -5px ${colors.primaryColor}22,   0 -5px 5px 0px ${colors.primaryColor}22`};
  }
  .bottom-right-shadow {
    box-shadow: ${({ theme: { colors } }) => `5px 0 5px -5px ${colors.primaryColor}22,   0 5px 5px -5px ${colors.primaryColor}22`};
  }
  .top-left-shadow {
    box-shadow: ${({ theme: { colors } }) => `-5px 0 5px -5px ${colors.primaryColor}22,   0 -5px 5px 0px ${colors.primaryColor}22`};
  }
  .bottom-left-shadow {
    box-shadow: ${({ theme: { colors } }) => `-5px 0 5px -5px ${colors.primaryColor}22,   0 5px 5px -5px ${colors.primaryColor}22`};
  }

  .bottom {
    box-shadow: 0 5px 5px -5px #00000022;
  }

  .left-shadow {
    box-shadow: ${({ theme: { colors } }) => `-5px 0 5px -5px ${colors.primaryColor}22`};
  }

  .right-shadow {
    box-shadow: ${({ theme: { colors } }) => `5px 0 5px -5px ${colors.primaryColor}22`};
  }

  .all {
    box-shadow: 0 0 5px #00000022;
  }
`;

const PricingList = ({ features }) => {
  const [openedAccordion, setOpenedAccordion] = useState(null);

  return (
    <MainContainer>
    <PricingTable border="none" cellSpacing={0} cellPadding={20} >
      <thead style={{ fontFamily: theme.fontFamily.regular }}>
        <tr>
          <PackagesMadeContainer>
            <Label fontSize="32px">Packages made</Label>
            <Label>to fit any property size, and budget.</Label>
          </PackagesMadeContainer>
          <TableHeadCategoryPricingList
            className="top-left-shadow"
            title="Essentials"
            description="Lorem Impsum, Lorem Impsum, Lorem Impsum, Lorem Impsum"
          />
          <TableHeadCategoryPricingList
            principal
            className="x-shadow"
            title="Pro"
            description="Lorem Impsum, Lorem Impsum, Lorem Impsum, Lorem Impsum"
          />
          <TableHeadCategoryPricingList
            className="top-right-shadow"
            title="Enterprise"
            description="Lorem Impsum, Lorem Impsum, Lorem Impsum, Lorem Impsum"
          />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Label fontSize="32px">Features</Label>
          </td>
          <td className="left-shadow"> </td>
          <td style={{ position: 'relative' }} className="x-shadow">
            {' '}
          </td>
          <td className="right-shadow"> </td>
        </tr>

        {features.map((feature, index) => (
          <TableRowPricingList
            key={index}
            index={index}
            title={feature.feature}
            description={feature.description}
            essentials={feature.essentials}
            pro={feature.pro}
            enterprise={feature.enterprise}
            openedAccordion={openedAccordion}
            setOpenedAccordion={setOpenedAccordion}
            bgColored={index % 2 === 0}
          />
        ))}
                <tr>
          <td>
            <Label fontSize="32px">Features</Label>
          </td>
          <td className="left-shadow"> </td>
          <td style={{ position: 'relative' }} className="x-shadow">
            {' '}
          </td>
          <td className="right-shadow"> </td>
        </tr>
      </tbody>
    </PricingTable>
    </MainContainer>
  );
};

export default PricingList;
