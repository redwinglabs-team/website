import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { Label } from '../Texts';
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
  padding: 24px 170px;
  position: relative;
`;

const PricingTable = styled.table`
  border: none;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.light};
  td {
    text-align: center;
    position: relative;
  }
  th,
  td {
    max-width: ${({ isSingleColumn }) => (isSingleColumn ? '400px' : '240px')};
    min-width: ${({ isSingleColumn }) => (isSingleColumn ? '400px' : '240px')};
  }
`;

const DesktopPricingList = ({ features, categories, productName, productDescription, openedAccordion, setOpenedAccordion }) => {
  return (
    <MainContainer>
      <div
        style={{
          boxShadow: '0px 0px 99px #00000029',
          height: 'calc(100% + 24px)',
          top: -24,
          width: 280,
          left: 730,
          position: 'absolute'
        }}
      />

      <div style={{ position: 'absolute', background: 'white', top: -24, left: 730, width: 280, height: 24, zIndex: 1 }} className="header-shadow" />

      <div
        style={{
          boxShadow: '0px 0px 99px #00000029',
          height: '100%',
          top: 0,
          width: 840,
          left: 450,
          position: 'absolute'
        }}
      />

      <PricingTable border="none" cellSpacing={0} cellPadding={20} isSingleColumn={categories.length === 1}>
        <thead style={{ fontFamily: theme.fontFamily.regular }}>
          <tr>
            <PackagesMadeContainer>
              <Label fontSize="32px">{productName}</Label>
              <Label>{productDescription}</Label>
            </PackagesMadeContainer>
            {categories.length === 1 ? (
              <TableHeadCategoryPricingList principal title={categories[0].name} description={categories[0].description} />
            ) : (
              <>
                <TableHeadCategoryPricingList title={categories[0].name} description={categories[0].description} />
                <TableHeadCategoryPricingList principal title={categories[1].name} description={categories[1].description} />
                <TableHeadCategoryPricingList title={categories[2].name} description={categories[2].description} />
              </>
            )}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Label fontSize="32px">Features</Label>
            </td>
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
              connect={feature.connect}
              openedAccordion={openedAccordion}
              setOpenedAccordion={setOpenedAccordion}
              bgColored={index % 2 === 0}
            />
          ))}
        </tbody>
      </PricingTable>
    </MainContainer>
  );
};

export default DesktopPricingList;
