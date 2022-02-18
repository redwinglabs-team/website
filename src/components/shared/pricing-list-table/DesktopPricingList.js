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
    max-width:${({isSingleColumn})=> isSingleColumn ? '400px' : '200px'};
  }

  td:before,
  td:after,
  th:before,
  th:after {
    content: ' ';
    height: 100%;
    position: absolute;
    top: 0;
    width: 15px;
  }
  /* td:before {
  box-shadow: ${({ theme: { colors } }) => `-5px 0 5px -5px inset ${colors.primaryColor}22 `};
  left: -15px;
}
td:after {
  box-shadow: ${({ theme: { colors } }) => `5px 0 5px -5px inset ${colors.primaryColor}22 `};

  right: -15px;
} */

  & > * {
    background-color: ${({ theme: { colors } }) => colors.white};
  }
  .header-shadow {
    box-shadow: ${({ theme: { colors } }) =>
      `5px 0 5px -5px ${colors.primaryColor}22,  -5px 0 5px -5px ${colors.primaryColor}22, 0 -5px 5px 0px ${colors.primaryColor}22 `};
  }
  .footer-shadow {
    box-shadow: ${({ theme: { colors } }) =>
      `5px 0 5px -5px ${colors.primaryColor}22,  -5px 0 5px -5px ${colors.primaryColor}22, 0 5px 5px -5px ${colors.primaryColor}22 `};
  }

  .x-shadow {
    /* box-shadow: ${({ theme: { colors } }) => `5px 0 5px -5px ${colors.primaryColor}22,  -5px 0 5px -5px ${colors.primaryColor}22`}; */
  }

  .x-shadow:before {
    box-shadow: ${({ theme: { colors } }) => `-5px 0 5px -5px inset ${colors.primaryColor}62 `};
    left: -15px;
  }
  .x-shadow:after {
    box-shadow: ${({ theme: { colors } }) => `5px 0 5px -5px inset ${colors.primaryColor}62 `};
    right: -15px;
  }
  .top-right-shadow {
    box-shadow: ${({ theme: { colors } }) => `0 -5px 5px 0px ${colors.primaryColor}22`};
  }
  .top-right-shadow:after {
    box-shadow: ${({ theme: { colors } }) => `5px 0 5px -5px inset ${colors.primaryColor}22 `};
    right: -15px;
  }
  .bottom-right-shadow {
    box-shadow: ${({ theme: { colors } }) => `0 5px 5px -5px ${colors.primaryColor}22`};
  }
  .bottom-right-shadow:after {
    box-shadow: ${({ theme: { colors } }) => `5px 0 5px -5px inset ${colors.primaryColor}22 `};
    right: -15px;
  }
  .top-left-shadow {
    box-shadow: ${({ theme: { colors } }) => `0 -5px 5px 0px ${colors.primaryColor}22`};
  }
  .top-left-shadow:before {
    box-shadow: ${({ theme: { colors } }) => `-5px 0 5px -5px inset ${colors.primaryColor}22 `};
    left: -15px;
  }

  .bottom-left-shadow {
    box-shadow: ${({ theme: { colors } }) => ` 0 5px 5px -5px ${colors.primaryColor}22`};
  }
  .bottom-left-shadow:before {
    box-shadow: ${({ theme: { colors } }) => `-5px 0 5px -5px inset ${colors.primaryColor}22 `};
    left: -15px;
  }

  .bottom {
    box-shadow: 0 5px 5px -5px #00000022;
  }

  .left-shadow {
    /* box-shadow: ${({ theme: { colors } }) => `-5px 0 5px -5px ${colors.primaryColor}22`}; */
  }
  .left-shadow:before {
    box-shadow: ${({ theme: { colors } }) => `-5px 0 5px -5px inset ${colors.primaryColor}22 `};
    left: -15px;
  }

  .right-shadow {
    /* box-shadow: ${({ theme: { colors } }) => `5px 0 5px -5px ${colors.primaryColor}22`}; */
  }
  .right-shadow:after {
    box-shadow: ${({ theme: { colors } }) => `5px 0 5px -5px inset ${colors.primaryColor}22 `};
    right: -15px;
  }

  .all {
    box-shadow: 0 0 5px #00000022;
  }
`;

const DesktopPricingList = ({ features, categories, productName, productDescription, openedAccordion, setOpenedAccordion }) => {
  return (
    <MainContainer>
      <PricingTable border="none" cellSpacing={0} cellPadding={20} isSingleColumn={categories.length === 1}>
        <thead style={{ fontFamily: theme.fontFamily.regular }}>
          <tr>
            <PackagesMadeContainer>
              <Label fontSize="32px">{productName}</Label>
              <Label>{productDescription}</Label>
            </PackagesMadeContainer>
            {categories.length === 1 ? (
              <TableHeadCategoryPricingList principal className="x-shadow" title={categories[0].name} description={categories[0].description} />
            ) : (
              <>
                <TableHeadCategoryPricingList className="top-left-shadow" title={categories[0].name} description={categories[0].description} />
                <TableHeadCategoryPricingList principal className="x-shadow" title={categories[1].name} description={categories[1].description} />
                <TableHeadCategoryPricingList className="top-right-shadow" title={categories[2].name} description={categories[2].description} />
              </>
            )}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Label fontSize="32px">Features</Label>
            </td>
            {categories.length === 1 ? (
              <td style={{ position: 'relative' }} className="x-shadow">
                {' '}
              </td>
            ) : (
              <>
                <td className="left-shadow"> </td>
                <td style={{ position: 'relative' }} className="x-shadow">
                  {' '}
                </td>
                <td className="right-shadow"> </td>
              </>
            )}
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
          <tr>
            <td>
              <Label fontSize="32px"> </Label>
            </td>
            {categories.length === 1 ? (
              <td style={{ position: 'relative' }} className="x-shadow">
                <div
                  style={{ position: 'absolute', background: 'white', bottom: -12, left: 0, width: '100%', height: 20 }}
                  className="footer-shadow"
                />
              </td>
            ) : (
              <>
                <td className="bottom-left-shadow"> </td>
                <td style={{ position: 'relative' }} className="x-shadow">
                  <div
                    style={{ position: 'absolute', background: 'white', bottom: -12, left: 0, width: '100%', height: 20 }}
                    className="footer-shadow"
                  />
                </td>
                <td className="bottom-right-shadow"> </td>
              </>
            )}
          </tr>
        </tbody>
      </PricingTable>
    </MainContainer>
  );
};

export default DesktopPricingList;
